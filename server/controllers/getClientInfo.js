import clientSchema from '../schemas/clientSchema.js';

export const getClientInfo = async(req, res) => {
    try {
        const clientData = await clientSchema.find();
        res.status(200).json(clientData);
    } catch (err) {
        res.status(404).json({message: err.message});
        
    }
}