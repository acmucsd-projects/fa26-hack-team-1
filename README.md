# Hack Team 1 Fall 2026

## Fun facts about the team

Members:

- Anna:

- Akshara:

- Dominic:
- James: My favorite dog breed are huskys.
- Nick:
- Phillip:

Thanks for reading!

---

## Running the frontend

Run these commands from the repo root

1. `cd frontend` - change into the frontend directory
2. `npm install` - download any node packages that we're using
3. `npm run dev` - start a local server

To stop the server do: `Ctrl + C`

## Frontend structure

```
frontend/src/
├── assets/         # images, icons, fonts
├── components/     # reusable UI pieces
├── pages/          # one file per page
├── hooks/          # custom react hooks
├── services/       # any code that talks to backend (like API calls)
├── utils/          # small helper functoins
├── App.jsx         # outer shell of app - list of routes
└── main.jsx        # starts the app
```

---

## Backend Folder

## Running the backend

Run these commands from the repo root

1. `cd backend` - change into the frontend directory
2. `npm install` - download any node packages that we're using
3. `node --watch app.js` - start a local server
4. Open web browser and type in `http://localhost:3000/` to see server.

`To stop the server do:`Ctrl + C`

## Backend structure

```
backend/src/
├── config/               # Connect to database
├── controllers/          # Handles incoming HTTP payloads & sends responses
├── middleware/           # Logic that handles requests coming from frontend (ie. CORS)
├── models/               # How the data being put into the database will be strctured
├── routes/               # URL entry map (CRUD)
├── services/             # Code that does logic (ex auth, business, etc)
├── utils/                # Small reusable helper functions
├── app.js                # Where everything comes together and webserver starts
```