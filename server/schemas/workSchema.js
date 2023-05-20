import mongoose from "mongoose";

const work = new mongoose.Schema({
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

const workSchema = mongoose.model('workSchema', work);
export default workSchema;