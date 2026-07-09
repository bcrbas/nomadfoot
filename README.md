# Nomadfoot Manager

Base jogável de um manager futebolístico web inspirado no espírito dos clássicos de gestão rápida, com identidade e dados próprios.

## Como rodar

```bash
npm install
npm run dev
```

Depois abra a URL mostrada pelo Vite.

## O que já existe

- Novo jogo com escolha de clube fictício.
- Elenco com posição, idade, qualidade, valor, salário, condição e status.
- Liga com 8 clubes, turno e returno.
- Calendário gerado automaticamente.
- Simulação simples por força do elenco, reputação, mando e aleatoriedade.
- Tabela com pontos, jogos, vitórias, empates, derrotas e saldo.
- Avanço de rodada.
- Encerramento de temporada e início da próxima.
- Save/load local via `localStorage`.

## Estrutura

```text
src/
  data.js      Dados fictícios e geração de elencos
  game.js      Regras de carreira, calendário, simulação e persistência
  main.js      Renderização e eventos da interface
  styles.css   Layout e direção visual
docs/
  mecanicas.md Regras documentadas conforme o PRD
  status.md    Estado atual da base
  tarefas.md   Próximos passos
design/
  stitch/       Prompts e exports de referência do Google Stitch
DESIGN.md       Sistema visual para importar/usar no Google Stitch
```

## Princípio de evolução

O loop principal vem antes de profundidade: escolher clube, ver elenco, avançar rodada, consultar resultados, salvar e continuar. Novas mecânicas devem melhorar esse ciclo antes de ganhar telas próprias.

## Fluxo visual

Use `DESIGN.md` como contrato visual no Google Stitch. Exports e prompts de referência ficam em `design/stitch/`. O código exportado pelo Stitch deve ser tratado como referência visual e adaptado manualmente para `src/main.js` e `src/styles.css`.
