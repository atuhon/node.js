import cron from "node-cron";
import{addEmmployeesToGs} from "./google-sheet.mjs"
import { sendEmail } from "./email.mjs";
// cron.schedule("15 17 * * * ",()=> {  　　　　　//定期実行
//     addEmmployeesToGs();
// });
main();
async function main(){
    const dt=new Date;
  const dtstr=dt.toDateString();
  const sheetName="https://docs.google.com/spreadsheets/d/1C5r_W-w6Jx5Okg8PDQKtzQuFQeT_reSXopq17ck1HJI/edit#gid=1071301449"
    try{
    await addEmmployeesToGs();
    sendEmail("処理が成功しました",`処理時刻:${dtstr}\n${sheetName}`)//${e}→エラーの詳細
}catch{
    sendEmail("エラーが発生しました",`エラー発生時刻:${dtstr}\n${e}`)//${e}→エラーの詳細
}}