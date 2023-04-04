
import booksRoutes from "./books.mjs";

/**
 * ここでやった事
 *・booksへのパス設定
 */
import express from "express"
import booksRouter from"./books.mjs"
const router=express.Router();//Router→これを付けるとリクエスト（/book）とかに対して処理を記載できる
router.use("/books",booksRouter)// /booksパスに対してbooksRouterを設定 booksRouterの中身はbooks.mjsの変数routerの値が入っている
export default router;

/*
import express from "express"のimport後ろexpress の部分の名前は何でもよい
読み込まれるモジュールはexport default に記載されているモジュールになる
なお、export default は一つしか存在できないのでどのモジュールを読み込むかは決定している
*/