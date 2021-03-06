/*jshint*/
( function (){
  var EXT_PATH              = 'ext/';
  var BOOTSTRAP_PATH        = 'ext/bootstrap/';
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
      'underscore': EXT_PATH + 'underscore/underscore',
      'backbone': EXT_PATH + 'backbone/backbone',
      'bootstrap': BOOTSTRAP_PATH + 'js/bootstrap',

      // require plugins
      'json': EXT_PATH + 'require/plugins/json',
      'text': EXT_PATH + 'require/plugins/text',
      'domReady': EXT_PATH + 'require/plugins/domReady',
      'i18n': EXT_PATH + 'require/plugins/i18n',
      'async': EXT_PATH + 'require/plugins/async',

      // shared modules

      'shared' : 'shared'

    },
    shim: {
      // dealing with dependencies and exports of non-AMD modules
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
