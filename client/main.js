// Filename: main.js
(function() {

  var extPath = 'ext/';
  var bootstrapPath = 'ext/bootstrap/';
  //var sharedPath = '  ../shared/';

  require.config({

    paths: {
        // Configuring aliases
        // Useful for updating
        'jquery': extPath + 'jquery/jquery-1.7.2',
        'underscore': extPath + 'underscore/underscore',
        'backbone': extPath + 'backbone/backbone',

        // require plugins aliases
        'json': extPath + 'require/plugins/json',
        'text': extPath + 'require/plugins/text',
        'domReady': extPath + 'require/plugins/domReady',
        'i18n': extPath + 'require/plugins/i18n',

        // UI module aliases
        'sharedMain' : '../modules/sharedMain',
        'Navbar' : '../modules/sharedMain/navbar',
        'Menu' : '../modules/sharedMain/menu',
        'Content' : '../modules/sharedMain/content',

        // bootstrap aliases
        'bootstrapCSS': 'text!' +bootstrapPath + 'css/bootstrap.css',
        'bootstrapJS': bootstrapPath + 'js/bootstrap',
        'bootstrapJSCarousel': bootstrapPath + 'plugins/bootstrap-carousel',
        'bootstrapJSDropdown': bootstrapPath + 'plugins/bootstrap-dropdown'
        
        // shared modules aliases
        //'sharedModule' : '../shared/sharedModule'
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