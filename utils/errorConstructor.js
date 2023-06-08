function throwError(error, testName, func) {
  const customError = new Error()
  customError.testName = testName
  customError.errorFunction = func
  customError.errorMessage = error.message
  throw customError;
}

module.exports = {
  throwError
}