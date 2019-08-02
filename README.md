# Assert Equals

Create an "assertEquals" function such that it will correctly compare the passed "expected" vs "actual" parameters.

### Expected Result

The following tests should "fail": 02, 03, 04, 07, 08 and 09 - and the failures should be reported using the provided mechanism.
The following output is expected for the list of tests provided:
```
Test 02: Expected "abcdef" found "abc"
Test 03: Expected type Array but found Object
Test 04: Expected array length 2 but found 3
Test 07: Expected propB.propA[1].propB "b" but found "c"
Test 08: Expected propB.propC but was not found
Test 09: Expected type null but found type Object
```
