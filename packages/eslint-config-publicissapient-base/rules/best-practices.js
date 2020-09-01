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

    // eval has too many security risks to be used.
  
    'no-eval': 'error',

    // This requires that long strings are kept on one line.
    'no-multi-str': 'error',

    // Use scrict comparisons (ie. ===, not ==)
    
    'eqeqeq': ['error', 'always'],

    // This requires that all control statements use curly brackets.
    // This is required for the SonarQube rule: Control structures should use curly braces.
    'curly': 'error'
  }
};
