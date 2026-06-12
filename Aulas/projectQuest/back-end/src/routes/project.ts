import express, { Request, Response, Router } from 'express';
import Project from '../models/projectModel.ts';
import ProjectController from '../controllers/projectControllers.ts'

const router: Router = express.Router();

router
    .post('/createProj', ProjectController.postProject)
    .get('/getAllProjs', ProjectController.getProjects)
    .get('/getProj/:id', ProjectController.getProjectId)
    .put('/updateProj', ProjectController.putProject)
    .delete('/deleteProj/:id', ProjectController.deleteProject);
export default router;