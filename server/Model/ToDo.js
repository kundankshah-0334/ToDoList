import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment";

 const ToDoSchema = mongoose.Schema({
    task : String,
    done : {
      type : Boolean,
      default : false
    }
 
 })
 
 const ToDomodel = mongoose.model('todolist' , ToDoSchema);

 export default ToDomodel;  
