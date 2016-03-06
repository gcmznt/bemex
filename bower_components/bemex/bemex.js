(function() {
    var BemEx = (function() {
        var formats = {
            pascal: '([A-Z0-9][a-zA-Z0-9]*)',
            camel: '([a-z0-9][a-zA-Z0-9]*)',
            kebab: '([a-z0-9]*[-a-z0-9]*)',
            snake: '([a-z0-9]*[_a-z0-9]*)',
            upperKebab: '([A-Z0-9]*[-A-Z0-9]*)',
            upperSnake: '([A-Z0-9]*[_A-Z0-9]*)',
            lower: '([a-z0-9]*)',
            upper: '([A-Z0-9]*)',
        };

        var defaults = {
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
        };

        // Utilities
        var trim = function(s) {
            return s.trim();
        };

        var escape = function(s) {
            return s
                // CSS Escaping
                .replace(/[@]/g, function(e) { return '\\' + e; })
                // Regex Escaping
                .replace(/[\\$^?|*+]/g, function(e) { return '\\' + e; });
        };

        var formatPiece = function(opt, pieces, e) {
            pieces[e] = escape(opt[e + 'Prefix'] || defaults[e + 'Prefix'])
                + formats[opt[e + 'Format'] || defaults[e + 'Format']];
        };
        // //////////////

        var BemExGenerator = function(opt) {
            var pieces = {};
            var states;
            var expression;

            opt = opt || {};
            ['block', 'element', 'modifier', 'query', 'state']
                .forEach(formatPiece.bind(this, opt, pieces));
            states = ((opt.states || defaults.states)
                .split(',').map(escape).map(trim).join('|'));

            expression = '^('
                + '(' + states + ')' + pieces.state + '|'
                + pieces.block
                + '(' + pieces.element + ')?'
                + '(' + pieces.modifier + ')?)'
                + '(' + pieces.query + ')?$';

            return new RegExp(expression);
        };

        BemExGenerator.formats = formats;
        BemExGenerator.defaults = defaults;
        return BemExGenerator;
    })();

    if (typeof module !== 'undefined') {
        module.exports = BemEx;
    } else {
        window.BemEx = BemEx;
    }
})();
