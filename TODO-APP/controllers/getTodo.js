const Todo  = require('../models/Todo.js');

// define route handler

exports.getTodo = async(req, res) => {
    try{
        // fetch all items from database
        const todos = await Todo.find({});
        
        //response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire data is fetched"
        }) 
    }
    catch(err){
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        })
    }
}