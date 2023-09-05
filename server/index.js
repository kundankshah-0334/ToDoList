import express from "express";
import Conn from "./database/dbs.js";
import cors from "cors";
import ToDomodel from "./Model/ToDo.js";

const app = express();
app.use(cors());
app.use(express.json());


Conn();

 

app.get("/get", (req, res) => {
    ToDomodel.find()
      .then((result) => {
        res.status(200).json(result); // Send a successful response with JSON data
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching data." }); // Send an error response with a message
      });
  });

app.post("/add" , (req , res) => {
    const task =  req.body.task;
    ToDomodel.create({
        task : task
    }).then(result => {console.log(result)})
    .catch(error => {console.log(error)})
  
})

app.put("/update/:id" , (req , res) => {
  const {id} = req.params;
  ToDomodel.findByIdAndUpdate({_id : id} , {done : true})
  .then(r => res.json(r))
  .catch(e => res.json(e));
})

app.delete("/delete/:id" , (req , res) => {
  const {id} = req.params;
  ToDomodel.deleteOne({_id : id})
  .then(r => res.json(r))
  .catch(e => res.json(e));
})

const PORT = 9000;


app.listen(PORT , () => { console.log(`Server is running on port number ${PORT}`)});