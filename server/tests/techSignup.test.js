const puppeteer = require('puppeteer');
require('dotenv').config()
const { getTodayDate } = require('../../utils/utils');
const { CONTACT_INFO_DATASET, EXPERTISE_DATASET, CAUSES_DATASET } = require('../../data/techCompanySignUpForm');

const { throwError } = require('../../utils/errorConstructor')

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
} = CONTACT_INFO_DATASET;

const {
  welcomeText,
  involvingType,
  aboutCompany,
  companySize,
  softwareExpertise,
  visualAndAccessibility,
  dataManagementAndAnalytics,
  digitalMarketing,
  innovativeSolutions,
  strategy,
  other
} = EXPERTISE_DATASET

const { areaOfInterests, motivation } = CAUSES_DATASET;

const checkboxSelectorClass = "checkmark position-relative sw-background-color-FAFAFC hover:sw-background-color-FAFAFC sw-font-size-m sw-text-color-212121 sw-font-family-default sw-border-radius-m sw-margin-top-6xs sw-margin-bottom-6xs sw-border-style-solid sw-border-width-xs sw-border-color-F0F0F4 hover:sw-border-style-solid hover:sw-border-width-xs hover:sw-border-color-AEAEB5 sw-box-shadow-none sw-display-inline-block sw-outline-none sw-checkbox-s"

async function techCompanySignUp() {

  console.log("Setting browser")

  const browser = await puppeteer.launch({
    executablePath: process.env.NODE_ENV === "production" ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath(),
    headless: "new", // headless options to run test in open or closed browser, "new" - to avoid warning
    slowMo: 50,
    devtools: false,
    defaultViewport: null,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-sandbox',
      '--no-zygote',
      '--deterministic-fetch',
      '--disable-features=IsolateOrigins',
      '--disable-site-isolation-trials',
    ]
  });
  console.log("Browser set")
  try {
    let log = []
    console.log("Setting page")
    const page = await browser.newPage();
    console.log("Page is set")
    page.setDefaultTimeout(15000); // default timeout
    page.setDefaultNavigationTimeout(30000); // timeout for navigation steps
    log = [...log, 'Goes to signup form']
    console.log('Goes to sign up form');
    await page.goto('https://www.techtotherescue.org/tech');
    log = [...log, 'Accepting Cookies']
    // console.log('Accepting Cookies')
    await page.waitForSelector('button ::-p-text(Accept)');
    await page.click('button ::-p-text(Accept)', { click: 1 });
    log = [...log, 'Waiting for the popup (approx. 12 sec)']
    await page.waitForTimeout(15000);
    console.log('Waits for popup')
    await page.waitForSelector('#wisepops-container-423358'); // hackaton popup
    log = [...log, 'Clothing popup window']
    console.log('Waits for popup close button')
    await page.waitForSelector(`button[class="PopupCloseButton__InnerPopupCloseButton-srj7me-0 dWHsqE wisepops-close"]`); // hackaton popup
    await page.click(`button[class="PopupCloseButton__InnerPopupCloseButton-srj7me-0 dWHsqE wisepops-close"]`, { click: 1 })

    log = [...log, 'Clicks the Sing Up and go to the form']
    // console.log('Click the Sing Up and go to the form')
    await page.click('a ::-p-text(Sign up)', { click: 1 });

    log = [...log, 'Fills the form']
    // console.log('Fills the form')
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
    await page.click(`span[class="${checkboxSelectorClass}"]`, { click: 1 });

    // console.log(`Submitting the form by pressing "JOIN"`);
    log = [...log, `Submits the form by pressing "JOIN"`];
    const testResults = {
      testName: 'Tech Company Sign Up',
      testLog: log
    }
    await browser.close();
    return testResults
    // await page.click(`a[id="sw-sign-up-submit-btn"]`, { click: 1 })

    // console.log('Goes to the Expertise');
    // await page.waitForNavigation();
    // await page.click(`#${involvingType.haveTeam}`, { click: 1 });
    // await page.type("#field142423073", aboutCompany, { slowMo: 10 });
    // await page.select('#field142423067', companySize);
    // await page.click(`#${softwareExpertise.backendDev}`, { click: 1 });
    // await page.click(`#${visualAndAccessibility.graphicDesign}`, { click: 1 });
    // await page.click(`#${dataManagementAndAnalytics.checkAll}`, { click: 1 });
    // await page.click(`#${digitalMarketing.contentMarketing}`, { click: 1 });
    // await page.click(`#${innovativeSolutions.ai}`, { click: 1 });
    // await page.click(`#${innovativeSolutions.ml}`, { click: 1 });
    // await page.click(`#${strategy.businessIntelligence}`, { click: 1 });

    // console.log('Goes to Causes')
    // await page.click('#fsNextButton5238072', { click: 1 });

    // console.log('Fills Causes')
    // await page.click(`#${areaOfInterests.noPoverty}`, { click: 1 });
    // await page.click(`#${areaOfInterests.qualityEducation}`, { click: 1 });
    // await page.click(`#${areaOfInterests.genderEquality}`, { click: 1 });
    // await page.type('#field142786765', motivation)

    // console.log(`Goes to let's meet`);
    // // TODO: bring changes to the automation which aware Matching Team about new Engagement. Not to inform about tests
    // // ? Not inform about cases which contains "TTTR TEST" 
    // console.log('Submits form')
    // await page.click('#fsSubmitButton5238072', { click: 1 });

    // console.log('Wait for redirection')
    // // await page.waitForNavigation();
    // console.log('Success')
  }
  catch (error) {
    throwError(error, 'Tech Company Sign Up', 'testCompanySignUp()')
  }
}

module.exports = {
  techCompanySignUp
}

