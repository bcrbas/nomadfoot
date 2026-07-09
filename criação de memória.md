Tarefa
Otimize a memória do projeto reduzindo o tamanho e a complexidade dos arquivos MD citados no `prd.md`, mantendo neles apenas as informações essenciais para contexto frequente do agente.

Regra crítica
Nenhuma informação pode ser apagada da pasta do projeto.
Antes de remover, resumir ou enxugar qualquer trecho dos arquivos principais, copie integralmente ou preserve de forma rastreável o conteúdo detalhado em novos arquivos de consulta menos frequente.

Contexto
Existe um `prd.md` que cita arquivos de memória do projeto, incluindo arquivos relacionados a:

- brands
- status
- decisions
- assets
- tasks
- meetings
- copy
- offer
- research

Esses arquivos estão ficando extensos e prejudicando a leitura do agente. Eles devem continuar existindo e conter apenas o contexto essencial, atual e operacional. O conteúdo histórico, detalhes longos, discussões antigas, registros extensos e informações de baixa frequência devem ser movidos/copiadOs para uma nova área de memória longa.

Escopo
1. Leia primeiro o `prd.md`.
2. Identifique todos os arquivos MD pertinentes citados ou referenciados no `prd.md`.
3. Analise esses arquivos e classifique o conteúdo em:
   - essencial para leitura frequente;
   - histórico/detalhado para consulta eventual;
   - duplicado ou redundante;
   - desatualizado, mas ainda importante como registro;
   - dúvida ou informação que exige preservação literal.
4. Crie um diretório novo para memória longa, preferencialmente seguindo a estrutura existente do projeto. Caso não exista padrão, crie algo como:

   `memory-longform/`

   ou

   `docs/memory-longform/`

   Escolha o caminho que fizer mais sentido para a organização atual do repositório.
5. Dentro desse diretório, crie arquivos grandes de consulta menos frequente, separados por tema ou origem, por exemplo:
   - `brands-longform.md`
   - `status-history.md`
   - `decisions-log.md`
   - `assets-reference.md`
   - `tasks-history.md`
   - `meetings-archive.md`
   - `copy-reference.md`
   - `offer-history.md`
   - `research-longform.md`

6. Para cada arquivo principal citado no `prd.md`, mantenha apenas:
   - resumo executivo;
   - estado atual;
   - decisões ativas;
   - fatos que o agente precisa lembrar frequentemente;
   - links para os arquivos longform correspondentes;
   - data/nota da otimização;
   - instrução clara sobre quando consultar a memória longa.

Fora do escopo
- Não apague arquivos.
- Não remova informação sem antes copiá-la para a memória longa.
- Não altere lógica de produto, código, assets reais ou configuração do projeto.
- Não reescreva o `prd.md` a menos que seja necessário adicionar referências aos novos arquivos de memória longa.
- Não invente contexto ausente.
- Não transforme opinião antiga em decisão ativa sem evidência nos arquivos.

Restrições
- Preserve rastreabilidade: todo conteúdo movido para memória longa deve indicar de qual arquivo veio.
- Quando resumir algo nos arquivos principais, inclua link para o trecho/destino detalhado.
- Se houver conflito entre arquivos, não resolva silenciosamente. Marque como `CONFLITO A REVISAR`.
- Se houver informação ambígua, preserve no longform e coloque uma nota curta no arquivo principal.
- Evite grandes reescritas estilísticas desnecessárias.
- Mantenha a linguagem e o padrão editorial já usados no projeto.
- Priorize clareza para futuros agentes.
- Não use comandos destrutivos.
- Antes de editar, apresente um plano curto e aguarde minha aprovação.

Entrega esperada
Ao final, o projeto deve ter:

1. Arquivos de memória principais mais curtos, objetivos e úteis para leitura frequente.
2. Novo diretório de memória longa com os detalhes preservados.
3. Links cruzados entre memória principal e memória longa.
4. Nenhuma perda de informação.
5. Relatório final com:
   - arquivos lidos;
   - arquivos editados;
   - arquivos criados;
   - conteúdo movido/copiadO por categoria;
   - conflitos encontrados;
   - riscos ou pontos que exigem revisão humana.

Critérios de aceite
A tarefa só estará concluída se:

- Todos os arquivos MD pertinentes citados no `prd.md` forem analisados.
- Nenhuma informação for apagada sem cópia preservada em outro arquivo do projeto.
- Cada arquivo principal ficar significativamente mais enxuto.
- Cada arquivo principal tiver links claros para sua memória longa correspondente.
- Os arquivos longform tiverem origem rastreável.
- O agente conseguir explicar onde cada tipo de informação passou a morar.
- O diff final mostrar apenas mudanças relacionadas à otimização da memória.
- O relatório final permitir auditar que não houve perda de contexto.

Execução
Siga esta ordem obrigatória:

1. Leia o `prd.md`.
2. Liste todos os arquivos de memória citados ou inferidos a partir dele.
3. Leia esses arquivos.
4. Crie um inventário com:
   - caminho do arquivo;
   - função do arquivo;
   - tamanho/problema percebido;
   - o que deve permanecer;
   - o que deve ir para memória longa;
   - riscos.
5. Proponha um plano curto antes de qualquer edição.
6. Aguarde minha aprovação.
7. Após aprovação, crie o diretório de memória longa.
8. Copie/preserve o conteúdo detalhado nos arquivos longform.
9. Só depois enxugue os arquivos principais.
10. Adicione links cruzados.
11. Revise o diff.
12. Valide que nenhuma informação foi perdida.
13. Entregue resumo final com mudanças, riscos e próximos passos.

Formato desejado para os arquivos principais otimizados
Use este padrão quando fizer sentido:

# [Nome da memória]

## Uso deste arquivo
Resumo de quando consultar este arquivo e quando consultar a memória longa.

## Contexto essencial
Informações que o agente precisa saber com frequência.

## Estado atual
Situação vigente do tema.

## Decisões ativas
Decisões que continuam válidas.

## Pendências ou pontos em aberto
Itens que ainda exigem ação ou revisão.

## Links para memória longa
- [Arquivo longform correspondente](./caminho/do/arquivo.md)

## Nota de manutenção
Este arquivo foi otimizado para leitura frequente. Detalhes históricos e registros completos foram preservados na memória longa.

Formato desejado para os arquivos longform
Use este padrão quando fizer sentido:

# [Tema] — memória longa

## Finalidade
Arquivo de consulta detalhada/histórica. Não precisa ser lido sempre pelo agente.

## Origem
Conteúdo preservado a partir de:
- `[caminho/original.md]`

## Conteúdo preservado
Cole aqui o conteúdo detalhado, histórico ou menos frequente, mantendo títulos e contexto suficientes para auditoria.

## Índice de consulta
Crie um índice simples para facilitar busca futura.

## Notas de migração
Explique resumidamente o que foi mantido no arquivo principal e o que foi preservado aqui.

Antes de começar
Não edite nada ainda. Primeiro leia o contexto, monte o inventário e me apresente o plano de execução.