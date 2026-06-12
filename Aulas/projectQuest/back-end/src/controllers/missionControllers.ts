import { Request, Response } from "express";
import Mission from '../models/missionModel.ts';
import Project from "../models/projectModel.ts";

class MissionController {
    static async getMissions(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const missions = await Mission.find({ projectId: id });

            res.status(200).json(missions);
        } catch (error) {
            res.status(500).json({ message: 'Error on searching missions', error });
        }
    }
    
    static async postMission(req: Request, res: Response){
        const { title, difficulty, xpReward, completed, projectId } = req.body;
        try {
            const mission = new Mission({ title, difficulty, xpReward, completed, projectId });
            await mission.save();
            res.status(201).json(mission);
        } catch (error) {
            res.status(400).json({ message: 'Error on creating mission', error });
        }
    }

    static async putMission(req: Request, res: Response){
        const { id } = req.params;
        const { title, difficulty, xpReward, completed, projectId  } = req.body;
        
        try {
            const mission = await Mission.findByIdAndUpdate(id, { title, difficulty, xpReward, completed, projectId }, { new: true });
            if (!mission) {
                res.status(404).json({ message: 'Mission not found' });
            }
            res.status(200).json(mission);
        } catch (error) {
            res.status(400).json({ message: 'Error on updating mission', error });
        }
    }

    static async deleteMission(req: Request, res: Response){
        const { id } = req.params;
        
        try {
            const mission = await Mission.findByIdAndDelete(id);
            if (!mission) {
                res.status(404).json({ message: 'Mission not found' });
            }
            res.status(200).json({ message: 'Mission deleted successfully' });
        } catch (error) {
            res.status(400).json({ message: 'Error on deleting mission', error });
        }
    }
}

export default MissionController;