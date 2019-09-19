module.exports = {
  rules: {

    // This requires array values to be on a separate line than the open and
    // close brackets but only if it uses multiple lines.

   'array-bracket-newline': ['error', { 'multiline': true }],
   
    // This requires that there be no extra spaces before and after brackets in
    // an array.

   'array-bracket-spacing': ['error', 'never'],
   
    // This requires arrays to have a line break after each element if there
    // are more than 6 items in the array.
    //

   'array-element-newline': ['error', { multiline: true, minItems: 6 }],

   // This requires arrays to be created using literal notation.

   'no-array-constructor': 'error',

   // Only single quotes for strings

   'quotes': ['error', 'single'],

   // Use template literals for concatenating strings

   'prefer-template': 'error',

   // No spaces allowed in template literals
   'template-curly-spacing': 'error',
   
   // Escaping non-special characters in strings, template literals, and regular expressions doesn’t have any effect
   'no-useless-escape': ['error', 'never']
  }
};
