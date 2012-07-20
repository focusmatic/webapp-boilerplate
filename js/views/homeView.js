// Filename: views/homeView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/homeModel',
  'bootstrapJS',
  'bootstrapJSDropdown',
  'text!../../templates/home.html'
  ],function($, _, Backbone, Model, bootstrapJS,bootstrapJSDropdown, templateHome)
  {

    var model = new Model({});
    var View = Backbone.View.extend({
      el: 'body',
      model: model,
      template : _.template(templateHome),

      render: function(){
       this.$el.prepend( this.template(model.toJSON()) );
       $('#RequireJS').after("<link rel='stylesheet' href='css/bootstrap/bootstrap.css'>");
       $('#RequireJS').after("<link rel='stylesheet' href='css/mycss.css'>");
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
