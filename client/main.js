// Copyright © Focusmatic SAS
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

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
        'shared' : '../shared',

        // test modules
        'test' : 'client/test',
        'jasmine' : extPath + 'jasmine',
        'qunit' : extPath + 'qunit'
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
        'jasmine/jasmine' : {
          deps : ['qunit/qunit-1.9.0'],
          exports: 'jasmine'
        },
        'jasmine/jasmine-html': {
          deps: ['jasmine/jasmine'],
          exports: 'jasmine'
        },
        'qunit/qunit-1.9.0': {
          exports: 'QUnit'
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