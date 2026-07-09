# Decisões

## Função deste arquivo

Decisões ativas que orientam o trabalho cotidiano no Nomadfoot. Para histórico, origem e justificativas completas, consulte [decisions-log.md](./memory-longform/decisoes/decisions-log.md).

## Contexto essencial

O projeto é um manager futebolístico web original, inspirado no espírito de managers clássicos, mas sem copiar código, marca, assets, nomes protegidos ou banco de dados proprietário.

## Decisões ativas

- Priorizar primeiro uma versão jogável; beleza visual e profundidade vêm depois.
- Manter o loop principal como critério central: escolher clube, ver elenco, avançar rodada, consultar resultados, salvar e continuar.
- Usar dados fictícios e identidade própria.
- Manter o MVP leve, sem backend, login, rankings globais ou multiplayer.
- Usar Vite com JavaScript puro enquanto o loop principal ainda está sendo validado.
- Salvar carreira localmente via `localStorage` com chave versionada.
- Manter `DATABASE_URL` apenas em variáveis de ambiente; nunca expor credenciais do NeonDB no código cliente.
- Documentar mecânicas como Observado, Inferido, Decidido ou Pendente quando novas regras forem adicionadas.

## Pendências ou pontos em aberto

- Definir como será a escalação manual.
- Definir modelo inicial de transferências.
- Definir critérios de evolução de jogadores após mais testes de temporada.
- Definir camada serverless/API antes de usar NeonDB, porque o Vite roda no navegador.

## Atenções para o agente

- Não introduzir nomes reais de clubes ou jogadores licenciados.
- Não adicionar complexidade que não melhore o loop principal agora.
- Registrar novas decisões neste arquivo e detalhes históricos no log longo.

## Memória longa relacionada

- [decisions-log.md](./memory-longform/decisoes/decisions-log.md)

## Quando consultar a memória longa

Consulte a memória longa quando precisar verificar origem, justificativa, decisões antigas ou ambiguidades antes de mudar uma regra vigente.

## Nota de manutenção

Este arquivo foi criado e otimizado para leitura frequente em 2026-07-09. Justificativas e registros completos ficam preservados na memória longa.
