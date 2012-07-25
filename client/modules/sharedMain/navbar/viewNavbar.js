// Filename: views/homeView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'sharedMain/modelEmpty',
  'bootstrapJS',
  'bootstrapJSDropdown',
  'text!Navbar/navbar.html'
  ],function($, _, Backbone, Model, bootstrapJS,bootstrapJSDropdown, templateHome)
  {

    var model = new Model({});
    var View = Backbone.View.extend({
      el: 'body',
      model: model,
      template : _.template(templateHome),

      render: function(){
       this.$el.prepend( this.template(model.toJSON()) );
        // dropdown menu
        $('.dropdown-toggle').dropdown();
        // carousel
        $('.carousel').carousel();
        // a convention to enable chained calls
        return this;
      }
    });

    return new View();
  });
