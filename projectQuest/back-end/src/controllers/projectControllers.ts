import { Request, Response } from "express";
import Project from '../models/projectModel.ts';

class ProjectController {
    static async getProjects(req: Request, res: Response){
        try {
            const projects = await Project.find();
            res.status(200).json(projects);
        } catch (error) {
            res.status(400).json({ message: 'Error on searching projects', error });
        }
    }

    static async getProjectId(req: Request, res: Response){
        const { id } = req.params;
        
        try {
            const projects = await Project.findById(id);
            res.status(200).json(projects);
        } catch (error) {
            res.status(400).json({ message: 'Error on searching projects', error });
        }
    }
    
    static async postProject(req: Request, res: Response){
        const { title, xp, level, progress, status } = req.body;
        try {
            const project = new Project({ title, xp, level, progress, status });
            await project.save();
            res.status(201).json(project);
        } catch (error) {
            res.status(400).json({ message: 'Error on creating project', error });
        }
    }

    static async putProject(req: Request, res: Response){
        const { id } = req.params;
        const { title, xp, level, progress, status } = req.body;
        
        try {
            const project = await Project.findByIdAndUpdate(id, { title, xp, level, progress, status }, { new: true });
            if (!project) {
                res.status(404).json({ message: 'Project not found' });
            }
            res.status(200).json(project);
        } catch (error) {
            res.status(400).json({ message: 'Error on updating project', error });
        }
    }

    static async deleteProject(req: Request, res: Response){
        const { id } = req.params;
        
        try {
            const project = await Project.findByIdAndDelete(id);
            if (!project) {
                res.status(404).json({ message: 'Project not found' });
            }
            res.status(200).json({ message: 'Project deleted successfully' });
        } catch (error) {
            res.status(400).json({ message: 'Error on deleting project', error });
        }
    }
}

export default ProjectController;