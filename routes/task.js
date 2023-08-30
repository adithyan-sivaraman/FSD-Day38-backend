import express from 'express';
import { task as taskModel } from '../database/schema.js';
const router = express.Router();

router.post('/add', async (req, res) => {
    const taskData = req.body;
    const lastId = await taskModel.find({});
    const nextId = lastId.length + 1;
    taskData.id = Number(nextId);
    const tasks = new taskModel(taskData);
    await tasks.save();
    res.json(taskData);
});

router.get('/fetch', async (req, res) => {
    const pending = await taskModel.find({ status: 'pending' }, { _id: 0, __v: 0 })
    const completed = await taskModel.find({ status: 'complete' }, { _id: 0, __v: 0 })
    const response = {
        "complete": completed,
        "pending": pending
    }
    res.json(response);

});

router.put('/complete', async(req, res) => {
    const completeTask = req.body;
    const taskID = completeTask.map(task => task.id);
    const date = new Date();
    await  taskModel.updateMany({ id: { $in: taskID } },{ $set: { status: 'complete' ,completed:date.toISOString()} });
    res.send('task updated successfully');

});

export default router;