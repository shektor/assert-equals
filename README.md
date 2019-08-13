# Assert Equals

A javascript `assertEquals` function that compares passed 'expected' and 'actual' arguments and asserts if they are equal.

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
