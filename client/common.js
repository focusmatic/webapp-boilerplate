// Copyright © 2012, Focusmatic SAS
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

( function (){
    var EXT_PATH              = 'ext/';
    var BOOTSTRAP_PATH        = 'ext/bootstrap/';
    var MODULES_PATH          = 'modules/';

    require.config({
        baseUrl: '.',
        paths: {
            // UI module path aliases
            'toolboxUI'  : MODULES_PATH + 'toolboxUI',
            'Navbar'     : MODULES_PATH + 'toolboxUI/navbar',
            'Menu'       : MODULES_PATH + 'toolboxUI/menu',
            'Content'    : MODULES_PATH + 'toolboxUI/content',
            'Login'      : MODULES_PATH + 'login',

            // ext lib aliases
            'jquery'     : EXT_PATH + 'jquery/jquery-1.7.2',
            'underscore' : EXT_PATH + 'underscore/underscore',
            'backbone'   : EXT_PATH + 'backbone/backbone',
            'bootstrap'  : BOOTSTRAP_PATH + 'js/bootstrap',

            // require plugins
            'json'       : EXT_PATH + 'require/plugins/json',
            'text'       : EXT_PATH + 'require/plugins/text',
            'domReady'   : EXT_PATH + 'require/plugins/domReady',
            'i18n'       : EXT_PATH + 'require/plugins/i18n',
            'async'      : EXT_PATH + 'require/plugins/async',

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
