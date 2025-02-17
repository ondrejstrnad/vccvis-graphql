Installing back-end project
--------------------------------
##### Loading the project in Visual Studio Code
- Open Visual Studio Code and using Open Folder navigate to 'back' subfolder of this repository.
- Open a New Terminal in Visual Studio Code and run
```
npm install
```

##### Run the app
In the same terminal run
```
npm start
```

Restoring this back-end project from scratch
--------------------------------
##### Init Node.js
```
npm init -y
```

##### Install express server
```
npm install express
```

##### Add src/server.mjs
```
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Default content...!');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```


##### Register script shortcut in "scripts"
```
...
"start": "node src/server.mjs"
...
```


##### Install dotenv
This package will read *.env* file in the root folder. It should contain all the sensitive information (credentials, DB connection strings, ...) and never be stored in the repository.
```
npm install dotenv
```

##### Add a route for people

```
// REST endpoints
app.use("/people", peopleRoute);
```

##### Install mongodb driver
```
npm install mongodb
```

##### Add MongoDb connection into *.env* file
```
DB_CONNECTION_STRING=mongodb+srv://...
```



