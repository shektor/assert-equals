const assertEquals = (message, expected, actual) => {
  try {
    const tracker = {
      stack: [],
      message: "Untested"
    };
    assertDeepEquality(expected, actual, tracker);
  } catch (trackedFailure) {
    const atElement = stackDisplay(trackedFailure.stack);
    throw { message: `${message} - ${atElement}${trackedFailure.message}` };
  }

  return true;
};

const assertDeepEquality = (expected, actual, tracker) => {
  const expectedType = toStringCallTypeOf(expected);
  const actualType = toStringCallTypeOf(actual);

  try {
    assertTypeEquality(expectedType, actualType, tracker);

    switch (expectedType) {
      case "Array":
        assertArrayLength(expected, actual, tracker);
        assertArrayEquality(expected, actual, tracker);
        break;
      case "Object":
        const expectedArray = Object.entries(expected);
        const actualArray = Object.entries(actual);

        assertArrayLength(expectedArray, actualArray, tracker);
        assertObjectEquality(expectedArray, actual, tracker);
        break;
      default:
        assertPrimitiveEquality(expected, actual, tracker);
    }
  } catch (trackedFailure) {
    throw trackedFailure;
  }

  return true;
};

const toStringCallTypeOf = operand => {
  let type = Object.prototype.toString.call(operand);
  type = type.slice(8, -1);

  return type;
};

const assertTypeEquality = (expectedType, actualType, tracker) => {
  if (expectedType === actualType) {
    return true;
  } else {
    tracker.message = `Expected type ${expectedType} but found ${actualType}`;
    throw tracker;
  }
};

const assertPrimitiveEquality = (expected, actual, tracker) => {
  if (expected === actual) {
    return true;
  } else {
    tracker.message = `Expected "${expected}" but found "${actual}"`;
    throw tracker;
  }
};

const assertArrayLength = (expected, actual, tracker) => {
  if (expected.length === actual.length) {
    return true;
  } else {
    tracker.message = `Expected elements ${expected.length} but found ${actual.length}`;
    throw tracker;
  }
};

const assertArrayEquality = (expected, actual, tracker) => {
  expected.forEach((element, index) => {
    tracker.stack.push(`[${index}]`);
    if (assertDeepEquality(expected[index], actual[index], tracker)) {
      tracker.stack.pop();
    }
  });
  return true;
};

const assertObjectEquality = (expectedArray, actualObject, tracker) => {
  expectedArray.forEach(([key, value]) => {
    if (actualObject[key] === undefined) {
      tracker.message = `Expected object key "${key}" but was not found`;
      throw tracker;
    }
  });

  return true;
};

const stackDisplay = arrayStack => {
  if (arrayStack.length > 0) {
    arrayStack = `At ${arrayStack.join("")} `;

    return arrayStack;
  } else {
    return "";
  }
};
