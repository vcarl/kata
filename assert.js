function assert(test, value) {
  if (test !== value) {
    console.error('FAIL: expected', test, 'to equal', value);
  } else {
    console.log('PASS');
  }
}

module.exports = assert;
