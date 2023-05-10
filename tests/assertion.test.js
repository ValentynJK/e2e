
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const { getTextContent, countElements } = require('../utils/utils')

describe('Assertion test', () => {

  it('Should assert ulr, first <h1> text and count <p> tags',  async function() {
    const browser = await puppeteer.launch({
      headless: "new", // headless options to run test in open or closed browser, "new" - to avoid warning
      slowMo: 50,
      devtools: false
    }) 
    const page = await browser.newPage();
    await page.goto('https://example.com/');
    const title = await page.title();
    const url = await page.url();
    const text = await getTextContent(page, 'h1')
    const count = await countElements(page, 'p')
    
    expect(title).to.be.a('string', 'Example Domain')
    expect(url).to.include('example.com')
    expect(text).to.be.a('string', 'Example Domain')
    expect(count).to.be.equal(2)

    await browser.close();
  
  }, 10000)
})

//tried-section