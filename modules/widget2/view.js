// Filename: modules/widget2/view.js
define([
  'jquery',
  'underscore',
  'backbone',
  '../widget1/model',
  'text!../widget1/template.html'
  ],function($, _, Backbone, Model, template)
  {

    var model = new Model({
      title: 'myWidget2!',
      content: 'my content lorem ipsum.'
    });

    var View = Backbone.View.extend({
      el: '.row-fluid',
      model: model,
      template: _.template(template),

      events: {
        'click .well': 'popup'
      },

      render: function(){
        //this.$el.append( this.template(model.toJSON()) );
        this.$el.append( this.template(model.toJSON()) );
        console.log($('#content'));
      // a convention to enable chained calls
      return this;
    },
    popup : function(){
      alert('a test !');
    }
  });

    return new View();
  });
