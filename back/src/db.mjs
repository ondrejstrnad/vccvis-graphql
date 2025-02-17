import { MongoClient } from "mongodb";

const MONGO_DATABASE_NAME = "vccvisexample";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
let client = null;
var mongo = null;
export default mongo;

export function db() {
    if (!mongo) {
        return connect();
    }

    return mongo;
}

async function connect() {
    if (mongo) 
        return mongo; // Use existing connection if available

    client = new MongoClient(process.env.DB_CONNECTION_STRING);

    try {
        await client.connect();
        console.log("Connected to MongoDB");
        mongo = client.db(MONGO_DATABASE_NAME); // Assign the database instance to `db`
        return mongo;
    } catch (err) {
        console.error("Connection failed:", err);
        throw err;
    }
}

export async function disconnect(keepAlive = false) {
    if (!keepAlive) {
        await client.close();
        mongo = null;
        console.log("Connection to MongoDB closed");
    }
}

