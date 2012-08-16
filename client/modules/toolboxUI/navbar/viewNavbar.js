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

define([
  // loading ext first
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'modules/utils',
  'text!Navbar/itemMenu.html',
  'text!Navbar/navbar.html',
  'domReady!'
  ], function (
    $,
    _,
    Backbone,
    bootstrap,
    utils,
    templateMenuItem,
    templateNavBar
    ){

    utils.loadTemplateScripts(templateNavBar);
    // utils.loadTemplateScripts(templateMenuItem);
    var testMenuItem = [
            {name: "QUnit", link: "/test"}
        ];
    
    var MyModel = Backbone.Model.extend({
        defaults: {
            link: "#"
        }
    }),
    
    CollectionMenuItem = Backbone.Collection.extend({
        model : MyModel
    }),
    MenuItemView = Backbone.View.extend({
        el :'#testul',
        template: _.template($("#itemMenuTemplate").html()),

        render: function(){
            this.$el.prepend(this.template(this.model.toJSON()));
            return this;
        }
    });

        // main view for the topbar
        var NavBarView = Backbone.View.extend({
            el: 'body',
            template : _.template($("#frame-navbar").html()),

            initialize: function () {
                this.collection = new CollectionMenuItem(testMenuItem);
            },

            buildnavbar: function(){
                var that = this;
                this.$el.prepend( this.template );
                $('.dropdown-toggle').dropdown();
                _.each(this.collection.models, function (item) {
                    that.renderMenuItem(item);
                }, this);
            },

            render: function () {
                this.buildnavbar();
            // a convention to enable chained calls
            return this;
        },

        renderMenuItem: function (item){
            var menuItemView = new MenuItemView({
                model : item
            });
            this.$el.append(menuItemView.render());
            return this;
        }
    });

return new NavBarView();
});
