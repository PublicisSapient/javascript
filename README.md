# PublicisSapient Javascript Styleguide

## Table of Contents

  1. [Accessors](#accessors)

## Accessors
  MDN web docs: [`getter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) [`setter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
  ESLint rules: [`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs)

  Accessors are more commonly referred to as getters and setters.  The `get` and `set` syntax binds an object property to a function that will be called when that property is looked up or assigned a value.  

  This pattern looks promising but has too many drawbacks to be used on a large project.  Spelling mistakes will not trigger errors with `set` calls.  This can be avoided by using normal functions instead of getters and setters.
  
    ```javascript
    // bad
    class User {
      this.firstName = 'David';
      this.lastName = 'Jackson';

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
    user.getFulName()

    // However since an object property can be named anything it will not be thrown on setters
    user.setFulName = 'David Jackson'

    // good
    class User {
      constructor() {
        this.firstName = 'James';
        this.lastName = 'Bond';
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
    user.getFulName()

    // An error will also be thrown here as well 
    user.setFulName('David Jackson')

    // And it's more obvious that you're calling a function like this
    user.setFullName('David Jackson');

    ```