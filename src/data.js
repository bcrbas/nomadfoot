export const CLUBS = [
  {
    id: "atletico-nomad",
    name: "Atlético Nomad",
    league: "Liga Livre",
    reputation: 8,
    budget: 4200000,
    colors: ["#114b5f", "#f3a712"],
  },
  {
    id: "aurora-fc",
    name: "Aurora FC",
    league: "Liga Livre",
    reputation: 7,
    budget: 3500000,
    colors: ["#8f2d56", "#f8d377"],
  },
  {
    id: "ferrovia-azul",
    name: "Ferrovia Azul",
    league: "Liga Livre",
    reputation: 6,
    budget: 2800000,
    colors: ["#1d4e89", "#d7e8ba"],
  },
  {
    id: "costa-verde",
    name: "Costa Verde",
    league: "Liga Livre",
    reputation: 6,
    budget: 2600000,
    colors: ["#136f63", "#e0ca3c"],
  },
  {
    id: "uniao-serrana",
    name: "União Serrana",
    league: "Liga Livre",
    reputation: 5,
    budget: 2300000,
    colors: ["#4c5760", "#f2c078"],
  },
  {
    id: "porto-solar",
    name: "Porto Solar",
    league: "Liga Livre",
    reputation: 5,
    budget: 2200000,
    colors: ["#d95d39", "#202c39"],
  },
  {
    id: "estrela-norte",
    name: "Estrela Norte",
    league: "Liga Livre",
    reputation: 4,
    budget: 1800000,
    colors: ["#385f71", "#ffd166"],
  },
  {
    id: "nacional-ilha",
    name: "Nacional da Ilha",
    league: "Liga Livre",
    reputation: 4,
    budget: 1700000,
    colors: ["#5c2751", "#9dd9d2"],
  },
];

const FIRST_NAMES = [
  "Bruno",
  "Caio",
  "Davi",
  "Enzo",
  "Fábio",
  "Gustavo",
  "Heitor",
  "Igor",
  "João",
  "Luan",
  "Mateus",
  "Nicolas",
  "Otávio",
  "Pedro",
  "Rafael",
  "Samuel",
  "Thiago",
  "Vitor",
  "Wesley",
  "Yuri",
];

const LAST_NAMES = [
  "Almeida",
  "Barros",
  "Campos",
  "Dantas",
  "Esteves",
  "Freire",
  "Gomes",
  "Henriques",
  "Lima",
  "Macedo",
  "Nogueira",
  "Pires",
  "Queiroz",
  "Ramos",
  "Silva",
  "Teixeira",
  "Valente",
  "Xavier",
];

const SQUAD_SHAPE = [
  ["GOL", 2],
  ["DEF", 5],
  ["MEI", 5],
  ["ATA", 4],
];

export function createClubsForCareer() {
  return CLUBS.map((club, clubIndex) => ({
    ...club,
    players: createSquad(club, clubIndex),
  }));
}

function createSquad(club, clubIndex) {
  const players = [];
  let squadIndex = 0;

  SQUAD_SHAPE.forEach(([position, amount]) => {
    for (let i = 0; i < amount; i += 1) {
      const firstName = FIRST_NAMES[(clubIndex * 5 + squadIndex * 3) % FIRST_NAMES.length];
      const lastName = LAST_NAMES[(clubIndex * 7 + squadIndex * 4) % LAST_NAMES.length];
      const age = 18 + ((clubIndex * 6 + squadIndex * 3) % 18);
      const formBump = ((clubIndex + 2) * (squadIndex + 5)) % 15;
      const positionBump = position === "GOL" ? 1 : position === "ATA" ? 2 : 0;
      const overall = clamp(50 + club.reputation * 3 + formBump + positionBump, 48, 87);
      const value = Math.round((overall * overall * 105 + (29 - Math.min(age, 29)) * 9000) / 1000) * 1000;
      const salary = Math.round((overall * 420 + club.reputation * 650 + squadIndex * 55) / 100) * 100;

      players.push({
        id: `${club.id}-${String(squadIndex + 1).padStart(2, "0")}`,
        name: `${firstName} ${lastName}`,
        age,
        position,
        overall,
        value,
        salary,
        fitness: 88 + ((clubIndex + squadIndex) % 10),
        status: "Disponível",
      });

      squadIndex += 1;
    }
  });

  return players;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
