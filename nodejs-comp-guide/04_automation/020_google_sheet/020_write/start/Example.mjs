import { GoogleSpreadsheet } from "google-spreadsheet";
import env from 'dotenv';
env.config();
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');


(async () => {
    const doc = new GoogleSpreadsheet("1C5r_W-w6Jx5Okg8PDQKtzQuFQeT_reSXopq17ck1HJI");

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    });
    
    await doc.loadInfo();
    //シートの追加
    await doc.addSheet({title: 'cart',headerValues:['name','price']})//headerValues:→値の追加
   const parson =doc.sheetsByTitle['cart']

   const rows=await parson.addRows([
    {
    name: 'orange',
   price:120
   },{
    name: 'banana',
   price:50
   },{
    name: 'Apple',
   price:140
   },{
    name:"合計",
    price:"=Sum(B2:B4)"
   }

    ])


  rows.forEach(rows => async () =>{await rows.save()});//記述内容がここで反映される  awaitはasyncの中でしか付ける事が出来ない


    // const sheet = doc.sheetsByIndex[0];
    // await sheet.loadCells('A1:C4');

    // const a1 = sheet.getCell(0,0);
    // const b1 = sheet.getCell(0,1);
    // const b2 = sheet.getCellByA1('B2');

    // console.log('a1', a1.value);
    // console.log('b1', b1.value);
    // console.log('b2', b2.value);

})();

/*スクレイビング　localhostの起動→要素をスプレットシートに転記まで
何を取得するのか記載する
*/
