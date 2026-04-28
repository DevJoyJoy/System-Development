import mongoose, { Schema, Document, ObjectId, isValidObjectId } from 'mongoose';

interface IMission extends Document {
    title: string;
    difficulty: string;
    xpReward: string;
    completed: string;
    projectId: ObjectId;
}

const missionSchema: Schema = new Schema({
    title: { type: String, required: true },
    difficulty: { type: String, required: true },
    xpReward: { type: String, required: true },
    completed: { type: String, required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
});

const Mission = mongoose.model<IMission>('Mission', missionSchema);

export default Mission;