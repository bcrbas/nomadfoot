import "./styles.css";
import { createClubsForCareer } from "./data.js";
import {
  advanceRound,
  clearSavedCareer,
  createCareer,
  formatMoney,
  getClub,
  getCurrentRound,
  getLastPlayedRound,
  getNextManagerMatch,
  getSquadStrength,
  getStandings,
  hasSavedCareer,
  isSeasonComplete,
  loadCareer,
  saveCareer,
  startNextSeason,
} from "./game.js";

const app = document.querySelector("#app");

let screen = "home";
let activeTab = "overview";
let draftClubs = createClubsForCareer();
let career = null;
let flash = "";

render();

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");

  if (!target) {
    return;
  }

  const { action, clubId, tab } = target.dataset;

  if (action === "new-game") {
    draftClubs = createClubsForCareer();
    screen = "club-select";
    flash = "";
  }

  if (action === "home") {
    screen = "home";
    flash = "";
  }

  if (action === "select-club") {
    career = createCareer(clubId, draftClubs);
    screen = "career";
    activeTab = "overview";
    flash = "Carreira criada. Boa temporada.";
  }

  if (action === "load-game") {
    career = loadCareer();
    if (career) {
      screen = "career";
      activeTab = "overview";
      flash = "Jogo salvo carregado.";
    } else {
      flash = "Nenhum save compatível foi encontrado.";
    }
  }

  if (action === "clear-save") {
    clearSavedCareer();
    flash = "Save local apagado.";
  }

  if (action === "save-game" && career) {
    saveCareer(career);
    flash = "Progresso salvo neste navegador.";
  }

  if (action === "advance-round" && career) {
    career = advanceRound(career);
    activeTab = "overview";
    flash = isSeasonComplete(career) ? "Temporada encerrada." : "Rodada simulada.";
  }

  if (action === "next-season" && career) {
    career = startNextSeason(career);
    activeTab = "overview";
    flash = "Nova temporada iniciada.";
  }

  if (action === "tab") {
    activeTab = tab;
  }

  render();
});

function render() {
  if (screen === "club-select") {
    app.innerHTML = renderClubSelect();
    return;
  }

  if (screen === "career" && career) {
    app.innerHTML = renderCareer();
    return;
  }

  app.innerHTML = renderHome();
}

function renderHome() {
  const canLoad = hasSavedCareer();

  return `
    <main class="start-screen">
      <section class="start-panel">
        <div class="brand-row">
          <div class="brand-mark" aria-hidden="true">NF</div>
          <div>
            <p class="eyebrow">Manager de futebol web</p>
            <h1>Nomadfoot Manager</h1>
          </div>
        </div>
        <p class="start-copy">Escolha um clube fictício, avance rodadas e tente fechar a temporada no topo da Liga Livre.</p>
        ${renderFlash()}
        <div class="start-actions">
          <button class="primary-button" data-action="new-game">Novo jogo</button>
          <button class="secondary-button" data-action="load-game" ${canLoad ? "" : "disabled"}>
            Carregar jogo salvo
          </button>
          <button class="ghost-button" data-action="clear-save" ${canLoad ? "" : "disabled"}>
            Apagar save
          </button>
        </div>
      </section>
      <section class="field-visual" aria-label="Campo tático abstrato">
        <div class="pitch-line pitch-line-top"></div>
        <div class="pitch-line pitch-line-center"></div>
        <div class="pitch-line pitch-line-bottom"></div>
        <span class="player-dot dot-one"></span>
        <span class="player-dot dot-two"></span>
        <span class="player-dot dot-three"></span>
        <span class="player-dot dot-four"></span>
        <span class="player-dot dot-five"></span>
      </section>
    </main>
  `;
}

function renderClubSelect() {
  return `
    <main class="page-shell">
      <header class="screen-header">
        <div>
          <p class="eyebrow">Nova carreira</p>
          <h1>Escolha seu clube</h1>
        </div>
        <button class="secondary-button" data-action="home">Voltar</button>
      </header>
      ${renderFlash()}
      <section class="club-grid">
        ${draftClubs.map(renderClubCard).join("")}
      </section>
    </main>
  `;
}

