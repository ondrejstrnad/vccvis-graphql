import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Person } from "../models/Person";

type Props = {
    person: Person,
    handleShowPublications: (p: Person) => void
}

const PersonComponent = ({person, handleShowPublications} : Props) => {
   
    return (
        <Card sx={{ padding: 2, margin: 2 }}>
        <CardContent>                                
            <Typography gutterBottom variant="h5" component="div">
                {person.firstname + " " + person.lastname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {person.position}
            </Typography>
        </CardContent>
        <CardActions>       
            {/* Some functionality goes here... */}       
            <Button variant="outlined" onClick={() => handleShowPublications(person) }>Show Publications</Button>
        </CardActions>
    </Card>
    );
  };
  
  export default PersonComponent;