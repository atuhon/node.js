import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

 try{
 const Textlocator=page.locator('xpath=//*[@id="__next"]/nav/div/a');
}catch(e){
  console.error('インプット処理エラー')
}
 const pageText=await Textlocator.innerText();//awaitの書き忘れに注意
 console.log(pageText);
  await browser.close();
})();
//locater→ページ上の特定のものを抽出する