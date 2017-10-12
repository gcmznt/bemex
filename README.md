# BemEx

Generate Regexp to validate your CSS BEM syntax with linters.
Try it on [http://gcmznt.github.io/bemex/](http://gcmznt.github.io/bemex/)

### Installing

```
npm install --save-dev bemex
```

```
bower install --save bemex
```

## Use

### Node

```
var BemEx = require('bemex');
var re = BemEx(config);
```

### Browser

```
<script src="./bemex.js"></script>
<script>
    var re = BemEx(config);
</script>
```

## Configuration default

```
{
    blockFormat: 'kebab',
    blockPrefix: '',
    elementFormat: 'kebab',
    elementPrefix: '__',
    modifierFormat: 'kebab',
    modifierPrefix: '--',
    queryFormat: 'kebab',
    queryPrefix: '@',
    stateFormat: 'kebab',
    statePrefix: '-',
    states: 'u, is, has, js',
}
```

### Get defaults

```
var BemEx = require('bemex');
console.log(BemEx.defaults);
```

## Formats available

```
pascal, camel, kebab, snake, upperKebab, upperSnake, lower, upper
```

### Get formats

```
var BemEx = require('bemex');
console.log(BemEx.formats);
```

## Running the tests

```
npm run test
```
