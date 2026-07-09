# PRD — Manager Futebolístico Web Inspirado em ELIFOOT 98

## 1. Visão geral

Este projeto tem como objetivo criar um jogo online, jogável via navegador, inspirado na experiência clássica de manager futebolístico do ELIFOOT 98.

O jogo deve permitir que o usuário escolha um clube, gerencie elenco, acompanhe calendário, simule partidas, veja tabelas de campeonato, faça decisões básicas de gestão e avance temporadas.

A prioridade inicial é criar uma versão simples, funcional e jogável, preservando a sensação de jogo rápido, direto e viciante dos managers clássicos.

O projeto não deve copiar código, marca, assets, nomes protegidos, banco de dados original ou qualquer material proprietário do ELIFOOT 98. A proposta é criar uma obra original inspirada em mecânicas observadas e documentadas.

---

## 2. Objetivo do produto

Criar um manager de futebol web com foco em:

* gestão simples de clube;
* simulação de partidas;
* evolução de temporada;
* tabelas e classificação;
* elenco com atributos relevantes;
* finanças básicas;
* transferências;
* progressão de jogadores;
* salvamento de carreira;
* interface rápida e objetiva.

O objetivo principal do MVP é entregar um loop jogável antes de expandir profundidade, visual ou recursos avançados.

---

## 3. Público-alvo

O jogo é voltado para:

* jogadores nostálgicos de managers clássicos;
* fãs de jogos de futebol focados em gestão;
* usuários que preferem jogos rápidos e leves;
* pessoas que querem jogar diretamente no navegador sem instalação;
* jogadores que gostam de temporadas, tabelas, elenco e mercado.

---

## 4. Princípios do produto

O desenvolvimento deve seguir estes princípios:

1. Primeiro fica jogável.
2. Depois fica bonito.
3. Depois fica profundo.
4. A interface deve ser rápida e funcional.
5. As decisões do jogador devem ser frequentes e claras.
6. O jogo deve evitar complexidade desnecessária no início.
7. Cada nova mecânica deve melhorar o loop principal.
8. Regras observadas, inferidas e decididas devem ser documentadas separadamente.
9. O produto final deve ter identidade própria.
10. O MVP deve ser simples, mas extensível.

---

## 5. Loop principal do jogo

O loop mínimo desejado é:

1. Usuário inicia nova carreira.
2. Usuário escolhe um clube.
3. Usuário visualiza o elenco.
4. Usuário analisa jogadores, atributos e situação do clube.
5. Usuário avança rodada.
6. O sistema simula partidas.
7. O sistema atualiza resultados, tabela e calendário.
8. Usuário toma novas decisões.
9. O ciclo se repete até o fim da temporada.
10. Ao final, o jogo prepara a próxima temporada.

---

## 6. MVP — Escopo inicial

A primeira versão jogável deve conter:

### 6.1 Tela inicial

* iniciar novo jogo;
* carregar jogo salvo;
* acesso futuro a configurações.

### 6.2 Escolha de clube

* lista de clubes disponíveis;
* exibição básica de informações do clube;
* seleção do clube controlado pelo usuário.

### 6.3 Elenco

Cada jogador deve possuir, no mínimo:

* nome;
* idade;
* posição;
* qualidade geral ou atributos principais;
* valor;
* salário;
* condição física ou status simples.

A tela de elenco deve permitir ao usuário visualizar a força básica do time e identificar jogadores importantes.

### 6.4 Campeonato

O MVP deve ter ao menos um campeonato funcional com:

* clubes participantes;
* calendário;
* rodadas;
* resultados;
* tabela de classificação;
* pontuação;
* saldo de gols;
* vitórias, empates e derrotas.

### 6.5 Simulação de partidas

O jogo deve conseguir simular partidas entre clubes.

A simulação inicial pode ser simples, considerando fatores como:

* força geral do time;
* mando de campo;
* aleatoriedade;
* possível influência futura de moral, forma ou elenco.

A prioridade é ter resultados plausíveis, não uma simulação perfeita.

### 6.6 Avanço de rodada

O usuário deve conseguir avançar para a próxima rodada.

Ao avançar, o jogo deve:

* simular partidas pendentes;
* atualizar calendário;
* atualizar tabela;
* registrar resultados;
* permitir continuidade da temporada.

### 6.7 Fim de temporada

Ao concluir todas as rodadas, o jogo deve:

* identificar campeão;
* apresentar classificação final;
* permitir iniciar uma nova temporada simples;
* preparar evolução futura de jogadores e clubes.

### 6.8 Salvamento

O MVP deve permitir:

* salvar progresso;
* carregar progresso salvo;
* continuar uma carreira iniciada.

---

## 7. Fora do escopo do MVP

Os seguintes recursos não são prioridade na primeira versão:

* multiplayer;
* login de usuário;
* backend online;
* rankings globais;
* modo multiplayer em tempo real;
* licenças reais de clubes ou jogadores;
* gráficos avançados;
* animação de partida em tempo real;
* táticas complexas;
* categorias de base;
* editor completo de banco de dados;
* mídia, imprensa ou torcida avançada;
* competições continentais complexas;
* economia profunda;
* inteligência artificial gerencial avançada.

Esses recursos podem ser avaliados após o MVP jogável estar sólido.

---

## 8. Mecânicas futuras desejadas

Após o MVP, o projeto pode evoluir com:

