# ReactJS Guide 🚀

[![React Version](https://img.shields.io/badge/react-v18.x-blue.svg)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/vite-v5.x-purple.svg)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **A Comprehensive, Production-Quality Developer's Guide to ReactJS: From Beginner to Advanced.**

---

![ReactJS Guide Banner](https://raw.githubusercontent.com/VishvaRaiyani/ReactJS-Labs/main/assets/images/banner-placeholder.png)
*(Placeholder: To be updated with the official repository banner asset)*

---

## 📌 Repository Description

Welcome to the **ReactJS Guide** repository! This project serves as an official-grade, comprehensive handbook designed to take developers on a structured journey from React novices to seasoned architects. Whether you are building your first component or optimizing complex global state rendering cycles, this guide provides in-depth theory, interactive code examples, best practices, and interview-readiness materials.

Built entirely using **React 18**, **Vite**, and **Modern JavaScript (ES6+)**, this repository avoids legacy class-based paradigms (except for historical context) and focuses heavily on modern functional components, hooks, semantic structure, and performance optimization.

---

## ✨ Features

- 📖 **15 Detailed Chapters:** From DOM basics to advanced performance design patterns.
- 🛠️ **Vite-Powered Examples:** Fast, hot-reloading real-world applications.
- 🎓 **Interactive Exercises:** Hands-on projects at the end of each documentation file.
- 💡 **Best Practices & Tips:** Curated senior-engineer advice for writing clean, DRY, and SOLID code.
- ❓ **Interview Q&A:** Core technical questions aligned with industry-standard hiring processes.
- ⚡ **Ultimate Cheatsheet:** Rapid-reference code snippets for day-to-day development.

---

## 🗺️ Learning Path & Topics Covered

The documentation is structured sequentially to guide your learning experience:

| Topic | Description | Link |
| :--- | :--- | :--- |
| **01. Introduction to React** | Core concepts, SPAs, Virtual DOM vs. Real DOM, and ecosystem. | [01-introduction.md](./docs/01-introduction.md) |
| **02. Environment Setup** | Installing Node.js, VS Code, Git, initializing projects with Vite, config details. | [02-setup.md](./docs/02-setup.md) |
| **03. Deep Dive into JSX** | Syntax rules, expressions, rendering variables/arrays, conditions, fragments. | [03-jsx.md](./docs/03-jsx.md) |
| **04. Component Architecture** | Functional vs. Class components, composition, smart/presentational split. | [04-components.md](./docs/04-components.md) |
| **05. Props Management** | Passing data, default props, destructuring, function/object props, prop drilling. | [05-props.md](./docs/05-props.md) |
| **06. State Management** | `useState`, updating arrays/objects, derived state, lifting state up, controlled inputs. | [06-state.md](./docs/06-state.md) |
| **07. React Hooks in Depth** | `useEffect`, `useRef`, `useMemo`, `useCallback`, `useContext`, and Custom Hooks. | [07-hooks.md](./docs/07-hooks.md) |
| **08. Client-Side Routing** | React Router v6, dynamic routes, layout routes, nesting, protected routes, lazy loading. | [08-routing.md](./docs/08-routing.md) |
| **09. API Integration** | Fetch API, Axios, CRUD operations, loading/error states, env vars, async/await. | [09-api-integration.md](./docs/09-api-integration.md) |
| **10. Context API** | Creating and consuming context, global state, Authentication & Theme examples. | [10-context-api.md](./docs/10-context-api.md) |
| **11. Performance Optimization** | `React.memo`, code splitting, `Suspense`, dynamic imports, avoiding re-renders. | [11-performance.md](./docs/11-performance.md) |
| **12. Deployment Strategies** | Building for production, environment configurations, and static host deployments. | [12-deployment.md](./docs/12-deployment.md) |
| **13. Best Practices & Architecture** | Clean Code rules, naming conventions, DRY, SOLID principles, and folder structures. | [13-best-practices.md](./docs/13-best-practices.md) |
| **14. Interview Questions** | Junior, Mid-Level, and Senior technical questions with detailed answers. | [14-interview-questions.md](./docs/14-interview-questions.md) |
| **15. Reference Cheatsheet** | Rapid code patterns, event signatures, VS Code extensions, and shortcuts. | [15-cheatsheet.md](./docs/15-cheatsheet.md) |

---

## 📂 Folder Structure

```text
ReactJS-Guide/
├── README.md                 # Project Overview & Landing Page
├── docs/                     # Comprehensive Documentation (Chapters 1-15)
│   ├── 01-introduction.md
│   ├── 02-setup.md
│   ├── 03-jsx.md
│   ├── 04-components.md
│   ├── 05-props.md
│   ├── 06-state.md
│   ├── 07-hooks.md
│   ├── 08-routing.md
│   ├── 09-api-integration.md
│   ├── 10-context-api.md
│   ├── 11-performance.md
│   ├── 12-deployment.md
│   ├── 13-best-practices.md
│   ├── 14-interview-questions.md
│   └── 15-cheatsheet.md
├── examples/                 # Vite + React Projects
│   ├── counter/              # Fundamental state and event handler example
│   ├── todo/                 # State lifting, local storage, lists & keys example
│   ├── weather-app/          # Fetch API/Axios, search input, status states
│   └── currency-converter/   # Calculation mechanics, custom inputs, API states
└── assets/
    └── images/               # Documentation images and screenshots
```

---

## 🚀 Getting Started

To run any of the example projects locally, follow these steps.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended, v18.x or above).

### 1. Clone the Repository
```bash
git clone https://github.com/VishvaRaiyani/ReactJS-Labs.git
cd ReactJS-Labs/ReactJS-Guide
```

### 2. Install Dependencies
Navigate to any project directory within `examples/` (for example, `counter/`) and install the npm packages:
```bash
cd examples/counter
npm install
```

### 3. Run the Project locally
Launch the Vite local development server:
```bash
npm run dev
```
Open your browser and navigate to the address shown in your terminal (typically `http://localhost:5173`).

### 4. Building the Project
To bundle the application into optimized static assets for production:
```bash
npm run build
```

### 5. Preview the Build
To locally test and preview the production build files generated in the step above:
```bash
npm run preview
```

---

## 🤝 Contribution Guide

Contributions are welcome! If you find any typos, bugs, or wish to expand upon the chapters:
1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m "docs: improve hooks documentation"`.
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.

Please ensure your code formatting aligns with the project rules: functional components, clean code, and standard ESLint configurations.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
