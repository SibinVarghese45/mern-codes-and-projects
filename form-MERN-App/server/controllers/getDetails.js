
const Student = require('../models/StudentSchema')

exports.getDetails = async (req, res) => {
    try{
        const studentDetails = await Student.find({});
        
        res.status(200).json({
            success: true,
            data: studentDetails,
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}