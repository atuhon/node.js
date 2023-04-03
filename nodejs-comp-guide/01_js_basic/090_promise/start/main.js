//非同期処理
//コードの記載順番通りに処理が行われないもの

let a=0;
console.log(a);
//これは同期処理

new Promise((re,reject)=>{

setTimeout(()=>{ a=1;reject(a)},2000)}) .then((b) => {console.log(b)}).catch((c)=>{
    console.log('catchが実行',c)
})


/*2000ミリ秒経過しa=1が呼ばれる
re()が呼ばれるとthenが実行されconsole.logが出力
第２引数のrejectはcatchを取得する→エラー時に使用する*/

