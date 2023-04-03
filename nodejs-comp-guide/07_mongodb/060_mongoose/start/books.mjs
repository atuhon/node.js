
import{connect,Schema,model,Mixed} from'mongoose';
import env from 'dotenv';
env.config();
connect(process.env.MONGO_URI);

const bookschema=Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    rating:{type:Number,$gt:1,$lt:5},
    comment:{type:String},


},{timestamp:true})
const book= model('book', bookschema)
const books=new book();
books.title="潮騒";
books.description="三島由紀夫"
books.rating=3
books.comment="爽やか"
books.save().then(()=>console.log("処理できました"))

//model名はsが付く