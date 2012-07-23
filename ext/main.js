// Filename: main.js
(function() {

  var extPath = '';
  var bootstrapPath = '../modules/bootstrap/';
  require.config({

    paths: {
        // Configuring aliases
        // Useful for updating
        'jquery': extPath + 'jquery/jquery-1.7.2.min',
        'underscore': extPath + 'underscore/underscore-min',
        'backbone': extPath + 'backbone/backbone-min',

        // require plugins aliases
        'json': extPath + 'require/plugins/json',
        'text': extPath + 'require/plugins/text',
        'domReady': extPath + 'require/plugins/domReady',
        'i18n': extPath + 'require/plugins/i18n',

        // UI module aliases
        'sharedMain' : '../modules/sharedMain/',
        'Navbar' : '../modules/sharedMain/navbar/',
        'Menu' : '../modules/sharedMain/menu/',
        'Content' : '../modules/sharedMain/content/',

        // bootstrap aliases
        'bootstrapCSS': 'text!' +bootstrapPath + 'css/bootstrap.css',
        'bootstrapJS': bootstrapPath + 'js/bootstrap.min',
        'bootstrapJSCarousel': bootstrapPath + 'plugins/bootstrap-carousel',
        'bootstrapJSDropdown': bootstrapPath + 'plugins/bootstrap-dropdown'
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
    'app'
    ], function(app){
      console.log('####### executing main.js #######');
      app.init();
    }
    );
})();