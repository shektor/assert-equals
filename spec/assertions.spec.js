const runAllSpecs = () => {
  let specMessage, failMessage;
  const specResults = [];

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
  failMessage = "Expected elements 4 but found 5";
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
  failMessage = 'At [2] Expected "8" but found "3"';
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
  failMessage = 'At [1][1] Expected "5" but found "4"';
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    [[1, 2], [3, 5]],
    [[1, 2], [3, 4]],
    failMessage
  );

  specMessage = "Object key exists";
  assertEqualsShouldPassWith(
    specMessage,
    specResults,
    { a: 1, b: 2 },
    { a: 1, b: 2 }
  );

  specMessage = "Object key does not exist";
  failMessage = 'At b Expected object key in Actual but was not found';
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    { a: 1, b: 2 },
    { a: 1, c: 2 },
    failMessage
  );

  specMessage = "Object key does not exist in Expected";
  failMessage = "Expected elements 2 but found 3";
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    { a: 1, b: 2 },
    { a: 1, c: 2, d: 5 },
    failMessage
  );

  specMessage = "Object key value pairs equal";
  assertEqualsShouldPassWith(
    specMessage,
    specResults,
    { a: 1, b: 2 },
    { a: 1, b: 2 }
  );

  specMessage = "Object key value pairs not equal";
  failMessage = 'At c Expected "2" but found "3"';
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    { a: 1, c: 2 },
    { a: 1, c: 3 },
    failMessage
  );

  specMessage = "Object key value pairs with objects as values equal";
  assertEqualsShouldPassWith(
    specMessage,
    specResults,
    { a: 1, b: 2, c: [1, 2, 3], d: { e: "f" } },
    { a: 1, b: 2, c: [1, 2, 3], d: { e: "f" } }
  );

  specMessage = "Object key value pairs with objects as values not equal";
  failMessage = 'At c[3].d Expected "f" but found "g"';
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    { a: 1, b: 2, c: [1, 2, 3, { d: "f" }] },
    { a: 1, b: 2, c: [1, 2, 3, { d: "g" }] },
    failMessage
  );

  const specMessageEl = document.getElementById("specMessages");

  specResults.forEach(result => {
    const newSpecEl = document.createElement("li");
    newSpecEl.innerHTML = result;
    specMessageEl.appendChild(newSpecEl);
  });
};

runAllSpecs();
