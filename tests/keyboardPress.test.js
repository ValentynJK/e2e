const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const { getTextContent } = require('../utils/utils')

describe('Keyboard press test', () => {

  it('Should ',  async function() {
    const browser = await puppeteer.launch({
      headless: "n", // headless options to run test in open or closed browser, "new" - to avoid warning
      slowMo: 50,
      devtools: false
    }) 
    const page = await browser.newPage();
    page.setDefaultTimeout(10000);
    page.setDefaultNavigationTimeout(20000);
    await page.goto('http://zero.webappsecurity.com/index.html');
    const title = await page.title();
    const url = await page.url();
    await page.waitForSelector('#searchTerm');
    await page.type('#searchTerm', "Loans");
    await page.keyboard.press('Enter', { delay: 10 });
    await page.waitForNavigation();
    const searchTitle = await getTextContent(page, '#searchTerm')
    
    expect(title).to.be.a('string', 'Zero - Personal Banking - Loans - Credit Cards')
    expect(url).to.include('zero.webappsecurity.com')
    expect(searchTitle).to.be.a('string', 'Search Results:')

    await browser.close();
  
  })
})
