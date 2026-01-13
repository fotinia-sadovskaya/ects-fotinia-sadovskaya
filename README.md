# ects-fotinia-sadovskaya

NPM package that converts scores from 100-point grading system to ECTS grades.

---

[![npm version](https://img.shields.io/npm/v/ects-fotinia-sadovskaya.svg)](https://www.npmjs.com/package/ects-fotinia-sadovskaya)
[![npm downloads](https://img.shields.io/npm/dm/ects-fotinia-sadovskaya.svg)](https://www.npmjs.com/package/ects-fotinia-sadovskaya)
[![license](https://img.shields.io/npm/l/ects-fotinia-sadovskaya.svg)](./LICENSE)

```markdown

---

## 🌌 Overview

`ects-fotinia-sadovskaya` is a lightweight and easy‑to‑use npm package that converts scores from the 100‑point grading system into the ECTS letter grade format.  
Created as part of the **Advanced Backend with Node.js** course.


---

## 📦 Installation

```bash
npm install ects-fotinia-sadovskaya
```

---

## 🚀 Usage (JavaScript)

```js
const ECTS = require("ects-fotinia-sadovskaya");

const grade = new ECTS(91);
console.log(grade.ectsFromScore()); // A
```

---

## 🔷 Usage (TypeScript)

```ts
import ECTS from "ects-fotinia-sadovskaya";

const score: number = 75;
const ects: string = new ECTS(score).ectsFromScore();

console.log(ects); // C
```

---

## ⚛️ React Example

```jsx
import React, { useState } from "react";
import ECTS from "ects-fotinia-sadovskaya";

export default function GradeChecker() {
  const [score, setScore] = useState(0);
  const [grade, setGrade] = useState("");

  return (
    <div>
      <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
      <button onClick={() => setGrade(new ECTS(Number(score)).ectsFromScore())}>
        Check Grade
      </button>
      <p>ECTS Grade: {grade}</p>
    </div>
  );
}
```

---

## 🚀 Express Example

```js
const express = require("express");
const ECTS = require("ects-fotinia-sadovskaya");

const app = express();

app.get("/grade/:score", (req, res) => {
  const ects = new ECTS(Number(req.params.score)).ectsFromScore();
  res.json({ score: req.params.score, ects });
});

app.listen(3000);
```

---

## 🛰 Next.js Example

```ts
// pages/api/grade.ts
import ECTS from "ects-fotinia-sadovskaya";

export default function handler(req, res) {
  const score = Number(req.query.score || 0);
  res.json({ score, ects: new ECTS(score).ectsFromScore() });
}
```

---

## 🧩 Vue Example

```vue
<script setup>
import { ref } from "vue";
import ECTS from "ects-fotinia-sadovskaya";

const score = ref(0);
const grade = ref("");

function check() {
  grade.value = new ECTS(Number(score.value)).ectsFromScore();
}
</script>
```

---

## 🧪 Jest Test Example

```js
const ECTS = require("ects-fotinia-sadovskaya");

test("ECTS conversion", () => {
  expect(new ECTS(95).ectsFromScore()).toBe("A");
  expect(new ECTS(83).ectsFromScore()).toBe("B");
});
```

---

## 📊 Conversion Table

| Score Range | ECTS |
|-------------|------|
| 90–100      | A    |
| 82–89       | B    |
| 74–81       | C    |
| 65–73       | D    |
| 60–64       | E    |
| 0–59        | F    |

---

## 🧭 Roadmap

- [ ] Add GPA conversion  
- [ ] Add validation warnings  
- [ ] Add CLI tool (`ects 91`)  
- [ ] Add web UI demo  
- [ ] Add ESM‑only version  
- [ ] Add score normalization utilities  

---

## 💜 Sponsors

If you enjoy this package and want to support future neon‑powered tools:

- ☕ Buy me a coffee  
- ⭐ Star the repository  
- 🩵 Share it with your team  

---

## 🤝 Contributing

1. Fork the repo  
2. Create a branch  
3. Commit your changes  
4. Open a Pull Request  

---

## 📝 Changelog

### **1.1.0 — Cyberpunk Edition**

- Added neon README  
- Added CI badge  
- Added React, Vue, Express, Next.js examples  
- Added Tech Stack badges  
- Added Roadmap & Sponsors  

### **1.0.0 — Initial Release**

- Implemented ECTS class  
- Published to npm  

---

## 📄 License

MIT License.

---

## 👩‍💻 Author

**Fotinia Sadovskaya**  
GitHub: `https://github.com/fotinia-sadovskaya` [(github.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fgithub.com%2Ffotinia-sadovskaya")  
NPM: `https://www.npmjs.com/package/ects-fotinia-sadovskaya` [(npmjs.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fects-fotinia-sadovskaya")

---
