// Filename: router.js
define([
    'backbone',
    'views/homeView',
    'views/contentView',
    'views/menuView'
    ], function(Backbone, homeView, contentView, menuView)
    {
        var router = Backbone.Router.extend({
            initialize : function () {
                this.homeView = homeView;
                this.contentView = contentView;
                this.menuView = menuView;
                Backbone.history.start();
                console.log('###### router initialized. #######');
            },
            routes : {
                '': 'home'
            },
            home : function() {
                // loading content
                this.homeView.render();
                this.menuView.render();
                this.contentView.render();
            }
        });
        return router;
    });