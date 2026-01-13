
# ECTS Grade Converter

**Повністю зібраний, єдиний, ультра‑стильний, кіберпанковий README.md**, який включає:

- 🔥 **Animated ASCII banner (frame‑by‑frame illusion)**  
- 🌌 **Neon cyberpunk стиль**  
- 🛡 **GitHub Shields Pack** (stars, forks, issues, PRs)  
- 🧬 **Tech Stack neon badges**  
- 🛰 **Next.js, NestJS, Vue, React, Express examples**  
- 🧪 **Jest tests**  
- 🛠 **CI workflow badge**  
- 📝 **Changelog**  
- 🧭 **Roadmap**  
- 💜 **Sponsors section**  
- 📊 **Conversion table**  
- 🤝 **Contributing**  

---

```markdown
<div align="center">

<!-- ANIMATED ASCII BANNER (illusion using gradients + layered frames) -->

<pre>
<span style="color:#ff00ff">██╗   ██╗███████╗ ██████╗████████╗███████╗</span>
<span style="color:#ff33cc">██║   ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝</span>
<span style="color:#ff66aa">██║   ██║█████╗  ██║        ██║   █████╗  </span>
<span style="color:#ff3399">╚██╗ ██╔╝██╔══╝  ██║        ██║   ██╔══╝  </span>
<span style="color:#ff0088"> ╚████╔╝ ███████╗╚██████╗   ██║   ███████╗</span>
<span style="color:#cc0077">  ╚═══╝  ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝</span>
</pre>

<h2 style="color:#00eaff">ECTS Grade Converter for Node.js</h2>
<p style="color:#888">Convert 100‑point scores into ECTS grades with neon‑cyberpunk energy.</p>

<!-- BADGES PACK -->
<p>
<a href="https://www.npmjs.com/package/ects-fotinia-sadovskaya">
<img src="https://img.shields.io/npm/v/ects-fotinia-sadovskaya?style=for-the-badge&color=ff00ff" />
</a>
<a href="https://www.npmjs.com/package/ects-fotinia-sadovskaya">
<img src="https://img.shields.io/npm/dm/ects-fotinia-sadovskaya?style=for-the-badge&color=00eaff" />
</a>
<img src="https://img.shields.io/npm/l/ects-fotinia-sadovskaya?style=for-the-badge&color=purple" />

<!-- GitHub Shields Pack -->
<img src="https://img.shields.io/github/stars/fotinia-sadovskaya/ects-fotinia-sadovskaya?style=for-the-badge&color=yellow" />
<img src="https://img.shields.io/github/forks/fotinia-sadovskaya/ects-fotinia-sadovskaya?style=for-the-badge&color=orange" />
<img src="https://img.shields.io/github/issues/fotinia-sadovskaya/ects-fotinia-sadovskaya?style=for-the-badge&color=red" />
<img src="https://img.shields.io/github/issues-pr/fotinia-sadovskaya/ects-fotinia-sadovskaya?style=for-the-badge&color=00ff9d" />

<!-- CI Badge -->
<img src="https://img.shields.io/github/actions/workflow/status/fotinia-sadovskaya/ects-fotinia-sadovskaya/node.js.yml?style=for-the-badge&color=00ffcc" />
</p>

</div>

---

## 🌌 Overview

`ects-fotinia-sadovskaya` is a lightweight, cyberpunk‑styled npm package that converts numeric scores (0–100) into ECTS letter grades (`A`–`F`).  
Perfect for academic dashboards, backend services, or futuristic grading systems.

---

## 🧬 Tech Stack (Neon Badges)

<p>
<img src="https://img.shields.io/badge/Node.js-00ff88?style=for-the-badge&logo=node.js&logoColor=black" />
<img src="https://img.shields.io/badge/JavaScript-ffdd00?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-00aaff?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/NPM-ff0033?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/CI/CD-ff00ff?style=for-the-badge&logo=githubactions&logoColor=white" />
</p>

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
