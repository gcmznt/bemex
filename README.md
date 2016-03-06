# BemEx

Generate Regexp to validate your CSS BEM syntax with linters.
Try it on [http://giacomozinetti.github.io/bemex/](http://giacomozinetti.github.io/bemex/)

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
BemEx(config);
```

### Browser

```
<script src="./bemex.js"></script>
<script>
    var re = BemEx(config);
</script>
```

## Configuration

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

## Formats available

```
pascal,
camel,
kebab,
snake,
upperKebab,
upperSnake,
lower,
upper,
```

## Running the tests

```
npm run test
```
