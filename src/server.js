import express from "express";
import connectDB from "./config/connectDB";
import contactModel from "./models/contact.model";

let app = express();
// connect to mongoDB
connectDB();
let hostname = "localhost";
let port = 8017;

app.get("/test", async (req, res) => {
    try {
        let item = {
            userId: "113",
            contactId: "115"
        };
        let contact = await contactModel.createNew(item);
        res.send(contact);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, hostname, () =>{
    console.log(`App run on ${hostname}:${port}/`);
});