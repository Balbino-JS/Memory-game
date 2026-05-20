# 🐯 Memory Game - Arca de Noé

Um clássico Jogo da Memória temático desenvolvido com foco em performance, acessibilidade e **responsividade total em múltiplas telas**. O projeto conta com um sistema adaptável que calcula o tamanho ideal das cartas (28 ao total) para que preencham a tela sem a necessidade de barras de rolagem (scroll) no Desktop, Tablet ou Mobile.

---

## 📱 Funcionalidades de Destaque

* **Responsividade Pixel-Perfect:** O grid se autoajusta matematicamente:
    * **Desktop/Tablet:** Organização em 7 colunas × 4 linhas.
    * **Mobile:** Organização vertical automática em 4 colunas × 7 linhas.
* **Prevenção de Scroll indesejado:** Utilização de unidades dinâmicas (`vmin`, `clamp`) e bloqueio de viewport para manter os 28 cards sempre visíveis na área útil do dispositivo.
* **Validação de Orientação:** Alerta integrado impedindo o uso em modo paisagem em telas muito pequenas (mobile) para não quebrar a experiência do usuário.
* **Efeitos Visuais Fluídos:** Animações em 3D utilizando `preserve-3d` e `backface-visibility` para o efeito de virada de carta.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído puramente com tecnologias web nativas (Vanilla Web Stack):

* **HTML5:** Estruturação semântica das páginas de login e ambiente do jogo.
* **CSS3:** Layouts modernos com CSS Grid, Flexbox, variáveis fluidas e Media Queries.
* **JavaScript (ES6):** Manipulação dinâmica do DOM, lógica de embaralhamento de arrays, regras do jogo e persistência do jogador via `localStorage`.

---

## 📂 Estrutura de Pastas

```text
├── pages/
│   └── game.html
├── src/
│   ├── css/
│   │   ├── game.css
│   │   ├── login.css
│   │   └── reset.css
│   ├── img/
│   │   └── (imagens dos animais e background)
│   └── js/
│   │   ├── game.js
│   │   └── login.js
├── .gitattributes
├── LICENSE
├── login.html (ou index.html)
├── manifest.json
└── README.md


---

# 2. Documento de Especificação Técnica e Arquitetura

Este texto serve como documentação de suporte ao projeto, ideal para você guardar em PDF, enviar para avaliação, ou anexar em portfólios no LinkedIn.

---

## DOCUMENTO DE ESPECIFICAÇÃO DE PROJETO: MEMORY GAME

### 1. Visão Geral do Sistema
O sistema consiste em uma aplicação web front-end de um Jogo da Memória focado em entretenimento responsivo. A aplicação valida a identidade do usuário através de uma tela de login simplificada e gerencia uma partida com 14 pares de cartas exclusivos (28 cartas no total).

### 2. Arquitetura de Interface e Responsividade Estrita
A principal restrição de design técnico deste projeto foi **eliminar qualquer tipo de rolagem vertical ou horizontal**, garantindo que os 28 elementos interativos caibam estritamente dentro da área visível (*Viewport*) do usuário.

#### 2.1 Estratégia de Adaptação de Layout (CSS Grid)
Para cumprir a meta de visualização sem scroll, a distribuição das cartas altera sua matriz de orientação dependendo do dispositivo:

| Tipo de Dispositivo | Resolução de Tela | Estrutura da Matriz | Justificativa de Engenharia |
| :--- | :--- | :--- | :--- |
| **Desktop** | Acima de 868px | **7 colunas × 4 linhas** | Aproveita o espaço horizontal de monitores tradicionais e widescreen. |
| **Tablet** | Entre 481px e 868px | **7 colunas × 4 linhas** | Mantém a proporção horizontal com decréscimo proporcional via `clamp()`. |
| **Mobile** | Abaixo de 480px | **4 colunas × 7 linhas** | Inverte o sentido do Grid para se adequar ao formato vertical de smartphones. |

#### 2.2 Dimensionamento Fluído
Em vez de utilizar tamanhos estáticos baseados em pixels (`px`), os cartões utilizam a propriedade:
```css
max-width: clamp(35px, 11vmin, 52px);