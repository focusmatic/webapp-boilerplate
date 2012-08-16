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

({
    appDir: '.',
    baseUrl: '.',
    dir: '../target',
    //mainConfigFile: 'main.js',
    findNestedDependencies: true,
    paths: {
        /////////////////////////////////////////
      // EXT ALIASES
      // Configuring aliases is useful for updating
      /////////////////////////////////////////

      // UI module path aliases
      'toolboxUI' : 'modules/toolboxUI',
      'Navbar' : 'modules/toolboxUI/navbar',
      'Menu' : 'modules/toolboxUI/menu',
      'Content' : 'modules/toolboxUI/content',
      'Login' : 'modules/login',

      // ext lib aliases
      'jquery': 'ext/jquery/jquery-1.7.2',
      'jquery-validate' : 'ext/jquery/jquery.validate',
      'jquery-form' : 'ext/jquery/jquery.form',
      'underscore': 'ext/underscore/underscore',
      'backbone': 'ext/backbone/backbone',
      'bootstrap': 'ext/bootstrap/js/bootstrap',

      // bootstrap plugins
      'bootstrap-button': 'ext/bootstrap/plugins/bootstrap-button',
      'bootstrap-collapse': 'ext/bootstrap/plugins/bootstrap-collapse',
      'bootstrap-modal': 'ext/bootstrap/plugins/bootstrap-modal',
      'bootstrapJSDropdown': 'ext/bootstrap/plugins/bootstrap-dropdown',

      // require plugins
      'json': 'ext/require/plugins/json',
      'text': 'ext/require/plugins/text',
      'domReady': 'ext/require/plugins/domReady',
      'i18n': 'ext/require/plugins/i18n',
      'async': 'ext/require/plugins/async',

      'shared' : 'shared'
    },
    modules: [
        {
            name: 'main',
            exlcude : [
              'jquery',
              'underscore',
              'backbone',
              'bootstrap'
            ]
        }
    ]
})