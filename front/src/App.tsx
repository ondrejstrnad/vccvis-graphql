import { Container, Typography } from "@mui/material";
import React from "react";
import PeopleComponent from "./components/PeopleComponent";

const App = () => {
  
  React.useEffect(() => {

  }, []);

  return (
    <>
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Material-UI with TypeScript!
        </Typography>

      </Container>

      <PeopleComponent />
    </>
  );
};

export default App;
