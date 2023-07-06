import workSchema from "../schemas/workSchema.js";


export const uploadWorks = async(req, res) => {
    try {
        const {title, desc, ghLink, preview, id} = req.body;
        const data = {
            title,
            desc,
            ghLink,
            preview,
            id,
            picturePath: req.file.path
        }
        const post = new workSchema(data);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(401).json({message: err.message});
    }
}