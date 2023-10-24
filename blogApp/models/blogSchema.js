const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    blogtitle: {
        type: String,
        required: true,
    },

    blogdescription: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("Blogs",BlogSchema)