import express  from "express";
import req from "../helpers/helpp.mjs"
import Book from "../models/books.mjs"
import {body, validationResult}from "express-validator"
import { registBook,updateBook,getBook,deleteBook} from "../controllers/books.mjs";
 const router =express.Router()

 
router.get('/',req(getBook))
router.get('/',async function(req,res){
    const _id=req.params.id
    const books =await Book.findById(_id);//データの取得,sortで降順に並べる;//データの取得
// res.send('/api/books')//リクエストを確認して処理を書いていく


res.json(books)

})
router.get('/:id',req(getBook)),
// res.send('/api/books')//リクエストを確認して処理を書いていく



router.delete('/:id',req(deleteBook))
// res.send('/api/books')//リクエストを確認して処理を書いていく



router.post(

'/',
body('title').notEmpty(),
body('description').notEmpty(),
body('comment').notEmpty(),
body('rating').notEmpty().isInt({min:1,max:5}),req(registBook))

//全てのバリデーションを通過するとregistBookが呼ばれる

router.patch(
    '/:id',
body('title').optional().notEmpty(),
body('description').optional().notEmpty(),
body('comment').optional().notEmpty(),
body('rating').optional().notEmpty().isInt({min:1,max:5}),
req(updateBook)

)


export default router;

//Routerの中身を調べる
