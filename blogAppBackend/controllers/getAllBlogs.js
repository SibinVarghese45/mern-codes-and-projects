const BlogApp = require('../models/blogApp');

exports.getAllBlogs = async (req, res) => {
    try{
        const allBlogs = await BlogApp.find({});

        res.status(200).json({
            success: true,
            data: allBlogs
        })
    }catch(e){
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}