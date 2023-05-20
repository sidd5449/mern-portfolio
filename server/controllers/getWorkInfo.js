import workSchema from '../schemas/workSchema.js';

export const getWorkInfo = async(req, res) => {
    try {
        const workData = await workSchema.find();
        res.status(200).json(workData);
    } catch (err) {
        res.status(404).json({message: err.message});
        
    }
}