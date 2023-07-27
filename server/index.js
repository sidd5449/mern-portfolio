import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import getWorkRouter from './routes/getWorkRouter.js';
import getClientRouter from './routes/getClientRouter.js';
import { uploadWorks } from "./controllers/uploadWorks.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use("/public/assets", express.static(path.join(__dirname, 'public/assets')))

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");

    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage})


const PORT = 8080;

app.use('/getWorks', getWorkRouter);
app.use('/getClient', getClientRouter);
app.post('/uploadWorks', upload.single("picture"), uploadWorks);



const data = [
    {
        id: 1,
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet consectuter adipiscing elit',
        ghLink: 'https://github.com',
        preview: 'https://google.com',
    },
    {
        id: 2,
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


