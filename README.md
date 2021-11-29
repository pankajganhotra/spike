# Spike assignment - ToDo App

#  Dockerized MERN APP -

## RUN Docker Containers
  $ docker-compose up -d

## Backend (Node.js + MongoDB) http://localhost:4000

```
├── api
│   ├── controllers //All Controllers
│   └── helpers //Utility helper Functions
│   └── middlewares //Authentication-Authorization Middlwares
│   └── models  //All mongodb model schemas (user and task)
│   └── routes  // REST API Endpoints
├── config //Database and OAUTH config
└── index.js  //Entry Point of the Node App
```
## Install (In backend directory)

    $ npm install     //Install dependency packages
    $ npm start       // Start Serve , script start added in package.json


## Frontend (React.js) http://localhost:3000

```
├── public //All publicly accessible files and assets
│   ├── index.html
├── src
│   ├── app //redux-Saga config
│       ├── saga //redux-Saga config
│       └── store //redux store setup
│   └── Components //Reusable components (buttons,cards , etc.)
│   └── Layout  //Global Components (Navbar,Sidebar Menu ,Footer ,etc.)
│   └── Modal  // All Modals for Add/Update purpose
│   └── pages  // All root components for each page
│   └── resources  // API Instance for intercepting and usage across the app
│   └── Util  // Utility components like spinners,loader, error boundary , etc.

```
## Install (In frontend directory)

    $ npm install     //Install dependency packages
    $ npm start       // Start Development Server


