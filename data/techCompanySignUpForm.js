const CONTACT_INFO_DATASET = {
  signingOnBehalf: 'I am signing up as an individual',
  companyName: 'TTTR TEST VK',
  companyWebSite: 'www.tttr-vk.com',
  firstName: 'Valentyn',
  lastName: 'Kolesnichenko',
  businessEmailAddress: 'valentyn.kolesnichenko@techtotherescue.org',
  countryOfRegistration: ' Poland',
  phoneNumber: '+480499290',
  roleInTheCompany: ' Developer',
  experienceWithProBono: 'We have some experience in pro bono or low bono projects',
  startDate: `I don't know yet`
};

const EXPERTISE_DATASET = {
  welcomeText: `We're keen to know the skills your company can offer to changemakers. This will help us suggest suitable projects tailored to your profile`,
  involvingType: {
    haveTeam: "field142423069_1", // I have a team that can build a digital product (product development) 
    ownProduct: "field142423069_2", // I have my own product and can give access or licences to non-profits
    consulting: "field142423069_3" // I can provide consulting or mentoring
  },
  // id = field142423073
  aboutCompany: "Introducing StellarTech, a cutting-edge technology company revolutionizing the industry with innovative solutions. With a diverse range of products and a passion for excellence, StellarTech is committed to delivering unparalleled performance and customer satisfaction.",
  companySize: '11-50', // field142423067
  softwareExpertise: {
    softwareDev: 'field142423065_1',
    websiteDev: 'field142423065_2',
    noCode: 'field142423065_3',
    mobileApp: 'field142423065_4',
    pwaDev: 'field142423065_5',
    backendDev: 'field142423065_6',
    frontendDev: 'field142423065_7',
    productManagement: 'field142423065_8',
    qa: 'field142423065_9', 
    eComm: 'field142423065_10', 
    payments: 'field142423065_11', 
    checkAll: 'field142423065_all' 
  },
  visualAndAccessibility: {
    webDesign: 'field142477353_1',
    uxUi: 'field142477353_2',
    accessibility: 'field142477353_3',
    graphicDesign: 'field142477353_4', 
    branding: 'field142477353_5',
    visualIdentity: 'field142477353_6', 
    landingPage: 'field142477353_7', 
    checkAll: 'field142477353_all'
  },
  dataManagementAndAnalytics: {
    bigData: 'field142476899_1',
    dataAnalytics: 'field142476899_2', 
    databases: 'field142476899_3', 
    dataBackups: 'field142476899_4',
    dataScience: 'field142476899_5', 
    dataVisual: 'field142476899_6',
    cms: 'field142476899_7',
    crm: 'field142476899_8',
    checkAll: 'field142476899_all'
  },
  digitalMarketing: {
    digitalMarketing: 'field142477204_1',
    socialMediaMarketing: 'field142477204_2', 
    contentMarketing: 'field142477204_3', 
    seo: 'field142477204_4',
    checkAll: 'field142477204_all'
  },
  infrastructureAndSecurity: {
    appManagementAndSupport: 'field142476759_1',
    automations: 'field142476759_2', 
    cloudBasedSolutions: 'field142476759_3',
    cloudConsulting: 'field142476759_4', 
    cloudInfrastructure: 'field142476759_5',
    cybersecurity: 'field142476759_6', 
    domains: 'field142476759_7',
    hosting: 'field142476759_8',
    checkAll: 'field142476759_all',
  },
  innovativeSolutions: {
    arVr: 'field142475737_1',
    ai: 'field142475737_2', 
    blockchain: 'field142475737_3',
    iot: 'field142475737_4',
    ml: 'field142475737_5',
    robotics: 'field142475737_6',
    checkAll: 'field142475737_all'
  },
  strategy: {
    digitalStrategy: 'field142476957_1',
    businessIntelligence: 'field142476957_2',
    growth: 'field142476957_3',
    checkAll: 'field142476957_4'
  },
  other: {
    other: 'field142787741_other'
  }
};

CAUSES_DATASET = {
  areaOfInterests: {
    noPoverty: 'field142423072_1',
    zeroHunger: 'field142423072_2',
    goodHealthAndWellBeing: 'field142423072_3',
    qualityEducation: 'field142423072_4',
    genderEquality: 'field142423072_5',
    cleanWater: 'field142423072_6',
    cleanEnergy: 'field142423072_7',
    economicGrowth: 'field142423072_8',
    innovations: 'field142423072_9',
    reduceInequality: 'field142423072_10',
    sustainableCities: 'field142423072_11',
    responsibleConsumption: 'field142423072_12',
    climateActions: 'field142423072_13',
    lifeBelowWater: 'field142423072_14',
    lifeOnLand: 'field142423072_15',
    peaceJustice: 'field142423072_16',
    forGoals: 'field142423072_17'
  },
  motivation: 'Driven by a deep sense of social responsibility, our company is motivated to contribute to the greater good through pro bono projects. We believe in leveraging our expertise and resources to make a positive impact and create meaningful change in the communities we serve.'
}

module.exports = {
  CONTACT_INFO_DATASET,
  EXPERTISE_DATASET,
  CAUSES_DATASET
}