import { Router } from "express";
import { deleteProject, getProject, getProjects, getProjectTask, postProject, updateProject } from "../controllers/projects.controllers.js";

const router = Router();

router.get('/projects', getProjects);
router.get('/projects/:id', getProject);

router.get('/projects/:id/tasks', getProjectTask)

router.post('/projects', postProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
export default router;