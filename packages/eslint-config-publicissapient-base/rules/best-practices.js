module.exports = {
  rules: {

    // This requires a setter to be added if a getter exists in an object.
    // Using getters and setters makes it harder to quickly understand the
    // logic being used and increases maintenance costs.

    'accessor-pairs': 'off',

    // This requires a return statement to be used in all the Array methods.
    // Array methods are specifically made to return Arrays so if no return
    // is required then a for/forEach loop is more appropriate.

    'array-callback-return': 'error',

    // Use scrict comparisons (ie. ===, not ==)
    
    'eqeqeq': ['error', 'always'],
  }
};
