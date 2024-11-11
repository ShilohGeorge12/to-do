import { Router } from 'express';
import { getToDo } from '../controllers/index.js';
const Routes = Router();
const router = Router();
router.get('/todos', getToDo);
export default Routes;
