function runTest(message, assertionFailures, expected, actual) {
  try {
    assertEquals(message, expected, actual);
  } catch (failure) {
    assertionFailures.push(failure.message);
  }
}

function runAll() {
  var complexObject1 = {
    propA: 1,
    propB: {
      propA: [1, { propA: "a", propB: "b" }, 3],
      propB: 1,
      propC: 2
    }
  };
  var complexObject1Copy = {
    propA: 1,
    propB: {
      propA: [1, { propA: "a", propB: "b" }, 3],
      propB: 1,
      propC: 2
    }
  };
  var complexObject2 = {
    propA: 1,
    propB: {
      propB: 1,
      propA: [1, { propA: "a", propB: "c" }, 3],
      propC: 2
    }
  };
  var complexObject3 = {
    propA: 1,
    propB: {
      propA: [1, { propA: "a", propB: "b" }, 3],
      propB: 1
    }
  };

  var assertionFailures = [];
  runTest("Test 01: ", assertionFailures, "abc", "abc");
  runTest("Test 02: ", assertionFailures, "abcdef", "abc");
  runTest("Test 03: ", assertionFailures, ["a"], { 0: "a" });
  runTest("Test 04: ", assertionFailures, ["a", "b"], ["a", "b", "c"]);
  runTest("Test 05: ", assertionFailures, ["a", "b", "c"], ["a", "b", "c"]);
  runTest("Test 06: ", assertionFailures, complexObject1, complexObject1Copy);
  runTest("Test 07: ", assertionFailures, complexObject1, complexObject2);
  runTest("Test 08: ", assertionFailures, complexObject1, complexObject3);
  runTest("Test 09: ", assertionFailures, null, {});
  runTest("Test 10: ", assertionFailures, [1, 2, 3], [1, 3, 2]);
  runTest("Test 11: ", assertionFailures, [[1, 2], [3, 5]], [[1, 2], [3, 4]]);

  var messagesEl = document.getElementById("messages");
  var newListEl;
  var i, ii;

  for (i = 0, ii = assertionFailures.length; i < ii; i++) {
    newListEl = document.createElement("li");
    newListEl.innerHTML = assertionFailures[i];
    messagesEl.appendChild(newListEl);
  }
}

runAll();
