const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
    book : {type : Schema.Types.ObjectId , ref :'book' , required:true},
    status : {
        type :String ,
        required :true ,
        enum : ['Maintenance' , 'Available' , 'Loaned' , 'Reserved'],
        default : 'Maintenace'
    },
    version : {type : String , required:true},
    due_back : {type:Date , default :Date.now}
});

BookInstanceSchema.virtual('url').get(function(){
    return `./catalog/BookInstance/${this._id}`;
});

module.exports = mongoose.model('BookInstance' , BookInstanceSchema);