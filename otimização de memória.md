Tarefa

Otimize a memória do projeto criando uma arquitetura de memória em duas camadas:

1. Memória curta, contextual e direta, mantida nos arquivos MD já citados no `prd.md`.
2. Memória longa, persistente e auditável, criada em novos arquivos de consulta menos frequente.

O objetivo é deixar os arquivos de trabalho cotidiano mais leves, úteis e rápidos de consultar, sem perder nenhum dado, histórico, decisão, status, reunião, asset, copy, oferta, tarefa ou pesquisa já registrado no projeto.

Regra crítica

Nenhuma informação pode ser apagada da pasta do projeto.

Antes de reduzir, resumir, reorganizar ou remover qualquer trecho dos arquivos principais de memória curta, preserve o conteúdo original em arquivos de memória longa.

A memória longa deve funcionar como um arquivo permanente de consulta, histórico e auditoria. A memória curta deve funcionar como contexto operacional diário.

Modo recomendado

Use Planning Mode.

Antes de editar qualquer arquivo, analise o projeto, gere um inventário e proponha um plano curto. Aguarde minha aprovação antes de executar mudanças.

Contexto

O arquivo `prd.md` referencia arquivos MD importantes para o contexto do projeto, incluindo, mas não limitado a:

* brands
* status
* decisions
* assets
* tasks
* meetings
* copy
* offer
* research

Esses arquivos estão ficando extensos. Eles devem ser otimizados para leitura frequente pelo agente, mantendo apenas o essencial para continuidade do trabalho cotidiano.

Todo conteúdo detalhado, histórico, antigo, redundante, extenso ou de baixa frequência deve ser preservado em uma nova estrutura de memória longa.

Objetivo final

Ao final da tarefa, o projeto deve ter:

1. Arquivos MD principais mais curtos, claros e operacionais.
2. Uma memória longa persistente, organizada por tema, com todo o conteúdo preservado.
3. Links cruzados entre cada arquivo de memória curta e seus arquivos correspondentes de memória longa.
4. Um índice geral da memória longa.
5. Um registro de migração explicando o que foi copiado, consolidado ou resumido.
6. Nenhuma perda de informação.

Arquitetura desejada

Crie uma nova pasta para memória longa. Escolha o caminho mais coerente com a estrutura atual do projeto.

Se não houver padrão claro, use:

`memory-longform/`

Dentro dela, crie uma estrutura semelhante a esta:

```txt
memory-longform/
  README.md
  _index.md
  _migration-log.md
  brands/
    brands-longform.md
  status/
    status-history.md
  decisions/
    decisions-log.md
  assets/
    assets-reference.md
  tasks/
    tasks-history.md
  meetings/
    meetings-archive.md
  copy/
    copy-reference.md
  offer/
    offer-history.md
  research/
    research-longform.md
  snapshots/
    YYYY-MM-DD/
      [cópias ou consolidações dos conteúdos originais]
```

A estrutura pode ser ajustada conforme os arquivos reais do projeto, mas deve manter separação clara por tema.

Regras para memória curta

Os arquivos MD citados no `prd.md` devem continuar existindo nos caminhos atuais.

Eles devem ser editados para conter apenas:

* contexto essencial;
* estado atual;
* decisões ainda válidas;
* tarefas ou pendências ativas;
* referências importantes;
* links para memória longa;
* instruções claras sobre quando consultar cada arquivo longo;
* nota de manutenção informando que o histórico completo foi preservado.

Não transforme os arquivos curtos em índices vazios. Eles ainda devem ser úteis para o agente trabalhar no dia a dia.

Formato recomendado para cada arquivo de memória curta

Use este modelo quando fizer sentido:

```md
# [Nome da memória]

## Função deste arquivo
Este arquivo contém apenas o contexto essencial e operacional para uso frequente no projeto.

Para histórico completo, detalhes antigos, registros extensos e decisões anteriores, consulte a memória longa linkada abaixo.

## Contexto essencial
[Resumo curto do que o agente precisa entender rapidamente.]

## Estado atual
[Situação vigente do tema.]

## Decisões ativas
[Decisões que ainda devem orientar o trabalho.]

## Pendências ativas
[Itens ainda relevantes para execução.]

## Atenções para o agente
[Cuidados, restrições, riscos ou padrões importantes.]

## Memória longa relacionada
- [Arquivo longform 1](./caminho/para/memory-longform/...)
- [Arquivo longform 2](./caminho/para/memory-longform/...)

## Quando consultar a memória longa
Consulte a memória longa quando precisar verificar histórico, decisões antigas, discussões completas, evolução de status, atas, versões anteriores, detalhes de pesquisa, copy exploratória ou justificativas de decisões.

## Nota de manutenção
Este arquivo foi otimizado para leitura frequente. Informações detalhadas foram preservadas na memória longa do projeto.
```

