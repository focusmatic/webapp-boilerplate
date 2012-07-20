// Filename: views/contentView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/contentModel',
  'text!../../templates/home.html',
  'text!../../templates/content.html',
  'text!../../templates/menu.html'
  ],function($, _, Backbone, Model, templateHome, templateContent, templateMenu)
  {

    var model = new Model({});

    var View = Backbone.View.extend({
      el: '.row-fluid',
      model: model,
      template: _.template(templateMenu),

      render: function(){
        this.$el.append( this.template(model.toJSON()) );
      // a convention to enable chained calls
      return this;
    }
  });

    return new View();
  });
