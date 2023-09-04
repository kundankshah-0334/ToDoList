import mongoose, { Schema } from "mongoose";

const ToDoSchema = new Schema({
    input : String
});

const ToDomodel = ToDoSchema.model("todolist" , ToDoSchema);
module.exports = ToDomodel;