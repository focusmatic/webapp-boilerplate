// Filename: main.js
(function() {

  var libsPath = 'libs/';
  var cssPath = '../css';
  require.config({

    paths: {
        // Configuring aliases
        // Useful for updating
        'jquery': libsPath + 'jquery/jquery-1.7.2.min',
        'underscore': libsPath + 'underscore/underscore-min',
        'backbone': libsPath + 'backbone/backbone-min',

        // require plugins aliases
        'json': libsPath + 'require/plugins/json',
        'text': libsPath + 'require/plugins/text',
        'domReady': libsPath + 'require/plugins/domReady',
        'i18n': libsPath + 'require/plugins/i18n',

        // bootstrap aliases
        'bootstrapCSS': 'text!' +cssPath + 'bootstrap/bootstrap.css',
        'bootstrapJS': libsPath + 'bootstrap/bootstrap.min',
        'bootstrapJSCarousel': libsPath + 'bootstrap/plugins/bootstrap-carousel',
        'bootstrapJSDropdown': libsPath + 'bootstrap/plugins/bootstrap-dropdown'
      },
      shim: {
        // dealing with dependencies and exports of non-AMD modules
        'underscore': {
          exports: '_'
        },
        'backbone': {
          deps: ['jquery','underscore'],
          exports: 'Backbone'
        }
      }
    });

  require([
    // Load our apps
    'jquery',
    'underscore',
    'backbone',
    'app'

    // Load plugins

    ], function($, _, backbone, app){
      console.log('####### executing main.js #######');
      app.init();
    }
    );
})();