/*jshint node:true*/
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