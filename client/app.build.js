/*jshint node:true*/

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

({
    appDir: '.',
    name: 'main',
    out: '../target/main-build.js',
    //mainConfigFile: 'main.js',
    findNestedDependencies: true,
    paths: {
        'jquery': 'ext/jquery/jquery-1.7.2',
        'underscore': 'ext/underscore/underscore',
        'backbone': 'ext/backbone/backbone',

        // require plugins aliases
        'json': 'ext/require/plugins/json',
        'text': 'ext/require/plugins/text',
        'domReady': 'ext/require/plugins/domReady',
        'i18n': 'ext/require/plugins/i18n',

        // UI module aliases
        'sharedMain' : 'modules/sharedMain',
        'Navbar' : 'modules/sharedMain/navbar',
        'Menu' : 'modules/sharedMain/menu',
        'Content' : 'modules/sharedMain/content',

        // bootstrap aliases
        'bootstrapCSS': 'text!' +'ext/bootstrap/css/bootstrap.css',
        'bootstrapJS': 'ext/bootstrap/js/bootstrap',
        'bootstrapJSCarousel': 'ext/bootstrap/plugins/bootstrap-carousel',
        'bootstrapJSDropdown': 'ext/bootstrap/plugins/bootstrap-dropdown'

// shared modules aliases
//'sharedModule' : '../shared/sharedModule'
    }
/*
modules: [
{
name: 'ext/require/require'
},
{
name: 'main'
}
]*/
// Sets the backbone configuration for you application
/*
'backbone': {
deps: ['underscore', 'jquery'],
attach: 'Backbone'
},
'underscore': {
attach: 'underscore'
},
*/
})