function renderCareer() {
  const managerClub = getClub(career, career.managerClubId);

  return `
    <main class="game-shell">
      <header class="topbar">
        <div class="club-title">
          ${renderCrest(managerClub)}
          <div>
            <p class="eyebrow">Temporada ${career.season}</p>
            <h1>${managerClub.name}</h1>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="secondary-button" data-action="save-game">Salvar</button>
          <button class="ghost-button" data-action="home">Menu</button>
        </div>
      </header>
      ${renderFlash()}
      <nav class="tabs" aria-label="Áreas da carreira">
        ${renderTab("overview", "Visão")}
        ${renderTab("squad", "Elenco")}
        ${renderTab("calendar", "Calendário")}
        ${renderTab("table", "Tabela")}
      </nav>
      ${renderActiveTab()}
    </main>
  `;
}

function renderActiveTab() {
  if (activeTab === "squad") {
    return renderSquad();
  }

  if (activeTab === "calendar") {
    return renderCalendar();
  }

  if (activeTab === "table") {
    return renderTable();
  }

  return renderOverview();
}

function renderOverview() {
  const managerClub = getClub(career, career.managerClubId);
  const standings = getStandings(career);
  const position = standings.findIndex((row) => row.clubId === managerClub.id) + 1;
  const currentRound = getCurrentRound(career);
  const nextMatch = getNextManagerMatch(career);
  const lastRound = getLastPlayedRound(career);
  const complete = isSeasonComplete(career);

  return `
    <section class="dashboard-grid">
      <article class="panel manager-panel">
        <p class="eyebrow">Clube controlado</p>
        <div class="metric-row">
          <span>Força</span>
          <strong>${getSquadStrength(managerClub)}</strong>
        </div>
        <div class="metric-row">
          <span>Posição</span>
          <strong>${position || "-"}º</strong>
        </div>
        <div class="metric-row">
          <span>Orçamento</span>
          <strong>${formatMoney(managerClub.budget)}</strong>
        </div>
      </article>

      <article class="panel action-panel">
        <p class="eyebrow">Rodada</p>
        <h2>${complete ? "Temporada concluída" : `Rodada ${currentRound.number}`}</h2>
        <p>${renderNextMatchText(nextMatch)}</p>
        <div class="button-row">
          ${
            complete
              ? `<button class="primary-button" data-action="next-season">Nova temporada</button>`
              : `<button class="primary-button" data-action="advance-round">Avançar rodada</button>`
          }
          <button class="secondary-button" data-action="tab" data-tab="calendar">Ver calendário</button>
        </div>
      </article>

      <article class="panel inbox-panel">
        <p class="eyebrow">Últimas notícias</p>
        <ul class="news-list">
          ${career.inbox.slice(0, 4).map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>

      <article class="panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Classificação</p>
            <h2>Top 5</h2>
          </div>
          <button class="ghost-button compact" data-action="tab" data-tab="table">Abrir tabela</button>
        </div>
        ${renderStandingsTable(standings.slice(0, 5), true)}
      </article>

      <article class="panel results-panel">
        <p class="eyebrow">Resultados recentes</p>
        ${lastRound ? renderRoundResults(lastRound) : `<p class="empty-state">Nenhuma partida simulada ainda.</p>`}
      </article>
    </section>
  `;
}

