import {Schema , model , connect} from 'mongoose';


const AuthorSchema = new Schema({
    fname: {type :String , required:[true , "Author Name can't be empty" ], max:100},
    sname : {type : String , required:true },
    birth : {type:Date },
    death : {type:Date}
});

AuthorSchema.virtual('fullName').get(function(){
    let fullName = "";
    
    if(this.fname && this.sname)
        fullName +=(this.fname + this.sname);
    
    return fullName;
});

AuthorSchema.virtual('url').get(function(){
    return `./catalog/author/${this._id}`;
});

export const AuthorModel = model('Author' , AuthorSchema);
