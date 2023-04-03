// 非同期処理（await/async）

let a = 0;
init();
async function init(){
    try{
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                resolve(a)
            }, 2000);
         })
         console.log(a);

    }
    catch(e){
        console.log('catchが実行',e)
    }


}
//awaitを付けるとPromiseの関数resolveが呼ばれるまで処理が待機し、呼ばれたら引数の値がresultに格納される





//.then((b) => {
//     console.log(b);
//     return b;
// }).then((b) => {
//     console.log(b);
// }).catch((c) => {
//     console.log('catchが実行', c)
// })


