import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import getWorkRouter from './routes/getWorkRouter.js';
import getClientRouter from './routes/getClientRouter.js';
import workSchema from "./schemas/workSchema.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors);

const PORT = 8080;

app.use('/getWork', getWorkRouter);
app.use('/getClient', getClientRouter);
console.log();

const data = [
    {
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet consectuter adipiscing elit',
        ghLink: 'https://github.com',
        preview: 'https://google.com',
    },
    {
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet consectuter adipiscing elit',
        ghLink: 'https://github.com',
        preview: 'https://google.com',
    },
]
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    // workSchema.insertMany(data);//
    app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT}`));
}).catch((err) => console.log(err.message));