Regras para memória longa

A memória longa deve preservar o máximo possível do conteúdo original, com rastreabilidade.

Cada arquivo longo deve indicar:

* arquivo de origem;
* data da migração;
* tema;
* status do conteúdo;
* relação com o arquivo curto;
* conteúdo preservado;
* notas de consolidação, se houver.

Formato recomendado para cada arquivo de memória longa

```md
# [Tema] — memória longa

## Finalidade
Este arquivo preserva histórico, detalhes, registros extensos e informações de consulta menos frequente sobre [tema].

Ele não precisa ser lido em toda tarefa cotidiana. Deve ser consultado quando houver dúvida sobre histórico, decisões anteriores, evolução do projeto ou detalhes que não aparecem na memória curta.

## Arquivos de origem
- `[caminho/do/arquivo-original.md]`

## Arquivo curto relacionado
- `[caminho/do/arquivo-curto.md]`

## Índice
- [Seção 1](#secao-1)
- [Seção 2](#secao-2)

## Conteúdo preservado

### Origem: `[caminho/do/arquivo-original.md]`
[Preserve aqui o conteúdo detalhado, histórico ou de baixa frequência.]

## Notas de migração
- O que ficou no arquivo curto:
  - [resumo]
- O que foi preservado neste arquivo:
  - [resumo]
- Pontos ambíguos:
  - [se houver]
- Conflitos identificados:
  - [se houver]
```

Índice geral obrigatório

Crie ou atualize:

`memory-longform/_index.md`

Ele deve conter:

```md
# Índice da memória longa

## Finalidade
Mapa de consulta para os arquivos de memória longa do projeto.

Use este índice quando precisar recuperar histórico, decisões antigas, registros completos, pesquisas extensas, atas, assets, versões anteriores de copy, evolução de oferta ou status passado.

## Mapa de memória

| Tema | Arquivo curto | Memória longa | Quando consultar |
|---|---|---|---|
| Brands | [arquivo curto] | [arquivo longo] | Quando precisar de histórico, variações, racional ou detalhes antigos de marca |
| Status | [arquivo curto] | [arquivo longo] | Quando precisar entender evolução do projeto |
| Decisions | [arquivo curto] | [arquivo longo] | Quando precisar verificar decisões antigas ou justificativas |
| Assets | [arquivo curto] | [arquivo longo] | Quando precisar consultar inventário completo ou histórico |
| Tasks | [arquivo curto] | [arquivo longo] | Quando precisar ver tarefas antigas ou evolução |
| Meetings | [arquivo curto] | [arquivo longo] | Quando precisar consultar atas completas |
| Copy | [arquivo curto] | [arquivo longo] | Quando precisar recuperar versões, testes ou ideias antigas |
| Offer | [arquivo curto] | [arquivo longo] | Quando precisar entender evolução da oferta |
| Research | [arquivo curto] | [arquivo longo] | Quando precisar consultar pesquisa completa |
```

Registro de migração obrigatório

Crie ou atualize:

`memory-longform/_migration-log.md`

Ele deve registrar cada mudança feita:

```md
# Registro de migração da memória

## [YYYY-MM-DD] Otimização de memória

### Arquivos analisados
- `[caminho]`

### Arquivos criados
- `[caminho]`

### Arquivos editados
- `[caminho]`

### Conteúdo preservado na memória longa
- `[tema]`: conteúdo originado de `[arquivo]` preservado em `[arquivo longo]`

### Conteúdo mantido na memória curta
- `[tema]`: resumo operacional, decisões ativas e estado atual

### Conflitos ou ambiguidades
- [listar, se houver]

### Validação
- [confirmar que os arquivos curtos apontam para os arquivos longos]
- [confirmar que nenhuma informação foi removida sem preservação]
```

Processo obrigatório

Siga esta ordem:

1. Leia o `prd.md`.
2. Identifique todos os arquivos MD citados diretamente ou indiretamente como memória do projeto.
3. Leia os arquivos identificados.
4. Faça um inventário antes de editar qualquer coisa.
5. Classifique o conteúdo de cada arquivo em:

   * essencial para memória curta;
   * histórico para memória longa;
   * decisão ativa;
   * decisão antiga;
   * tarefa ativa;
   * tarefa histórica;
   * informação duplicada;
   * conflito;
   * ambiguidade;
   * conteúdo que deve ser preservado literalmente.
