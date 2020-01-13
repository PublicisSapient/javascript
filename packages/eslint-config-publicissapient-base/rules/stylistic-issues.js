module.exports = {
  rules: {

    // Arrays

    // This requires array values to be on a separate line than the open and
    // close brackets but only if it uses multiple lines.

   'array-bracket-newline': ['error', { 'multiline': true }],
   
    // This requires that there be no extra spaces before and after brackets in
    // an array.

   'array-bracket-spacing': ['error', 'never'],
   
    // This requires arrays to have a line break after each element if there
    // are more than 6 items in the array.

   'array-element-newline': ['error', { multiline: true, minItems: 6 }],

   // This requires arrays to be created using literal notation.

   'no-array-constructor': 'error',

   // Strings

   // This requires that all strings use single quotes

   'quotes': ['error', 'single'],

   // This requires that progamatically generated strings use template literals

   'prefer-template': 'error',

   // This requires that there are no spaces in curly braces in template literals
   'template-curly-spacing': 'error',
   
   // This requires that only characters that need escaping are escaped
   'no-useless-escape': ['error', 'never']
  }
};
