/*jshint*/
( function (){
  var EXT_PATH              = 'ext/';
  var BOOTSTRAP_PATH        = 'ext/bootstrap/';
  var BOOTSTRAP_PLUGIN_PATH = BOOTSTRAP_PATH + 'plugins/';
  var D3_PLUGIN_PATH        = EXT_PATH + 'd3/plugins/';
  var MODULES_PATH          = 'modules/';

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
      'jquery': EXT_PATH + 'jquery/jquery-1.7.2',
      'jquery-validate' : EXT_PATH + 'jquery/jquery.validate',
      'jquery-form' : EXT_PATH + 'jquery/jquery.form',
      'underscore': EXT_PATH + 'underscore/underscore',
      'backbone': EXT_PATH + 'backbone/backbone',
      'bootstrap': BOOTSTRAP_PATH + 'js/bootstrap',

      // bootstrap plugins
      'bootstrap-button': BOOTSTRAP_PLUGIN_PATH + 'bootstrap-button',
      'bootstrap-collapse': BOOTSTRAP_PLUGIN_PATH + 'bootstrap-collapse',
      'bootstrap-modal': BOOTSTRAP_PLUGIN_PATH + 'bootstrap-modal',
      'bootstrapJSDropdown': BOOTSTRAP_PATH + 'plugins/bootstrap-dropdown',

      // require plugins
      'json': EXT_PATH + 'require/plugins/json',
      'text': EXT_PATH + 'require/plugins/text',
      'domReady': EXT_PATH + 'require/plugins/domReady',
      'i18n': EXT_PATH + 'require/plugins/i18n',
      'async': EXT_PATH + 'require/plugins/async',

      // shared modules

      'sharede' : 'shared'

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
      'bootstrap': {
        deps: ['jquery'],
        exports: 'jQuery'
      }
    }
  });
})();
