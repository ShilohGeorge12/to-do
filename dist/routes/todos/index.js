import { Router } from 'express';
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../../controllers/index.js';
import { ErrorBoundary } from '../../Middlewares/Error/index.js';
export const TodoRoutes = Router();
/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all todos
 *     responses:
 *       200:
 *         description: A list of all todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   completed:
 *                     type: boolean
 */
TodoRoutes.get('/todos', ErrorBoundary(getTodos));
/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Buy groceries"
 *               completed:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 completed:
 *                   type: boolean
 */
TodoRoutes.post('/todos', ErrorBoundary(createTodo));
/**
 * @swagger
 * /api/todos/{id}:
 *   get:
 *     summary: Get a specific todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the todo to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single todo object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *       404:
 *         description: Todo not found with the specified ID
 */
TodoRoutes.get('/todos/:id', ErrorBoundary(getTodo));
/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a specific todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the todo to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *       404:
 *         description: Todo not found with the specified ID
 */
TodoRoutes.delete('/todos/:id', ErrorBoundary(deleteTodo));
/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a specific todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the todo to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated todo"
 *               completed:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *       400:
 *         description: Invalid request body or bad data
 *       404:
 *         description: Todo not found with the specified ID
 */
TodoRoutes.put('/todos/:id', ErrorBoundary(updateTodo));