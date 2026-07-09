# Fluxo visual com Google Stitch

## Objetivo

Usar Google Stitch para explorar visual e UX do Nomadfoot sem perder controle do código do jogo.

## Como usar

1. Use [`../DESIGN.md`](../DESIGN.md) como contrato visual no Stitch.
2. Use os prompts em [`../design/stitch/prompts.md`](../design/stitch/prompts.md).
3. Exporte propostas de tela para `design/stitch/exports/`.
4. Revise visualmente a proposta antes de implementar.
5. Implemente manualmente em `src/main.js` e `src/styles.css`.
6. Rode `npm run build`.
7. Registre decisões visuais aprovadas em `docs/decisoes.md`.

## Regra prática

Stitch gera direção visual. O repositório continua sendo a fonte de verdade do produto.

Não cole código exportado diretamente sobre a aplicação sem adaptar:

- comportamento do jogo;
- responsividade;
- acessibilidade;
- dados fictícios;
- persistência local;
- futuras integrações com API/NeonDB.

## Estado atual

Integração inicial criada em 2026-07-09:

- `DESIGN.md` define o sistema visual para Stitch.
- `design/stitch/` guarda prompts e exports.
- `docs/visual-workflow.md` documenta o handoff.

## Referências

- Google Stitch: https://stitch.withgoogle.com/
- Anúncio do Google sobre Stitch, DESIGN.md, exports e MCP/SDK: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
