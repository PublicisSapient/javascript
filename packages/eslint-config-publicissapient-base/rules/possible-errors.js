module.exports = {
  rules: {

    // This requires that no sparse arrays are used.  Sparse arrays have holes
    // in them like this [1, , 3, , 4] which is easy to misread.

    'no-sparse-arrays': 'error',

    // This requires that no regular strings have template literal notation in them
    'no-template-curly-in-string': 'error',
  }
};
