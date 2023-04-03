import express from "express";

const router=express.Router()
const products = [
    { name: "table", price: 1000 },
    { name: "chair", price: 100 },
    { name: "clock", price: 700 },
  ];
  
  router.get('/', function (req, res) {

    res.json(products);
  });
  router.post('/', function (req, res) {
    const newProduct=req.body;
    products.push(newProduct)
    res.json(products);
    console.log(products)
  });
  //'/'の部分はindex.mjsから読み込みができる
    router.get('/:id', function (req, res) {
        const dProduct=req.body.id
      res.json(products[dProduct]);})


      export default router;