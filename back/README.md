backend

- init Node.js
npm init -y

- install express server
npm install express

- add server.mjs
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Default content...!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


- register script shortcut in "scripts"
"start": "node src/server.mjs"
npm start

- install dotenv
npm install dotenv

- add a route for people


- install mongodb driver
npm install mongodb

- add MongoDb connection



