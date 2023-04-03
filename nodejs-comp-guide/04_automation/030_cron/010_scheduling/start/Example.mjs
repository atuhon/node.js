
import cron from "node-cron";
cron.schedule('* * * * * *',() => console.log('毎秒実行'));
cron.schedule('* * * * * *'),() => console.log('1秒毎に実行')