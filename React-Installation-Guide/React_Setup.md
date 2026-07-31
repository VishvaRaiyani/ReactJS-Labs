# Practical: Setting up ReactJS Development Environment

---

## 1. Theory

### What is ReactJS?
**ReactJS** (often called React) is a popular, open-source JavaScript library developed by Facebook (now Meta) in 2013. It is designed specifically for building user interfaces (UIs), particularly for **Single Page Applications (SPAs)**. Instead of refreshing the entire browser window when a user interacts with the page, React dynamically updates only the parts of the page that have changed.

### Features of ReactJS
1.  **Component-Based Architecture:** The user interface is broken down into small, independent, and reusable building blocks called **Components** (e.g., a navbar, a login form, or a button). Each component manages its own state and layout.
2.  **Virtual DOM (Document Object Model):** The real browser DOM is slow to update. React creates a lightweight copy of the DOM in the memory, known as the *Virtual DOM*. When data changes, React updates the Virtual DOM first, compares it with the previous version (a process called *Diffing*), and then updates *only* the specific changes in the real browser DOM (a process called *Reconciliation*). This makes React apps highly performant.
3.  **JSX (JavaScript XML):** JSX is a syntax extension for JavaScript. It allows us to write HTML-like elements directly inside JavaScript code. It is easier to read, write, and debug compared to writing vanilla JavaScript DOM APIs.
4.  **Unidirectional Data Flow:** Data in React always flows in one direction: from parent components to child components via properties called `props`. This make debugging and state tracing predictable.
5.  **Declarative UI:** Developers describe *what* the UI should look like for a given state, rather than instructing the browser step-by-step *how* to change it. React handles the updates under the hood.

### Advantages of ReactJS
*   **Reusability:** Code written once can be used multiple times throughout the project, decreasing development time and styling mismatches.
*   **High Performance:** Thanks to Virtual DOM rendering optimizations.
*   **Large Community & Ecosystem:** Thousands of third-party libraries (for routing, charts, state management) and comprehensive documentation are available.
*   **SEO Friendliness:** Unlike older client-side frameworks, React can be rendered on the server side using frameworks like Next.js, allowing search engines to index pages effectively.
*   **Easy to Learn:** If you already know HTML, CSS, and basic JavaScript, React is highly approachable.

