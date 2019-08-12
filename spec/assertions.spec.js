function runAllSpecs() {
  var specMessage;
  var specResults = [];
  var pass = " PASS";
  var fail = " FAIL";

  specMessage = "Spec 01 - Number equal: ";
  assertEqualsShouldPassWith(specMessage, specResults, 1, 1);

  specMessage = "Spec 02 - Number not equal: ";
  failMessage = ' Expected "1" found "2"';
  assertEqualsShouldFailWith(specMessage, specResults, 1, 2, failMessage);

  specMessage = "Spec 03 - Array type and length equal: ";
  assertEqualsShouldPassWith(specMessage, specResults, [1, 1], [1, 1]);

  specMessage = "Spec 04 - Array type unequal: ";
  failMessage = " Expected type Array but found Object";
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    [1, 2],
    { 1: 2 },
    failMessage
  );

  specMessage = "Spec 05 - Array length not equal";
  failMessage = "Expected Array length 4 but found 5";
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
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
