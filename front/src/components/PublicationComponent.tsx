import { Card, CardContent, Typography } from "@mui/material";
import { Publication } from "../models/Publication";

type Props = {
    pub: Publication    
}

const PublicationComponent = ({pub} : Props) => {
   
    return (
        <Card sx={{ padding: 2, margin: 2 }}>
        <CardContent>                                
            <Typography gutterBottom variant="h5" component="div">
                {pub.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {pub.authors}
            </Typography>
        </CardContent>        
    </Card>
    );
  };
  
  export default PublicationComponent;