/*jshint*/
( function (){
  var EXT_PATH = 'ext/';
  var BOOTSTRAP_PATH = 'ext/bootstrap/';
  var BOOTSTRAP_PLUGIN_PATH = BOOTSTRAP_PATH + 'plugins/';
  var D3_PLUGIN_PATH = EXT_PATH + 'd3/plugins/';
  var MODULES_PATH = 'modules/';

  require.config({

    baseUrl: '.',

    paths: {

      /////////////////////////////////////////
      // EXT ALIASES
      // Configuring aliases is useful for updating
      /////////////////////////////////////////

      // UI module path aliases
        'toolboxUI' : MODULES_PATH + 'toolboxUI',
        'Navbar' : MODULES_PATH + 'toolboxUI/navbar',
        'Menu' : MODULES_PATH + 'toolboxUI/menu',
        'Content' : MODULES_PATH + 'toolboxUI/content',
        'Login' : MODULES_PATH + 'login',

      // ext lib aliases
      'socket.io': 'socket.io/socket.io',
      'jquery': EXT_PATH + 'jquery/jquery-1.7.2',
      'jquery-validate' : EXT_PATH + 'jquery/jquery.validate',
      'jquery-form' : EXT_PATH + 'jquery/jquery.form',
      'underscore': EXT_PATH + 'underscore/underscore',
      'backbone': EXT_PATH + 'backbone/backbone',
      'rickshaw': EXT_PATH + 'rickshaw/rickshaw',
      'd3': EXT_PATH + 'd3/d3.v2',
      'moment': EXT_PATH + 'moment/moment',
      'bootstrap': BOOTSTRAP_PATH + 'js/bootstrap',

      // bootstrap plugins
      'bootstrap-button': BOOTSTRAP_PLUGIN_PATH + 'bootstrap-button',
      'bootstrap-collapse': BOOTSTRAP_PLUGIN_PATH + 'bootstrap-collapse',
      'bootstrap-modal': BOOTSTRAP_PLUGIN_PATH + 'bootstrap-modal',
      'bootstrapJSDropdown': BOOTSTRAP_PATH + 'plugins/bootstrap-dropdown',

      // d3 plugins
      'd3.layout.cloud': D3_PLUGIN_PATH + "d3.layout.cloud",

      // require plugins
      'json': EXT_PATH + 'require/plugins/json',
      'text': EXT_PATH + 'require/plugins/text',
      'domReady': EXT_PATH + 'require/plugins/domReady',
      'i18n': EXT_PATH + 'require/plugins/i18n',
      'async': EXT_PATH + 'require/plugins/async',

      ////////////////////////////////////////
      // MODULES ALIASES
      ////////////////////////////////////////

      // components
      'components' : MODULES_PATH + 'components',

      // core
      'core' : MODULES_PATH + 'core',

      // catalogs
      'catalog': MODULES_PATH + 'catalog',

      // analytics
      'analytics': MODULES_PATH + 'analytics/index'

    },
    shim: {
      // dealing with dependencies and exports of non-AMD modules
      'jquery-form': {
        deps: ['jquery'],
        exports: 'jQuery'
      },
      'jquery-validate': {
        deps: ['jquery'],
        exports: 'jQuery'
      },
      'd3.layout.cloud': {
        deps: ['d3'],
        exports: 'd3.layout.cloud'
      },
      'bootstrap-button': {
        deps: ['bootstrap']
      },
      'bootstrap-collapse': {
        deps: ['bootstrap']
      },
      'bootstrap-modal': {
        deps: ['bootstrap']
      },
      'underscore': {
          exports: '_'
      },
      'backbone': {
          deps: ['jquery','underscore'],
          exports: 'Backbone'
      },
      'rickshaw': {
        exports: 'Rickshaw'
      },
      'd3': {
        exports: 'd3'
      },
      'socket.io': {
        exports: 'io'
      },
      'bootstrap': {
        deps: ['jquery'],
        exports: 'jQuery'
      },
      'google.maps': {
        deps: ["async!http://maps.googleapis.com/maps/api/js?key=AIzaSyDhXh57UyGGNjD7InfuVdNHM43LAvBvRlU&sensor=false"],
        exports: 'google.maps'
      }
    }
  });
})();
