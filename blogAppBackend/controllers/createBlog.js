const Blog = require('../models/blogApp');

exports.createBlog = async(req, res) => {
    try{
        const {title, description, comments, like} = req.body;
        // console.log(comments)
        const blog = await Blog.create({title, description, comments, like});

        res.status(200).json({
            success: true,
            data: blog
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}
