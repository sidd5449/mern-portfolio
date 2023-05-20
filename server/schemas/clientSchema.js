import mongoose from "mongoose";

const client = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    ghLink:{
        type: String,
        required: true,
    },
    preview:{
        type: String,
        required: true,
    },
});

const clientSchema = mongoose.model('clientSchema', client);
export default clientSchema;