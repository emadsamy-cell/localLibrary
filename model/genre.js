const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name : {type : String, required :true , min: 3 , max:100},
    book : {type : Schema.Types.ObjectId , ref : 'book' , required : true}
});

genreSchema.virtual('url').get(function(){
    return `./catalog/genre/${this._id}`;
});


module.exports = mongoose.model('genre' , genreSchema);
