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
   'no-useless-escape': ['error', 'never'],
   
   // This requires an space before opening brace of a block

   'space-before-blocks': ['error', 'always'],

   // This requires NO space between argument list and function name in calls and declarations

   'space-before-function-paren': ['error', 'never'],

   // This requires spaces before and after a keyword (if, else, etc.)

   'keyword-spacing': ['error', { 'before': true, 'after': true }],
   
   // This requires spacing around infix operators (+, =, etc.)

   'space-infix-ops': 'error',

   // This requires a space after commas

   'comma-spacing': ['error', { 'before': false, 'after': true }],

   // Only 1 empty line between blocks

   'no-multiple-empty-lines': ['error', { 'max': 1 }],

   // Do not nest ternary expressions

   'no-nested-ternary': 'error',

   // Do not use ternary expressions when simpler alternatives exist 

   'no-unneeded-ternary': 'error',

   // Limit line lengths to 100 characters. This is in line with the defaults in SonarQube rule: Lines should not be too long
   
   'max-len': ['error', 100, 2, { ignoreUrls: true, ignoreComments: false, ignoreStrings: false, ignoreTemplateLiterals: false}],

   // Limit the number of lines in a function to 200. This is in line with the defaults in SonarQube rule: Functions should not too many lines of code

   'max-lines-per-function': ['error', 200]
  }
};