### Prerequisites
Before learning React, a student should have basic knowledge of:
1.  **HTML5 & CSS3:** Structure, tags, forms, selectors, layout properties, and responsiveness.
2.  **Modern JavaScript (ES6+):**
    *   Variables (`let` and `const`).
    *   Arrow Functions (`const myFunc = () => {}`).
    *   Template Literals (strings enclosed in backticks `` ` `` supporting expression interpolation with `${}`).
    *   Destructuring (unpacking values from arrays/objects).
    *   Modules (`import` and `export` statements).
    *   Array Methods (`.map()`, `.filter()`, `.forEach()`).

### What is Node.js?
JavaScript was originally created to run only inside web browsers (using engines like Chrome's V8 engine). **Node.js** is an open-source, cross-platform runtime environment built on Chrome's V8 engine that allows developers to run JavaScript code outside the browser, directly on their operating systems. 
*Note:* We do not write backend Node.js code for standard React frontend apps, but we require Node.js because the build tools, compiler libraries, and local development servers run on top of Node.js.

### What is npm?
**npm** stands for **Node Package Manager**. It is the default package manager that is automatically installed when you download Node.js. 
*   **Software Registry:** It hosts millions of open-source JavaScript libraries.
*   **Command Line Interface (CLI):** It lets developers install, update, and manage project dependencies (such as React, React DOM, Vite) via the terminal.

### What is Vite?
**Vite** (pronounced `/veet/`, which means "fast" in French) is a next-generation frontend build tool and dev server created by Evan You (creator of Vue.js). It is extremely lightweight and fast. It compiles JSX and assets, runs a local development server, and packages the code for final deployment.

### Why Vite is preferred over Create React App?
For a long time, **Create React App (CRA)** was the official tool to set up React projects. However, CRA is now officially deprecated and has been replaced by modern tools like Vite due to the following differences:

| Feature Comparison | Create React App (CRA) | Vite |
| :--- | :--- | :--- |
| **Core Bundler** | Webpack | Esbuild (Development) & Rollup (Production) |
| **Server Startup** | Slow. It bundles the entire project code before launching the server. | Instant. It utilizes browser-native ES Modules (ESM) to compile code on-demand. |
| **Hot Module Replacement (HMR)** | Slows down as the project codebase grows. | Instantaneous updates regardless of project size. |
| **Project Status** | Deprecated. No longer actively maintained by the React core team. | Actively maintained, industry standard for React development. |
| **Configuration** | Complex. You have to "eject" the project to customize Webpack settings. | Simple. Everything is cleanly configured in a single `vite.config.js` file. |

---

## 2. Installation Steps

### Step 1: Install Node.js
1.  Open your web browser and go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/).
2.  Download the **LTS (Long Term Support)** version installer for your OS (e.g., Windows Installer `.msi`).
3.  Double-click the downloaded installer and follow the setup wizard:
    *   Accept the License Agreement.
    *   Choose the default installation path (`C:\Program Files\nodejs\`).
    *   Ensure the checkbox for **"Add to PATH"** is selected.
    *   Click **Next** and then **Install**.
4.  Once installed, click **Finish**.

### Step 2: Verify Node and npm Versions
To confirm that Node.js and npm have been correctly installed and added to the environment variables, open your terminal (Command Prompt or PowerShell) and run:

```bash
# Check Node.js version
node -v

# Check npm version
npm -v
```

**Expected Output:**
```text
v20.12.0   (or a newer version number)
10.5.0     (or a newer version number)
```

---

### Step 3: Create a React Project using Vite
Navigate to the directory where you want to create your project folder (e.g., your lab workspace). In your terminal, run the following command to create a new React application named `react-first-app`:

```bash
npm create vite@latest react-first-app -- --template react
```

> [!NOTE]
> The `-- --template react` argument instructs Vite to set up a React project using plain JavaScript (without TypeScript) automatically.

---

### Step 4: Navigate to the Project Folder
Use the Change Directory (`cd`) command to enter your newly created project folder:

```bash
cd react-first-app
```

---

### Step 5: Install Dependencies
A newly created project template does not contain the downloaded React source files (to keep the download lightweight). To download all dependencies listed in `package.json` into your local machine, run:

```bash
npm install
```

This will create a folder named `node_modules` in your project folder, containing the packages needed to run React.

---

### Step 6: Start the Development Server
To launch your local development server and run the application, execute:

```bash
npm run dev
```

---

### Step 7: Open the Application in the Browser
Upon running the previous command, Vite will spin up the server in a fraction of a second. You will see output similar to this in your terminal:

```text
  VITE v6.0.7  ready in 254 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

1.  Open your web browser.
2.  Type `http://localhost:5173/` in the address bar and press Enter.
3.  You should see the default Vite + React landing page showing icons and a functional click counter.

---

## 3. Folder Structure Explanation

Once you open the project folder in VS Code, you will see the following layout:

```text
react-first-app/
├── node_modules/         # Contains all downloaded packages and dependency code
├── public/               # Static assets served directly to the browser (e.g., favicon)
│   └── vite.svg          # Vite logo vector icon
├── src/                  # Main directory for all React source codes
│   ├── assets/           # Inner folder for images, icons, or global assets
│   │   └── react.svg     # React logo vector icon
│   ├── App.css           # Styling rules specific to the App component
│   ├── App.jsx           # Root React component file (JSX code)
│   ├── index.css         # Global styling rules applied to the entire project
│   └── main.jsx          # Entry point file that compiles and mounts the app
├── .gitignore            # Tells Git which files/directories to ignore (like node_modules)
├── index.html            # Main HTML document served to users
├── package-lock.json     # Automatically generated file locking exact versions of installed packages
├── package.json          # Project configurations, dependency list, and script command mappings
└── vite.config.js        # Main configuration settings file for Vite compiler
```

### Key Folders:
*   `node_modules/`: This folder contains physical files for all libraries downloaded by npm. It is very large and should never be uploaded to GitHub or shared directly.
*   `public/`: Files placed in this folder are served as-is at the root URL. Useful for icons, logos, or `manifest.json`.
*   `src/`: This is where developers write their source code. Almost all of your React components, CSS files, and custom logic will be created inside this folder.

---

## 4. Important Files Explanation

### 1. `package.json`
Located in the root directory, this is the configuration file for the Node.js project. It keeps track of project properties:
*   `name` & `version`: Metadata of the application.
*   `scripts`: Key-value shortcuts to run terminal commands (e.g., `"dev": "vite"` allows you to run `npm run dev` to launch the dev server).
*   `dependencies`: Lists the main runtime libraries required by your code (e.g., `react` and `react-dom` version 19).
*   `devDependencies`: Libraries needed only during development (e.g., `vite`, `@vitejs/plugin-react` plugin for parsing JSX).

---

### 2. `vite.config.js`
This is the configuration file for Vite. It defines plugins and settings for compilation.
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```
*   `@vitejs/plugin-react` enables Vite to understand React syntax, perform fast Hot Module Replacement, and compile JSX to standard JavaScript.

---

### 3. `index.html`
Unlike multi-page applications, React operates as a Single Page Application (SPA). The server loads a single HTML file:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <!-- The React application will inject its UI inside this div -->
    <div id="root"></div>
    
    <!-- Link to the main entry JavaScript script -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
*   The `<div id="root"></div>` acts as a placeholder where React renders dynamic components.
*   The `<script type="module" src="/src/main.jsx"></script>` loads the React entry script.

---

### 4. `src/main.jsx`
This is the entry script file. It bridges our React code with the raw HTML document:
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Locate the div with ID 'root' in index.html
// 2. Initialize a React root container
// 3. Render the root <App /> component inside the container
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
*   `createRoot` is a method in React 19 used to define the root node of our virtual application DOM.
*   `<StrictMode>` is a helper component that helps developers find potential problems in code during development (it does not render any visual UI).

---

### 5. `src/App.jsx`
This is the main root component file. By default, it contains a counter state template. In modern React, a component is simply a JavaScript function that returns JSX (HTML-like syntax). We can wipe out the default code and write our custom UI elements here.

---

## 5. Command Explanation

*   **`npm create vite@latest`**: 
    The `create` command executes a package initializer tool without having to install it permanently on your system. It triggers the `create-vite` package to prompt details (like project name and framework template choice) and sets up folders instantly.
*   **`npm install`**:
    Scans the `package.json` file in the current directory, connects to the online npm package registry, downloads all required library archives, and extracts them into a local folder named `node_modules`.
*   **`npm run dev`**:
    Looks for the script named `"dev"` under the `"scripts"` object in `package.json`. In our case, this launches the `vite` command. It initializes the bundler server, watches local files for changes, and runs the application locally on a free port (e.g., `5173`).

---

## 6. Simple React Component Code

Let us write a simple React 19 functional component. 
Open `src/App.jsx` in your code editor, delete all the pre-written code, and write the following code:

```javascript
import React, { useState } from 'react';
import './App.css'; // Importing specific styling stylesheet

function App() {
  // Define a React state variable named 'count' initialized to 0
  // 'setCount' is the setter function used to modify the 'count' variable
  const [count, setCount] = useState(0);

  // Event handler function called when the button is clicked
  const handleButtonClick = () => {
    const nextCount = count + 1;
    setCount(nextCount); // Update the state (this triggers React to re-render the UI)
  };

  return (
    <div style={containerStyle}>
      {/* 1. Heading element */}
      <h1 style={headingStyle}>React 19 Lab Practical</h1>
      
      {/* 2. Paragraph element */}
      <p style={paragraphStyle}>
        This is a simple React functional component created using the Vite build tool. 
        It demonstrates component structure, styling, and event handling using React state hooks.
      </p>
      
      {/* 3. Button element with click handler */}
      <button onClick={handleButtonClick} style={buttonStyle}>
        Click Counter: {count}
      </button>
    </div>
  );
}

// Inline styling objects (Javascript Syntax)
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  fontFamily: '"Outfit", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f9f9fb',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  maxWidth: '600px',
  margin: '50px auto'
};

