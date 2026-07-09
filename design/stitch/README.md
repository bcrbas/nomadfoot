# Google Stitch Workflow

## Finalidade

Esta pasta guarda o handoff visual entre Google Stitch e o código do Nomadfoot.

O Stitch deve ser usado para explorar telas, direção visual e variações de interface. O código exportado por ele não deve substituir diretamente o app sem revisão, porque a lógica do jogo vive em `src/game.js` e a UI atual em `src/main.js` e `src/styles.css`.

## Fluxo recomendado

1. Abra o Google Stitch.
2. Importe ou cole o conteúdo de [`../../DESIGN.md`](../../DESIGN.md) como regra visual do projeto.
3. Gere ou refine uma tela por vez.
4. Exporte o resultado como HTML/CSS ou registre o link/screenshot da proposta.
5. Salve materiais de referência em `design/stitch/exports/`.
6. Quando uma proposta for aprovada, converta manualmente para os componentes existentes em `src/main.js` e estilos em `src/styles.css`.
7. Valide com `npm run build` antes de commitar.

## Regras de segurança visual

- Não usar clubes, jogadores, escudos ou marcas reais.
- Não copiar visual proprietário de jogos existentes.
- Não colocar segredos, URLs privadas, tokens ou credenciais em prompts.
- Não expor `DATABASE_URL` em telas, prompts ou arquivos exportados.
- Não substituir lógica de jogo por código gerado.

## O que guardar aqui

- Prompts usados no Stitch.
- Exportações HTML/CSS de referência.
- Screenshots de propostas visuais.
- Notas de aprovação/rejeição de direção visual.

## Convenção sugerida

Use nomes com data e tela:

```text
2026-07-09-dashboard-v01/
2026-07-09-club-select-v01/
2026-07-09-squad-v01/
```

Dentro de cada pasta, use:

```text
prompt.md
notes.md
export/
screenshots/
```

