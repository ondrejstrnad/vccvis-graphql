import express from "express";

const router = express.Router();

// read publications from the file
import { publications } from "../data/data.mjs";

router.get("/", async (req, res) => {

    var answer = publications;

    res.send(answer).status(200);
});


export default router;






































//for(var i = 0; i < answer.length; i++) {
//    delete answer[i].secret;
//    answer[i].name = answer[i].firstname + " " + answer[i].lastname;
//}