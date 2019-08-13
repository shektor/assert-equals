function assertEquals(message, expected, actual) {
  try {
    var stack = [];
    assertDeepEquality(message, expected, actual, stack);
  } catch (failure) {
    throw failure;
  }

  return true;
}

function assertDeepEquality(message, expected, actual, stack) {
  var expectedType = toStringCallTypeOf(expected);
  var actualType = toStringCallTypeOf(actual);

  try {
    assertTypeEquality(message, expectedType, actualType);

    if (expectedType === "Array") {
      assertArrayLength(message, expected, actual);
      assertArrayEquality(message, expected, actual, stack);
    } else {
      assertPrimitiveEquality(message, expected, actual, stack);
    }
  } catch (failure) {
    throw failure;
  }

  return true;
}

function toStringCallTypeOf(operand) {
  var type = Object.prototype.toString.call(operand);
  type = type.slice(8, -1);
  return type;
}

function assertTypeEquality(message, expectedType, actualType) {
  if (expectedType === actualType) {
    return true;
  } else {
    throw {
      message:
        message + " Expected type " + expectedType + " but found " + actualType
    };
  }
}

function assertPrimitiveEquality(message, expected, actual, stack) {
  if (expected === actual) {
    return true;
  } else {
    throw {
      message:
        message +
        " Expected " +
        stackDisplay(stack) +
        '"' +
        expected +
        '" but found "' +
        actual +
        '"'
    };
  }
}

function assertArrayLength(message, expected, actual) {
  if (expected.length === actual.length) {
    return true;
  } else {
    throw {
      message:
        message +
        " Expected Array length " +
        expected.length +
        " but found " +
        actual.length
    };
  }
}

function assertArrayEquality(message, expected, actual, stack) {
  for (var i = 0; i < expected.length; i++) {
    stack.push("[" + i + "]");
    if (assertDeepEquality(message, expected[i], actual[i], stack)) {
      stack.pop();
    }
  }
  return true;
}

function stackDisplay(arrayStack) {
  if (arrayStack.length > 0) {
    arrayStack = arrayStack.join("") + " ";

    return arrayStack;
  } else {
    return "";
  }
}
