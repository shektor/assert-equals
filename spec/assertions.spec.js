function runAllSpecs() {
  var specMessage;
  var specResults = [];
  var pass = " PASS";
  var fail = " FAIL";

  specMessage = "Spec 01 - equal primitive type number: ";
  assertEqualsShouldPassWith(specMessage, specResults, 1, 1);

  specMessage = "Spec 02 - unequal primitive type number: ";
  failMessage = ' Expected "1" found "2"';
  assertEqualsShouldFailWith(specMessage, specResults, 1, 2, failMessage);

  specMessage = "Spec 03 - array type equal: ";
  assertEqualsShouldPassWith(specMessage, specResults, [1, 1], [1, 1]);

  specMessage = "Spec 04 - array type unequal: ";
  failMessage = " Expected type Array but found Object";
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    [1, 2],
    { 1: 2 },
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
