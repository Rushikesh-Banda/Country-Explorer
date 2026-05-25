# Country Explorer Application

A modern frontend web application for exploring country information using public REST APIs. The application allows users to search, filter, and view detailed information about countries around the world.

Built using:

* React.js
* Vite
* CSS3
* REST Countries API
* Axios

---

# Features

## Country Search

* Search countries by name
* Instant search functionality
* Dynamic country filtering

---

## Region Filter

* Filter countries by region
* View countries continent-wise
* Easy navigation between regions

---

## Country Details

* View detailed country information
* Display capital city
* Population details
* Region and subregion
* Country flags
* Languages and currencies

---

## Responsive UI

* Mobile-friendly design
* Responsive layouts
* Clean and modern interface

---

## API Integration

* Fetch country data using REST APIs
* Dynamic frontend rendering
* Real-time data display

---

# Tech Stack

| Technology         | Purpose               |
| ------------------ | --------------------- |
| React.js           | Frontend Library      |
| Vite               | Build Tool            |
| CSS3               | Styling               |
| Axios              | API Requests          |
| REST Countries API | Country Data Provider |

---

# Project Structure

```bash id="g7m2x9"
Country-Explorer/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── CountryCard.jsx
│   │   ├── CountryDetails.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── RegionFilter.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Details.jsx
│   │
│   ├── services/
│   │   └── countryService.js
│   │
│   ├── styles/
│   │   └── app.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
└── README.md
```

---

# Frontend Concepts

---

# React.js

## Definition

React.js is a JavaScript library used for building dynamic user interfaces.

### Features

* Component-based architecture
* Fast rendering
* Reusable UI components

---

# Components

## Definition

Components are reusable UI blocks in React.

### Components Used

| Component          | Purpose                      |
| ------------------ | ---------------------------- |
| Navbar.jsx         | Navigation bar               |
| SearchBar.jsx      | Search country input         |
| RegionFilter.jsx   | Filter countries by region   |
| CountryCard.jsx    | Display country summary      |
| CountryDetails.jsx | Display full country details |

---

# JSX

## Definition

JSX allows writing HTML inside JavaScript.

### Example

```jsx id="r4v8n2"
function App() {
  return <h1>Country Explorer</h1>;
}
```

---

# State Management

## Definition

State is used to manage dynamic data in React components.

### Example

```jsx id="x9m3p7"
const [countries, setCountries] = useState([]);
```

---

# Props

## Definition

Props are used to pass data between components.

### Example

```jsx id="f6t2k8"
<CountryCard country={country} />
```

---

# Event Handling

## Definition

React handles user interactions using events.

### Example

```jsx id="q1v5r9"
<input onChange={handleSearch} />
```

---

# API Integration

## Definition

Axios is used to fetch data from REST APIs.

### Example

```js id="m8x4z1"
axios.get("https://restcountries.com/v3.1/all")
```

---

# REST Countries API

## Purpose

Provides country-related data such as:

* Country names
* Flags
* Population
* Region
* Capital city
* Languages
* Currency information

---

# Application Workflow

```text id="c3n7w2"
User Searches Country
        ↓
React Handles Input
        ↓
API Request Sent
        ↓
Country Data Retrieved
        ↓
UI Updates Dynamically
```

---

# CSS Styling

## Purpose

Used for:

* Layout design
* Responsive UI
* Country card styling
* Navigation styling

Files:

* index.css
* app.css

---

# Responsive Design

## Features

* Mobile-friendly layouts
* Flexible grid system
* Adaptive country cards
* Responsive typography

---

# Vite

## Definition

Vite is a fast frontend build tool for React applications.

### Advantages

* Fast startup
* Hot Module Replacement
* Optimized builds

---

# How to Run the Project

---

## Step 1: Clone Repository

```bash id="z7p4n1"
git clone <your-repository-url>
```

---

## Step 2: Navigate to Project Folder

```bash id="u2x9m5"
cd Country-Explorer
```

---

## Step 3: Install Dependencies

```bash id="n5r8v3"
npm install
```

---

## Step 4: Start Development Server

```bash id="p3x7k2"
npm run dev
```

---

## Step 5: Open Browser

```text id="b4m9t6"
http://localhost:5173
```

---

# Build for Production

```bash id="l8v1x4"
npm run build
```

---

# Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| npm run dev     | Start development server |
| npm run build   | Build production app     |
| npm run preview | Preview production build |

---

# Learning Outcomes

After completing this project, the following concepts are understood:

* React Fundamentals
* API Integration
* Component-Based Architecture
* State Management
* Props Handling
* Event Handling
* Responsive UI Design
* Frontend Project Structure

---

# Tools Used

* VS Code
* React.js
* Vite
* Axios
* REST Countries API
* GitHub

---

# Real-World Use Cases

| Feature            | Real-World Example       |
| ------------------ | ------------------------ |
| Country Search     | Travel applications      |
| API Integration    | Data-driven web apps     |
| Responsive Layouts | Modern websites          |
| Dynamic UI         | Interactive applications |

---

# Conclusion

This Country Explorer Application demonstrates modern frontend development using React.js and Vite with API integration. The project provides hands-on experience with component-based architecture, REST API handling, responsive UI development, and dynamic data rendering commonly used in real-world web applications.
