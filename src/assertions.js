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
      case "Date":
        assertDateEquality(expected, actual, tracker);
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
  } else if (assertNaNEquality(expected, actual)) {
    return true;
  } else {
    tracker.message = `Expected "${expected}" but found "${actual}"`;
    throw tracker;
  }
};

const assertNaNEquality = (expected, actual) => {
  return expected !== expected && actual !== actual;
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
    tracker.stack.push(key);
    actualValue = actualObject[key];

    if (actualValue === undefined) {
      tracker.message = `Expected object key in Actual but was not found`;
      throw tracker;
    } else if (assertDeepEquality(value, actualValue, tracker)) {
      tracker.stack.pop();
    }
  });

  return true;
};

const assertDateEquality = (expected, actual, tracker) => {
  const expectedNumeric = expected.getTime();
  const actualNumeric = actual.getTime();

  if (expectedNumeric === actualNumeric) {
    return true;
  } else {
    tracker.message = `Expected "${expected}" but found "${actual}"`;
    throw tracker;
  }
};

const stackDisplay = arrayStack => {
  if (arrayStack.length > 0) {
    const formattedStack = [];

    arrayStack.forEach((element, index) => {
      if (index !== 0 && element[0] !== "[") {
        formattedStack.push(`.${element}`);
      } else {
        formattedStack.push(element);
      }
    });

    const stackMessage = `At ${formattedStack.join("")} `;

    return stackMessage;
  } else {
    return "";
  }
};
