# Assert Equals

A javascript "assertEquals" function that compares passed 'expected' and 'actual' arguments and asserts if they are equal.

## Getting Started

```bash
> git clone git@github.com:shektor/assert-equals.git
> cd assert-equals
> open index.html
# assertEquals function is now available for use within Developer Tools Console
```

## Usage

### `assertEqual(message, expected, actual)`
`./src/assertions.js`

Required
- `message` to identify assertion being made.
- `expected` value of data
- `actual` value of data

Returns
- `true` if expected and actual arguments are equal.

Exception
- `failure` object with a `message` property if expected and actual arguments are not equal.

Example
```javascript
> try {
    assertEquals("Passing Test:", 1, 1)
  } catch(failure) {
    console.log(failure.message)
  }
< true

> try {
    assertEquals("Failing Test:", 1, 2)
  } catch(failure) {
    console.log(failure.message)
  }
  Failing Test: Expected "1" but found "2"
```

### Test Runner

The `index` displays the current specifications for the function, along with 'Expected Result' and 'Output' from tests on the function.

To add further `assertEquals` tests append `runtest()` function calls to the end of the existing block of tests within `src/testrunner.js`. Please note the 'Output' will only show assertions that **fail**.

`runTest(testMessage, failureMessageArray, expected, actual)`

- `testMessage` A message to identify the test and output.
- `failureMessageArray` An array that stores exceptions thrown by `assertEqual` when any assertions are not equal.
- `expected` The expected result of the assertion.
- `actual` The actual result of the assertion.
