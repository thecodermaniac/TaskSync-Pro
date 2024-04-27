# Taskify

<img src='./preview.PNG'>

https://aw-trello-clone.herokuapp.com/

A Task Manager built using the MERN stack.

The Trello board I used to organise this project's workflow: 
https://trello.com/b/2rP2cJBz/trello-clone


## Quick Start

You will need Node.js, a browser, and a terminal to run this application. You can use any code editor. I developed this app with Visual Studio Code, and that is what I would recommend.

### Add a .env file at the root specifying your own variables

MONGO_URI - This application uses MongoDB Atlas to host the database in the cloud. You can also use a local database during development. See https://www.mongodb.com/.

JWT_SECRET - Any random string will do.

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run the server and client at the same time from the root

```bash
npm run dev
```

