
/*ここの役割
ルーティング
→ルーティングっていうのはHTTPリクエスト（URL欄にある/の後のやつ）に応じて
コードの表示先を変えることです。
・サーバを立てる
・別ファイルで定義した部分を呼び出す
*/
import path from "path";
import express from "express"
import apiRoutes from "./api-routes/index.mjs"  //処理の順番
import env from 'dotenv';
import "./helpers/db.mjs"//読み込むだけなので特に名前を付けない
env.config();
const app =express()
const port =process.env.PORT || 8080;
app.use(express.json())
//import cors from "cors"
//app.use(cors({origin: "*"//複数のサーバを使用して起動する場合、規定外のサーバでも出力できるようになる
//}))
//API
app.use("/api",apiRoutes)
app.use(function(req,res){
  res.status(404).json({msg: "うんち not found"})
})// 起動した時に app.use("/api",apiRoutes)の処理が行われなった場合はこっち
// /api/books以外のパスの場合は全てこっち

app.use(function(err,req,res,next){//booksから送られてきた処理
  if(res.headersSent){ //headersSend→レスポンスが送信済みの場合はtrueになる

    return next(err)
  }
  res.status(500).json({msg: " えらーなんよ"})//resを返却していない場合
})

//rootの作成　　/apiに対してapiRoutesの処理（多分）
//サーバー
app.listen(port,function(){
    console.log(`Server  Start: http://localhost:${port}`)
})

/**メモ
 * importしたファイルはuseで使用する
 * サーバ起動の際の処理の順番↓
 * １．package jsonの作成
 * 　ーファイル移動→08_bookshelf_backend
 * 　ー npm init -yで初期package json作成
 * 　ー express nodemon dotenvのインストール
 * ２．package.json scriptにサーバ起動条件を記載したファイルを指定して呼び出す
 * 　ーコード
 * 
  "scripts": {
    "dev:api": "npx nodemon app.mjs"
  },
 * ↑app.mjsを指定して起動する
 * 
 * ３．インストールされた（useで書かれた）expressが実行される
 * envはconfig()で読み込まれる
 * 　ー　サーバの起動条件を書く
 * 　ー　/apiに対してapiRoutesを実行する
 * 　ー実行内容は→"./server/api-routes/index.mjs"のデータを取得
 * 
 * 
 * ４．index.mjs内部処理
 *   ー　importでbooks.mjsの処理を取得
 *   ー　↑処理の内容を/booksに入れる
 * 
 * 
 * ５．booksの処理
 *   ー　get('/',function(req,res){で値を取得
 *   ー　getを使用した時点でURLは api/booksとなっている
 *   ー　res.send('/api/books')//リクエストを確認して処理を書いていく
})
 * 
 * 
 * 
 * 
 * 
 * 
 * 分からんポイント
 * １．/booksを付けた時になぜデータベース内の一覧が確認できるのか
 * routerに本の一覧が入ってるっぽい
 */