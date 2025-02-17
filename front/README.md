front-end

- install the template app
npx create-react-app vccvis-pres --template typescript

- install material ui
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

- add localhost proxy to the local API for development
"proxy": "http://localhost:3001",

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





Deploy to GitHub pages
--------------------------------
- install the package
npm install gh-pages --save-dev

- add deploy script to package.json
"deploy": "gh-pages -d build -r https://github.com/ondrejstrnad/ABC.com.git"