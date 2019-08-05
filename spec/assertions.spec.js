
function runAllSpecs() {

  var specResults = []
  var pass = ' PASS'
  var fail = ' FAIL'

  specMessage = 'Spec 01 - equal primitive type number: '
  if (assertEquals(specMessage, 1, 1)) {
    specResults.push(specMessage + pass)
  } else {
    specResults.push(specMessage + fail)
  }

  var specMessageEl = document.getElementById('specMessages');
  var newSpecEl;

  for (var i = 0; i < specResults.length; i++) {
    newSpecEl = document.createElement('li')
    newSpecEl.innerHTML = specResults[i]
    specMessageEl.appendChild(newSpecEl)
  }
}

runAllSpecs();
