import express from 'express';
import peopleRoute from "./people.mjs";
import publicationsRoute from "./publications.mjs";
import dotenv from "dotenv";

const app = express();

dotenv.config();

// REST endpoints
app.use("/people", peopleRoute);
app.use("/publications", publicationsRoute);

app.get('/', (req, res) => {
    res.send('Default content...!');
});

// running the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






























import { graphqlHTTP } from 'express-graphql';
import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLID, GraphQLInt } from 'graphql';


// EXAMPLE: local dataset 
import { staff, publications } from "../data/data.mjs";

// Define the types
const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        _id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        position: { type: GraphQLString },
        secret: { type: GraphQLString },
        fullname: {
            type: GraphQLString,
            resolve: (parent) => {
                return `${parent.firstname} ${parent.lastname}`;
            }
        },
        publications: {
            type: new GraphQLList(PublicationType),
            resolve: (parent) => parent.publications.map(pubNum =>
                publications.find(pub => pub.num === pubNum)
            )
        }
    })
});

const PublicationType = new GraphQLObjectType({
    name: 'Publication',
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        year: { type: GraphQLInt },
        authors: { type: GraphQLString }
    })
});


const PublicationByYearType = new GraphQLObjectType({
    name: 'PublicationByYearType',
    fields: () => ({
        year: { type: GraphQLID },
        publications: { type: new GraphQLList(PublicationType) },
    })
});



// Define Query Type
const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        people: {
            type: new GraphQLList(PersonType),
            resolve: () => staff
        },
        professors: {
            type: new GraphQLList(PersonType),
            resolve: () => staff.filter(d => d.position === "Professor")
        },
        scientists: {
            type: new GraphQLList(PersonType),
            resolve: () => staff.filter(d => d.position === "Research Scientist")
        },
        publications: {
            type: new GraphQLList(PublicationType),
            resolve: () => publications
        },
        publicationsByYear: {
            type: new GraphQLList(PublicationByYearType),
            resolve: () => {              
                const grouped = publications.reduce((acc, pub) => {
                    if (!acc[pub.year]) {
                        acc[pub.year] = { year: pub.year, publications: [] };
                    }
                    acc[pub.year].publications.push(pub);
                    return acc;
                }, {});

                return Object.values(grouped);
            }
        }
    }
});

// Define Schema
const schema = new GraphQLSchema({
    query: QueryType
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true, // Enables GraphiQL UI for testing
    customFormatErrorFn: (error) => {
        console.log(error);
        return error;
    }
}));













// EXAMPLE: dataset from MongoDB
// TODO: change the DB_CONNECTION_STRING in .env file of this project with your MongoDB Atlas connection string
// For more info check 'dotenv' package. The string should be like 'DB_CONNECTION_STRING=mongodb+srv://...'

/*
import { db } from "./db.mjs";

const PublicationType = new GraphQLObjectType({
    name: 'Publication',
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        year: { type: GraphQLInt },
        authors: { type: GraphQLString },
        num: { type: GraphQLInt }
    })
});

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        _id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        position: { type: GraphQLString },
        secret: { type: GraphQLString },
        fullname: {
            type: GraphQLString,
            resolve: (parent) => {
                //console.log("Parent in fullname resolver:", parent);
                return `${parent.firstname} ${parent.lastname}`;
            }
        },
        publications: {
            type: new GraphQLList(PublicationType),
            resolve: async (parent, args, { db }) => {
                await parent.publications.map(pubNum =>
                    db.collection('people').findOne({ num: pubNum })
                )  
            }
        }
    })
});

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        people: {
            type: new GraphQLList(PersonType),
            resolve: async (parent, args, { db }) => {
                try {
                    const people = await db.collection('people').find().toArray();
                    return people;
                } catch (err) {
                    throw new Error('Fetching people error');
                }
            }
        },
        professors: {
            type: new GraphQLList(PersonType),
            resolve: async (parent, args, { db }) => {
                try {
                    const people = await db.collection('people').find({ position: "Professor" }).toArray();
                    return people;
                } catch (err) {
                    throw new Error('Fetching professors error');
                }
            }
        },
        scientists: {
            type: new GraphQLList(PersonType),
            resolve: async (parent, args, { db }) => {
                try {
                    const people = await db.collection("people").find({ position: "Research Scientist" }).toArray();
                    return people;
                } catch (err) {
                    throw new Error('Fetching scientists error');
                }
            }
        },
        publications: {
            type: new GraphQLList(PublicationType),
             resolve: async (parent, args, { db }) => {
                try {
                    const publications = await db.collection("publications").find().toArray();
                    return publications;
                } catch (err) {
                    throw new Error('Fetching publications error');
                }
            }
        }
    }
});

// Define Schema
const schema = new GraphQLSchema({
    query: QueryType
});

app.use('/graphql', async (req, res) => {
    const mongo = await db();

    graphqlHTTP({
        schema: schema,        
        graphiql: true, // Enables GraphiQL UI for testing
        customFormatErrorFn: (error) => {
            console.error(error);
            return error;
        },
        context: { db: mongo }
    })(req, res);

});
*/
