# Country Information Website

This project provides both server and client sides for a website that delivers information about countries.

## Overview
- **Server Side:** Built with TypeScript using [Express.js](https://expressjs.com/).
- **Client Side:** Developed with JavaScript using [React.js](https://reactjs.org/).
- **Technology Choice:** Express and React were selected due to the time constraints for this application.

## Setup and Running Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or a compatible package manager.

### Steps

#### Backend (Server)
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the TypeScript compiler in watch mode:
   ```bash
   npm run watch
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

#### Frontend (Client)
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
```
root
├── backend
│   ├── src
│   │   └── ... (server-side code)
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── src
│   │   └── ... (client-side code)
│   ├── package.json
└── README.md
```

## Notes
- Ensure the backend server is running before starting the frontend to avoid connection issues.
- This project is designed as a simple application to demonstrate basic client-server interaction.
