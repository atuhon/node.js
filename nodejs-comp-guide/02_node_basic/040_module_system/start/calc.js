function plus(a, b) {
    return a + b;
  }
  function minus(a,b){
    return a-b;
  }
  // module.exports=plus;

  //requireで他のファイルに書き出せる
   export{
      plus,
     minus,
   };
//↑複数取る場合は上記を使う
//exports→