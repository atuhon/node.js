//ファイルへの書き込み
console.log('hello, node.js');
const fs=require('fs');
fs.writeFileSync('./tast.txt','hello,node.js');
//require→commonJsのコマンド
//pathの指定
const path=require('path');
const distPath = path.resolve(__dirname,'./st.txt');
fs.writeFileSync(distPath,'hello,node.jk')


console.log(distPath);

//const distPath = path.resolve(__dirname,'./st.txt');
//これでパスを指定していく