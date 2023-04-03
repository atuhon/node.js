import{GoogleSpreadsheet} from "google-spreadsheet";
import env from 'dotenv';
env.config();
import{createRequire} from "module";//ESmoduleでrequireを使う時に必要
const require=createRequire(import.meta.url)//()内はパスを指定する　import.meta.urlで現在実行するファイルのパスを指定
const secrets=require('../../../google_secrets.json');//←シングルクオート


(async()=>{
   const doc= new GoogleSpreadsheet("1C5r_W-w6Jx5Okg8PDQKtzQuFQeT_reSXopq17ck1HJI")//スプレットシートの読み込み
   await doc.useServiceAccountAuth({//カーソルをホバーした時にpromiseが出現したら非同期処理
    client_email:secrets.client_email,
    private_key: secrets.private_key
   });
   await doc.loadInfo();//スプレットシート内の情報などを読み込む
   const sheet=doc.sheetsByIndex[0]//どのシートを取得するのか0は一番左
   await sheet.loadCells('A1:C5')//範囲の指定
   const a1=sheet.getCell(0,0);//場所の指定
   const a5=sheet.getCell(4,0);
   const b1=sheet.getCell(0,1);
   const c1=sheet.getCellByA1('C1');//セルの指定

   console.log('a1',a1.value)//valueを必ず付ける
   console.log('b1',b1.value)
   console.log('c1',c1.value)
 
   
   a1.value=11;
   b1.value=14;//値の更新
   b1.textFormat={fontSize: 18}
   a5.value="=sum(A1:A4)"
   await sheet.saveUpdatedCells();                             

})();