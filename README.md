# lrouter Javascript Library
lrouter is a lightweight javaScript library to provide an API for handling hash routes.

## Installation

```html
    <script type="text/javascript" src="lrouter.js"></script>
```

## Usage

```js
    // Create a router.
    let router = lrouter.Create();

    // Define routes.
    router.Add("/#/" , function() {
      console.log("Home Page");
    });

    router.Add("/#/login" , function() {
      console.log("Login Page");
    });
    
    // Routes with parameters (/#/articles?category=sports&limit=10).
    router.Add("/#/articles" , function(parameters) {
      console.log("Articles Page");
      let category = parameters.category;
      let limit = parameters.limit;
    });
```