import { createClubsForCareer } from "./data.js";

export const SAVE_KEY = "nomadfoot-career-v1";

export function createCareer(managerClubId, clubs = createClubsForCareer()) {
  const season = new Date().getFullYear();

  return {
    version: 1,
    managerClubId,
    season,
    roundIndex: 0,
    clubs,
    fixtures: generateSchedule(clubs, season),
    history: [],
    inbox: [`Carreira iniciada na temporada ${season}.`],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export function generateSchedule(clubs, season) {
  const ids = clubs.map((club) => club.id);
  const rotation = ids.length % 2 === 0 ? [...ids] : [...ids, null];
  const teamCount = rotation.length;
  const firstLeg = [];

  for (let round = 0; round < teamCount - 1; round += 1) {
    const matches = [];

    for (let pair = 0; pair < teamCount / 2; pair += 1) {
      const left = rotation[pair];
      const right = rotation[teamCount - 1 - pair];

      if (left && right) {
        const shouldFlip = (round + pair) % 2 === 1;
        matches.push({
          id: `${season}-r${round + 1}-m${pair + 1}`,
          round: round + 1,
          homeClubId: shouldFlip ? right : left,
          awayClubId: shouldFlip ? left : right,
          homeGoals: null,
          awayGoals: null,
          status: "pending",
        });
      }
    }

    firstLeg.push({ number: round + 1, matches });
    rotation.splice(1, 0, rotation.pop());
  }

  const secondLeg = firstLeg.map((round) => ({
    number: round.number + firstLeg.length,
    matches: round.matches.map((match, index) => ({
      id: `${season}-r${round.number + firstLeg.length}-m${index + 1}`,
      round: round.number + firstLeg.length,
      homeClubId: match.awayClubId,
      awayClubId: match.homeClubId,
      homeGoals: null,
      awayGoals: null,
      status: "pending",
    })),
  }));

  return [...firstLeg, ...secondLeg];
}

export function advanceRound(career) {
  if (isSeasonComplete(career)) {
    return career;
  }

  const nextCareer = clone(career);
  const round = nextCareer.fixtures[nextCareer.roundIndex];

  round.matches = round.matches.map((match) => {
    const homeClub = getClub(nextCareer, match.homeClubId);
    const awayClub = getClub(nextCareer, match.awayClubId);
    return {
      ...match,
      ...simulateMatch(homeClub, awayClub),
      status: "played",
    };
  });

  applyFitnessImpact(nextCareer, round.matches);
  nextCareer.roundIndex += 1;
  nextCareer.updatedAt = new Date().toISOString();

  const managerMatch = round.matches.find(
    (match) =>
      match.homeClubId === nextCareer.managerClubId || match.awayClubId === nextCareer.managerClubId,
  );

  if (managerMatch) {
    nextCareer.inbox.unshift(describeMatch(nextCareer, managerMatch));
  }

  if (isSeasonComplete(nextCareer)) {
    const champion = getStandings(nextCareer)[0];
    nextCareer.history.unshift({
      season: nextCareer.season,
      championClubId: champion.clubId,
      championName: champion.clubName,
      finishedAt: new Date().toISOString(),
    });
    nextCareer.inbox.unshift(`${champion.clubName} conquistou a Liga Livre ${nextCareer.season}.`);
  }

  return nextCareer;
}

export function startNextSeason(career) {
  const nextCareer = clone(career);

  nextCareer.season += 1;
  nextCareer.roundIndex = 0;
  nextCareer.fixtures = generateSchedule(nextCareer.clubs, nextCareer.season);
  nextCareer.clubs = nextCareer.clubs.map((club) => ({
    ...club,
    budget: Math.round((club.budget * 1.04) / 1000) * 1000,
    players: club.players.map((player) => ({
      ...player,
      age: player.age + 1,
      fitness: 94,
      status: "Disponível",
      overall: evolveOverall(player),
    })),
  }));
  nextCareer.inbox.unshift(`Temporada ${nextCareer.season} preparada.`);
  nextCareer.updatedAt = new Date().toISOString();

  return nextCareer;
}

export function getStandings(career) {
  const table = new Map(
    career.clubs.map((club) => [
      club.id,
      {
        clubId: club.id,
        clubName: club.name,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0,
      },
    ]),
  );

  career.fixtures.forEach((round) => {
    round.matches.forEach((match) => {
      if (match.status !== "played") {
        return;
      }

      const home = table.get(match.homeClubId);
      const away = table.get(match.awayClubId);
      const homeWon = match.homeGoals > match.awayGoals;
      const awayWon = match.awayGoals > match.homeGoals;

      home.played += 1;
      away.played += 1;
      home.goalsFor += match.homeGoals;
      home.goalsAgainst += match.awayGoals;
      away.goalsFor += match.awayGoals;
      away.goalsAgainst += match.homeGoals;

      if (homeWon) {
        home.wins += 1;
        away.losses += 1;
        home.points += 3;
      } else if (awayWon) {
        away.wins += 1;
        home.losses += 1;
        away.points += 3;
      } else {
        home.draws += 1;
        away.draws += 1;
        home.points += 1;
        away.points += 1;
      }
    });
  });

  return [...table.values()]
    .map((row) => ({
      ...row,
      goalDifference: row.goalsFor - row.goalsAgainst,
    }))
    .sort(
      (a, b) =>
        b.points - a.points ||
        b.goalDifference - a.goalDifference ||
        b.goalsFor - a.goalsFor ||
        b.wins - a.wins ||
        a.clubName.localeCompare(b.clubName),
    );
}

export function getClub(career, clubId) {
  return career.clubs.find((club) => club.id === clubId);
}

export function getCurrentRound(career) {
  return career.fixtures[career.roundIndex] ?? null;
}

export function getNextManagerMatch(career) {
  for (const round of career.fixtures) {
    const match = round.matches.find(
      (candidate) =>
        candidate.status === "pending" &&
        (candidate.homeClubId === career.managerClubId || candidate.awayClubId === career.managerClubId),
    );

    if (match) {
      return { round: round.number, match };
    }
  }

  return null;
}

export function getLastPlayedRound(career) {
  for (let index = career.fixtures.length - 1; index >= 0; index -= 1) {
    if (career.fixtures[index].matches.some((match) => match.status === "played")) {
      return career.fixtures[index];
    }
  }

  return null;
}

export function getSquadStrength(club) {
  const starters = [...club.players].sort((a, b) => b.overall - a.overall).slice(0, 11);
  const quality = average(starters.map((player) => player.overall));
  const fitness = average(starters.map((player) => player.fitness));

  return Math.round(quality * 0.86 + fitness * 0.08 + club.reputation * 1.8);
}

export function isSeasonComplete(career) {
  return career.roundIndex >= career.fixtures.length;
}

export function saveCareer(career) {
  localStorage.setItem(SAVE_KEY, JSON.stringify({ ...career, updatedAt: new Date().toISOString() }));
}

export function loadCareer() {
  const saved = localStorage.getItem(SAVE_KEY);

  if (!saved) {
    return null;
  }

  try {
    const career = JSON.parse(saved);
    return career?.version === 1 ? career : null;
  } catch {
    return null;
  }
}

export function hasSavedCareer() {
  return Boolean(localStorage.getItem(SAVE_KEY));
}

export function clearSavedCareer() {
  localStorage.removeItem(SAVE_KEY);
}

export function formatMoney(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

function simulateMatch(homeClub, awayClub) {
  const homeRating = getSquadStrength(homeClub) + 3;
  const awayRating = getSquadStrength(awayClub);
  const difference = homeRating - awayRating;
  const reputationTilt = (homeClub.reputation - awayClub.reputation) * 0.05;
  const homeExpected = clamp(1.2 + difference * 0.045 + reputationTilt, 0.25, 3.6);
  const awayExpected = clamp(0.95 - difference * 0.04 - reputationTilt, 0.2, 3.2);

  return {
    homeGoals: poisson(homeExpected),
    awayGoals: poisson(awayExpected),
  };
}

function poisson(lambda) {
  const limit = Math.exp(-lambda);
  let product = 1;
  let goals = 0;

  do {
    goals += 1;
    product *= Math.random();
  } while (product > limit);

  return Math.min(6, goals - 1);
}

function describeMatch(career, match) {
  const home = getClub(career, match.homeClubId);
  const away = getClub(career, match.awayClubId);
  const score = `${home.name} ${match.homeGoals} x ${match.awayGoals} ${away.name}`;

  if (match.homeClubId === career.managerClubId) {
    return `${score} em casa.`;
  }

  return `${score} fora de casa.`;
}

function applyFitnessImpact(career, matches) {
  const involvedClubIds = new Set(matches.flatMap((match) => [match.homeClubId, match.awayClubId]));

  career.clubs = career.clubs.map((club) => {
    if (!involvedClubIds.has(club.id)) {
      return club;
    }

    return {
      ...club,
      players: club.players.map((player, index) => {
        const playedMinutesFactor = index < 11 ? 6 : 2;
        const recovery = index < 11 ? 1 : 4;
        const fitness = clamp(player.fitness - playedMinutesFactor + recovery, 55, 99);

        return {
          ...player,
          fitness,
          status: fitness < 65 ? "Cansado" : "Disponível",
        };
      }),
    };
  });
}

function evolveOverall(player) {
  const growth = player.age <= 23 ? 1 : player.age >= 33 ? -1 : 0;
  return clamp(player.overall + growth, 45, 90);
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clone(value) {
  return typeof structuredClone === "function" ? structuredClone(value) : JSON.parse(JSON.stringify(value));
}
