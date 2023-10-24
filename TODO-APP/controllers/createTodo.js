// import todo model
const Todo = require('../models/Todo');

// define route handler
exports.createTodo = async(req,res) => {
    try{
        // extract title and desc
        const {title, description} = req.body;
        // create todo object and insert in db
        const response = await Todo.create({title, description});

        // send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Entry created successfully"
            }
        )
    }
    catch(err){
        res.status(504).json(
            {
                success: false,
                data: "Internal Server error",
                message: err.message 
            }
        )
    }
}
