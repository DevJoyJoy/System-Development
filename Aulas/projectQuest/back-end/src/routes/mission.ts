import express, { Request, Response, Router } from 'express';
import Mission from '../models/missionModel.ts';
import MissionController from '../controllers/missionControllers.ts'

const router: Router = express.Router();

router
    .post('/createMission', MissionController.postMission)
    .get('/getAllMissions/:id', MissionController.getMissions)
    .put('/updateStatus', MissionController.putMission)
    .delete('/deleteMission/:id', MissionController.deleteMission);
export default router;