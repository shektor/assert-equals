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
    }
  } catch (failure) {
    resultArray.push(specMessage + " FAIL");
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
  } catch (failure) {
    if (failure.message === specMessage + " " + failMessage) {
      resultArray.push(specMessage + " PASS");
    } else {
      resultArray.push(specMessage + " FAIL");
    }
  }
}