const headingStyle = {
  color: '#2c3e50',
  fontSize: '2.2rem',
  marginBottom: '15px',
  fontWeight: '700'
};

const paragraphStyle = {
  color: '#5a6c7d',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  marginBottom: '25px',
  maxWidth: '500px'
};

const buttonStyle = {
  padding: '12px 28px',
  fontSize: '1rem',
  fontWeight: '600',
  backgroundColor: '#61dafb',
  color: '#1a1a24',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  boxShadow: '0 4px 6px rgba(97, 218, 251, 0.2)'
};

export default App;
```

---

## 7. Expected Output

1.  **Terminal Output:**
    Upon running `npm run dev`, you should see the confirmation log showing the local URL:
    ```text
      VITE v6.0.7  ready in 250 ms
      ➜  Local:   http://localhost:5173/
    ```

2.  **Browser Interface:**
    When navigating to the local address in a browser, a clean, styled container card should render containing:
    *   **Heading:** "React 19 Lab Practical" (Dark grey bold text)
    *   **Paragraph:** A small text description explaining components, styles, and hooks.
    *   **Button:** An active button displaying "Click Counter: 0".

3.  **Interactive Behavior:**
    Each time the button is clicked:
    *   The count number inside the button increments by 1 instantly (e.g. `Click Counter: 1`, `Click Counter: 2`).
    *   No browser reload occurs. This demonstrates the efficiency of the **Virtual DOM**.

---

## 8. Result
The ReactJS development environment was successfully set up using Node.js, npm, and Vite. A new React 19 project was created, its directory structure was examined, and a simple custom interactive component containing a heading, paragraph, and stateful button was built and executed.

---

## 9. Common Errors and Solutions

### Error 1: `'node'` or `'npm'` is not recognized as an internal or external command
*   **Reason:** The system terminal cannot locate the Node.js compiler files because the installation path was not loaded into the system environment variable (`PATH`).
*   **Solution:**
    1.  Close and re-open the Command Prompt/VS Code terminal (sometimes changes require a terminal restart).
    2.  If it persists, reinstall Node.js and make sure the **"Add to PATH"** checkbox is ticked.
    3.  Alternatively, manually edit system environment variables and add `C:\Program Files\nodejs\` to the `Path` variable.

### Error 2: `Cannot find module ...` or `Missing node_modules`
*   **Reason:** The dependencies are not downloaded locally.
*   **Solution:** Ensure you are in the project folder containing `package.json` (use `cd react-first-app`) and run `npm install` again.

### Error 3: Port `5173` is already in use
*   **Reason:** Another React development server or program is already running on port 5173 in the background.
*   **Solution:** 
    *   Vite will automatically detect this and switch to another port (e.g., `5174`). You can simply open the new port.
    *   To stop the previous server, press `Ctrl + C` in the respective terminal window.

### Error 4: Script execution policy error in Windows PowerShell
*   **Reason:** Windows restricts running downloaded scripts (like `vite` commands) inside PowerShell for security reasons.
*   **Solution:** Open PowerShell as **Administrator** and run the following command to allow signed scripts:
    ```powershell
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```
    Select `Y` (Yes) when prompted and restart your terminal.

---

## 10. Conclusion
In this practical, we set up the developer tools required for building React applications. We replaced the outdated *Create React App* boilerplate setup with **Vite**, noting its superior development startup times due to native ES module usage. We explored files like `package.json`, `index.html`, and `main.jsx` to understand the data-flow of a Single Page Application, and wrote custom JSX code in `App.jsx` implementing interactive event state handling in React 19.
