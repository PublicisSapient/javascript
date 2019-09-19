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

   'no-unneeded-ternary': 'error'
  }
};
