# Mecânicas

## Função deste arquivo

Regras ativas que o agente deve lembrar no trabalho cotidiano. Para descrições completas, hipóteses e impactos preservados, consulte [mecanicas-longform.md](./memory-longform/mecanicas/mecanicas-longform.md).

## Contexto essencial

O MVP deve privilegiar mecânicas simples que reforcem o loop principal: escolher clube, ver elenco, avançar rodada, consultar resultados, salvar e continuar.

## Mecânicas ativas

### Calendário da Liga Livre

Status: Decidido

- 8 clubes fictícios.
- Pontos corridos com turno e returno.
- 14 rodadas, com 4 partidas por rodada.
- Calendário gerado automaticamente por rotação e mando invertido no returno.

### Simulação de partidas

Status: Decidido

- Usa força dos 11 melhores jogadores, reputação, mando de campo e aleatoriedade.
- Mandante recebe vantagem inicial.
- Gols são sorteados por expectativa simples e limitados a 6 por equipe.
- Prioridade atual: plausibilidade e velocidade, não realismo profundo.

### Condição física

Status: Decidido

- Jogadores principais perdem mais condição que reservas após cada partida.
- Condição baixa altera status para cansado.
- Ainda não existe escalação manual; o impacto usa ordem de qualidade do elenco.

### Save de carreira

Status: Decidido

- Persistência local via `localStorage`.
- Chave versionada: `nomadfoot-career-v1`.
- Save guarda clube controlado, temporada, clubes, elencos, calendário, resultados e histórico básico.

## Pendências de mecânicas

- Escalação manual.
- Gestão financeira mais clara.
- Transferências simples.
- Balanceamento após testes de temporadas completas.

## Memória longa relacionada

- [mecanicas-longform.md](./memory-longform/mecanicas/mecanicas-longform.md)

## Quando consultar a memória longa

Consulte [mecanicas-longform.md](./memory-longform/mecanicas/mecanicas-longform.md) para hipóteses, justificativas, impactos e conteúdo completo preservado antes da otimização.

## Nota de manutenção

Este arquivo foi otimizado para leitura frequente em 2026-07-09. Detalhes históricos e textos completos foram preservados na memória longa.
