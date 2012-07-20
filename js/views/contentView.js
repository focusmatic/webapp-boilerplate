// Filename: views/contentView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/contentModel',
  'text!../../templates/content.html',
  // loading a widget
  '../../modules/widget1/view',
  '../../modules/widget2/view'

  ],function($, _, Backbone, Model, templateContent, viewWidget1, viewWidget2)
  {

    var model = new Model({
      title: 'Hello !',
      content: 'My content lorem ipsum.'
    });

    var View = Backbone.View.extend({
      el: '.row-fluid',
      model: model,
      template: _.template(templateContent),
      
      render: function(){
        this.$el.append( this.template(model.toJSON()) );
        console.log(this.el);
        //loading widget1
        viewWidget1.render();
        viewWidget2.render();

      // a convention to enable chained calls
      return this;
    }
  });

    return new View();
  });
