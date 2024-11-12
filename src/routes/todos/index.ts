import { Router } from 'express';

import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../../controllers/index.js';
import { ErrorBoundary } from '../../Middlewares/Error/index.js';

const TodoRoutes = Router();

TodoRoutes.get('/todos', ErrorBoundary(getTodos));
TodoRoutes.post('/todos', ErrorBoundary(createTodo));
TodoRoutes.get('/todos/:id', ErrorBoundary(getTodo));
TodoRoutes.delete('/todos/:id', ErrorBoundary(deleteTodo));
TodoRoutes.put('/todos/:id', ErrorBoundary(updateTodo));

export default TodoRoutes;
