const runAllSpecs = () => {
  let specMessage, failMessage;
  const specResults = [];

  specMessage = "Number equal";
  assertEqualsShouldPassWith(specMessage, specResults, 1, 1);

  specMessage = "Number not equal";
  failMessage = 'Expected "1" but found "2"';
  assertEqualsShouldFailWith(specMessage, specResults, 1, 2, failMessage);

  specMessage = "String equal";
  assertEqualsShouldPassWith(specMessage, specResults, "bob", "bob");

  specMessage = "String not equal";
  failMessage = 'Expected "bob" but found "sue"';
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    "bob",
    "sue",
    failMessage
  );

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
  failMessage = "At b Expected object key in Actual but was not found";
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

  specMessage = "Null not equal to Object";
  failMessage = "Expected type Null but found Object";
  assertEqualsShouldFailWith(specMessage, specResults, null, {}, failMessage);

  specMessage = "Null equal to self";
  assertEqualsShouldPassWith(specMessage, specResults, null, null);

  specMessage = "Boolean equal to self";
  assertEqualsShouldPassWith(specMessage, specResults, false, false);

  specMessage = "Boolean not equal to commen number coercion";
  failMessage = "Expected type Boolean but found Number";
  assertEqualsShouldFailWith(specMessage, specResults, false, 0, failMessage);

  specMessage = "Dates with identical attributes are equal";
  assertEqualsShouldPassWith(
    specMessage,
    specResults,
    new Date(2019, 8, 5),
    new Date(2019, 8, 5)
  );

  specMessage = "Dates with different attributes are not equal";
  failMessage =
    'Expected "Thu Sep 05 2019 00:00:00 GMT+0100 (British Summer Time)" but found "Sun Sep 15 2019 00:00:00 GMT+0100 (British Summer Time)"';
  assertEqualsShouldFailWith(
    specMessage,
    specResults,
    new Date(2019, 8, 5),
    new Date(2019, 8, 15),
    failMessage
  );

  specMessage = "NaN equal to self";
  assertEqualsShouldPassWith(specMessage, specResults, NaN, NaN);

  specMessage = "NaN not equal to a Number";
  failMessage = 'Expected "NaN" but found "0"';
  assertEqualsShouldFailWith(specMessage, specResults, NaN, 0, failMessage);

  const specMessageEl = document.getElementById("specMessages");

  specResults.forEach(result => {
    const newSpecEl = document.createElement("li");
    newSpecEl.innerHTML = result;
    specMessageEl.appendChild(newSpecEl);
  });
};

runAllSpecs();
