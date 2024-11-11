import { Router } from 'express';

import { createTodo, deleteTodo, getTodo, getTodos } from '../../controllers/index.js';
import { ErrorBoundary } from '../../Middlewares/Error/index.js';

const TodoRoutes = Router();

TodoRoutes.get('/todos', ErrorBoundary(getTodos));
TodoRoutes.post('/todos', ErrorBoundary(createTodo));
TodoRoutes.get('/todos/:id', ErrorBoundary(getTodo));
TodoRoutes.delete('/todos/:id', ErrorBoundary(deleteTodo));

export default TodoRoutes;
