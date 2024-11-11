import TodoModel from '../models/index.js';
import { validateNewTodos } from '../models/Validator/index.js';
export const getTodo = async (req, res) => {
    const todo = await TodoModel.findOne({ _id: req.params.id }).select('title _id description isCompleted createdAt');
    if (todo) {
        res.status(200).json(todo);
        return;
    }
    res.status(404).json({ error: 'Todo Item was not found' });
};
export const getTodos = async (req, res) => {
    const todos = await TodoModel.find().select('title _id description isCompleted createdAt');
    res.status(200).json(todos);
};
export const createTodo = async (req, res) => {
    const { error, value } = validateNewTodos(req.body);
    if (error) {
        const errArr = [];
        error.details.map((err) => errArr.push(err.message));
        res.status(400).json({ error: errArr });
        return;
    }
    const ifTodoExits = await TodoModel.findOne({ title: value.title, description: value.description }).select('title _id description isCompleted createdAt');
    if (ifTodoExits) {
        res.status(201).json(ifTodoExits);
        return;
    }
    const newTodo = await TodoModel.create({
        title: value.title,
        description: value.description,
    });
    await newTodo.save();
    res.status(200).json({ _id: newTodo._id, title: newTodo.title, description: newTodo.description });
};
export const updateTodo = async (req, res) => {
    res.send('hellow');
};
export const deleteTodo = async (req, res) => {
    const ifTodoExist = await TodoModel.exists({ _id: req.params.id });
    if (!ifTodoExist) {
        res.status(404).json({ error: 'Todo Item was not found' });
        return;
    }
    await TodoModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: 'Todo Item has being deleted!' });
};
