// Filename: modules/widget1/view.js
define([
  'jquery',
  'underscore',
  'backbone',
  '../widget1/model',
  'text!../widget1/template.html'
  ],function($, _, Backbone, Model, template)
  {

    var model = new Model({
      title: 'myWidget1!',
      content: 'my content lorem ipsum.'
    });

    var View = Backbone.View.extend({
      el: ".row-fluid",
      model: model,
      template: _.template(template),

      render: function(){
        //this.$el.append( this.template(model.toJSON()) );
        this.$el.append( this.template(model.toJSON()) );
        console.log($('#content'));
      // a convention to enable chained calls
      return this;
    }
  });

    return new View();
  });
