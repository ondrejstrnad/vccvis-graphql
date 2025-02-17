import { Box, Button } from "@mui/material";
import PersonComponent from "./PersonComponent";
import { Person } from "../models/Person";
import React from "react";
import { getPeople, getPeopleGraphQL } from "../ApiComm";
import { Publication } from "../models/Publication";
import PublicationComponent from "./PublicationComponent";

const PeopleComponent = () => {
    const [people, setPeople] = React.useState<Person[]>();
    const [publications, setPublications] = React.useState<Publication[]>();

    const reload = () => {
        // comment one of the functions bellow in order to use prefered API

        // REST
        getPeople(setPeople);

        // GRAPHQL
        //getPeopleGraphQL(setPeople);
    }

    const clear = () => {
        setPeople(undefined);
        setPublications(undefined);
    }

    const handleShowPublications = (p: Person) => {
        if (p) {
            setPublications(p.publications);
        }
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={reload} sx={{ margin: 1 }} >
                Reload
            </Button>
            <Button variant="contained" color="primary" onClick={clear} >
                Clear
            </Button>
            
            <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-around"
                alignItems="center"
                gap={2}
                p={2}
                bgcolor="whitesmoke"
            >
                {
                    people?.map(p => {
                        return <PersonComponent person={p} handleShowPublications={handleShowPublications} />
                    })
                }
            </Box>

            
            {publications ?
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent="space-around"
                    alignItems="center"
                    gap={2}
                    p={2}
                    bgcolor="whitesmoke"
                >
                    {
                        publications.map(p => {
                            return <PublicationComponent pub={p} />
                        })
                    }
                </Box> : null}
        </>
    )
}

export default PeopleComponent;