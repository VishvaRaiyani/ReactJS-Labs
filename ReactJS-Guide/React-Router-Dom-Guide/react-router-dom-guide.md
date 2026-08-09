# React Router DOM — Complete Beginner's Guide
### React 19 + Vite + React Router DOM v7 | JavaScript Only

---

## Table of Contents

- [Chapter 1: What is Routing?](#chapter-1-what-is-routing)
- [Chapter 2: Setting Up](#chapter-2-setting-up)
- [Chapter 3: Your First Route](#chapter-3-your-first-route)
- [Chapter 4: Creating Pages](#chapter-4-creating-pages)
- [Chapter 5: Navigation](#chapter-5-navigation)
- [Chapter 6: Dynamic Routes](#chapter-6-dynamic-routes)
- [Chapter 7: useNavigate()](#chapter-7-usenavigate)
- [Chapter 8: Nested Routes](#chapter-8-nested-routes)
- [Chapter 9: 404 Page](#chapter-9-404-page)
- [Chapter 10: Folder Structure](#chapter-10-folder-structure)
- [Chapter 11: Mini Project — Student Portal](#chapter-11-mini-project--student-portal)
- [Chapter 12: Common Beginner Mistakes](#chapter-12-common-beginner-mistakes)
- [Chapter 13: Cheatsheet](#chapter-14-cheatsheet)

---

## Chapter 1: What is Routing?

---

### 1.1 Let's Start With a Real-Life Example

Imagine you walk into a large university building. There are many rooms inside — the library, the lab, the cafeteria, the principal's office.

To reach any room, you look at the **room number** or **sign** on the door. You follow that number and you arrive at the right place.

**Websites work the same way.**

Every page on a website has an **address**. That address is called a **URL** (Uniform Resource Locator). When you type a URL or click a link, the browser reads that address and shows you the correct page.

**This process of reading the URL and deciding what to show is called ROUTING.**

---

### 1.2 What Exactly Is a URL?

Let's look at a URL carefully:

```
https://www.myschool.com/students/profile
```

Break it down:

```
https://         → The protocol (how data travels)
www.myschool.com → The domain (the website's name/address)
/students/       → First path segment (the "students" section)
/profile         → Second path segment (the "profile" page)
```

The part after the domain name — like `/students/profile` — is called the **path**. Routing is all about reading this path and deciding which page to show.

---

### 1.3 Why Do Websites Need Routing?

Think about Amazon. It has thousands of pages:

- `amazon.com/` — the homepage
- `amazon.com/deals` — today's deals
- `amazon.com/cart` — your shopping cart
- `amazon.com/product/12345` — a specific product

Each URL is different. Each one shows different content. Without routing, every URL would show the same thing — which would be useless.

**Routing is what makes a website feel like it has many different pages.**

---

### 1.4 Real-Life Examples of Routing

| Website | URL | What it shows |
|---------|-----|--------------|
| YouTube | `youtube.com/` | Home feed |
| YouTube | `youtube.com/watch?v=abc` | A specific video |
| GitHub | `github.com/username` | A user's profile |
| GitHub | `github.com/username/project` | A specific project |
| Twitter/X | `x.com/home` | Timeline |
| Twitter/X | `x.com/username` | A user's profile |

Every one of these uses routing to decide what to display.

---

### 1.5 Two Types of Websites: MPA vs SPA

Before we talk about React Router, you need to understand two different ways websites work.

#### MPA — Multi-Page Application

This is the **traditional** way websites work.

- Every time you click a link, the browser sends a request to the server.
- The server sends back a **completely new HTML page**.
- The browser **reloads** — the screen goes blank for a moment and everything redraws.

```
┌─────────────────────────────────────────────────────────┐
│                  Multi-Page Application                 │
│                                                         │
│  User clicks "About"                                    │
│          ↓                                              │
│  Browser sends request to server                        │
│          ↓                                              │
│  Server sends new HTML file                             │
│          ↓                                              │
│  Browser reloads entire page  ← (you see the flash)     │
│          ↓                                              │
│  About page appears                                     │
└─────────────────────────────────────────────────────────┘
```

**Examples:** Traditional PHP websites, WordPress blogs, old HTML websites.

**Problem:** Every page change causes a full reload. This feels slow and clunky on modern web apps.

---

#### SPA — Single Page Application

This is the **modern** way React apps work.

- The browser loads **ONE HTML file** at the very beginning.
- After that, JavaScript takes over.
- When you "navigate" to a different page, JavaScript just **swaps the content** on the screen — no reload.
- The URL in the browser bar changes, but the page never fully reloads.

```
┌─────────────────────────────────────────────────────────┐
│                 Single Page Application                 │
│                                                         │
│  Browser loads ONE HTML file at the start               │
│          ↓                                              │
│  User clicks "About"                                    │
│          ↓                                              │
│  JavaScript reads the URL                               │
│          ↓                                              │
│  JavaScript swaps content on screen  ← (instant!)       │
│          ↓                                              │
│  About content appears — NO page reload                 │
└─────────────────────────────────────────────────────────┘
```

**Examples:** Gmail, Google Maps, Twitter, Facebook, React apps.

**Benefit:** Fast, smooth, feels like a mobile app.

---

#### Side by Side Comparison

```
┌──────────────────────┬──────────────────────┐
│   MPA                │   SPA                │
├──────────────────────┼──────────────────────┤
│ Multiple HTML files  │ One HTML file        │
│ Full reload always   │ No reload            │
│ Server does routing  │ JS does routing      │
│ Slower transitions   │ Instant transitions  │
│ Simple to understand │ Needs a router       │
└──────────────────────┴──────────────────────┘
```

---

### 1.6 The Problem React Has Without a Router

React builds SPAs — but React itself does NOT know anything about URLs.

If you build a React app without any router, something weird happens:

- No matter what URL you type, the same content always shows.
- `myapp.com/about` shows the same thing as `myapp.com/`.
- The Back and Forward browser buttons don't work.
- You can't share a link to a specific page.

React needs a **router library** to connect URLs to components.

---

### 1.7 Enter React Router DOM

**React Router DOM** is a library that adds routing to React apps.

It does three important things:

1. **Watches the URL** — It listens for URL changes in the browser.
2. **Matches the URL** — It finds which component matches the current URL.
3. **Renders the component** — It shows that component on screen.

```
URL changes in browser
        ↓
React Router reads the URL
        ↓
React Router finds the matching component
        ↓
React renders that component
        ↓
User sees the correct page
```

> **In simple words:** React Router is the "traffic controller" of your React app. It reads the URL and sends users to the right page.

---

### 1.8 Why React Router DOM (not just React Router)?

You might see two packages mentioned online:

- `react-router` — the core routing logic
- `react-router-dom` — the version for web browsers

When building a website (which is what we're doing), you always install and use **`react-router-dom`**. It includes everything from `react-router` plus browser-specific tools.

> **Note:** In version 7 (the latest), `react-router` and `react-router-dom` are nearly identical. But convention says: for web apps, use `react-router-dom`.

---

---

## Chapter 2: Setting Up

---

### 2.1 What You Need Before Starting

Before we write any code, make sure you have these installed on your computer:

**Node.js** — This is a JavaScript runtime. It lets you run JavaScript on your computer (outside the browser). It also comes with `npm` (Node Package Manager), which we use to install libraries.

Check if Node.js is installed by opening your terminal and typing:

```bash
node --version
```

You should see something like `v20.11.0` or higher. If you don't, download Node.js from [nodejs.org](https://nodejs.org).

---

### 2.2 What is Vite?

**Vite** (pronounced "veet", French for "fast") is a build tool for modern web apps.

Think of it like this: when you write React code, browsers can't directly understand JSX (the HTML-like syntax in React). Vite takes your code, transforms it into plain JavaScript the browser understands, and runs a local development server so you can test your app.

Vite is the modern replacement for the older `create-react-app` tool. It's much faster.

---

### 2.3 Creating a New React Project with Vite

Open your terminal (Command Prompt, PowerShell, or the terminal in VS Code) and run this command:

```bash
npm create vite@latest my-router-app -- --template react
```

Let's break down every part of this command:

| Part | Meaning |
|------|---------|
| `npm` | Node Package Manager — the tool that installs packages |
| `create` | A built-in npm command to generate new projects |
| `vite@latest` | Use the latest version of Vite |
| `my-router-app` | The name of your project folder (you can change this) |
| `--` | Separator — tells npm the next things are arguments for Vite, not for npm |
| `--template react` | Use the React template (not Vue, Svelte, etc.) |

After running the command, you'll see something like:

```
✔ Project created successfully!
```

Now run these two commands one by one:

```bash
cd my-router-app
```

This **changes directory** — it moves you into the newly created project folder.

```bash
npm install
```

This **installs all the dependencies** — the libraries your project needs to work. Vite listed them in a file called `package.json`, and `npm install` downloads them all.

---

### 2.4 Installing React Router DOM

Now install React Router DOM:

```bash
npm install react-router-dom
```

This downloads the React Router DOM library into your project's `node_modules` folder and adds it to `package.json` as a dependency.

After installation, open `package.json`. You should see:

```json
"dependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.0.0"
}
```

The `^7.0.0` means "version 7 or higher compatible version".

---

### 2.5 Start the Development Server

```bash
npm run dev
```

This starts Vite's development server. You'll see output like:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and go to `http://localhost:5173`. You'll see the default Vite + React welcome page.

> **Tip:** The development server has **hot reload** — when you save a file, the browser automatically updates without you refreshing. This makes development very fast.

---

### 2.6 Understanding the Project Structure

After creating the project, open the folder in VS Code. Here's what you'll see:

```
my-router-app/
│
├── node_modules/       ← All installed packages live here (don't touch this)
│
├── public/             ← Static files that go directly to the browser
│   └── vite.svg        ← Vite's logo image
│
├── src/                ← YOUR CODE LIVES HERE — this is where you work
│   ├── assets/         ← Images, icons, fonts
│   │   └── react.svg
│   ├── App.css         ← Styles for the App component
│   ├── App.jsx         ← The root React component
│   ├── index.css       ← Global styles (applied to the whole page)
│   └── main.jsx        ← Entry point — connects React to the HTML file
│
├── .gitignore          ← Tells Git which files to ignore
├── eslint.config.js    ← Code quality rules
├── index.html          ← The ONE HTML file (this is the SPA base)
├── package.json        ← Project info and list of dependencies
├── package-lock.json   ← Exact versions of installed packages
└── vite.config.js      ← Vite configuration settings
```

---

### 2.7 The Most Important Files Explained

#### `index.html` — The Foundation

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
    <!-- This is the ONE div where your entire React app lives -->
    <div id="root"></div>

    <!-- This script loads your React code -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

This is the only HTML file in your entire app. Notice the `<div id="root">`. React will inject your entire app inside this one div.

---

#### `src/main.jsx` — The Entry Point

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Line by line:

- `import { StrictMode }` — A React tool that helps catch bugs during development.
- `import { createRoot }` — The function that connects React to the HTML.
- `import './index.css'` — Loads global CSS styles.
- `import App from './App.jsx'` — Imports your root component.
- `createRoot(document.getElementById('root'))` — Finds the `<div id="root">` in `index.html`.
- `.render(<App />)` — Puts your React app inside that div.

**In simple terms:** `main.jsx` says "Find the `root` div in the HTML, and put our React app inside it."

---

#### `src/App.jsx` — Your Root Component

This is where you'll spend most of your time. Currently it has the default Vite welcome content. We'll replace it completely.

---

### 2.8 Clean Up the Default Files

The default project has some content we don't need. Let's clean it up.

**Delete the contents of `src/App.css`** (or delete the file entirely).

**Replace `src/App.jsx` with this:**

```jsx
function App() {
  return (
    <div>
      <h1>Hello, React Router!</h1>
    </div>
  );
}

export default App;
```

**Leave `src/main.jsx` and `src/index.css` as they are** for now.

Save the file. Your browser should automatically update and show "Hello, React Router!".

---

---

## Chapter 3: Your First Route

---

### 3.1 The Big Picture First

Before writing code, let's understand what we're about to build.

We want our app to have two pages:
- Home page → shows when the URL is `/`
- About page → shows when the URL is `/about`

Right now, without any routing, no matter what URL you type, the same content always shows. We're going to fix that.

To set up routing in React, we need **three things from React Router DOM**:

1. `BrowserRouter` — The outer wrapper that enables routing
2. `Routes` — The container that holds all route definitions
3. `Route` — An individual rule that says "for THIS path, show THIS component"

---

### 3.2 Understanding BrowserRouter

**What is BrowserRouter?**

`BrowserRouter` is a component that wraps your entire application. It does one job: it connects your React app to the browser's URL system.

Without `BrowserRouter`, React has no idea what URL the user is looking at. With `BrowserRouter`, React Router can read the URL and react to changes.

Think of `BrowserRouter` like an **electricity socket**. Your app (the appliance) needs to be plugged into it to get power (routing capabilities).

```
<BrowserRouter>          ← The socket — provides routing power
  <YourApp />            ← The appliance — needs to be plugged in
</BrowserRouter>
```

**Important rule:** `BrowserRouter` must be the outermost wrapper. Everything that needs routing must be inside it.

---

### 3.3 Understanding Routes

**What is Routes?**

`Routes` is a container component. You put all your `Route` definitions inside it.

When the URL changes, `Routes` looks through all the `Route` definitions inside it, finds the one that matches the current URL, and renders that one. It's like a **switch statement** — only the matching case runs.

```
<Routes>
  Route 1: "/home"    → <Home />
  Route 2: "/about"   → <About />
  Route 3: "/contact" → <Contact />
</Routes>

URL is "/about" → Only Route 2 activates → Only <About /> renders
```

---

### 3.4 Understanding Route

**What is Route?**

`Route` is where you define a single mapping: "when the URL path is X, show component Y."

It has two required pieces:
- `path` — the URL path to match (like `/about`)
- `element` — the JSX to render when that path matches

```jsx
<Route path="/about" element={<About />} />
```

Read this as: **"When the browser URL is `/about`, render the `<About />` component."**

---

### 3.5 Step 1 — Create the Page Components

First, let's create the pages we want to show.

Inside `src/`, create a new folder called `pages`. Then create two files inside it.

Your folder structure should look like:

```
src/
├── pages/
│   ├── Home.jsx
│   └── About.jsx
├── App.jsx
└── main.jsx
```

**`src/pages/Home.jsx`**

```jsx
// This is a simple React component — a function that returns JSX
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my website! This is the home page.</p>
    </div>
  );
}

// We must export it so other files can import and use it
export default Home;
```

**`src/pages/About.jsx`**

```jsx
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This page tells you about our website.</p>
    </div>
  );
}

export default About;
```

---

### 3.6 Step 2 — Set Up Routes in App.jsx

Now open `src/App.jsx` and rewrite it completely:

```jsx
// Step 1: Import the routing components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Step 2: Import the page components we just created
import Home from './pages/Home';
import About from './pages/About';

// Step 3: Set up the routing structure
function App() {
  return (
    // BrowserRouter wraps everything — it enables routing
    <BrowserRouter>

      {/*
        Routes is the container for all our Route definitions.
        It looks at the URL and renders only the matching Route.
      */}
      <Routes>

        {/* When URL is "/", render the Home component */}
        <Route path="/" element={<Home />} />

        {/* When URL is "/about", render the About component */}
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

### 3.7 Testing Your Routes

Save the file. Now test these URLs in your browser manually:

| Type this URL | What you should see |
|---------------|-------------------|
| `http://localhost:5173/` | Home Page heading and text |
| `http://localhost:5173/about` | About Page heading and text |

It works! You now have two separate pages in a React app — and the browser never reloads when you switch between them (try it — change the URL directly and notice there's no page flash).

---

### 3.8 What Happens Step by Step

Let's trace exactly what happens when you visit `/about`:

```
1. You type http://localhost:5173/about in the browser

2. The browser loads index.html (the one HTML file)

3. index.html loads main.jsx

4. main.jsx renders <App />

5. App renders:
   <BrowserRouter>       ← Reads current URL: "/about"
     <Routes>            ← Checks all Route definitions
       <Route path="/" ... />        ← Does "/" match "/about"? NO
       <Route path="/about" ... />   ← Does "/about" match "/about"? YES ✓
     </Routes>
   </BrowserRouter>

6. The matching Route renders <About />

7. You see the About page
```

---

### 3.9 The Index Route

The route with `path="/"` is special. It's called the **index route** because it matches the root URL — the "index" of your site.

You can also write it using the `index` keyword instead of a path:

```jsx
// These two are equivalent for the root level:
<Route path="/" element={<Home />} />
<Route index element={<Home />} />
```

The `index` keyword becomes more useful when we get to nested routes (Chapter 8). For now, just remember that `path="/"` is for the homepage.

> **Note:** The path `"/"` matches exactly the root URL. React Router v7 uses exact matching by default, so `/` only matches `/`, not `/about` or `/anything-else`.

---

---

## Chapter 4: Creating Pages

---

### 4.1 What Are "Pages" in React?

In a traditional website, each page is a separate `.html` file:
- `index.html`
- `about.html`
- `contact.html`

In a React app, there are no separate HTML files. Instead, each "page" is a **React component** — a JavaScript function that returns some JSX.

The router decides which component to show based on the URL. So creating a "page" simply means creating a new component and registering it as a route.

---

### 4.2 Creating Four Pages

Let's build four pages for our app: Home, About, Contact, and Services.

Create all four files inside `src/pages/`:

```
src/
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Contact.jsx
    └── Services.jsx
```

**`src/pages/Home.jsx`**

```jsx
function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to our website! Use the navigation to explore.</p>

      {/* A simple list of what we offer */}
      <h2>What we offer:</h2>
      <ul>
        <li>Web Development</li>
        <li>Mobile Apps</li>
        <li>UI Design</li>
      </ul>
    </div>
  );
}

export default Home;
```

**`src/pages/About.jsx`**

```jsx
function About() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>👋 About Us</h1>
      <p>We are a small team of developers who love building web applications.</p>

      <h2>Our Mission</h2>
      <p>To make the web a better place, one app at a time.</p>

      <h2>Our Team</h2>
      <ul>
        <li>Alice — Lead Developer</li>
        <li>Bob — UI Designer</li>
        <li>Carol — Project Manager</li>
      </ul>
    </div>
  );
}

export default About;
```

**`src/pages/Contact.jsx`**

```jsx
function Contact() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>📬 Contact Us</h1>
      <p>We'd love to hear from you!</p>

      {/*
        This is a basic HTML form inside JSX.
        Note: in JSX, we write "className" instead of "class"
        because "class" is a reserved word in JavaScript.
      */}
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', gap: '12px' }}>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" style={{ padding: '8px' }} />

        <label>Your Email</label>
        <input type="email" placeholder="Enter your email" style={{ padding: '8px' }} />

        <label>Message</label>
        <textarea rows="4" placeholder="Write your message..." style={{ padding: '8px' }} />

        <button type="submit" style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
```

**`src/pages/Services.jsx`**

```jsx
// An array of service objects — this simulates data you might get from a server
const serviceList = [
  { id: 1, name: 'Web Development', description: 'We build fast, responsive websites.' },
  { id: 2, name: 'Mobile Apps', description: 'iOS and Android apps built with React Native.' },
  { id: 3, name: 'UI/UX Design', description: 'Beautiful interfaces your users will love.' },
  { id: 4, name: 'Consulting', description: 'Expert advice to grow your digital product.' },
];

function Services() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>🛠 Our Services</h1>
      <p>Here is what we can do for you:</p>

      {/*
        We use .map() to loop through the array and create a card for each service.
        Each item needs a "key" prop — React uses this to track list items.
      */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '24px' }}>
        {serviceList.map((service) => (
          <div
            key={service.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
            }}
          >
            <h3>{service.name}</h3>
            <p style={{ color: '#555' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
```

---

### 4.3 Register All Pages as Routes

Now open `src/App.jsx` and add all four pages:

```jsx
// Import routing components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all four page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page — loads at the root URL */}
        <Route path="/" element={<Home />} />

        {/* About page — loads at /about */}
        <Route path="/about" element={<About />} />

        {/* Contact page — loads at /contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Services page — loads at /services */}
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

### 4.4 How React Switches Between Pages

Let's clearly understand the switching mechanism:

```
URL: /services

<BrowserRouter> reads URL → "/services"
        ↓
<Routes> checks each Route from top to bottom:
        ↓
  path="/"         → Does "/" match "/services"?  NO
  path="/about"    → Does "/about" match "/services"?  NO
  path="/contact"  → Does "/contact" match "/services"?  NO
  path="/services" → Does "/services" match "/services"?  YES ✓
        ↓
React renders <Services />
        ↓
User sees the Services page
```

The key insight is this: **only ONE route renders at a time**. React Router finds the first match and stops checking.

---

### 4.5 Test All Pages

Manually type these URLs in your browser:

```
http://localhost:5173/          → Home Page
http://localhost:5173/about     → About Page
http://localhost:5173/contact   → Contact Page
http://localhost:5173/services  → Services Page
```

All four should work. But notice a problem — there's no way to navigate between them without manually typing URLs. We'll fix that in the next chapter.

> **Tip:** You can click the browser's Back button after navigating. React Router automatically manages the browser history, so Back/Forward buttons work correctly.

---

---

## Chapter 5: Navigation

---

### 5.1 The Problem With Regular `<a>` Tags

Your first instinct might be to add navigation like this:

```html
<a href="/about">About</a>
```

This works — but it causes a **full page reload** every time you click a link.

Why is that a problem? Remember, React apps are SPAs — Single Page Applications. Their biggest advantage is instant navigation without page reloads. If you use regular `<a>` tags, you lose that advantage:

```
User clicks <a href="/about">
        ↓
Browser sends a request to the server
        ↓
Server responds
        ↓
Browser reloads the ENTIRE page  ← defeats the purpose of SPA!
        ↓
All React state is lost
```

React Router gives us a better solution: the `<Link>` component.

---

### 5.2 The Link Component

**What is Link?**

`<Link>` is a React Router component that looks and feels like a regular link, but it does NOT cause a page reload.

Instead of sending a request to the server, `<Link>` tells React Router to update the URL and re-render the matching component — all inside the same page, instantly.

```jsx
// Regular HTML — causes full reload ❌
<a href="/about">About</a>

// React Router Link — no reload, instant navigation ✅
<Link to="/about">About</Link>
```

**The only change:** instead of `href`, we use `to`.

**How to use it:**

```jsx
// Step 1: Import it
import { Link } from 'react-router-dom';

// Step 2: Use it
<Link to="/about">Go to About</Link>
<Link to="/contact">Contact Us</Link>
<Link to="/">Go Home</Link>
```

---

### 5.3 The NavLink Component

**What is NavLink?**

`<NavLink>` is exactly like `<Link>`, with one important bonus feature:

**It automatically adds an `active` CSS class to the link when its path matches the current URL.**

This is perfect for navigation bars, where you want to visually highlight the current page's link.

```jsx
import { NavLink } from 'react-router-dom';

<NavLink to="/about">About</NavLink>
```

When the user is on the `/about` page:
- This NavLink automatically gets `class="active"` added to it.
- You can style `.active` in your CSS to make it look different (highlighted, bold, different color, etc.).

When the user goes to `/contact`:
- The `/about` NavLink loses its `active` class.
- The `/contact` NavLink gains the `active` class.

---

### 5.4 Link vs NavLink — When to Use Which

```
┌─────────────────────────────────────────────────────────┐
│  Use <Link> when:                                       │
│  - You just need basic navigation                       │
│  - Linking within page content (like a "read more" link)│
│  - You don't need active state highlighting             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Use <NavLink> when:                                    │
│  - Building a navigation bar or sidebar                 │
│  - You want the current page's link to look different   │
│  - You need active state for styling                    │
└─────────────────────────────────────────────────────────┘
```

---

### 5.5 The `end` Prop on NavLink

There's a subtle issue with NavLink and the Home link.

Every URL starts with `/`. So the Home NavLink (`to="/"`) would be "active" on **every single page**, because `/about` starts with `/`, `/contact` starts with `/`, etc.

The `end` prop fixes this. It tells NavLink: "Only mark yourself active if the URL matches **exactly**, not just starts with."

```jsx
// Without end — Home is active on /about, /contact, everywhere ❌
<NavLink to="/">Home</NavLink>

// With end — Home is only active on exactly "/" ✅
<NavLink to="/" end>Home</NavLink>
```

> **Rule of thumb:** Always add `end` to your Home/root NavLink.

---

### 5.6 Styling Active Links

**Method 1 — Simple CSS (Recommended for Beginners)**

The easiest way. React Router adds `class="active"` automatically. You just style it in CSS.

```jsx
// Navbar.jsx
import { NavLink } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/services">Services</NavLink>
    </nav>
  );
}

export default Navbar;
```

```css
/* Navbar.css */

/* Style all nav links */
.navbar a {
  color: #555;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
}

/* This is the magic — React Router adds this class to the current page's link */
.navbar a.active {
  color: white;
  background-color: #0070f3;
}
```

---

**Method 2 — Inline Style with Function**

NavLink lets you pass a **function** to the `style` prop. That function receives `{ isActive }` — a boolean telling you if this link is currently active.

```jsx
<NavLink
  to="/about"
  style={({ isActive }) => {
    // isActive is true when URL matches this link's "to" path
    return {
      color: isActive ? 'white' : '#555',
      backgroundColor: isActive ? '#0070f3' : 'transparent',
      padding: '8px 16px',
      borderRadius: '6px',
      textDecoration: 'none',
    };
  }}
>
  About
</NavLink>
```

---

**Method 3 — className with Function**

Same idea, but for class names:

```jsx
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
  About
</NavLink>
```

---

### 5.7 Building a Complete Navigation Bar

Let's build a proper navbar. First, create the components folder:

```
src/
└── components/
    ├── Navbar.jsx
    └── Navbar.css
```

**`src/components/Navbar.jsx`**

```jsx
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    // The <nav> HTML element is for navigation — good for accessibility and SEO
    <nav className="navbar">

      {/* Brand name / logo on the left side */}
      <div className="navbar-brand">
        {/*
          We use NavLink here too so clicking the brand goes home.
          The "end" prop ensures it's only active on exactly "/"
        */}
        <NavLink to="/" end className="brand-link">
          MyApp
        </NavLink>
      </div>

      {/* Navigation links on the right side */}
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
```

**`src/components/Navbar.css`**

```css
/* The nav bar container */
.navbar {
  display: flex;                    /* Puts children side by side */
  justify-content: space-between;   /* Brand left, links right */
  align-items: center;              /* Vertically center items */
  padding: 14px 32px;
  background-color: #1a1a2e;        /* Dark blue background */
  position: sticky;                 /* Stays at top when scrolling */
  top: 0;
  z-index: 100;                     /* Stays above other content */
}

/* Brand / logo link */
.brand-link {
  font-size: 1.4rem;
  font-weight: bold;
  color: white !important;          /* Always white, even when active */
  text-decoration: none;
  background-color: transparent !important; /* Don't show active style on brand */
}

/* Container for the nav links */
.navbar-links {
  display: flex;
  gap: 6px;                         /* Space between links */
}

/* All nav links default style */
.navbar-links a {
  color: #aaaaaa;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: color 0.2s, background-color 0.2s; /* Smooth color change */
}

/* When hovering over a link */
.navbar-links a:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}

/* When a link is the ACTIVE (current) page — added automatically by NavLink */
.navbar-links a.active {
  color: white;
  background-color: #0070f3;        /* Blue highlight for active page */
}
```

---

### 5.8 Adding the Navbar to the App

Open `src/App.jsx` and add the Navbar:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      {/*
        Navbar is placed OUTSIDE <Routes>.
        This means it renders on EVERY page — it never disappears.
        Only the content inside <Routes> changes.
      */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Save and test. You should now have a working navbar where:
- Clicking links changes the page without reloading.
- The current page's link is highlighted in blue.

> **Key Concept:** Anything placed **outside** `<Routes>` renders on every page. Anything inside `<Routes>` only renders when its specific route matches. The Navbar goes outside because we want it everywhere.

---

---

## Chapter 6: Dynamic Routes

---

### 6.1 What is a Dynamic Route?

So far, all our routes have **fixed paths**:
- `/about` always shows the About page
- `/contact` always shows the Contact page

But imagine a social media site. It has a page for every user:
- `facebook.com/alice` — Alice's profile
- `facebook.com/bob` — Bob's profile
- `facebook.com/carol` — Carol's profile

There could be millions of users. You can't write a separate Route for each one! That would be impossible.

This is where **dynamic routes** come in.

A dynamic route has a **variable part** in the path. Instead of a fixed value, you use a **placeholder** that can match any value.

---

### 6.2 Route Parameters — The `:name` Syntax

In React Router, you create a variable part of a path by putting a colon (`:`) before the name:

```jsx
// :id is a route parameter — it matches ANY value in that position
<Route path="/users/:id" element={<UserDetails />} />
```

This single route matches ALL of these URLs:
- `/users/1` → `id = "1"`
- `/users/42` → `id = "42"`
- `/users/alice` → `id = "alice"`
- `/users/anything` → `id = "anything"`

The part after the colon (`:id`) is the **parameter name**. You give it any name you want.

---

### 6.3 Reading the Parameter — useParams()

The route matches the URL, but how does the component know what value was in the URL?

**`useParams()`** is a React Router hook that gives you the current URL parameters inside a component.

A **hook** is a special React function whose name starts with `use`. You call it inside a component to get some information or ability.

```jsx
import { useParams } from 'react-router-dom';

function UserDetails() {
  // useParams() returns an object containing all URL parameters
  const params = useParams();

  // If URL is /users/42, then params = { id: "42" }
  console.log(params); // { id: "42" }

  // We usually destructure it directly:
  const { id } = useParams();

  return <h1>Viewing User ID: {id}</h1>;
}
```

---

### 6.4 Complete Example — User List and User Details

Let's build a realistic example: a list of users, and a details page for each one.

**`src/pages/Users.jsx`** — The list page

```jsx
import { Link } from 'react-router-dom';

/*
  This is fake data. In a real application, this would come
  from a database or API. We're keeping it simple here.
*/
const users = [
  { id: 1, name: 'Alice Johnson', job: 'Frontend Developer' },
  { id: 2, name: 'Bob Smith',    job: 'Backend Developer'  },
  { id: 3, name: 'Carol White',  job: 'UI/UX Designer'     },
  { id: 4, name: 'David Brown',  job: 'Project Manager'    },
];

function Users() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>All Users</h1>
      <p>Click on a user to see their details.</p>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {users.map((user) => (
          /*
            key={user.id}: React needs this to track list items efficiently.
            Always provide a unique key when using .map() in JSX.
          */
          <li key={user.id} style={{ marginBottom: '12px' }}>
            {/*
              We create a dynamic link using template literals (backtick strings).
              `/users/${user.id}` becomes "/users/1", "/users/2", etc.
            */}
            <Link
              to={`/users/${user.id}`}
              style={{
                display: 'block',
                padding: '14px 20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
              }}
            >
              <strong>{user.name}</strong> — {user.job}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
```

**`src/pages/UserDetails.jsx`** — The individual user page

```jsx
import { useParams, Link } from 'react-router-dom';

// Same user data — in a real app this would come from an API call
const users = [
  { id: 1, name: 'Alice Johnson', job: 'Frontend Developer', email: 'alice@company.com', location: 'New York' },
  { id: 2, name: 'Bob Smith',    job: 'Backend Developer',  email: 'bob@company.com',   location: 'London'   },
  { id: 3, name: 'Carol White',  job: 'UI/UX Designer',     email: 'carol@company.com', location: 'Tokyo'    },
  { id: 4, name: 'David Brown',  job: 'Project Manager',    email: 'david@company.com', location: 'Sydney'   },
];

function UserDetails() {
  /*
    useParams() gives us the URL parameters.
    If URL is /users/2, then id = "2".
    Important: it's a STRING, not a number!
  */
  const { id } = useParams();

  /*
    Find the user whose id matches.
    We use Number(id) to convert the string "2" to the number 2,
    because our data uses number IDs: { id: 1 }, { id: 2 }, etc.
    Without conversion, 1 === "1" is false and no user would be found.
  */
  const user = users.find((u) => u.id === Number(id));

  /*
    Handle the case where no user matches the ID.
    For example, if someone visits /users/999 and there's no user 999.
  */
  if (!user) {
    return (
      <div style={{ padding: '40px' }}>
        <h2>User not found!</h2>
        <p>No user exists with ID: {id}</p>
        <Link to="/users" style={{ color: '#0070f3' }}>← Back to Users</Link>
      </div>
    );
  }

  // If user was found, show their details
  return (
    <div style={{ padding: '40px', maxWidth: '500px' }}>

      {/* Back button */}
      <Link to="/users" style={{ color: '#0070f3', textDecoration: 'none' }}>
        ← Back to All Users
      </Link>

      {/* User's name and job as a header */}
      <h1 style={{ marginTop: '24px' }}>{user.name}</h1>
      <p style={{ color: '#666', fontSize: '1.1rem' }}>{user.job}</p>

      {/* Details section */}
      <div style={{
        marginTop: '24px',
        padding: '24px',
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
      }}>
        <p><strong>User ID:</strong> {user.id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Location:</strong> {user.location}</p>
      </div>
    </div>
  );
}

export default UserDetails;
```

**Add the new routes in `App.jsx`:**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Users from './pages/Users';           // new
import UserDetails from './pages/UserDetails'; // new

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* Fixed route — shows list of all users */}
        <Route path="/users" element={<Users />} />

        {/* Dynamic route — :id matches any user ID */}
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Now add a Users link to your Navbar too:

```jsx
// Inside Navbar.jsx — add this NavLink
<NavLink to="/users">Users</NavLink>
```

---

### 6.5 How Dynamic Matching Works

```
Route defined:  /users/:id
                      ↑
                 "id" is the parameter name


URL visited: /users/3
                   ↑
              "3" is the parameter value


Result: useParams() returns { id: "3" }
```

The parameter name in the route (`:id`) becomes the key in the object returned by `useParams()`.

---

### 6.6 Multiple Parameters

You can have more than one parameter in a single route:

```jsx
// Define a route with two parameters
<Route path="/category/:categoryName/item/:itemId" element={<ItemPage />} />
```

```jsx
function ItemPage() {
  const { categoryName, itemId } = useParams();
  // URL /category/electronics/item/55
  // categoryName = "electronics", itemId = "55"

  return <p>{categoryName} → Item #{itemId}</p>;
}
```

> **Remember:** `useParams()` always returns strings. Use `Number()`, `parseInt()`, or `parseFloat()` if you need a numeric value.

---

---

## Chapter 7: useNavigate()

---

### 7.1 What is useNavigate()?

So far, users navigate by clicking `<Link>` or `<NavLink>` components. That's navigation from JSX — the visible parts of your component.

But sometimes you need to navigate from **JavaScript code** — not from a clickable link. For example:

- After a user submits a login form and it succeeds → go to the dashboard
- After a user deletes something → go back to the list
- After a timer runs out → redirect to a timeout page

For these situations, React Router gives us the **`useNavigate()`** hook.

---

### 7.2 How to Use useNavigate()

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  // Call useNavigate() to get the navigate function
  const navigate = useNavigate();

  function handleClick() {
    // Call navigate() with the path you want to go to
    navigate('/dashboard');
  }

  return (
    <button onClick={handleClick}>Go to Dashboard</button>
  );
}
```

`useNavigate()` returns a **function**. We name that function `navigate`. Then we call `navigate('/some-path')` whenever we want to change the URL.

---

### 7.3 Navigating After a Form Submit

This is the most common use case. Here's a Login page that redirects to the Dashboard on success:

```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // State for form fields
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  // Get the navigate function from React Router
  const navigate = useNavigate();

  function handleSubmit(event) {
    /*
      event.preventDefault() stops the browser's default form behavior.
      By default, submitting a form causes a full page reload.
      We don't want that in a React app.
    */
    event.preventDefault();

    // Simple check — in real apps, you'd call an API here
    if (email === 'student@test.com' && password === '1234') {
      // Save login state so we know the user is logged in
      localStorage.setItem('isLoggedIn', 'true');

      // Navigate to the dashboard
      navigate('/dashboard');
    } else {
      // Show error message
      setError('Wrong email or password. Try: student@test.com / 1234');
    }
  }

  return (
    <div style={{ padding: '60px 40px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Login</h1>

      {/* Show error message only if there is one */}
      {error && (
        <div style={{ backgroundColor: '#fff0f0', color: '#c00', padding: '10px', borderRadius: '6px', marginBottom: '16px' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student@test.com"
            style={{ width: '100%', padding: '10px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="1234"
            style={{ width: '100%', padding: '10px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: '12px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
```

---

### 7.4 Going Back — navigate(-1)

You can pass a **number** to `navigate()` to move through the browser's history:

```jsx
const navigate = useNavigate();

// Go back one page (like pressing the browser's Back button)
navigate(-1);

// Go back two pages
navigate(-2);

// Go forward one page (like pressing the browser's Forward button)
navigate(1);
```

This is useful for "Go Back" buttons:

```jsx
function UserDetails() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      {/* rest of the page */}
    </div>
  );
}
```

---

### 7.5 Replace Navigation

By default, every time you call `navigate('/somewhere')`, it **adds a new entry** to the browser's history. This means the user can press Back to return.

Sometimes you don't want that. For example:
- After login, if the user presses Back, they should not go back to the login page.
- After logout, they should not be able to go back to the dashboard.

Use `{ replace: true }` to **replace** the current entry in history instead of adding a new one:

```jsx
// Normal navigate — adds to history, user CAN press Back
navigate('/dashboard');

// Replace navigate — replaces history, user CANNOT press Back
navigate('/dashboard', { replace: true });
```

```jsx
// After successful login — don't let them go back to login page
navigate('/dashboard', { replace: true });

// After logout — don't let them go back to dashboard
navigate('/login', { replace: true });
```

---

### 7.6 Passing State With Navigate

You can secretly pass data to the next page using `state`. This data is NOT visible in the URL — it travels invisibly.

```jsx
// Page A — sending state
navigate('/confirmation', {
  state: {
    message: 'Your form was submitted successfully!',
    name: 'Alice',
  },
});
```

```jsx
// Page B — receiving state
import { useLocation } from 'react-router-dom';

function Confirmation() {
  /*
    useLocation() gives information about the current URL.
    It also carries any "state" that was passed via navigate().
  */
  const location = useLocation();

  /*
    location.state contains the data we passed.
    We use "|| {}" as a fallback in case state is null
    (e.g., if someone visits this page directly without going through the form).
  */
  const { message, name } = location.state || {};

  return (
    <div style={{ padding: '40px' }}>
      <h1>Confirmation</h1>
      {name && <p>Hello, {name}!</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {!message && <p>This page was accessed directly.</p>}
    </div>
  );
}
```

> **Warning:** State passed via navigate disappears if the user refreshes the page. Only use it for temporary messages like "form submitted" or "item deleted". Never use it for data that must survive a refresh.

---

### 7.7 useNavigate vs Link — When to Use Which

```
┌─────────────────────────────────────────────────────────┐
│  Use <Link> or <NavLink> when:                          │
│  - You need a clickable link in JSX                     │
│  - Navigation happens on user click                     │
│  - Simple page-to-page linking                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Use useNavigate() when:                                │
│  - Navigation happens after some logic runs             │
│  - After a form submission                              │
│  - After an API call finishes                           │
│  - Conditional navigation (navigate only if X is true)  │
│  - Going back/forward programmatically                  │
└─────────────────────────────────────────────────────────┘
```

---

---

## Chapter 8: Nested Routes

---

### 8.1 What Are Nested Routes?

Imagine a dashboard. It has a sidebar on the left that always stays visible. On the right, the content changes depending on what the user clicks — Profile, Settings, or Orders.

```
┌───────────────────────────────────────────────────────┐
│  Dashboard  (this part always stays)                  │
│  ┌─────────────┬──────────────────────────────────┐   │
│  │  Sidebar    │   Content Changes Here           │   │
│  │             │                                  │   │
│  │  Profile    │   When URL = /dashboard          │   │
│  │  Settings   │   → Overview content here        │   │
│  │  Orders     │                                  │   │
│  │             │   When URL = /dashboard/profile  │   │
│  │             │   → Profile content here         │   │
│  │             │                                  │   │
│  │             │   When URL = /dashboard/settings │   │
│  │             │   → Settings content here        │   │
│  └─────────────┴──────────────────────────────────┘   │
└───────────────────────────────────────────────────────┘
```

This is **nested routing**. The Dashboard is a **parent route**. Profile, Settings, and Orders are **child routes** that live inside it.

---

### 8.2 The Three Concepts

**Parent Route** — The outer route that wraps child routes. It renders a layout component.

**Child Route** — A route nested inside a parent. It renders inside the parent.

**Outlet** — A placeholder component you put inside the parent layout. React Router replaces `<Outlet />` with the matching child route's component.

---

### 8.3 Understanding Outlet With an Analogy

Think of a picture frame. The frame is the parent (Dashboard layout — always visible). Inside the frame, you swap out different pictures (Profile, Settings, Orders) depending on which you've selected.

`<Outlet />` is the **empty space inside the frame** where pictures get placed.

```jsx
function DashboardLayout() {
  return (
    <div>
      <Sidebar />   {/* Frame — always visible */}
      <Outlet />    {/* Empty space — gets filled with child route */}
    </div>
  );
}
```

---

### 8.4 Setting Up Nested Routes

**Step 1 — Create the Dashboard pages**

Create a `dashboard` subfolder inside `pages`:

```
src/pages/
└── dashboard/
    ├── DashboardLayout.jsx
    ├── DashboardHome.jsx
    ├── Profile.jsx
    ├── Settings.jsx
    └── Orders.jsx
```

**`src/pages/dashboard/DashboardHome.jsx`**

```jsx
function DashboardHome() {
  return (
    <div>
      <h1>Dashboard Overview</h1>
      <p>Welcome to your dashboard. Select a section from the sidebar.</p>

      {/* Simple stats */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '24px' }}>
        {[
          { label: 'Students', value: 142, color: '#e8f0fe' },
          { label: 'Courses',  value: 18,  color: '#e8fee8' },
          { label: 'Pending',  value: 5,   color: '#fee8e8' },
        ].map((stat) => (
          <div key={stat.label} style={{ flex: 1, padding: '20px', backgroundColor: stat.color, borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{stat.value}</p>
            <p style={{ margin: '4px 0 0', color: '#555' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHome;
```

**`src/pages/dashboard/Profile.jsx`**

```jsx
function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <div style={{ marginTop: '20px', padding: '24px', border: '1px solid #e0e0e0', borderRadius: '10px', maxWidth: '400px' }}>
        {/* Avatar */}
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#0070f3', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '16px' }}>
          A
        </div>
        <p><strong>Name:</strong> Alice Johnson</p>
        <p><strong>Email:</strong> alice@college.edu</p>
        <p><strong>Role:</strong> Student</p>
        <p><strong>Joined:</strong> January 2024</p>
        <button style={{ marginTop: '12px', padding: '8px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
```

**`src/pages/dashboard/Settings.jsx`**

```jsx
import { useState } from 'react';

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <div>
      <h1>Settings</h1>
      <p>Manage your account preferences.</p>

      <div style={{ marginTop: '24px', maxWidth: '400px' }}>
        {/* Each setting is a toggle */}
        {[
          { label: 'Push Notifications', state: notifications, setter: setNotifications },
          { label: 'Dark Mode',          state: darkMode,       setter: setDarkMode      },
          { label: 'Email Updates',      state: emailUpdates,   setter: setEmailUpdates  },
        ].map((setting) => (
          <div key={setting.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid #eee' }}>
            <span>{setting.label}</span>
            <button
              onClick={() => setting.setter(!setting.state)}
              style={{
                padding: '6px 16px',
                backgroundColor: setting.state ? '#0070f3' : '#ddd',
                color: setting.state ? 'white' : '#555',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
              }}
            >
              {setting.state ? 'ON' : 'OFF'}
            </button>
          </div>
        ))}
      </div>

      <button style={{ marginTop: '24px', padding: '10px 24px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        Save Settings
      </button>
    </div>
  );
}

export default Settings;
```

**`src/pages/dashboard/Orders.jsx`**

```jsx
const orders = [
  { id: 'ORD-001', course: 'React Fundamentals',  status: 'Active',    date: 'Jan 10, 2026' },
  { id: 'ORD-002', course: 'Node.js Basics',       status: 'Completed', date: 'Feb 5, 2026'  },
  { id: 'ORD-003', course: 'Database Design',      status: 'Active',    date: 'Mar 1, 2026'  },
];

// Helper to pick a color based on status
function statusColor(status) {
  if (status === 'Active')    return { backgroundColor: '#e8fee8', color: '#2a7a2a' };
  if (status === 'Completed') return { backgroundColor: '#e8f0fe', color: '#1a4ab5' };
  return { backgroundColor: '#eee', color: '#555' };
}

function Orders() {
  return (
    <div>
      <h1>My Enrollments</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #eee' }}>Order ID</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #eee' }}>Course</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #eee' }}>Status</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #eee' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={{ padding: '12px', border: '1px solid #eee' }}>{order.id}</td>
              <td style={{ padding: '12px', border: '1px solid #eee' }}>{order.course}</td>
              <td style={{ padding: '12px', border: '1px solid #eee' }}>
                <span style={{ ...statusColor(order.status), padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>
                  {order.status}
                </span>
              </td>
              <td style={{ padding: '12px', border: '1px solid #eee' }}>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
```

---

**Step 2 — Create the Dashboard Layout**

This is the most important file. It contains the sidebar AND the `<Outlet />` where child pages will appear.

**`src/pages/dashboard/DashboardLayout.jsx`**

```jsx
import { NavLink, Outlet } from 'react-router-dom';

function DashboardLayout() {

  // Reusable style function for sidebar links
  function sidebarLinkStyle({ isActive }) {
    return {
      display: 'block',
      padding: '10px 16px',
      marginBottom: '4px',
      borderRadius: '6px',
      textDecoration: 'none',
      color: isActive ? 'white' : '#cccccc',
      backgroundColor: isActive ? '#0070f3' : 'transparent',
    };
  }

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 55px)' }}>

      {/* SIDEBAR — always visible as long as we're in /dashboard/* */}
      <aside style={{
        width: '210px',
        backgroundColor: '#1a1a2e',
        padding: '24px 12px',
        flexShrink: 0,
      }}>
        <p style={{ color: '#888', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', padding: '0 8px', marginBottom: '8px' }}>
          Menu
        </p>

        {/*
          "end" on the first link ensures it's only active on exactly /dashboard,
          not on /dashboard/profile, /dashboard/settings, etc.
        */}
        <NavLink to="/dashboard" end style={sidebarLinkStyle}>Overview</NavLink>
        <NavLink to="/dashboard/profile" style={sidebarLinkStyle}>Profile</NavLink>
        <NavLink to="/dashboard/settings" style={sidebarLinkStyle}>Settings</NavLink>
        <NavLink to="/dashboard/orders" style={sidebarLinkStyle}>Enrollments</NavLink>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main style={{ flex: 1, padding: '40px', backgroundColor: '#f8f8f8' }}>
        {/*
          <Outlet /> is the key!
          This is where the child route component will be rendered.
          - When URL is /dashboard        → DashboardHome renders here
          - When URL is /dashboard/profile  → Profile renders here
          - When URL is /dashboard/settings → Settings renders here
          - When URL is /dashboard/orders   → Orders renders here
        */}
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
```

---

**Step 3 — Set up nested routes in App.jsx**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Regular pages
import Home       from './pages/Home';
import About      from './pages/About';
import Contact    from './pages/Contact';
import Services   from './pages/Services';
import Login      from './pages/Login';

// Dashboard pages (nested)
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardHome   from './pages/dashboard/DashboardHome';
import Profile         from './pages/dashboard/Profile';
import Settings        from './pages/dashboard/Settings';
import Orders          from './pages/dashboard/Orders';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Regular routes */}
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/contact"  element={<Contact />}  />
        <Route path="/services" element={<Services />} />
        <Route path="/login"    element={<Login />}    />

        {/*
          Nested routes for the dashboard.
          The parent route (/dashboard) renders DashboardLayout.
          Child routes render inside DashboardLayout's <Outlet />.
        */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/*
            The "index" route renders when URL is exactly /dashboard.
            No additional path needed.
          */}
          <Route index element={<DashboardHome />} />

          {/*
            Child routes use RELATIVE paths (no leading slash!).
            "profile" → /dashboard/profile
            "settings" → /dashboard/settings
            "orders" → /dashboard/orders
          */}
          <Route path="profile"  element={<Profile />}  />
          <Route path="settings" element={<Settings />} />
          <Route path="orders"   element={<Orders />}   />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

### 8.5 How Nested Routes Work — Step by Step

```
URL visited: /dashboard/profile

1. React Router sees: /dashboard/profile

2. It matches the OUTER Route:
   path="/dashboard" → renders DashboardLayout

3. Inside DashboardLayout, there's an <Outlet />

4. React Router continues matching the REMAINING path: "profile"
   path="profile" → renders Profile

5. Profile component is placed inside the <Outlet />

Result on screen:
┌─────────────────────────────────────────┐
│  Navbar (from App.jsx, outside Routes)  │
├─────────────────────────────────────────┤
│  DashboardLayout                        │
│  ┌────────────┬────────────────────┐    │
│  │  Sidebar   │  Profile renders   │    │
│  │            │  inside <Outlet /> │    │
│  └────────────┴────────────────────┘    │
└─────────────────────────────────────────┘
```

---

### 8.6 Critical Rules for Nested Routes

> **Rule 1:** Child route paths must NOT have a leading slash.
> - ✅ `path="profile"` (correct — relative)
> - ❌ `path="/profile"` (wrong — this becomes a top-level route, not a child)

> **Rule 2:** The parent layout component MUST include `<Outlet />`.
> Without `<Outlet />`, child routes render nothing — they're invisible.

> **Rule 3:** Use the `index` prop (not `path="/"`) for the default child route.

---

---

## Chapter 9: 404 Page

---

### 9.1 What is a 404 Error?

**404** is an HTTP status code that means **"Not Found"**.

When a user visits a URL that doesn't exist on your site, the server (or router) says "I have no idea what this is" — that's a 404 error.

Examples of 404 situations:
- User types `myapp.com/blahblah` — doesn't exist
- User follows an old link that used to work but no longer does
- User makes a typo in the URL

Without a 404 page, users see a blank screen and get confused. A good 404 page explains what happened and helps them get back on track.

---

### 9.2 The Wildcard Route

React Router uses a special path — `"*"` — to catch any URL that didn't match any other route. This is called a **wildcard** or **catch-all** route.

The `*` means "match anything and everything that didn't match above."

```jsx
// This matches ANY URL that no other route matched
<Route path="*" element={<NotFound />} />
```

**Critical rule: The wildcard route MUST be the last route.**

Why? Because `<Routes>` checks routes from top to bottom and uses the first match. If `*` is at the top, it matches everything and no other route ever works.

```jsx
// WRONG — * is first, catches everything ❌
<Routes>
  <Route path="*" element={<NotFound />} />
  <Route path="/" element={<Home />} />      {/* Never reached! */}
  <Route path="/about" element={<About />} /> {/* Never reached! */}
</Routes>

// CORRECT — * is last ✅
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />   {/* Only if nothing above matched */}
</Routes>
```

---

### 9.3 Creating the Not Found Page

**`src/pages/NotFound.jsx`**

```jsx
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px',
    }}>

      {/* Big 404 display */}
      <h1 style={{
        fontSize: '9rem',
        fontWeight: '900',
        color: '#0070f3',
        margin: 0,
        lineHeight: 1,
      }}>
        404
      </h1>

      <h2 style={{ fontSize: '1.8rem', marginTop: '12px', color: '#333' }}>
        Oops! Page Not Found
      </h2>

      <p style={{ color: '#666', maxWidth: '450px', marginTop: '12px', lineHeight: '1.6' }}>
        The page you're looking for doesn't exist. It may have been moved,
        deleted, or you might have typed the URL incorrectly.
      </p>

      {/* Two options: go back, or go home */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '36px', flexWrap: 'wrap', justifyContent: 'center' }}>

        <button
          onClick={() => navigate(-1)}
          style={{
            padding: '12px 28px',
            border: '2px solid #0070f3',
            backgroundColor: 'white',
            color: '#0070f3',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          ← Go Back
        </button>

        <Link
          to="/"
          style={{
            padding: '12px 28px',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          Go to Home Page
        </Link>
      </div>

      {/* Helpful links */}
      <div style={{ marginTop: '40px' }}>
        <p style={{ color: '#888' }}>Or try one of these pages:</p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '8px', justifyContent: 'center' }}>
          <Link to="/about" style={{ color: '#0070f3' }}>About</Link>
          <Link to="/services" style={{ color: '#0070f3' }}>Services</Link>
          <Link to="/contact" style={{ color: '#0070f3' }}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
```

---

### 9.4 Add the Wildcard Route to App.jsx

```jsx
import NotFound from './pages/NotFound';

// Inside <Routes> — this must be the LAST route
<Route path="*" element={<NotFound />} />
```

Now test it: visit `http://localhost:5173/anything-random`. You should see the 404 page.

---

---

## Chapter 10: Folder Structure

---

### 10.1 Why Folder Structure Matters

As your app grows, you'll have dozens of files. If everything is dumped into one folder, finding and maintaining files becomes a nightmare.

Good folder structure means:
- You can find any file in seconds
- New team members understand the project instantly
- Adding new features doesn't create chaos

---

### 10.2 The Recommended Structure

Here is a clean, industry-standard folder structure for React Router projects:

```
src/
│
├── assets/                 ← Static files
│   ├── images/
│   │   ├── logo.png
│   │   └── hero-image.jpg
│   └── icons/
│
├── components/             ← Reusable UI pieces
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Footer.jsx
│   ├── Footer.css
│   └── ProtectedRoute.jsx
│
├── layouts/                ← Layout wrappers (Outlet-based)
│   ├── MainLayout.jsx
│   └── DashboardLayout.jsx
│
├── pages/                  ← One file per page/route
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Services.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   └── dashboard/
│       ├── DashboardHome.jsx
│       ├── Profile.jsx
│       ├── Settings.jsx
│       └── Orders.jsx
│
├── App.jsx                 ← Root component + BrowserRouter
└── main.jsx                ← Entry point (don't touch this much)
```

---

### 10.3 Purpose of Each Folder

#### `assets/`

Everything that is NOT code goes here:
- Images (`.png`, `.jpg`, `.svg`, `.webp`)
- Icons
- Fonts
- Videos (if needed)

```jsx
// How to use an image from assets in a component:
import logo from '../assets/images/logo.png';

function Navbar() {
  return <img src={logo} alt="Company Logo" />;
}
```

---

#### `components/`

**Reusable UI pieces** that appear in multiple pages.

The key question to ask: "Is this used in more than one place?" If yes, it goes in `components/`.

Examples:
- `Navbar.jsx` — used on every page
- `Footer.jsx` — used on every page
- `Button.jsx` — a styled button used everywhere
- `Card.jsx` — a reusable card layout
- `ProtectedRoute.jsx` — a routing utility component

```
components/
├── Navbar.jsx       ← Navigation bar (appears on every page)
├── Footer.jsx       ← Footer (appears on every page)
├── Button.jsx       ← Custom styled button
└── Card.jsx         ← Reusable card component
```

---

#### `layouts/`

**Layout wrappers** that combine components with `<Outlet />`. These are the templates that multiple pages share.

```
layouts/
├── MainLayout.jsx      ← Navbar + Outlet + Footer (for public pages)
└── DashboardLayout.jsx ← Sidebar + Outlet (for dashboard pages)
```

A layout looks like this:

```jsx
// MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <>
      <Navbar />      {/* Always shows */}
      <Outlet />      {/* Page content goes here */}
      <Footer />      {/* Always shows */}
    </>
  );
}

export default MainLayout;
```

---

#### `pages/`

**One file per route.** Each file is a full page component.

The naming matches the URL:
- `Home.jsx` → `/`
- `About.jsx` → `/about`
- `Contact.jsx` → `/contact`
- `dashboard/Profile.jsx` → `/dashboard/profile`

```
pages/
├── Home.jsx           → route "/"
├── About.jsx          → route "/about"
├── Contact.jsx        → route "/contact"
├── Login.jsx          → route "/login"
├── NotFound.jsx       → route "*"
└── dashboard/         → subfolder for nested dashboard pages
    ├── DashboardHome.jsx → route "/dashboard" (index)
    ├── Profile.jsx       → route "/dashboard/profile"
    └── Settings.jsx      → route "/dashboard/settings"
```

---

#### `App.jsx`

The **root component**. Its job is to:
1. Wrap everything in `<BrowserRouter>`
2. Define all routes using `<Routes>` and `<Route>`
3. Import and use layouts and pages

```jsx
// App.jsx is the "map" of your entire application
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
```

---

#### `main.jsx`

The **entry point**. It mounts the entire React app into the HTML page. You rarely need to change this.

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

### 10.4 Rule of Thumb Summary

| Where it lives | What goes there |
|---------------|----------------|
| `assets/` | Images, fonts, icons |
| `components/` | Reusable pieces used in many places |
| `layouts/` | Templates with `<Outlet />` |
| `pages/` | One component per route |
| `App.jsx` | BrowserRouter + all Routes |
| `main.jsx` | Connects React to HTML |

---

---

## Chapter 11: Mini Project — Student Portal

---

### 11.1 What We're Building

A complete **Student Portal** application with the following pages:

```
URL                        Page             Notes
──────────────────────────────────────────────────────────
/                          Home             Public
/students                  Students List    Public
/students/:id              Student Details  Public, dynamic
/about                     About            Public
/contact                   Contact          Public
/login                     Login            Public
/dashboard                 Dashboard        Protected
/dashboard/profile         Profile          Protected, nested
/dashboard/settings        Settings         Protected, nested
/*                         404              Always
```

---

### 11.2 Final Folder Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   └── Navbar.css
├── data/
│   └── students.js        ← Shared student data
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── Students.jsx
│   ├── StudentDetails.jsx
│   └── dashboard/
│       ├── DashboardLayout.jsx
│       ├── DashboardHome.jsx
│       ├── Profile.jsx
│       └── Settings.jsx
├── App.jsx
└── main.jsx
```

---

### 11.3 Step 1 — Student Data File

Create `src/data/students.js`. We keep data in a separate file so multiple components can import it without duplication.

```js
// src/data/students.js
// This simulates data that would normally come from a database.

const students = [
  {
    id: 1,
    name: 'Arjun Sharma',
    age: 20,
    department: 'Computer Science',
    year: '2nd Year',
    email: 'arjun@college.edu',
    phone: '+91 98765 43210',
    gpa: '8.9',
    status: 'Active',
    subjects: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems'],
    about: 'Passionate about software development and open source contribution.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    age: 21,
    department: 'Electronics Engineering',
    year: '3rd Year',
    email: 'priya@college.edu',
    phone: '+91 87654 32109',
    gpa: '9.1',
    status: 'Active',
    subjects: ['Circuit Theory', 'Signals & Systems', 'Microprocessors', 'VLSI Design'],
    about: 'Interested in embedded systems and IoT applications.',
  },
  {
    id: 3,
    name: 'Rahul Gupta',
    age: 19,
    department: 'Mechanical Engineering',
    year: '1st Year',
    email: 'rahul@college.edu',
    phone: '+91 76543 21098',
    gpa: '7.8',
    status: 'Active',
    subjects: ['Engineering Mechanics', 'Thermodynamics', 'Engineering Maths', 'Physics'],
    about: 'Aspiring mechanical engineer with interest in automotive design.',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    age: 22,
    department: 'Computer Science',
    year: '4th Year',
    email: 'sneha@college.edu',
    phone: '+91 65432 10987',
    gpa: '9.5',
    status: 'Active',
    subjects: ['Machine Learning', 'Cloud Computing', 'Artificial Intelligence', 'Networks'],
    about: 'Final year student working on an AI-based project for her thesis.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    age: 20,
    department: 'Civil Engineering',
    year: '2nd Year',
    email: 'vikram@college.edu',
    phone: '+91 54321 09876',
    gpa: '8.2',
    status: 'Active',
    subjects: ['Structural Analysis', 'Surveying', 'Fluid Mechanics', 'Engineering Maths'],
    about: 'Wants to build sustainable infrastructure for rural communities.',
  },
];

export default students;
```

---

### 11.4 Step 2 — Home Page

**`src/pages/Home.jsx`**

```jsx
import { Link } from 'react-router-dom';
import students from '../data/students';

function Home() {
  return (
    <div style={{ padding: '60px 40px', maxWidth: '900px', margin: '0 auto' }}>

      {/* Hero section */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>
          🎓 Student Portal
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '550px', margin: '0 auto 32px' }}>
          Manage student records, track academic progress, and stay connected.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/students" style={{ padding: '14px 28px', backgroundColor: '#0070f3', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
            Browse Students →
          </Link>
          <Link to="/login" style={{ padding: '14px 28px', border: '2px solid #0070f3', color: '#0070f3', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
            Admin Login
          </Link>
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }}>
        {[
          { label: 'Total Students', value: students.length, emoji: '👥' },
          { label: 'Departments',    value: 4,               emoji: '🏛️' },
          { label: 'Active This Year', value: students.filter(s => s.status === 'Active').length, emoji: '✅' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center', padding: '28px 20px', border: '1px solid #e0e0e0', borderRadius: '12px' }}>
            <div style={{ fontSize: '2rem' }}>{stat.emoji}</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#0070f3', margin: '8px 0' }}>{stat.value}</div>
            <div style={{ color: '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent students preview */}
      <h2>Recent Students</h2>
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {students.slice(0, 3).map((student) => (
          <div key={student.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <span><strong>{student.name}</strong> — {student.department}, {student.year}</span>
            <Link to={`/students/${student.id}`} style={{ color: '#0070f3', textDecoration: 'none', fontSize: '0.9rem' }}>
              View →
            </Link>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/students" style={{ color: '#0070f3' }}>View all students →</Link>
      </div>
    </div>
  );
}

export default Home;
```

---

### 11.5 Step 3 — Students List Page

**`src/pages/Students.jsx`**

```jsx
import { Link, useSearchParams } from 'react-router-dom';
import students from '../data/students';

function Students() {
  // useSearchParams lets us read and update URL query params like ?q=arjun
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Filter students based on search query
  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.department.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>All Students</h1>
      <p style={{ color: '#666' }}>Click on any student to view their full profile.</p>

      {/* Search bar — updates URL query param as you type */}
      <input
        type="text"
        placeholder="Search by name or department..."
        value={query}
        onChange={(e) => setSearchParams(e.target.value ? { q: e.target.value } : {})}
        style={{
          width: '100%',
          padding: '12px 16px',
          fontSize: '1rem',
          border: '1px solid #ddd',
          borderRadius: '8px',
          margin: '20px 0',
          boxSizing: 'border-box',
        }}
      />

      <p style={{ color: '#888', marginBottom: '16px' }}>
        Showing {filtered.length} of {students.length} students
        {query && ` for "${query}"`}
      </p>

      {/* Student cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
        {filtered.map((student) => (
          <div
            key={student.id}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '22px',
              backgroundColor: 'white',
              transition: 'box-shadow 0.2s',
            }}
          >
            {/* Avatar — first letter of name */}
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              backgroundColor: '#0070f3', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '14px',
            }}>
              {student.name.charAt(0)}
            </div>

            <h3 style={{ margin: '0 0 4px', fontSize: '1.05rem' }}>{student.name}</h3>
            <p style={{ color: '#555', margin: '0 0 2px', fontSize: '0.9rem' }}>{student.department}</p>
            <p style={{ color: '#888', margin: '0 0 16px', fontSize: '0.85rem' }}>
              {student.year} &bull; GPA: <strong>{student.gpa}</strong>
            </p>

            <Link
              to={`/students/${student.id}`}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '8px',
                backgroundColor: '#0070f3',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#888' }}>
          <p style={{ fontSize: '3rem' }}>🔍</p>
          <p>No students found for "{query}"</p>
        </div>
      )}
    </div>
  );
}

export default Students;
```

---

### 11.6 Step 4 — Student Details Page

**`src/pages/StudentDetails.jsx`**

```jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import students from '../data/students';

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the student by ID (convert string to number)
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' }}>
        <h2>Student Not Found</h2>
        <p style={{ color: '#666' }}>No student with ID: {id}</p>
        <Link to="/students" style={{ color: '#0070f3', display: 'inline-block', marginTop: '16px' }}>
          ← Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '720px', margin: '0 auto' }}>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        style={{ padding: '8px 18px', border: '1px solid #ddd', backgroundColor: 'white', borderRadius: '6px', cursor: 'pointer', marginBottom: '28px' }}
      >
        ← Back
      </button>

      {/* Header card */}
      <div style={{ padding: '28px', border: '1px solid #e0e0e0', borderRadius: '14px', backgroundColor: 'white', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          {/* Avatar */}
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            backgroundColor: '#0070f3', color: 'white', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', fontWeight: 'bold',
          }}>
            {student.name.charAt(0)}
          </div>
          <div>
            <h1 style={{ margin: '0 0 4px' }}>{student.name}</h1>
            <p style={{ color: '#555', margin: '0 0 4px' }}>{student.department}</p>
            <span style={{ padding: '4px 14px', backgroundColor: '#e8fee8', color: '#2a7a2a', borderRadius: '20px', fontSize: '0.85rem' }}>
              {student.status}
            </span>
          </div>
        </div>
        <p style={{ marginTop: '20px', color: '#555', lineHeight: '1.6' }}>{student.about}</p>
      </div>

      {/* Details grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        {[
          { label: 'Student ID', value: `STU-00${student.id}` },
          { label: 'Age', value: `${student.age} years` },
          { label: 'Year', value: student.year },
          { label: 'GPA', value: student.gpa },
          { label: 'Email', value: student.email },
          { label: 'Phone', value: student.phone },
        ].map((item) => (
          <div key={item.label} style={{ padding: '14px 18px', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
            <p style={{ margin: '0 0 4px', color: '#888', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</p>
            <p style={{ margin: 0, fontWeight: '600' }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Subjects */}
      <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '12px' }}>
        <h3 style={{ margin: '0 0 14px' }}>Enrolled Subjects</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {student.subjects.map((subject) => (
            <span key={subject} style={{ padding: '6px 16px', backgroundColor: '#e8f0fe', color: '#0070f3', borderRadius: '20px', fontSize: '0.9rem' }}>
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
```

---

### 11.7 Step 5 — About and Contact Pages

**`src/pages/About.jsx`**

```jsx
function About() {
  return (
    <div style={{ padding: '60px 40px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>About the Student Portal</h1>
      <p style={{ color: '#555', lineHeight: '1.7', marginTop: '16px' }}>
        The Student Portal is a demonstration project built to learn React Router DOM.
        It shows how to navigate between pages, use dynamic routes, and build
        nested dashboards — all in a React + Vite application.
      </p>
      <h2 style={{ marginTop: '36px' }}>Built With</h2>
      <ul style={{ color: '#444', lineHeight: '2' }}>
        <li><strong>React 19</strong> — UI library</li>
        <li><strong>Vite</strong> — Build tool</li>
        <li><strong>React Router DOM v7</strong> — Client-side routing</li>
        <li><strong>JavaScript</strong> — No TypeScript</li>
      </ul>
    </div>
  );
}

export default About;
```

**`src/pages/Contact.jsx`**

```jsx
function Contact() {
  return (
    <div style={{ padding: '60px 40px', maxWidth: '560px', margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <p style={{ color: '#666', marginBottom: '32px' }}>Have a question? Get in touch with the portal admin.</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Full Name</label>
          <input type="text" placeholder="Your name" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Email Address</label>
          <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Message</label>
          <textarea rows="4" placeholder="Write your message..." style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box', resize: 'vertical' }} />
        </div>
        <button style={{ padding: '12px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
```

---

### 11.8 Step 6 — Login Page

**`src/pages/Login.jsx`**

```jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email === 'admin@portal.edu' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard', { replace: true });
    } else {
      setError('Invalid credentials. Use admin@portal.edu / admin123');
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 55px)' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '40px', border: '1px solid #e0e0e0', borderRadius: '16px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '8px' }}>Admin Login</h1>
        <p style={{ textAlign: 'center', color: '#888', marginBottom: '28px' }}>Sign in to access the dashboard</p>

        {error && (
          <div style={{ backgroundColor: '#fff0f0', color: '#c00', padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@portal.edu"
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="admin123"
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ padding: '13px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', fontWeight: '600' }}>
            Sign In
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#888', fontSize: '0.9rem' }}>
          <Link to="/" style={{ color: '#0070f3' }}>← Back to Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
```

---

### 11.9 Step 7 — Dashboard Layout and Pages

(Use the DashboardLayout, DashboardHome, Profile, and Settings from Chapter 8 — they work perfectly here.)

---

### 11.10 Step 8 — Putting It All Together in App.jsx

**`src/App.jsx`**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Pages
import Home           from './pages/Home';
import About          from './pages/About';
import Contact        from './pages/Contact';
import Login          from './pages/Login';
import NotFound       from './pages/NotFound';
import Students       from './pages/Students';
import StudentDetails from './pages/StudentDetails';

// Dashboard pages
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardHome   from './pages/dashboard/DashboardHome';
import Profile         from './pages/dashboard/Profile';
import Settings        from './pages/dashboard/Settings';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar renders on every page */}
      <Navbar />

      <Routes>
        {/* ── Public Routes ─────────────────────────── */}
        <Route path="/"        element={<Home />}           />
        <Route path="/about"   element={<About />}          />
        <Route path="/contact" element={<Contact />}        />
        <Route path="/login"   element={<Login />}          />

        {/* ── Student Routes (dynamic) ───────────────── */}
        <Route path="/students"     element={<Students />}       />
        <Route path="/students/:id" element={<StudentDetails />} />

        {/* ── Dashboard Nested Routes ────────────────── */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index           element={<DashboardHome />} />
          <Route path="profile"  element={<Profile />}       />
          <Route path="settings" element={<Settings />}      />
        </Route>

        {/* ── 404 — Must be last ─────────────────────── */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

### 11.11 Step 9 — Update the Navbar

Update your Navbar to include all navigation links:

```jsx
// src/components/Navbar.jsx
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';  // Simple full reload to reset state
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">🎓 StudentPortal</Link>
      </div>
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <button onClick={handleLogout} style={{ padding: '8px 16px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
```

---

### 11.12 Test Your Mini Project

```
Step 1: npm run dev
Step 2: Visit http://localhost:5173/

Test each page:
✅ /             → Home page with stats and links
✅ /students      → Student list with search
✅ /students/1    → Arjun Sharma's profile
✅ /students/2    → Priya Patel's profile
✅ /about         → About page
✅ /contact       → Contact form
✅ /login         → Login (admin@portal.edu / admin123)
✅ /dashboard     → Dashboard overview (after login)
✅ /dashboard/profile  → Profile tab
✅ /dashboard/settings → Settings tab
✅ /anything-random    → 404 page
```

---

---

## Chapter 12: Common Beginner Mistakes

---

Every beginner makes these mistakes. Study each one so you recognize and fix them quickly.

---

### Mistake 1 — Missing BrowserRouter

**The symptom:** Your app crashes with an error like:
```
Error: useRoutes() may be used only in the context of a <Router> component.
```

**The cause:** You forgot to wrap your app in `<BrowserRouter>`.

```jsx
// WRONG ❌ — No BrowserRouter anywhere
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

// CORRECT ✅
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**The rule:** `BrowserRouter` must wrap everything that uses React Router — usually your entire `App` component.

---

### Mistake 2 — Wrong Import (react-router vs react-router-dom)

**The symptom:** Import errors or "module not found" errors.

```jsx
// WRONG ❌ — importing from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router';

// CORRECT ✅ — always use 'react-router-dom' for web projects
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

**The rule:** For web browser projects, always import from `'react-router-dom'`.

---

### Mistake 3 — Using `<a href>` Instead of `<Link>`

**The symptom:** The app reloads fully on every navigation. React state is lost.

```jsx
// WRONG ❌ — regular HTML anchor tag
<a href="/about">About</a>

// CORRECT ✅ — React Router Link
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>
```

**Why it matters:** `<a href>` tells the browser to load a new page from the server — destroying your React app in the process. `<Link>` stays inside React.

---

### Mistake 4 — Wrong Path Format

**The symptom:** Pages don't show. You see a blank screen or the wrong page.

```jsx
// WRONG ❌ — path without leading slash
<Route path="about" element={<About />} />

// CORRECT ✅ — top-level routes need leading slash
<Route path="/about" element={<About />} />
```

```jsx
// WRONG ❌ — leading slash on a CHILD route
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="/profile" element={<Profile />} />  {/* Wrong! */}
</Route>

// CORRECT ✅ — child routes use relative path (no leading slash)
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="profile" element={<Profile />} />   {/* Becomes /dashboard/profile */}
</Route>
```

**The rule:** Top-level routes start with `/`. Child (nested) routes do NOT.

---

### Mistake 5 — Forgetting `<Outlet />` in Layout Components

**The symptom:** You set up nested routes, but child page content never shows. The parent layout renders but child routes are invisible.

```jsx
// WRONG ❌ — no Outlet, children are invisible
function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      {/* Child routes need to go somewhere — but where?? */}
    </div>
  );
}

// CORRECT ✅ — Outlet tells React Router where to put child content
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main>
        <Outlet />  {/* Child route renders here */}
      </main>
    </div>
  );
}
```

**The rule:** Every layout component used as a parent route MUST include `<Outlet />`.

---

### Mistake 6 — Wildcard Route in the Wrong Position

**The symptom:** Every URL shows the 404 page — even valid ones like `/` and `/about`.

```jsx
// WRONG ❌ — * is first, matches everything
<Routes>
  <Route path="*" element={<NotFound />} />    {/* Catches EVERYTHING! */}
  <Route path="/" element={<Home />} />        {/* Never reached */}
  <Route path="/about" element={<About />} />  {/* Never reached */}
</Routes>

// CORRECT ✅ — * is last, only catches what nothing else matched
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />   {/* Last resort */}
</Routes>
```

**The rule:** The wildcard `*` route must ALWAYS be the last route.

---

### Mistake 7 — useParams Returns Strings, Not Numbers

**The symptom:** You try to find a user by ID, but you never find one — the list is always empty.

```jsx
const users = [{ id: 1, name: 'Alice' }];
const { id } = useParams();  // id = "1" (a string!)

// WRONG ❌ — comparing number to string
const user = users.find((u) => u.id === id);
// 1 === "1" is FALSE — JavaScript strict equality

// CORRECT ✅ — convert string to number first
const user = users.find((u) => u.id === Number(id));
// 1 === 1 is TRUE ✓
```

**The rule:** `useParams()` always returns strings. Convert with `Number()` when comparing to numeric IDs.

---

### Mistake 8 — Nesting BrowserRouter Multiple Times

**The symptom:** Weird routing behavior, links don't work, or you see console warnings.

```jsx
// WRONG ❌ — BrowserRouter nested inside another BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <Navbar />       {/* Navbar has its own BrowserRouter inside — wrong! */}
      <Routes>...</Routes>
    </BrowserRouter>
  );
}

// Inside Navbar — WRONG
function Navbar() {
  return (
    <BrowserRouter>   {/* ← Should NOT be here! */}
      <Link to="/">Home</Link>
    </BrowserRouter>
  );
}

// CORRECT ✅ — BrowserRouter appears ONCE, in App.jsx only
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>   {/* Works fine — it's inside the top-level BrowserRouter */}
    </nav>
  );
}
```

**The rule:** One `BrowserRouter` per app. Put it in `App.jsx` and nowhere else.

---

### Mistake 9 — Missing `end` on the Home NavLink

**The symptom:** The "Home" link in your navbar always appears highlighted/active, even when you're on `/about`, `/contact`, etc.

```jsx
// WRONG ❌ — Home is active on every page because all URLs start with "/"
<NavLink to="/">Home</NavLink>

// CORRECT ✅ — "end" makes it active only on exact "/" match
<NavLink to="/" end>Home</NavLink>
```

---

### Mistake 10 — Calling Hooks Outside a Component

**The symptom:** React error: "Hooks can only be called inside of the body of a function component."

```jsx
// WRONG ❌ — calling hook outside a component
const navigate = useNavigate();

function MyPage() {
  return <button onClick={() => navigate('/home')}>Go</button>;
}

// CORRECT ✅ — hook called inside the component function
function MyPage() {
  const navigate = useNavigate();  // Inside the component ✓
  return <button onClick={() => navigate('/home')}>Go</button>;
}
```

**The rule:** All hooks (`useNavigate`, `useParams`, `useSearchParams`, etc.) must be called at the top level of a React component function.

---

---

### Exercise 13 — Pass State Between Pages

**Task:** Create a Contact form that shows a success message after submission.

**Requirements:**
- Contact form at `/contact`
- On submit, navigate to `/success` using `useNavigate()`
- Pass the user's name as state: `{ state: { name: formData.name } }`
- The `/success` page reads the state and displays: "Thank you, [name]! Your message was sent."
- If the `/success` page is visited directly (without state), show a generic message

**Concepts practiced:** `useNavigate()` with state, `useLocation()`, `location.state`.

---

### Exercise 15 — Build a Full FAQ Page with Sections

**Task:** Create an FAQ page at `/faq` with anchor navigation.

**Requirements:**
- At least four FAQ categories (e.g., Account, Courses, Billing, Technical)
- A list of links at the top that jump to each section
- Each section has 2–3 questions and answers

**Bonus:** Add a "Back to Top" button at the bottom.

**Concepts practiced:** Building real pages, internal anchor links, component structure.

---

### Bonus Challenge — Mini E-Commerce

**Task:** Build a small product catalog with cart functionality.

**Pages:**
- `/shop` — grid of products
- `/shop/:id` — product details page with "Add to Cart" button
- `/cart` — shows items in cart (use localStorage or useState)
- `/checkout` — checkout form

**This challenge combines:**
- Dynamic routes
- useParams
- useNavigate
- Query params (filter by category in /shop)
- Programmatic navigation

---

---

## Chapter 14: Cheatsheet

---

> Your quick reference card. Every syntax you need in one place.

---

### Installation

```bash
# Create project
npm create vite@latest my-app -- --template react

# Install React Router DOM
npm install react-router-dom

# Start dev server
npm run dev
```

---

### BrowserRouter

**Purpose:** Wraps your entire app. Enables URL-based routing. Must be the outermost wrapper.

```jsx
import { BrowserRouter } from 'react-router-dom';

// Wrap everything in App.jsx
function App() {
  return (
    <BrowserRouter>
      {/* Your entire app goes here */}
    </BrowserRouter>
  );
}
```

| Rule | Detail |
|------|--------|
| Location | `App.jsx` — outermost wrapper |
| Count | Only ONE per app |
| Without it | All routing hooks crash |

---

### Routes

**Purpose:** Container for all `<Route>` definitions. Only renders the ONE route that matches.

```jsx
import { Routes } from 'react-router-dom';

<Routes>
  {/* Route definitions go inside here */}
</Routes>
```

| Rule | Detail |
|------|--------|
| Must be inside | `<BrowserRouter>` |
| Behavior | Finds first match, renders it, ignores the rest |

---

### Route

**Purpose:** Maps a URL path to a React component.

```jsx
import { Route } from 'react-router-dom';

// Basic route
<Route path="/about" element={<About />} />

// Root / index route
<Route path="/" element={<Home />} />

// Dynamic route with parameter
<Route path="/users/:id" element={<UserDetails />} />

// Index child route (no path needed)
<Route index element={<DashboardHome />} />

// Wildcard / 404 (always last)
<Route path="*" element={<NotFound />} />

// Parent route with children (nested routing)
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} />
  <Route path="profile" element={<Profile />} />   {/* /dashboard/profile */}
  <Route path="settings" element={<Settings />} /> {/* /dashboard/settings */}
</Route>
```

| Prop | Type | Purpose |
|------|------|---------|
| `path` | string | URL to match (top-level: starts with `/`, child: no `/`) |
| `element` | JSX | Component to render when path matches |
| `index` | boolean | Default child route (renders at parent path) |

---

### Link

**Purpose:** Navigate between pages without a full page reload. Use instead of `<a href>`.

```jsx
import { Link } from 'react-router-dom';

// Basic link
<Link to="/about">About</Link>

// Dynamic link
<Link to={`/users/${user.id}`}>View User</Link>

// Link with query params
<Link to="/search?q=react">Search React</Link>

// Link to root
<Link to="/">Go Home</Link>
```

| Prop | Type | Purpose |
|------|------|---------|
| `to` | string | The destination path |

> Never use `<a href>` for internal navigation in React.

---

### NavLink

**Purpose:** Same as `<Link>`, but automatically adds `class="active"` when the current URL matches. Ideal for navigation menus.

```jsx
import { NavLink } from 'react-router-dom';

// Basic — gets class="active" automatically
<NavLink to="/about">About</NavLink>

// With end prop (only active on exact "/" match)
<NavLink to="/" end>Home</NavLink>

// With className function
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'link active-link' : 'link'}
>
  About
</NavLink>

// With style function
<NavLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? 'white' : '#aaa',
    backgroundColor: isActive ? '#0070f3' : 'transparent',
  })}
>
  About
</NavLink>
```

| Prop | Type | Purpose |
|------|------|---------|
| `to` | string | Destination path |
| `end` | boolean | Only active on exact match (use on Home link) |
| `className` | function | Returns class name based on `{ isActive }` |
| `style` | function | Returns style object based on `{ isActive }` |

---

### Outlet

**Purpose:** Placeholder in a layout/parent component. React Router replaces it with the matching child route component.

```jsx
import { Outlet } from 'react-router-dom';

// In your layout component
function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <main>
        {/* Child route renders here */}
        <Outlet />
      </main>
    </div>
  );
}
```

| Rule | Detail |
|------|--------|
| Required in | Every parent/layout route component |
| Without it | Child routes are invisible |
| Where child renders | Exactly where `<Outlet />` is placed |

---

### useNavigate

**Purpose:** Programmatic navigation — navigate from JavaScript code, not from JSX links.

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  // Go to a path
  navigate('/dashboard');

  // Go back (browser Back button)
  navigate(-1);

  // Go forward (browser Forward button)
  navigate(1);

  // Replace history (user can't press Back to return)
  navigate('/dashboard', { replace: true });

  // Pass invisible state to next page
  navigate('/confirm', { state: { message: 'Done!', name: 'Alice' } });
}
```

| Argument | Type | Effect |
|---------|------|--------|
| `'/path'` | string | Navigate to that path |
| `-1` | number | Go back one step |
| `1` | number | Go forward one step |
| `{ replace: true }` | option | Replace current history entry |
| `{ state: {} }` | option | Pass hidden data to next page |

---

### useParams

**Purpose:** Read dynamic URL parameters from the current URL.

```jsx
import { useParams } from 'react-router-dom';

// Route definition: <Route path="/users/:userId" element={<User />} />
// Current URL: /users/42

function User() {
  const { userId } = useParams();
  // userId === "42"  ← always a string!

  // Convert to number when needed
  const id = Number(userId);   // 42 (number)

  return <h1>User ID: {userId}</h1>;
}
```

| Rule | Detail |
|------|--------|
| Returns | Object with all URL params as string values |
| Type | Always strings — convert if you need a number |
| Key name | Matches the `:name` in the route path |

---

### Navigate (Component)

**Purpose:** Redirects immediately when rendered. Used for conditional redirects in JSX.

```jsx
import { Navigate } from 'react-router-dom';

// Redirect if not logged in
function ProtectedPage() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <div>Protected content here</div>;
}

// Redirect an old URL to a new one
<Route path="/old-about" element={<Navigate to="/about" replace />} />
```

---

### Complete App Pattern (Quick Reference)

```jsx
// App.jsx — the full routing setup pattern
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Navbar />  {/* Outside Routes = shows on every page */}

      <Routes>
        {/* 1. Simple routes */}
        <Route path="/"        element={<Home />}    />
        <Route path="/about"   element={<About />}   />
        <Route path="/contact" element={<Contact />} />

        {/* 2. Dynamic route */}
        <Route path="/users/:id" element={<UserDetails />} />

        {/* 3. Nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index          element={<DashboardHome />} />
          <Route path="profile" element={<Profile />}       />
        </Route>

        {/* 4. Wildcard — ALWAYS last */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}
```

---

### Common Patterns Quick Reference

```jsx
// Redirect after login
navigate('/dashboard', { replace: true });

// Go back
navigate(-1);

// Active nav link with CSS
<NavLink to="/about">About</NavLink>
/* In CSS: a.active { color: blue; } */

// Active nav link with inline style
<NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
  About
</NavLink>

// Dynamic link
<Link to={`/products/${product.id}`}>View Product</Link>

// Read URL param
const { id } = useParams();

// Read query param
const [params] = useSearchParams();
const q = params.get('q');

// Redirect component
<Route path="/old" element={<Navigate to="/new" replace />} />
```

---

*React Router DOM Beginner's Guide — React 19 + Vite + React Router DOM v7 | JavaScript Only*
