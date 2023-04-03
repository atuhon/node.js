import env from 'dotenv'
env.config();
import { MongoClient,ServerApiVersion } from "mongodb";



const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function getCollection(){
try{
await client.connect();
const db=client.db("bookshelf");//db名
return db.collection("books")  //returnで返す
}catch(e){
// console.error(e)

await client.close();
}}
getAllBooks();
async function getAllBooks(){
    const col=await getCollection();

    //const cursor=col.find({$or:[{rating: 3},{title:'バックエンド開発'}]});//引数追加で検索可能 or条件を使用可能→{$or:[{rating: 5},{title:'バックエンド開発'}]}
    //const cursor=col.find({title:{$in:[ 'ごんぎつね4','バックエンド開発']}});//inを使った検索
    //const cursor=col.find({rating:{$gt:2,$lt:5}});  //条件範囲内を指定　　gt→gt>任意の数字 lt→lt<任意の数字　　本文では rating>2 and 5>ratingみたいな数え方になる（>=ではない）
    const cursor=col.find({rating:{$gte:2,$lte:5}}); //gt ltにeを付けると>= <=の意味になる
    const result=await cursor.toArray();
    console.log(result);
   client.close();
    
}
//toArray→レコードの一覧を取得する