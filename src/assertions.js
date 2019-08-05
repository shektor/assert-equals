
function assertEquals (message, expected, actual) {
  var expectedType = toStringCallTypeOf(expected)
  var actualType = toStringCallTypeOf(actual)

  if (expectedType === 'Array') {
    if (expectedType !== actualType) {
      throw { message: message + ' Expected type ' + expectedType + ' but found ' + actualType }
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
