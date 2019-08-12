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
