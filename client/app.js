// main entry point for the app
define([
    'client/router',
    'modules/utils',
    'text!client/modules/toolboxUI/mycss.css'
    ], function ( Router, utils, style )
    {
        var init = function () {
            // pass in router module and call its init function
            console.log('###### app trying initialize. #######');
            this.router = new Router();
            // injecting css
            utils.loadCSS(style);
            console.log('CSS loaded');
            console.log('###### app initialized. #######');

        };
        return {
            init: init
        };
    });