# Puppeteer tests for TechToTheRescue web page

## Structure:
1. [tets](tests) - actual tests
   - [techCompanySignUp.test.js](tests/techCompanySignUp.test.js) - end2end test for Company Sign Up form on https://www.techtotherescue.org/tech
2. [utils](utils) - utility and support functions
3. [data](data) - dataset for tests

## How to start:
1. Pull the code to your local machine
2. In terminal run `npm install` in terminal
3. In terminal run `npm run testSignUp` 

## TODOs:
  ### Deployment:
  1. Deploy to Server for demo purpose (Lambatest)
  ### Server side assertions:
  1. Confirm Contact record is created
  2. Confirm Tech Company is created
  3. Confirm Tech Engagement is created
  ### Cleanup
  1. Script which deletes records from **AirTable** (Contact, TechCompany, TechCompany Engagement)
  2. Script which deletes records from **User.com** (User, Deal, Company)
  3. Script which deletes user record from **Softr**
  ### Existing Automation Scenarios
  1. Do not notify the matching team about test Tech Company sigh up created 