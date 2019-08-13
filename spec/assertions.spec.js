function runAllSpecs() {
  var specMessage;
  var specResults = [];
  var pass = " PASS";
  var fail = " FAIL";

  specMessage = "Number equal";
  assertEqualsShouldPassWith(specMessage, specResults, 1, 1);

  specMessage = "Number not equal";
  failMessage = 'Expected "1" but found "2"';
  assertEqualsShouldFailWith(specMessage, specResults, 1, 2, failMessage);

  specMessage = "Array type and length equal";
  assertEqualsShouldPassWith(specMessage, specResults, [1, 1], [1, 1]);

  specMessage = "Array type unequal";
  failMessage = "Expected type Array but found Object";
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    [1, 2],
    { 1: 2 },
    failMessage
  );

  specMessage = "Array length not equal";
  failMessage = "Expected Array length 4 but found 5";
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    failMessage
  );

  specMessage = "Array elements equal";
  assertEqualsShouldPassWith(specMessage, specResults, [2, 7, 8], [2, 7, 8]);

  specMessage = "Array elements not equal";
  failMessage = 'Expected [2] "8" but found "3"';
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    [2, 7, 8],
    [2, 7, 3],
    failMessage
  );

  specMessage = "2d Array equal";
  assertEqualsShouldPassWith(
    specMessage,
    specResults,
    [[1, 2], [3, 5]],
    [[1, 2], [3, 5]]
  );

  specMessage = "2d Array not equal";
  failMessage = 'Expected [1][1] "5" but found "4"';
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    [[1, 2], [3, 5]],
    [[1, 2], [3, 4]],
    failMessage
  );

  var specMessageEl = document.getElementById("specMessages");
  var newSpecEl;

  for (var i = 0; i < specResults.length; i++) {
    newSpecEl = document.createElement("li");
    newSpecEl.innerHTML = specResults[i];
    specMessageEl.appendChild(newSpecEl);
  }
}

runAllSpecs();
