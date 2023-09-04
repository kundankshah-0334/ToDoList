import express from "express";
import Conn from "./database/dbs.js";
import cors from "cors";
import {ToDomodel} from "./Model/ToDo.js";
// require('./Model/ToDo.js');

const app = express();
app.use(cors());
app.use(express.json());



app.post("/add" , (req , res) => {
    const data =  req.body.input;
    ToDomodel.create({
        input : input
    }).then(result => {console.log(result)})
    .catch(error => {console.log(error)})
    console.log(data);
})
const PORT = 8000;

Conn();

app.listen(PORT , () => { console.log(`Server is running on port number ${PORT}`)});