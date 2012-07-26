// Filename: router.js
define([
    'backbone',
    'Navbar/viewNavbar',
    'Content/viewContent',
    'Menu/viewMenu'
    ], function (
        Backbone,
        viewNavbar,
        viewContent,
        viewMenu
    ){
        var router = Backbone.Router.extend({
            initialize : function () {
                this.viewNavbar = viewNavbar;
                this.viewContent = viewContent;
                this.viewMenu = viewMenu;
                Backbone.history.start();
                console.log('###### router initialized. #######');
            },
            routes : {
                '': 'home'
            },
            home : function() {
                // loading content
                this.viewNavbar.render();
                this.viewMenu.render();
                this.viewContent.render();
            }
        });
        return router;
    });