import { Router } from 'express';

import { getToDo } from '../../controllers/index.js';

const TodoRoutes = Router();

TodoRoutes.get('/todos', getToDo);

export default TodoRoutes;
