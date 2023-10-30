const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required : true,
    },
    author:{
        type:String,
        required: true,
    },
    publishYear:{
        type:Number,
        required:true,
    },
},{
    timestamps: true // Saves createdAt and updatedAt as dates. CreatedAt will be a timestamp the moment the document is created
});

module.exports = mongoose.model('Book', bookSchema);
