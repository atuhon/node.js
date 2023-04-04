import {body, validationResult}from "express-validator"
import Book from "../models/books.mjs"


async function getBook(req,res){
    const _id=req.params.id
    const books =await Book.findById(_id)
if(books===null)return res.status(404).json({msg:'page not found'})//null時の処理
res.json(books)}
//処理を途中で止める場合はreutrnを付けて止める



async function deleteBook(req,res){
    
   const _id=req.params.id
   const {deletedCount}=await Book.deleteOne({_id})
   if(deletedCount===0)return res.status(404).json({msg:'page not found'})//null時の処理
   console.log(result);
   res.json("msg:delete")
   console.log("削除しました")
   }
  
   





async function registBook(req,res){
    const errors= validationResult(req)

    if(!errors.isEmpty()){
   const errs=errors.array()
   return res.status(400).json(errs)
    }//エラー検知処理

    // const body=req.body;
    const book= new Book(req.body);
    const newBook=await book.save();
    res.json(newBook)

}


async function updateBook(req,res){
    const errors= validationResult(req)
    
    if(!errors.isEmpty()){
        const errs=errors.array()
        return res.status(400).json(errs)
         }//エラー検知処理

    const { title,description,comment,rating}=req.body;
    const _id=req.params.id;
    const book=await Book.findById(_id);
    if(title !==undefined)book.title=title;
if(description !==undefined)book.description=description;
if(comment !==undefined)book.comment=comment;
if(rating !==undefined)book.rating=rating;
if(book===null)return res.status(404).json({msg:'page not found'})//null時の処理

await book.save();
res.json(book)
  
}


export {registBook, updateBook,getBook,deleteBook};