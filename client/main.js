( function () {

  var extPath = 'client/ext/';
  var bootstrapPath = 'client/ext/bootstrap/';
  var modulesPath = 'client/modules/';

  require.config({
    baseUrl: '..',
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

        // UI module path aliases
        'toolboxUI' : modulesPath + 'toolboxUI',
        'Navbar' : modulesPath + 'toolboxUI/navbar',
        'Menu' : modulesPath + 'toolboxUI/menu',
        'Content' : modulesPath + 'toolboxUI/content',

        // bootstrap aliases
        'bootstrapCSS': 'text!' +bootstrapPath + 'css/bootstrap.css',
        'bootstrapJS': bootstrapPath + 'js/bootstrap',
        'bootstrapJSCarousel': bootstrapPath + 'plugins/bootstrap-carousel',
        'bootstrapJSDropdown': bootstrapPath + 'plugins/bootstrap-dropdown',
        
        'modules' : modulesPath,

        // shared modules aliases
        //'mySharedModule' : sharedPath + 'sharedModule'
        'shared' : '../shared'
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
    'client/app'
    ], function(app){
      console.log('####### executing main.js #######');
      app.init();
    }
    );
})();