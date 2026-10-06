# GitHub User Search

A simple React app to search for any GitHub user and see their profile details.

## Features

- Search a GitHub user by username (click **Search** or press **Enter**)
- Shows the user's avatar, name, bio, public repos and followers
- Shows a loading message while fetching
- Shows an error if the username is empty or the user is not found

## Tech Used

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [GitHub REST API](https://docs.github.com/en/rest/users/users) (`https://api.github.com/users/{username}`)

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/Talrejasaniya/GitHub-User-Search.git
   cd GitHub-User-Search
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the link shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the development server     |
| `npm run build`   | Build the app for production     |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Check the code with ESLint       |

## Project Structure

```
src/
├── App.jsx      # Search logic and UI
├── github.css   # Styles for the search box, button and user card
├── index.css    # Global page styles
└── main.jsx     # App entry point
```

