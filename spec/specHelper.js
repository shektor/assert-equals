const assertEqualsShouldPassWith = (
  specMessage,
  resultArray,
  expected,
  actual
) => {
  try {
    if (assertEquals(specMessage, expected, actual)) {
      resultArray.push(`PASS - ${specMessage}`);
    } else {
      resultArray.push(`FAIL - ${specMessage}`);
      resultArray.push(
        `Expected "${expected}" and Actual "${actual}" did not return true`
      );
    }
  } catch (failure) {
    resultArray.push(`FAIL - ${specMessage}`);
    resultArray.push(
      `Expected "${expected}" and Actual "${actual}" threw exception <${JSON.stringify(
        failure
      )}>`
    );
  }
};

const assertEqualsShouldFailWith = (
  specMessage,
  resultArray,
  expected,
  actual,
  failMessage
) => {
  try {
    assertEquals(specMessage, expected, actual);
    resultArray.push(`FAIL - ${specMessage}`);
    resultArray.push(
      `Expected "${expected}" and Actual "${actual}" did not throw exception`
    );
  } catch (failure) {
    expectedFailure = `${specMessage} ${failMessage}`;

    if (failure.message === expectedFailure) {
      resultArray.push(`PASS - ${specMessage}`);
    } else {
      resultArray.push(`FAIL - ${specMessage}`);
      resultArray.push(
        `Expected exception <${expectedFailure}> but got <${failure.message}>`
      );
    }
  }
};
