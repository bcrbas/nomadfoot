# Registro de migração da memória

## 2026-07-09 Otimização de memória

### Arquivos analisados

- `prd.md`
- `README.md`
- `criação de memória.md`
- `otimização de memória.md`
- `docs/status.md`
- `docs/mecanicas.md`
- `docs/tarefas.md`

### Arquivos criados

- `docs/decisoes.md`
- `docs/memory-longform/README.md`
- `docs/memory-longform/_index.md`
- `docs/memory-longform/_migration-log.md`
- `docs/memory-longform/status/status-history.md`
- `docs/memory-longform/mecanicas/mecanicas-longform.md`
- `docs/memory-longform/tarefas/tasks-history.md`
- `docs/memory-longform/decisoes/decisions-log.md`
- `docs/memory-longform/snapshots/2026-07-09/status.md`
- `docs/memory-longform/snapshots/2026-07-09/mecanicas.md`
- `docs/memory-longform/snapshots/2026-07-09/tarefas.md`

### Arquivos editados

- `docs/status.md`
- `docs/mecanicas.md`
- `docs/tarefas.md`

### Conteúdo preservado na memória longa

- Status: conteúdo originado de `docs/status.md` preservado em `docs/memory-longform/status/status-history.md` e no snapshot literal.
- Mecânicas: conteúdo originado de `docs/mecanicas.md` preservado em `docs/memory-longform/mecanicas/mecanicas-longform.md` e no snapshot literal.
- Tarefas: conteúdo originado de `docs/tarefas.md` preservado em `docs/memory-longform/tarefas/tasks-history.md` e no snapshot literal.
- Decisões: arquivo curto inicial criado com base nas decisões vigentes inferidas do PRD e da base implementada; log inicial criado em `docs/memory-longform/decisoes/decisions-log.md`.

### Conteúdo mantido na memória curta

- Status: estado atual, escopo entregue, fora de escopo e próximo marco.
- Mecânicas: regras vigentes de campeonato, simulação, condição física e save.
- Tarefas: pendências ativas, próximas prioridades e fila posterior.
- Decisões: decisões ativas que orientam o trabalho cotidiano.

### Inventário aplicado

- `docs/status.md`: conteúdo essencial mantido na memória curta; versão original preservada em `status-history.md` e snapshot literal.
- `docs/mecanicas.md`: regras ativas mantidas na memória curta; descrições, hipóteses e impactos preservados em `mecanicas-longform.md` e snapshot literal.
- `docs/tarefas.md`: pendências ativas mantidas na memória curta; tarefas concluídas e fila original preservadas em `tasks-history.md` e snapshot literal.
- `docs/decisoes.md`: criado como memória curta porque o PRD exige registro de decisões; justificativas e origens preservadas em `decisions-log.md`.
- Conteúdo duplicado ou redundante: não havia duplicação problemática nos arquivos curtos originais.
- Decisão antiga: nenhuma decisão antiga ou superada identificada.
- Conflito: nenhum conflito encontrado.
- Ambiguidade: ausência inicial de `docs/decisoes.md` registrada como ponto de criação, não como conflito.

### Conflitos ou ambiguidades

- Nenhum conflito encontrado entre os arquivos analisados.
- O PRD cita a necessidade de manter arquivos de status, decisões, mecânicas e tarefas, mas não definia ainda um arquivo de decisões existente.

### Validação

- Arquivos curtos apontam para os arquivos longos correspondentes.
- Arquivos longos identificam origem e arquivo curto relacionado.
- Arquivos longos indicam data de migração, tema, status do conteúdo e relação com o arquivo curto.
- Snapshots literais foram criados antes da edição dos arquivos curtos.
- Nenhuma informação foi removida sem preservação rastreável.

## 2026-07-09 Revisão complementar por `otimização de memória.md`

### Arquivos analisados

- `otimização de memória.md`
- `docs/status.md`
- `docs/mecanicas.md`
- `docs/tarefas.md`
- `docs/decisoes.md`
- `docs/memory-longform/_index.md`
- `docs/memory-longform/_migration-log.md`
- `docs/memory-longform/status/status-history.md`
- `docs/memory-longform/mecanicas/mecanicas-longform.md`
- `docs/memory-longform/tarefas/tasks-history.md`
- `docs/memory-longform/decisoes/decisions-log.md`

### Ajustes aplicados

- Adicionados metadados explícitos aos arquivos longos: data da migração, tema, status do conteúdo e relação com arquivo curto.
- Adicionada seção `Memória longa relacionada` nos arquivos curtos que ainda não tinham essa seção separada.
- Adicionado inventário aplicado ao registro de migração.

### Validação

- A revisão confirmou que a arquitetura em duas camadas já estava criada.
- Os ajustes complementares alinham os arquivos ao formato detalhado de `otimização de memória.md`.
