
function assertEquals (message, expected, actual) {
  if (expected === actual) {
    return true
  } else {
    throw { message: message + ' Expected "' + expected + '" found "' + actual + '"' }
  }
}
