async function getTextContent(page, tag) {
  return await page.$eval(tag, element => element.textContent)
}

async function countElements(page, tag) {
  return await page.$$eval(tag, element => element.length)
}

module.exports = {
  getTextContent,
  countElements
}