* mercado de transferências;
* compra e venda de jogadores;
* empréstimos;
* salários e orçamento;
* patrocínios;
* moral do elenco;
* lesões;
* suspensões;
* evolução e queda de atributos;
* aposentadoria;
* divisões nacionais;
* promoções e rebaixamentos;
* copas;
* histórico de temporadas;
* conquistas;
* estatísticas individuais;
* artilharia;
* assistências;
* treinador adversário ou IA de clubes;
* editor de clubes e jogadores;
* modo carreira mais profundo.

---

## 9. Entidades principais

O jogo deve trabalhar inicialmente com as seguintes entidades conceituais:

### Clube

Representa um time participante do campeonato.

Campos esperados:

* id;
* nome;
* país ou liga;
* reputação;
* orçamento;
* elenco;
* estatísticas na temporada.

### Jogador

Representa um atleta do elenco.

Campos esperados:

* id;
* nome;
* idade;
* posição;
* atributos ou força geral;
* valor;
* salário;
* clube atual;
* status.

### Campeonato

Representa uma competição disputada por clubes.

Campos esperados:

* id;
* nome;
* clubes participantes;
* rodadas;
* tabela;
* status da temporada.

### Partida

Representa um jogo entre dois clubes.

Campos esperados:

* id;
* clube mandante;
* clube visitante;
* rodada;
* gols do mandante;
* gols do visitante;
* status;
* resultado.

### Save de carreira

Representa o estado persistido do jogo.

Campos esperados:

* clube controlado;
* temporada atual;
* campeonato atual;
* elenco;
* tabela;
* calendário;
* histórico básico.

---

## 10. Critérios de sucesso do MVP

O MVP será considerado concluído quando o usuário conseguir:

* abrir o jogo no navegador;
* iniciar uma nova carreira;
* escolher um clube;
* visualizar o elenco;
* acessar calendário;
* avançar rodada;
* simular partidas;
* ver resultados;
* consultar tabela atualizada;
* terminar uma temporada;
* salvar o progresso;
* carregar o progresso salvo;
* repetir o ciclo em uma nova temporada simples.

---

## 11. Critérios de qualidade

O produto deve ser:

* rápido de abrir;
* simples de jogar;
* claro nas informações;
* leve no navegador;
* fácil de evoluir;
* fiel ao espírito de um manager clássico;
* original em identidade, nomes e dados;
* documentado conforme as mecânicas forem definidas.

O jogo não precisa ser visualmente sofisticado no MVP. A clareza e a jogabilidade são mais importantes que o acabamento visual inicial.

---

## 12. Riscos principais

### Escopo grande demais

Risco de tentar construir muitas mecânicas antes do loop principal estar pronto.

Mitigação: priorizar apenas o MVP jogável.

### Cópia indevida do jogo original

Risco de reproduzir elementos protegidos.

Mitigação: recriar mecânicas de forma original, com nomes, dados e identidade próprios.

### Simulação pouco divertida

Risco de resultados parecerem aleatórios demais ou previsíveis demais.

Mitigação: começar simples, testar temporadas completas e ajustar balanceamento.

### Interface confusa

Risco de excesso de telas ou informações.

Mitigação: priorizar menus diretos, poucas ações por tela e feedback claro.

### Falta de documentação

Risco de decisões se perderem ao longo do projeto.

Mitigação: manter arquivos de status, decisões, mecânicas e tarefas atualizados.

---

## 13. Documentação de mecânicas

Toda mecânica analisada ou criada deve ser documentada com a seguinte classificação:

* Observado: confirmado por evidência direta.
* Inferido: hipótese baseada em comportamento conhecido.
* Decidido: regra adotada para este projeto.
* Pendente: ainda precisa de validação.

Formato recomendado:

```md
## Mecânica: [nome]

Status: Observado / Inferido / Decidido / Pendente

Descrição:
...

Regras confirmadas:
- ...

Hipóteses:
- ...

Decisão para nossa versão:
- ...

Impacto no jogo:
- ...
```

---

## 14. Roadmap inicial sugerido

### Fase 1 — Base jogável

* criar estrutura inicial do projeto;
* cadastrar clubes fictícios;
* cadastrar jogadores fictícios;
* permitir escolha de clube;
* exibir elenco;
* criar campeonato simples;
* gerar calendário;
* simular rodadas;
* atualizar tabela.

### Fase 2 — Persistência e temporada

* salvar jogo;
* carregar jogo;
* encerrar temporada;
* iniciar temporada seguinte;
* registrar histórico básico.

### Fase 3 — Gestão básica

* adicionar orçamento;
* adicionar salários;
* adicionar valores de jogadores;
* implementar transferências simples;
* criar impacto financeiro básico.

### Fase 4 — Profundidade

* evolução de jogadores;
* envelhecimento;
* lesões;
* suspensões;
* moral;
* estatísticas individuais;
* balanceamento da simulação.

### Fase 5 — Polimento

* melhorar interface;
* melhorar feedback visual;
* ajustar navegação;
* adicionar configurações;
* revisar textos e experiência geral.

---

## 15. Direção de produto

Este projeto deve ser tratado como um clone espiritual, não uma cópia literal.

A meta é capturar o que tornava o manager clássico divertido:

* rapidez;
* clareza;
* progressão;
* decisões simples com impacto;
* temporadas que avançam sem fricção;
* vontade de jogar “só mais uma rodada”.

Toda decisão de produto deve ser avaliada com uma pergunta central:

**Isso melhora o loop principal do jogo agora?**

Se a resposta for não, a funcionalidade deve ser adiada.