function renderSquad() {
  const managerClub = getClub(career, career.managerClubId);
  const players = [...managerClub.players].sort(
    (a, b) => positionOrder(a.position) - positionOrder(b.position) || b.overall - a.overall,
  );

  return `
    <section class="panel full-panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Elenco</p>
          <h2>${managerClub.name}</h2>
        </div>
        <strong class="strength-pill">Força ${getSquadStrength(managerClub)}</strong>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Jogador</th>
              <th>Idade</th>
              <th>Qual.</th>
              <th>Valor</th>
              <th>Salário</th>
              <th>Condição</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${players
              .map(
                (player) => `
                  <tr>
                    <td>${player.position}</td>
                    <td><strong>${player.name}</strong></td>
                    <td>${player.age}</td>
                    <td>${player.overall}</td>
                    <td>${formatMoney(player.value)}</td>
                    <td>${formatMoney(player.salary)}</td>
                    <td>${player.fitness}%</td>
                    <td>${player.status}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderCalendar() {
  return `
    <section class="calendar-list">
      ${career.fixtures
        .map(
          (round) => `
            <article class="panel round-panel ${round.number === career.roundIndex + 1 ? "current-round" : ""}">
              <div class="panel-heading">
                <h2>Rodada ${round.number}</h2>
                <span class="round-status">${getRoundStatus(round)}</span>
              </div>
              ${renderRoundResults(round)}
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderTable() {
  return `
    <section class="panel full-panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Liga Livre</p>
          <h2>Classificação ${career.season}</h2>
        </div>
        <span class="round-status">${career.roundIndex}/${career.fixtures.length} rodadas</span>
      </div>
      ${renderStandingsTable(getStandings(career))}
    </section>
  `;
}

function renderClubCard(club) {
  return `
    <article class="club-card">
      ${renderCrest(club)}
      <div class="club-card-body">
        <h2>${club.name}</h2>
        <p>${club.league}</p>
        <div class="club-stats">
          <span>Rep. ${club.reputation}</span>
          <span>Força ${getSquadStrength(club)}</span>
          <span>${formatMoney(club.budget)}</span>
        </div>
      </div>
      <button class="primary-button" data-action="select-club" data-club-id="${club.id}">
        Treinar clube
      </button>
    </article>
  `;
}

function renderCrest(club) {
  const initials = club.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return `
    <div
      class="crest"
      style="--crest-main: ${club.colors[0]}; --crest-accent: ${club.colors[1]}"
      aria-hidden="true"
    >
      <span>${initials}</span>
    </div>
  `;
}

function renderTab(tab, label) {
  return `
    <button class="tab-button ${activeTab === tab ? "active" : ""}" data-action="tab" data-tab="${tab}">
      ${label}
    </button>
  `;
}

function renderStandingsTable(rows, compact = false) {
  const managerClubId = career?.managerClubId;

  return `
    <div class="table-wrap">
      <table class="${compact ? "compact-table" : ""}">
        <thead>
          <tr>
            <th>#</th>
            <th>Clube</th>
            <th>Pts</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>SG</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row, index) => `
                <tr class="${row.clubId === managerClubId ? "highlight-row" : ""}">
                  <td>${index + 1}</td>
                  <td><strong>${row.clubName}</strong></td>
                  <td>${row.points}</td>
                  <td>${row.played}</td>
                  <td>${row.wins}</td>
                  <td>${row.draws}</td>
                  <td>${row.losses}</td>
                  <td>${row.goalDifference}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderRoundResults(round) {
  return `
    <div class="match-list">
      ${round.matches
        .map((match) => {
          const home = getClub(career, match.homeClubId);
          const away = getClub(career, match.awayClubId);
          const score =
            match.status === "played"
              ? `<strong>${match.homeGoals} x ${match.awayGoals}</strong>`
              : `<span class="pending-score">x</span>`;

          return `
            <div class="match-row ${isManagerMatch(match) ? "manager-match" : ""}">
              <span>${home.name}</span>
              ${score}
              <span>${away.name}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderNextMatchText(nextMatch) {
  if (!nextMatch) {
    return "Todas as partidas da temporada foram disputadas.";
  }

  const home = getClub(career, nextMatch.match.homeClubId);
  const away = getClub(career, nextMatch.match.awayClubId);

  return `Próximo jogo: rodada ${nextMatch.round}, ${home.name} x ${away.name}.`;
}

function renderFlash() {
  return flash ? `<p class="flash">${flash}</p>` : "";
}

function getRoundStatus(round) {
  if (round.matches.every((match) => match.status === "played")) {
    return "Jogada";
  }

  if (round.number === career.roundIndex + 1) {
    return "Atual";
  }

  return "Pendente";
}

function isManagerMatch(match) {
  return match.homeClubId === career.managerClubId || match.awayClubId === career.managerClubId;
}

function positionOrder(position) {
  return { GOL: 1, DEF: 2, MEI: 3, ATA: 4 }[position] ?? 5;
}
