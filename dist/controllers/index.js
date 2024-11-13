import TodoModel from '../models/index.js';
import { validateNewTodos, validateUpdateTodo } from '../models/Validator/index.js';
export const getTodo = async (req, res) => {
    const todo = await TodoModel.findOne({ _id: req.params.id }).select('title _id description isCompleted createdAt');
    if (todo) {
        res.status(200).json(todo);
        return;
    }
    res.status(404).json({ error: 'Todo Item was not found' });
};
export const getTodos = async (req, res) => {
    const page = parseInt(`${req.query.page}`) ?? 1; // default values for page
    const limit = parseInt(`${req.query.limit}`) ?? 10; // default values for limit
    const skip = (page - 1) * limit;
    // Perform both queries in parallel using Promise.all
    const [todos, totalItems] = await Promise.all([
        TodoModel.find().select('title _id description isCompleted createdAt').skip(skip).limit(limit).exec(),
        TodoModel.countDocuments(), // Count total documents in parallel
    ]);
    const totalPages = Math.ceil(totalItems / limit);
    res.status(200).json({
        todos,
        totalItems,
        totalPages,
        currentPage: page,
    });
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
    res.status(201).json({
        _id: newTodo._id,
        title: newTodo.title,
        description: newTodo.description,
        isCompleted: newTodo.isCompleted,
        createdAt: newTodo.createdAt,
    });
};
export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    // Validate the updates
    const { error } = validateUpdateTodo(updates);
    if (error) {
        res.status(400).json({ error: error.details.map((detail) => detail.message) });
        return;
    }
    // Filter updates to only include allowed fields
    const allowedFields = ['title', 'description', 'isCompleted'];
    const fieldsToUpdate = Object.keys(updates).filter((key) => allowedFields.includes(key));
    if (fieldsToUpdate.length === 0) {
        res.status(400).json({ error: 'No valid fields provided for update' });
        return;
    }
    // Find the todo by ID and apply updates
    const todo = await TodoModel.findById(id);
    if (!todo) {
        res.status(404).json({ error: 'Todo item not found' });
        return;
    }
    // Update each field safely
    fieldsToUpdate.forEach((field) => {
        todo[field] = updates[field];
    });
    await todo.save();
    res.status(200).json(todo); // Send the updated todo back to the client
};
export const deleteTodo = async (req, res) => {
    const { id } = req.params; // Extract `id` from the route parameters
    const ifTodoExist = await TodoModel.exists({ _id: id });
    if (!ifTodoExist) {
        res.status(404).json({ error: 'Todo Item was not found' });
        return;
    }
    await TodoModel.findByIdAndDelete(id); // Delete the todo item
    res.status(200).json({ message: 'Todo Item has been deleted!' });
};
