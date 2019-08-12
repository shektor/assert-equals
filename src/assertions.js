
function assertEquals (message, expected, actual) {
  var expectedType = toStringCallTypeOf(expected)
  var actualType = toStringCallTypeOf(actual)

  if (expectedType === 'Array') {
    if (expectedType !== actualType) {
      throw { message: message + ' Expected type ' + expectedType + ' but found ' + actualType }
    }
    if (expected.length !== actual.length) {
      throw { message: message + 'Expected Array length ' + expected.length + ' but found ' + actual.length }
    }
    for (var i = 0; i < expected.length; i++) {
      if (expected[i] !== actual[i]) {
        throw { message: message + 'Expected [' + i + '] "' + expected[i] + '" but found "' + actual[i] + '"'}
      }
    }
  } else {
    if (expected !== actual) {
      throw { message: message + ' Expected "' + expected + '" found "' + actual + '"' }
    }
  }

  return true
}

function toStringCallTypeOf(operand) {
  var type = Object.prototype.toString.call(operand)
  type = type.slice(8,-1)
  return type
}
