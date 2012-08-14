define([
    'backbone',
    './viewLogin'

    ], function (
        Backbone,
        viewLogin
    ){
        var router = Backbone.Router.extend({
            initialize : function () {
                this.viewLogin = viewLogin;
                Backbone.history.start();
                console.log('###### router initialized. #######');
            },
            routes : {
                '': 'home'
            },
            home : function() {
                // loading content
                this.viewLogin.render();
            }
        });
        return router;
    });