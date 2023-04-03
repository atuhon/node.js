import { chromium } from "@playwright/test";


async function getEmployeesp(){
  const browser = await chromium.launch(false);
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const cardLocators = page.locator(".cards.list-group-item");//名前のリスト
  const cardCount = await cardLocators.count();

  const fetchedCards = [];
  for(let i = 0; i < cardCount; i++) {
    const cardLocator = cardLocators.locator(`nth=${i} >> a`);
    const cardText = await cardLocator.textContent();
    
    await cardLocator.click();
    const companyLocator = page.locator('.card-title.company');//所属企業
    const companyText = await companyLocator.textContent();

    fetchedCards.push({
      company: companyText,
      name: cardText
    });//事前にシートにcompanyとnameを入れておく

    const backLocator = page.locator('text=戻る');
    await backLocator.click();

  }

  await browser.close();

  return fetchedCards;//関数の実行元に返る
};
export{getEmployeesp}