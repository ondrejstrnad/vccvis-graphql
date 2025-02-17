import express from "express";
import { db, disconnect } from "./db.mjs";

const router = express.Router();

// read people from the file
import { staff } from "../data/data.mjs";

router.get("/", async (req, res) => {

    var answer = staff;
    
    res.send(answer).status(200);
});

// to retrieve one by id
router.get("/:id", async (req, res) => {

    // TODO: implement
    var answer = staff[0];

    res.send(answer).status(200);
});



router.post("/", async (req, res) => {

    var staff = req.body;

    // TODO: store

    var answer = 1;
    res.send(answer).status(200);
});

router.put("/", async (req, res) => {

    var staff = req.body;

    // TODO: update

    var answer = 1;
    res.send(answer).status(200);
});



















// read people from the database
/*
router.get("/", async (req, res) => {
    var result = [];

    try {
        var mongo = await db();

        // find the data
        result = await mongo.collection("people")
            .find({})
            .toArray();

        for (var i = 0; i < result.length; i++) {
            delete result[i].secret;
        }

    } catch (ex) {
        console.error("error: " + ex);
    }
    finally {
        // Ensures that the client will close when you finish/error        
        await disconnect();
    }

    res.send(result).status(200);
});

*/


export default router;






































//for(var i = 0; i < answer.length; i++) {
//    delete answer[i].secret;
//    answer[i].name = answer[i].firstname + " " + answer[i].lastname;
//}