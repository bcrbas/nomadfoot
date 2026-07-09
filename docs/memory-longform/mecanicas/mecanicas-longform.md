# Mecânicas — memória longa

## Finalidade

Este arquivo preserva regras detalhadas, hipóteses, justificativas e registros de consulta menos frequente sobre mecânicas do Nomadfoot.

Ele não precisa ser lido em toda tarefa cotidiana. Consulte quando houver dúvida sobre histórico, classificação ou impacto de uma mecânica.

## Metadados de migração

- Data da migração: 2026-07-09
- Tema: Mecânicas
- Status do conteúdo: regras, hipóteses e impactos preservados; snapshot literal disponível.
- Relação com arquivo curto: detalha e preserva o conteúdo enxugado em `docs/mecanicas.md`.

## Arquivos de origem

- `docs/mecanicas.md`
- `docs/memory-longform/snapshots/2026-07-09/mecanicas.md`

## Arquivo curto relacionado

- [docs/mecanicas.md](../../mecanicas.md)

## Índice

- [Calendário da Liga Livre](#mecanica-calendario-da-liga-livre)
- [Simulação de partidas](#mecanica-simulacao-de-partidas)
- [Condição física](#mecanica-condicao-fisica)
- [Save de carreira](#mecanica-save-de-carreira)
- [Notas de migração](#notas-de-migracao)

## Conteúdo preservado

### Origem: `docs/mecanicas.md`

```md
# Mecânicas

## Mecânica: Calendário da Liga Livre

Status: Decidido

Descrição:
O campeonato inicial usa 8 clubes fictícios em pontos corridos com turno e returno.

Regras confirmadas:
- Cada clube enfrenta todos os outros duas vezes.
- Cada rodada tem 4 partidas.
- A temporada atual possui 14 rodadas.

Hipóteses:
- O formato curto favorece partidas rápidas e temporadas concluídas em poucos minutos.

Decisão para nossa versão:
- Usar geração automática por rotação de clubes, invertendo mandos no returno.

Impacto no jogo:
- Garante um MVP jogável sem depender de cadastro manual de tabela.

## Mecânica: Simulação de partidas

Status: Decidido

Descrição:
Cada partida é simulada a partir da força do elenco, reputação, mando de campo e aleatoriedade controlada por distribuição de gols.

Regras confirmadas:
- A força do time considera os 11 melhores jogadores do clube.
- O mandante recebe vantagem inicial.
- A reputação do clube inclina levemente as chances.
- Gols são limitados a 6 por equipe para evitar placares excessivos no MVP.

Hipóteses:
- Resultados plausíveis são mais importantes que realismo profundo nesta fase.

Decisão para nossa versão:
- Usar uma simulação simples por expectativa de gols e sorteio Poisson.

Impacto no jogo:
- Produz rodadas rápidas e tabelas dinâmicas sem criar uma engine complexa cedo demais.

## Mecânica: Condição física

Status: Decidido

Descrição:
A condição física cai após partidas e altera indiretamente a força do clube.

Regras confirmadas:
- Jogadores principais perdem mais condição que reservas.
- Atletas com condição baixa aparecem como cansados.

Hipóteses:
- Mesmo uma condição simples já cria leitura gerencial no elenco.

Decisão para nossa versão:
- Aplicar impacto por ordem de qualidade do elenco, sem escalação manual por enquanto.

Impacto no jogo:
- Abre caminho para escalações, lesões e gestão de elenco em fases futuras.

## Mecânica: Save de carreira

Status: Decidido

Descrição:
O progresso é persistido no navegador.

Regras confirmadas:
- O save guarda clube controlado, temporada, clubes, elencos, calendário, resultados, tabela derivada e histórico.
- O carregamento aceita apenas saves da versão 1.

Hipóteses:
- Persistência local é suficiente para o MVP sem login ou backend.

Decisão para nossa versão:
- Usar `localStorage` com chave versionada `nomadfoot-career-v1`.

Impacto no jogo:
- Permite continuar uma carreira e mantém o projeto leve.
```

## Notas de migração

- O que ficou no arquivo curto:
  - Regras vigentes de cada mecânica ativa.
- O que foi preservado neste arquivo:
  - Conteúdo original completo, incluindo descrições, hipóteses e impactos.
- Pontos ambíguos:
  - Nenhum.
- Conflitos identificados:
  - Nenhum.
