# BlackJack Game ♠️🃏

This is a **simple BlackJack game** built using **HTML, CSS, and JavaScript**.
The goal of this project is to understand **how JavaScript controls a web page**, not to build a perfect game.

This project focuses on:

* Logic building
* JavaScript basics
* DOM manipulation

---

## 📂 Files in This Project

* `index.html` → Structure of the page
* `index.css` → Styling and design
* `index.js` → Game logic and behavior

Each file has **one clear responsibility**.

---

## 🎮 What the Game Does

* Starts the game with **two random cards**
* Shows:

  * Cards drawn
  * Total sum
* Allows drawing a **new card**
* Shows game messages:

  * “Do you want to draw a new card?”
  * “You’ve got Blackjack!”
  * “You’re out of the game!”

---

## 🧱 HTML – What You See

HTML defines **what appears on the screen**.

Key elements:

* `<h1>` → Game title
* `<p>` → Message, cards, sum
* `<button>` → User actions

Buttons are connected to JavaScript using `onclick`:

```html
<button onclick="startGame()">START GAME</button>
<button onclick="newCard()">NEW CARD</button>
```

This means:
➡️ When the button is clicked, the JavaScript function runs.

---

## 🎨 CSS – How It Looks

CSS controls **appearance**, not logic.

What CSS does here:

* Adds casino-style background
* Makes text white and readable
* Styles buttons with gold color
* Centers everything on the page

CSS makes the game **look like a game**, not plain text.

---

## ⚙️ JavaScript – How the Game Works

JavaScript controls **everything that changes**.

### Main variables:

* `sum` → Total of cards
* `cards` → Stores all drawn cards
* `isAlive` → Checks if player is still in game
* `hasBlackJack` → Checks if sum is 21

---

## 🧠 Game Logic Flow (Simple)

1. Game starts
2. Two random cards are generated
3. Cards and sum are shown
4. Player can:

   * Draw a new card
   * Or lose if sum > 21
5. Messages update based on result

---

## 🎴 Random Card Logic

```javascript
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
}
```

Rules applied:

* 1 → Ace (11)
* 11–13 → Face cards (10)
* Others → Same value

This simulates real BlackJack logic.

---

## 🧍 Player Object

```javascript
let player = {
    name: "Sunny",
    chips: 120
}
```

This shows:

* How related data is stored together
* Basic use of **JavaScript objects**

---

## 🧠 `.textContent` vs `.innerHTML`

* `.textContent` → Used to show **plain text**
* `.innerHTML` → Used to insert **HTML elements**

Example used:

```javascript
messageEl.textContent = message
```

Why:

* Only text is displayed
* Safer and cleaner
* No HTML needed

Rule:
👉 Use `.textContent` for text
👉 Use `.innerHTML` only when HTML is required

---

## 🔄 How Everything Connects

* HTML creates elements
* CSS styles them
* JavaScript updates them dynamically

This interaction is called **DOM manipulation**.

---

## 📘 What This Project Teaches

* JavaScript logic thinking
* Arrays and objects
* Conditions and functions
* How buttons trigger actions
* How JS updates HTML

---

## ✅ Beginner Learning Project

This project is **not about perfection**.
It is about **understanding how JavaScript thinks and works**.

If you understand this project clearly,
👉 you are ready to move to **bigger JavaScript projects**.

