
const Student = require('../models/StudentSchema')

exports.addStudentDetails = async(req, res) => {
    const {firstName, lastName, email, createdAt, updatedAt} = req.body
    const studentDetails = new Student({
        firstName, lastName, email, createdAt, updatedAt
    });

    await studentDetails.save().then(() => {
        res.json({
            success: true,
            data: studentDetails,
        })
    }).catch((e) => {
        res.json({
            success: false,
            message: e.message
        })
    })
    // studentDetails.firstName = req.body.firstName;

}
