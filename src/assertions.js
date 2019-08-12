
function assertEquals (message, expected, actual) {
  var expectedType = toStringCallTypeOf(expected)
  var actualType = toStringCallTypeOf(actual)

  try {
    assertTypeEquality(message, expectedType, actualType)

    if (expectedType === 'Array') {
      if (expected.length !== actual.length) {
        throw { message: message + 'Expected Array length ' + expected.length + ' but found ' + actual.length }
      }
      for (var i = 0; i < expected.length; i++) {
        if (expected[i] !== actual[i]) {
          throw { message: message + 'Expected [' + i + '] "' + expected[i] + '" but found "' + actual[i] + '"'}
        }
      }
    } else {
      assertPrimitiveEquality(message, expected, actual)
    }
  } catch (failure) {
    throw failure
  }

  return true
}

function toStringCallTypeOf(operand) {
  var type = Object.prototype.toString.call(operand)
  type = type.slice(8,-1)
  return type
}

function assertTypeEquality(message, expectedType, actualType) {
  if (expectedType === actualType) {
    return true;
  } else {
    throw { message: message + ' Expected type ' + expectedType + ' but found ' + actualType }
  }
}

function assertPrimitiveEquality(message, expected, actual) {
  if (expected === actual) {
    return true;
  } else {
    throw { message: message + ' Expected "' + expected + '" but found "' + actual + '"' }
  }
}
