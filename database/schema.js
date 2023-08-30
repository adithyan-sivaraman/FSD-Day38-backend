import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:false,
    },
    completed:{
        type:String,
        required:false,
    }
})

const task = mongoose.model('task',taskSchema);

export {task}