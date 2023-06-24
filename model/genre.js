import { Schema , model } from "mongoose";

const genreSchema = new Schema({
    name : {type : String, required :true , min: 3 , max:100},
    book : {type : Schema.Types.ObjectId , required : true}
});

genreSchema.virtual('url').get(function(){
    return `./catalog/genre/${this._id}`;
});


export const genreModel = model('genre' , genreSchema);
