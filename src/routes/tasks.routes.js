import { Router } from "express";
import { deleteProject } from "../controllers/projects.controllers.js";
import { createTask, getTask, getTasks, updateTask } from "../controllers/tasks.controllers.js";

const router = Router();

router.get('/tasks/',getTasks)
router.post('/tasks/',createTask)
router.put('/tasks/:id',updateTask)
router.delete('/tasks/:id',deleteProject)
router.get('/tasks/:id',getTask)




export default router;