6. Apresente um plano curto antes de qualquer edição.
7. Aguarde minha aprovação.
8. Após aprovação, crie a pasta de memória longa.
9. Crie o índice geral da memória longa.
10. Crie o registro de migração.
11. Copie e preserve o conteúdo detalhado nos arquivos longos.
12. Só depois edite os arquivos curtos.
13. Adicione links cruzados entre memória curta e memória longa.
14. Revise os diffs.
15. Valide que nenhuma informação foi perdida.
16. Entregue um resumo final.

Inventário obrigatório antes da execução

Antes de editar, entregue uma tabela ou lista com:

```md
## Inventário de memória

### Arquivo: `[caminho]`

Função atual:
[descrever]

Problema:
[ex: muito longo, mistura histórico com status atual, contém duplicação, contém decisões antigas etc.]

Deve permanecer na memória curta:
- [itens]

Deve ir para memória longa:
- [itens]

Arquivo longo sugerido:
`[caminho]`

Riscos:
- [risco de perda, conflito, ambiguidade etc.]
```

Critérios para decidir o que fica na memória curta

Mantenha na memória curta apenas informações que sejam úteis para trabalho cotidiano, como:

* objetivo atual;
* contexto de negócio essencial;
* estado atual do projeto;
* decisões vigentes;
* restrições importantes;
* tarefas em aberto;
* assets ativos;
* copy aprovada ou em uso;
* oferta vigente;
* aprendizados de pesquisa que impactam execução atual;
* links para consultar detalhes.

Critérios para mover para memória longa

Preserve na memória longa:

* histórico completo;
* versões antigas;
* atas completas;
* brainstorming;
* decisões superadas;
* tarefas concluídas;
* pesquisas extensas;
* referências longas;
* copies exploratórias;
* status antigos;
* discussões;
* justificativas;
* duplicações úteis para auditoria;
* qualquer trecho removido da leitura frequente.

Regras de preservação

* Não apague informação sem preservá-la antes.
* Se não tiver certeza se algo é importante, preserve na memória longa.
* Se uma informação parecer obsoleta, marque como histórica, mas não apague.
* Se duas fontes discordarem, preserve ambas e marque como `CONFLITO A REVISAR`.
* Se uma decisão parecer antiga, não a trate como inválida sem evidência.
* Se encontrar conteúdo sensível, preserve com cuidado e sinalize no relatório final.
* Não mexa em arquivos fora do escopo sem justificar no plano.
* Não execute comandos destrutivos.
* Não altere código, assets reais, configurações ou arquivos de produto, exceto se forem arquivos MD de memória relacionados à tarefa.

Links cruzados obrigatórios

Cada arquivo curto deve apontar para sua memória longa correspondente.

Cada arquivo longo deve apontar de volta para o arquivo curto correspondente.

O `prd.md` só deve ser alterado se for necessário melhorar a navegação para a nova estrutura de memória. Se alterar o `prd.md`, faça apenas mudanças de referência, sem reescrever o conteúdo de produto.

Validação obrigatória

Depois das edições:

1. Verifique se todos os arquivos citados no `prd.md` continuam existindo.
2. Verifique se cada arquivo curto tem links para memória longa.
3. Verifique se cada arquivo longo identifica sua origem.
4. Verifique se o índice geral inclui todos os temas relevantes.
5. Verifique se o registro de migração documenta as mudanças.
6. Revise o diff.
7. Confirme no resumo final que nenhuma informação foi apagada sem preservação.
8. Liste qualquer ponto que precise de revisão humana.

Entrega final

Ao concluir, entregue:

```md
## Resumo final

### Arquivos lidos
- ...

### Arquivos criados
- ...

### Arquivos editados
- ...

### Nova estrutura de memória longa
- ...

### O que foi mantido na memória curta
- ...

### O que foi preservado na memória longa
- ...

### Links principais
- ...

### Conflitos ou ambiguidades
- ...

### Riscos restantes
- ...

### Validação realizada
- ...

### Próximos passos recomendados
- ...
```

Importante

A memória longa deve ser tratada como persistente, auditável e consultável.

A memória curta deve ser tratada como contexto operacional para trabalho cotidiano.

Não otimize apagando. Otimize separando camadas de memória, preservando histórico e criando links claros entre contexto atual e arquivo completo.
