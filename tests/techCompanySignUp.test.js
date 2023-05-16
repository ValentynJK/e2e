// test to verify tech company signup
// TODO: Clarify assertions
// TODO: Create data set for verification (object)
// TODO: End test with deleting data record in Airtable and CRM. Explore Airtable API

const puppeteer = require('puppeteer');
const {getTodayDate} = require('../utils/utils');
const {SIGN_UP_DATA_SET} = require('../data/techCompanySignUpForm');

const {
  signingOnBehalf,
  companyName,
  companyWebSite,
  firstName,
  lastName,
  businessEmailAddress,
  countryOfRegistration,
  phoneNumber,
  roleInTheCompany,
  experienceWithProBono,
  startDate
} = SIGN_UP_DATA_SET



describe('Tech company sign up form test', () => {

  // TODO: After all: check new data appears in AirTable and User.com and delete test records
  
  it('Should fill the Sign Up forms', async function () {
    const browser = await puppeteer.launch({
      headless: false, // headless options to run test in open or closed browser, "new" - to avoid warning
      slowMo: 50,
      devtools: false
    });
    const page = await browser.newPage();
    page.setDefaultTimeout(10000); // default timeout
    page.setDefaultNavigationTimeout(20000); // timeout for navigation steps
    console.log('Goes to sign up form');
    await page.goto('https://www.techtotherescue.org/tech')
   
    console.log('Accepting Cookies')
    await page.waitForSelector('button ::-p-text(Accept)');
    await page.click('button ::-p-text(Accept)', { click: 1 });
   
    console.log('Click the Sing Up and go to the form')
    await page.click('a ::-p-text(Sign up)', { click:1 });
  
    console.log('Fills the form')
    await page.select(`[id="sw-form-capture-Signup Representation"]`, signingOnBehalf);  
    await page.type('input[name="Organization From Signup"]', `${companyName} ${getTodayDate()}`);
    await page.type('input[id="sw-form-capture-Website From Signup"]', companyWebSite);
    await page.type('input[id="sw-form-capture-First name"]', firstName);
    await page.type('input[id="sw-form-capture-Last name"]', lastName);
    await page.type('input[id="sw-form-capture-email-input"]', businessEmailAddress);
    await page.select(`[id="sw-form-capture-Country From Signup"]`, countryOfRegistration);
    await page.type('input[id="sw-form-capture-Phone"]', phoneNumber);
    await page.select(`[id="sw-form-capture-Job role"]`, roleInTheCompany);
    await page.select(`[id="sw-form-capture-Pro Bono Experience From Signup"]`, experienceWithProBono);
    await page.select(`[id="sw-form-capture-Availability From Signup"]`, startDate);

    console.log('Submitting the form')
    // TODO: Submit the form

    await browser.close();
  }) 
}); 


