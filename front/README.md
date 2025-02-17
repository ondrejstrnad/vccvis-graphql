Installing front-end project
--------------------------------
##### Loading the project in Visual Studio Code
- Open Visual Studio Code and using Open Folder navigate to 'front' subfolder of this repository.
- Open a New Terminal in Visual Studio Code and run
```
npm install
```

##### Run the app
In the same terminal run
```
npm start
```

This will open a new tab in your default browser with **localhost:3000** url address.

##### Predefined APIs
```
localhost:3000/people
localhost:3000/publications
``` 

##### Switch from REST API to GraphQL API
Navigate to 'src/components/PeopleComponent.tsx' and (un)comment the API you prefer.

```
const reload = () => {
   // REST
   getPeople(setPeople);

   // GRAPHQL
   //getPeopleGraphQL(setPeople);
}
```

Automatic deployment to GitHub pages
--------------------------------
##### Install the package
```
npm install gh-pages --save-dev
```

#### Add deploy script to package.json
```
"deploy": "gh-pages -d build -r https://github.com/<github-username>/<github-repository>.com.git"
```

Restoring this front-end project from scratch
--------------------------------

##### Install a template React with typescript app
```
npx create-react-app vccvis-pres --template typescript
```

##### Install material ui
```
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

##### Add localhost proxy to the local API (for development) into package.json file. This will allow the front-end app communicate directly to local app running on port 3001
```
...
"proxy": "http://localhost:3001",
...
```

##### Sample implementation of src/App.tsx
```
import React from "react";
import { Button, Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Material-UI with TypeScript!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
};

export default App;
```