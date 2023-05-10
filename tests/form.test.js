// form filling test
const puppeteer = require('puppeteer');

describe('Dummy form test', () => {
  it('Should fill and submit the form',  async function() {
    const browser = await puppeteer.launch({
      headless: "new", 
      slowMo: 50,
      devtools: false
    }) 
    const page = await browser.newPage();
    page.setDefaultTimeout(10000);
    page.setDefaultNavigationTimeout(20000);
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.waitForSelector('#main-form');
    await page.type('#developer-name', "Valentyn");
    await page.click('#tried-test-cafe',{ click: 1});
    await page.select('#preferred-interface', 'JavaScript API');
    await page.type('#comments', "I am filling very important message in this field");
    await page.click('#submit-button', { click: 1 });
    await page.waitForSelector('#article-header')
    await browser.close();
  
  }, 10000)
})

//tried-section