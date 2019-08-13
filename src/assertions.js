const assertEquals = (message, expected, actual) => {
  try {
    const stack = [];
    assertDeepEquality(message, expected, actual, stack);
  } catch (failure) {
    throw failure;
  }

  return true;
};

const assertDeepEquality = (message, expected, actual, stack) => {
  const expectedType = toStringCallTypeOf(expected);
  const actualType = toStringCallTypeOf(actual);

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
};

const toStringCallTypeOf = operand => {
  let type = Object.prototype.toString.call(operand);
  type = type.slice(8, -1);

  return type;
};

const assertTypeEquality = (message, expectedType, actualType) => {
  if (expectedType === actualType) {
    return true;
  } else {
    throw {
      message: `${message} Expected type ${expectedType} but found ${actualType}`
    };
  }
};

const assertPrimitiveEquality = (message, expected, actual, stack) => {
  if (expected === actual) {
    return true;
  } else {
    throw {
      message: `${message} Expected ${stackDisplay(
        stack
      )}"${expected}" but found "${actual}"`
    };
  }
};

const assertArrayLength = (message, expected, actual) => {
  if (expected.length === actual.length) {
    return true;
  } else {
    throw {
      message: `${message} Expected Array length ${expected.length} but found ${actual.length}`
    };
  }
};

const assertArrayEquality = (message, expected, actual, stack) => {
  expected.forEach((element, index) => {
    stack.push(`[${index}]`);
    if (assertDeepEquality(message, expected[index], actual[index], stack)) {
      stack.pop();
    }
  });
  return true;
};

const stackDisplay = arrayStack => {
  if (arrayStack.length > 0) {
    arrayStack = `${arrayStack.join("")} `;

    return arrayStack;
  } else {
    return "";
  }
};
