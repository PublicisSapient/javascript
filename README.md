# PublicisSapient Javascript Styleguide

A Javascript styleguide written from an enterprise perspective.

## Table of Contents

- [PublicisSapient Javascript Styleguide](#publicissapient-javascript-styleguide)
  - [Table of Contents](#table-of-contents)
  - [Accessors](#accessors)
  - [Arrays](#arrays)
  - [Whitespace](#whitespace)
  - [Comparison Operators & Equality](#comparison-operators--equality)
 

## Accessors

MDN web docs:

* [`getter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
* [`setter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

ESLint rules:

* [`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs)

Accessors are more commonly referred to as getters and setters.  The `get` and `set` syntax binds an object property to a function that will be called when that property is looked up or assigned a value.  

This pattern looks promising but has too many drawbacks to be used on a large project.  Spelling mistakes will not trigger errors with `set` calls.  This can be avoided by using normal functions instead of getters and setters.

```javascript
  // bad
  class User {
    constructor() {
      this.firstName = 'John';
      this.lastName = 'Smith';
    }

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
      const names = value.split(' ');
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }

  var user = new User();

  // An error will be thrown for spelling mistakes on getters
  // TypeError: undefined is not a function
  console.log(user.fulName);

  // However since an object property can be named anything it will not be
  // thrown on setters
  user.fulName = 'John Smith';

  // good
  class User {
    constructor() {
      this.firstName = 'John';
      this.lastName = 'Smith';
    }

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    setFullName(value) {
      const names = value.split(' ');
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }

  var user = new User();

  // An error will be thrown for spelling mistakes on getters
  // TypeError: undefined is not a function
  user.getFulName();

  // An error will also be thrown here as well
  user.setFulName('John Smith');

  // And it's more obvious that you're calling a function like this
  user.setFullName('John Smith');
```

## Arrays

MDN web docs:
  
* [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  
ESLint rules:

* [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)
* [`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)
* [`array-bracket-newline`](https://eslint.org/docs/rules/array-bracket-newline)
* [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing)
* [`array-element-newline`](https://eslint.org/docs/rules/array-element-newline)
* [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)

Create arrays using the literal notation instead of the constructor.

```javascript
  // bad
  const planets = new Array();

  // good
  const planets = [];
```

Don't use spaces after open and before close brackets when creating an array.

```javascript
  // bad
  const planets = [ 'Mercury', 'Venus', 'Earth' ];

  // good
  const planets = ['Mercury', 'Venus', 'Earth'];
```

If there are more than 5 elements in an array use line breaks to put each value on their own line.

```javascript
  // bad
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn'];

  // bad
  const planets = ['Mercury', 'Venus', 'Earth',
    'Mars',
    'Jupiter',
    'Saturn'
  ];

  // good
  const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn'
  ];

  // good
  const planets = [
    {
      name: 'Mercury',
      color: 'red'
    },
    {
      name: 'Venus',
      color: 'blue'
    },
    {
      name: 'Mars',
      color: 'red'
    },
    {
      name: 'Earth',
      color: 'blue'
    },
    {
      name: 'Jupiter',
      color: 'brown'
    },
    {
      name: 'Saturn',
      color: 'orange'
    }
  ];
```

Get the value of an item in an Array by using the index.

```javascript
  const venus = planets[1];
  const earth = planets[2];
```

Loop through Arrays using the `forEach` method

```javascript
  planets.forEach((planet, index) => {
    console.log(planet.name, index);
  });
```

Add items to an Array using the `push` method.

```javascript
  planets.push({
    name: 'Uranus',
    color: 'blue'
  });
```

Combine two or more Arrays using ... notation.

```javascript
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  const combinedArray = [...array1, ...array2];
  // expected output: [1, 2, 3, 4, 5, 6]
```

Create an Array from any array-like iterable using `from`.  Array-like iterables include things like: `String`, `Set`, `Map`, and `arguments`.

```javascript
  // create an array from a String
  const letters = Array.from('mars');
  // expected output: ['m', 'a', 'r', 's']
```

Use a return statement with Array methods `every`, `filter`, `find`, `findIndex`, `map`, `reduce`, `reduceRight`, `some`, `sort`.

```javascript
  const numbers = [1, 2, 3];

  // check if all the items in the Array are less than 10 with .every()
  const allLessThanTen = numbers.every(element => {
    return element < 10;
  });
  // expected output: true

  // Create a new Array with all the items in the Array that are greater than
  // 1 with .filter()
  const greaterThanOne = numbers.filter(element => {
    return element > 1;
  });
  // expected output: [2, 3]

  // find the first item greater than 1 with .find()
  const first = numbers.find(element => {
    return element > 1;
  });
  // expected output: 2

  // find the index of the first item greater than 1 with .findIndex()
  const firstIndex = numbers.findIndex(element => {
    return element > 1;
  });
  // expected output: 1

  // Create a new Array with double all the numbers in the Array with .map()
  const doubleNumbers = numbers.map(element => {
    return element * 2;
  });
  // expected output: [2, 4, 6]

  // calculate the sum of all items using .reduce()
  const sum = numbers.reduce((accumulator, element) => {
    return accumulator + element
  });
  // expected output: 6

  // check if at least one item in the Array is less than 10 with .some()
  const someLessThanTen = numbers.some(element => {
    return element < 10;
  });
  // expected output: true

  // sort a list of words by their length with .sort()
  const sortedWords = ['Orange', 'Grape', 'Strawberry'].sort((a, b) => {
    // if returned value is less than 0 then 'a' is sorted before 'b'
    // otherwise 'b' is sorted before 'a'
      return a.length - b.length;
  });
  // expected output: ['Grape', 'Orange', 'Strawberry']
```

## Whitespace

ESLint rules:

* TODO: spaces/tabs ([`indent`](https://eslint.org/docs/rules/indent.html))
* [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks.html)
* [`space-before-function-paren`](space-before-function-paren)
* [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing)
* [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops.html)
* [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing)
* [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines)

Use a space before the opening brace of a block.

```javascript
  // bad
  function test(){
    console.log('test');
  }

  // good
  function test() {
    console.log('test');
  }
```

Do not use a space between the argument list and the function name in function calls and declarations. 

```javascript
  // bad
  function marco () {
    console.log ('polo');
  }

  // good
  function marco() {
    console.log('polo');
  }
```

Use a space before opening parenthesis in control statements (`if`, `while`, etc.).

```javascript
  // bad
  if(condition) { ... }

  // good
  if (condition) { ... }
```

Use spaces between operators. 

```javascript
  // bad
  const a=b+10;

  // good
  const a = b + 10;
```

Use a space after commas.

```javascript
  // bad
  const list = [1,2,3,4]
  function fullName (firstName,lastName) { ... }

  // good
  const list = [1, 2, 3, 4]
  function fullName (firstName, lastName) { ... }
```

Do not leave multiple blank lines.

```javascript
  // bad
  const value = 'hello world';


  console.log(value);

  // good
  const value = 'hello world';
  console.log(value);
```

Leave a blank line between a block and the next statement.

```javascript
  // bad
  if (valid) {
    return value;
  }
  return message;

  // good
  if (valid) {
    return value;
  }

  return message;
```
```javascript
  // bad
  const dog = {
    run() {
    },
    bark() {
    },
  };
  return obj;

  // good
  const dog = {
    run() {
    },

    bark() {
    },
  };

  return obj;
```

## Comparison Operators & Equality

MDN web docs:
  
* [`Equality Comparisons and Sameness`](https://developer.mozilla.org/en/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  
ESLint rules:

* [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)
* [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary.html)
* [`no-unneeded-ternary`](https://eslint.org/docs/4.0.0/rules/no-unneeded-ternary)

Use `===` and `!==` over `==` and `!=`

```javascript
```

* Use shortcuts for booleans, but explicit comparisons for strings and numbers

```javascript
  // bad
  if (isLoaded === true) { ... }

  // good
  if (isLoaded) { ... }

  // bad
  if (value) { ... }

  // good
  if (value !== '') { ... }

  // bad
  if (items.length) { ... }

  // good
  if (items.length > 0) { ... }
```

* Do not nest ternary expressions

```javascript
  // bad
  const thing = foo ? bar : baz === qux ? quxx : foobar;
```

```javascript
  // good
  const thing = foo ? bar : foobar;

  // good 
  let thing;

  if (foo) {
    thing = bar;
  } else if (baz === qux) {
    thing = quxx;
  } else {
    thing = foobar;
  }
```

* Do not use ternary expressions when simpler alternatives exist

```javascript
  // bad
  const isEven = (value % 2 === 0) ? true : false;

  // good
  const isEven = value % 2 === 0;


  // bad
  const isOdd = (value % 2 === 0) ? false : true;

  // good
  const isOdd = value % 2 !== 0;
``` 

```javascript
  // bad
  const value = newNumber ? newNumber : 1;

  // good
  const value = newNumber || 1;
```