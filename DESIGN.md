# Nomadfoot Design System

## Product

Nomadfoot Manager is a lightweight web football management game. The interface should feel quick, readable and tactical, inspired by classic manager games without copying any protected brand, layout, asset or database.

## Design Principles

- Playable first, polished second, deep third.
- Dense but calm information layout.
- Fast scanning over decorative storytelling.
- Clear management decisions on every screen.
- Original identity with fictional clubs, players and league.
- Avoid visual complexity that slows the main loop.

## Visual Direction

Nomadfoot should look like a modern web tool for a classic football manager:

- Functional dashboard, not marketing landing page.
- Compact panels, tables and match rows.
- Football field references may appear as subtle structural elements.
- Avoid stock-photo sports drama, heavy gradients or glossy realism.
- Prefer crisp UI, strong hierarchy and readable numbers.

## Color Tokens

Use a balanced sports-management palette:

- Background: `#eef2ec`
- Surface: `#ffffff`
- Surface strong: `#f8faf7`
- Text: `#1f2923`
- Muted text: `#617064`
- Line: `#cbd7cf`
- Primary green: `#16784f`
- Primary green dark: `#0d5c3c`
- Primary green soft: `#dceee5`
- Gold accent: `#c38b1e`
- Alert red: `#a84234`
- Tactical blue: `#2d6f91`

Do not let the interface become a one-color green theme. Use green as the football/primary signal, gold for emphasis, and neutral surfaces for readability.

## Typography

- Use system sans-serif typography.
- Prioritize tabular readability.
- Avoid oversized type except on the start screen.
- Use compact headings inside panels.
- Do not use negative letter spacing.

## Layout

- Main app screens should use a constrained dashboard shell.
- Keep navigation direct: overview, squad, calendar, table.
- Use panels for independent tools or repeated items, not nested cards.
- Tables must stay readable on mobile via horizontal overflow.
- Match rows should keep stable columns: home team, score, away team.
- Buttons and tabs must have stable height and clear active states.

## Components

### Start Screen

- Brand mark plus product name.
- Primary action: New game.
- Secondary action: Load saved game.
- A tactical/field visual can sit beside the start panel on desktop.

### Club Selection

- Grid of fictional club cards.
- Each club card should show crest, name, league, reputation, strength and budget.
- Club crests must be original and generated from team colors/initials.

### Career Dashboard

- Header with current club and season.
- Tabs for main areas.
- Overview should show club strength, table position, budget, next match, news and recent results.
- Primary loop action should always be obvious: advance round or start next season.

### Squad

- Dense table with position, player, age, quality, value, salary, fitness and status.
- Highlight tired players with status text first; avoid excessive color noise.

### Calendar

- Round panels with match rows.
- Manager club match should be visually highlighted.
- Played/pending/current status should be clear.

### Table

- Classic league table with position, club, points, played, wins, draws, losses and goal difference.
- Manager club row should be highlighted.

## Interaction Tone

- Text should be short and direct.
- Prefer verbs tied to the game loop: `Novo jogo`, `Avançar rodada`, `Salvar`, `Nova temporada`.
- Avoid explanatory tutorial copy inside the app.

## Accessibility

- Maintain high contrast for text and controls.
- Buttons must be keyboard-focusable.
- Do not rely only on color for status.
- Tables should keep semantic table markup when implemented.

## Stitch Workflow

Use this file as the design contract when creating or refining screens in Google Stitch.

Recommended Stitch prompt pattern:

```text
Create a web app screen for Nomadfoot Manager using the attached DESIGN.md.
It is a lightweight football manager dashboard, not a marketing page.
Preserve compact data density, clear tabs, readable tables, fictional club identity and the main loop action.
Generate responsive desktop and mobile variants.
Do not use real football clubs, real players, protected brands or copied assets.
```

When exporting from Stitch, treat generated HTML/CSS as design reference. Convert approved ideas into the existing Vite codebase manually, preserving app behavior and game logic.

