# ects-fotinia-sadovskaya

NPM package that converts scores from 100-point grading system to ECTS grades.

---

[![npm version](https://img.shields.io/npm/v/ects-fotinia-sadovskaya.svg)](https://www.npmjs.com/package/ects-fotinia-sadovskaya)
[![npm downloads](https://img.shields.io/npm/dm/ects-fotinia-sadovskaya.svg)](https://www.npmjs.com/package/ects-fotinia-sadovskaya)
[![license](https://img.shields.io/npm/l/ects-fotinia-sadovskaya.svg)](./LICENSE)

A lightweight and easy‑to‑use npm package that converts scores from the 100‑point grading system into the ECTS letter grade format.  
Created as part of the **Advanced Backend with Node.js** course.

---

## 📦 Installation

```bash
npm install ects-fotinia-sadovskaya
```

---

## 🚀 Usage

```js
const ECTS = require("ects-fotinia-sadovskaya");

const grade1 = new ECTS(91);
console.log(grade1.ectsFromScore()); // A

const grade2 = new ECTS(70);
console.log(grade2.ectsFromScore()); // D
```

---

## 📘 API Reference

### **class ECTS**

#### **constructor(score: number)**

Creates a new instance with a score in the 0–100 range.

#### **ectsFromScore(): string**

Returns the corresponding ECTS grade:

- `"A"`
- `"B"`
- `"C"`
- `"D"`
- `"E"`
- `"F"`

---

## 📊 Conversion Table

| Score Range | ECTS Grade |
|-------------|------------|
| 90–100      | A          |
| 82–89       | B          |
| 74–81       | C          |
| 65–73       | D          |
| 60–64       | E          |
| 0–59        | F          |

---

## 🧪 Example Output (from automated tests)

```text
Score: 91, ECTS Grade: A
Score: 80, ECTS Grade: C
Score: 70, ECTS Grade: D
Score: 60, ECTS Grade: E
Score: 45, ECTS Grade: F
Score: 30, ECTS Grade: F
```

---

## 📁 Project Structure

```text
ects-fotinia-sadovskaya/
│
├── index.js        # Main module file
├── package.json    # Package metadata
└── README.md       # Documentation
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👩‍💻 Author

**Fotinia Sadovskaya**  
NPM: `https://www.npmjs.com/~your_username` [(npmjs.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fwww.npmjs.com%2F~your_username")  
GitHub: `https://github.com/fotinia-sadovskaya` [(github.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fgithub.com%2Ffotinia-sadovskaya")

---
