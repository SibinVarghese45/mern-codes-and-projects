const Blog = require('../models/blogSchema');

exports.createBlogs = async(req, res) => {
   try{
    const {blogtitle, blogdescription} = req.body;
    const blogs = await Blog.create({ blogtitle, blogdescription })
    res.status(200).json({
        success: true,
        data: blogs
    })
   }catch(e){
        res.status(500).json({
            sucess: false,
            message: e.message
        })
   }

}
    