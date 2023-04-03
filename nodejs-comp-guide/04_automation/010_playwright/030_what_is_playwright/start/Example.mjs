import { chromium } from "@playwright/test";
const browser =await chromium.launch({headless: false,slowMo:500});
const page=await browser.newPage();
await page.goto("http://localhost:3000")
const htmlStr=await page.content();//ページのHTML情報が取得可能
//browser→1つのタブ
console.log(htmlStr)
