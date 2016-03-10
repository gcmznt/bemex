(function(global) {

  var selectorMap = {
    'bp': 'blockPrefix',
    'bf': 'blockFormat',
    'ep': 'elementPrefix',
    'ef': 'elementFormat',
    'mp': 'modifierPrefix',
    'mf': 'modifierFormat',
    'qp': 'queryPrefix',
    'qf': 'queryFormat',
    'sp': 'statePrefix',
    'sf': 'stateFormat',
    's': 'states',
  };

  // Convert conf for bemex
  var changeConfKeys = function(confOld) {
    var conf = {};
    for (s in confOld) {
      conf[selectorMap[s]] = confOld[s];
    }
    return conf;
  };

  // Get conf from inputs in page
  var getInputs = function() {
    var conf = {};
    for (s in selectorMap) {
      conf[s] = document.getElementById(s).value;
    }
    return conf;
  };

  // Set conf in page
  var setInputs = function(conf) {
    for (s in conf) {
      if (document.getElementById(s)) {
        document.getElementById(s).value = decodeURIComponent(conf[s]);
      }
    }
  };

  // Get conf from url params
  var getParams = function() {
    var conf;
    if (location.hash !== '') {
      conf = {};
      location.hash.substr(1).split('&').forEach(function(e) {
        conf[e.split('=')[0]] = e.split('=')[1];
      });
    }
    location.hash = '';
    return conf;
  };

  // Set conf as url params
  var setParams = function(conf) {
    var hash = [];
    for (s in conf) {
      if (conf[s]) {
        hash.push(s + '=' + conf[s]);
      }
    }
    location.hash = '#' + hash.join('&');
  };

  // Load configuration from localstorage
  var loadConf = function() {
    return JSON.parse(localStorage.getItem('conf'));
  };

  // Save configuration to localstorage
  var saveConf = function(conf) {
    localStorage.setItem('conf', JSON.stringify(conf));
  };

  // Generate bemex
  var generateExp = function(conf) {
    document.getElementById('result').value = BemEx(changeConfKeys(conf));
    saveConf(conf);
  };

  // Generate url
  var generateUrl = function(conf) {
    var hash = [];
    for (s in conf) {
      if (conf[s]) {
        hash.push(s + '=' + encodeURIComponent(conf[s]));
      }
    }
    document.getElementById('url').value =
      location.origin + '/#' + hash.join('&');
  };

  var update = function() {
    generateExp(getInputs());
    generateUrl(getInputs());
  };

  var onload = function() {
    setInputs(getParams() || loadConf());
    update();
  };

  window.beTools = {
    onload: onload,
    update: update,
    selectorMap: selectorMap
  }

})(window);
