({
    appDir: '.',
    baseUrl: '.',
    dir: 'target',
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

      'sharede' : 'shared'
    },
    modules: [
        {
            name: 'main',
            exlcude : [
              'jquery',
              'jquery-validate',
              'jquery-form',
              'underscore',
              'backbone',
              'bootstrap'
            ]
        }
    ]
})