import { GoogleSpreadsheet } from 'google-spreadsheet';
import env from 'dotenv';
env.config();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');
import { getEmployeesp } from './scraping.mjs';
(async () => {
  const doc = new GoogleSpreadsheet("1C5r_W-w6Jx5Okg8PDQKtzQuFQeT_reSXopq17ck1HJI");

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();
  const employees =await getEmployeesp();
  const sheet=doc.sheetsByTitle['scraping'];
  const rows =await sheet.addRows(employees);
rows.forEach(row =>row.save());


})();
/*スクレイビング　localhostの起動→要素をスプレットシートに転記まで
1.google-spreadsheetを取得する
import { GoogleSpreadsheet } from 'google-spreadsheet';
2.何を取得するのか記載する
3.

*/