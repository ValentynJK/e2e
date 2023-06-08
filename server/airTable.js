// one time usage code to get ids to needed tables
require('dotenv').config();

const tableNames = {
  techCompanies: 'TechCompanies',
  engagements: 'TechCompany Engagement',
  contacts: 'Contacts'
}

const { AIRTABLE_API } = process.env

const getOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${AIRTABLE_API}`
  }
}

async function getDatabase() {
  try {
    const url = "https://api.airtable.com/v0/meta/bases"

    const response = await fetch(url, getOptions)
    const responseJSON = await response.json()

    const baseId = responseJSON.bases[0].id
    return baseId
  }
  catch (error) {
    throw new Error(`Check function getDatabase(). ${error}`)
  }
}

async function getTables() {
  const { techCompanies, engagements, contacts } = tableNames
  try {
    const baseId = await getDatabase()
    const url = `https://api.airtable.com/v0/meta/bases/${baseId}/tables`
    const response = await fetch(url, getOptions)
    const responseJSON = await response.json();
    // console.log(responseJSON)
    const tables = responseJSON.tables.filter(table => [techCompanies, contacts, engagements].includes(table.name))
    const tableIds = tables.map(({ id, name }) => ({ id, name }))
    console.log(tableIds)
  }
  catch (error) {
    throw new Error(`Check function getTable(), ${error}`)
  }
}

getTables()

const tables = [
  { id: 'tblqVeDzq4NC8v8hf', name: 'TechCompanies' },
  { id: 'tblne14bHFSxg6TGj', name: 'TechCompany Engagement' },
  { id: 'tbl1eWlFxvH5hQPTh', name: 'Contacts' }
]