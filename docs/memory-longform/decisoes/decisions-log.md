# Decisões — memória longa

## Finalidade

Este arquivo preserva histórico, justificativas e registros de consulta menos frequente sobre decisões do projeto.

Ele não precisa ser lido em toda tarefa cotidiana. Consulte quando precisar entender por que uma decisão foi tomada ou auditar decisões antigas.

## Metadados de migração

- Data da migração: 2026-07-09
- Tema: Decisões
- Status do conteúdo: log inicial criado a partir do PRD, docs existentes e base implementada.
- Relação com arquivo curto: detalha origem e justificativa das decisões ativas em `docs/decisoes.md`.

## Arquivos de origem

- `prd.md`
- `docs/status.md`
- `docs/mecanicas.md`
- Base implementada em 2026-07-09

## Arquivo curto relacionado

- [docs/decisoes.md](../../decisoes.md)

## Índice

- [Decisões iniciais registradas](#decisoes-iniciais-registradas)
- [Notas de migração](#notas-de-migracao)

## Decisões iniciais registradas

### 2026-07-09 — Base web estática e leve

Status: Decidido

Decisão:
Usar Vite com JavaScript puro para a base inicial.

Origem:
Base criada após leitura do `prd.md`.

Justificativa:
O PRD prioriza um MVP jogável, rápido, leve e extensível antes de visual sofisticado ou profundidade.

### 2026-07-09 — Dados fictícios e identidade própria

Status: Decidido

Decisão:
Usar clubes e jogadores fictícios, sem marcas, nomes protegidos, assets ou banco de dados proprietários de jogos existentes.

Origem:
`prd.md`, seções 1, 7, 11, 12 e 15.

Justificativa:
Evita cópia indevida e mantém o projeto como obra original inspirada em mecânicas.

### 2026-07-09 — Persistência local no MVP

Status: Decidido

Decisão:
Usar `localStorage` com chave versionada para salvar e carregar carreira.

Origem:
`docs/mecanicas.md` e implementação inicial.

Justificativa:
Atende ao requisito de salvamento sem introduzir backend, login ou multiplayer fora do escopo.

### 2026-07-09 — Loop principal antes de profundidade

Status: Decidido

Decisão:
Priorizar escolher clube, visualizar elenco, simular rodadas, consultar tabela, encerrar temporada e salvar progresso.

Origem:
`prd.md`, seções 4, 5, 6, 10 e 15.

Justificativa:
Toda nova funcionalidade deve melhorar o loop principal antes de expandir profundidade.

## Notas de migração

- O que ficou no arquivo curto:
  - Decisões ativas e aplicáveis ao trabalho cotidiano.
- O que foi preservado neste arquivo:
  - Log inicial com origem e justificativa das decisões vigentes.
- Pontos ambíguos:
  - Não havia `docs/decisoes.md` antes desta otimização.
- Conflitos identificados:
  - Nenhum.
