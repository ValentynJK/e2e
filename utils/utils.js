async function getTextContent(page, tag) {
  return await page.$eval(tag, element => element.textContent)
}

async function countElements(page, tag) {
  return await page.$$eval(tag, element => element.length)
}

function getTodayDate() {
  const today = new Date();
  
  // Get day, month, and year
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
  const year = today.getFullYear();
  
  // Return formatted date
  return `${day}-${month}-${year}`;
}

console.log(getTodayDate())

module.exports = {
  getTextContent,
  countElements,
  getTodayDate
}