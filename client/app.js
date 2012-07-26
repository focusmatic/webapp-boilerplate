// main entry point for the app
define([
    'client/router'
    ], function ( Router )
    {
        var init = function () {
            // pass in router module and call its init function
            console.log('###### app trying initialize. #######');
            this.router = new Router();
            console.log('###### app initialized. #######');
        };
        return {
            init: init
        };
    });