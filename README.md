# PublicisSapient Javascript Styleguide

A Javascript styleguide written from an enterprise perspective.

## Table of Contents

1. [Accessors](#accessors)
2. [Arrays](#arrays)
3. [Strings](#strings)

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

## Strings

MDN Web Docs:

* [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

ESLint Rules:

* [`quotes`](https://eslint.org/docs/rules/quotes.html)
* [`prefer-template`](https://eslint.org/docs/rules/prefer-template)
* [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)
* [`no-eval`](https://eslint.org/docs/rules/no-eval)
* [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

Use single quotes '' for strings.

```javascript
// bad
const name = "I am a string";

// bad - template literals should contain interpolation or newlines
const name = `I am a string`;

// good
const name = 'I am a string';
```

Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

```javascript
// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

When programmatically building up strings, use template strings instead of concatenation.

```javascript
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

Never use eval() on a string, it opens too many vulnerabilities.

Do not unnecessarily escape characters in strings.

```javascript
// bad
const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const foo = `my name is '${name}'`;
```