# 🏁 Mario Kart CLI Simulator

Simulador de corrida inspirado no universo Mario Kart, desenvolvido em **Node.js**, executado via terminal (CLI).

O jogo simula corridas entre dois personagens com sistema de atributos, tipos de pista e habilidades especiais.

---

## 🎮 Demonstração

```
🏁 SIMULADOR MARIO KART CLI
🎮 Jogador selecionado: Mario
🤖 CPU selecionou: Bowser

🏁 CORRIDA INICIADA!
```

Cada corrida possui:
- 5 rodadas
- Tipo de pista aleatório (RETA ou CURVA)
- Sistema de dados (1–6)
- Habilidades especiais por personagem
- Sistema de pontuação

---

## 🧠 Mecânicas do Jogo

### 🎲 Sistema de Rodadas
A cada rodada:
1. Um tipo de pista é sorteado:
   - 🛣️ RETA
   - 🔄 CURVA
2. Cada jogador rola um dado (1–6)
3. O valor do dado é somado ao atributo do personagem
4. Habilidades especiais podem ativar
5. Quem tiver maior valor vence a rodada

---

## ⭐ Personagens e Habilidades

### 🍄 Mario
+1 em pistas do tipo **CURVA**

### 🐢 Bowser
+2 em pistas do tipo **RETA**

### 🍀 Luigi
20% de chance de ganhar +2 em qualquer rodada

---

## 📊 Sistema de Pontuação

- Vitória na rodada = +1 ponto
- Empate = ninguém pontua
- Após 5 rodadas, o maior pontuador vence
- Se houver empate → corrida empatada 🤝

---

## 🏗️ Estrutura do Projeto

```
📁 Mario_kart_cli
 ├── index.js        # Arquivo principal
 ├── race.js         # Lógica da corrida
 ├── characters.js   # Definição dos personagens
 └── utils.js        # Funções auxiliares
```

---

## 🚀 Como Executar

### 1️⃣ Instale o Node.js  
https://nodejs.org

### 2️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/mario-kart-cli.git
```

### 3️⃣ Execute o projeto

```bash
node index.js
```

---

## 🛠️ Tecnologias Utilizadas

- JavaScript
- Node.js
- CLI (Terminal)

---

## 💡 Conceitos Praticados

- Lógica de programação
- Modularização
- Funções reutilizáveis
- Manipulação de objetos
- Estrutura condicional
- Simulação baseada em regras
- Organização de projeto Node.js

---

## 📈 Melhorias Futuras

- [ ] Sistema de itens (casco, turbo, banana)
- [ ] Modo campeonato (melhor de 3 corridas)
- [ ] Salvamento de estatísticas em arquivo JSON
- [ ] Interface visual com biblioteca CLI (ex: Inquirer)
- [ ] Versão Web com HTML/CSS

---

## 👨‍💻 Autor

**Matheus Carvalho de Medeiros Correia**  
Desenvolvedor em formação focado em JavaScript, Node.js e desenvolvimento full stack.

LinkedIn:  
https://www.linkedin.com/in/matheus-carvalho-de-medeiros-correia/
