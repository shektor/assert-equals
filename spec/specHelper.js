function assertEqualsShouldPassWith(
  specMessage,
  resultArray,
  expected,
  actual
) {
  try {
    if (assertEquals(specMessage, expected, actual)) {
      resultArray.push(specMessage + " PASS");
    } else {
      resultArray.push(specMessage + " FAIL");
      resultArray.push('Expected "' + expected + '" and Actual "' + actual + '" did not return true' );
    }
  } catch (failure) {
    resultArray.push(specMessage + " FAIL");
    resultArray.push('Expected "' + expected + '" and Actual "' + actual + '" threw exception <' + failure + '>');
  }
}

function assertEqualsShouldFailWith(
  specMessage,
  resultArray,
  expected,
  actual,
  failMessage
) {
  try {
    assertEquals(specMessage, expected, actual);
    resultArray.push(specMessage + " FAIL");
    resultArray.push('Expected "' + expected + '" and Actual "' + actual + '" did not throw exception' );
  } catch (failure) {
    expectedFailure = specMessage + " " + failMessage
    if (failure.message === expectedFailure) {
      resultArray.push(specMessage + " PASS");
    } else {
      resultArray.push(specMessage + " FAIL");
      resultArray.push('Expected exception <' + expectedFailure + '> but got <' + failure.message + '>');
    }
  }
}
