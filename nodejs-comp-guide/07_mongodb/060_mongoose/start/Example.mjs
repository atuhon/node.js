
import{connect,Schema,model,Mixed} from'mongoose';
import env from 'dotenv';
env.config();
connect(process.env.MONGO_URI);

const Catschema= Schema({ 
    name: {type:String,required:true},
    size:{type:Number,required:true},
    bool:{type:Boolean,default:false,alias:'b'},//alias:b→console.log(doc.b));で読み取れるようになる
    dt:{
        type:Date,
        set: function(nv){
            return new Date(nv)
        },
        get: function(nn){
          return nn instanceof Date ? nn:new Date(nn)

        }
         //↑DBから取得される値の型がdate型
         //ならそのままnnを返して、違う場合はdate型に変更
         //nnにはmongoDBに入っている値が来る
    },
   
    arry:[],
    


},{timestamps:true});
const Cat = model('Cat', Catschema );

const kitty = new Cat();
kitty.name='zildjian';
kitty.size=3;
kitty.dt="2013/09/08"
kitty.save().then((doc) => console.log(doc.b));

//model名はsが付く