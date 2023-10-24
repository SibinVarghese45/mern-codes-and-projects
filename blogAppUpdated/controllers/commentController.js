const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

exports.createComment = async (req, res) => {
    try{
        const {post, user, body} = req.body

        // object creationto be carried in order to save like this way
        const comment = new Comment({
            post, user, body
        })

        // save the new commment into db
        const savedComment =  await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post, 
            {$push : {comments: savedComment._id}}, {new: true})
            .populate('comments').exec();

            res.json({
                post: updatedPost
            })

    }
    catch(e){
        return res.status(500).json({
            error: "Error while creating comment"
        })
    }
}
