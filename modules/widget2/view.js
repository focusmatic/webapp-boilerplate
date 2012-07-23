// Filename: modules/widget2/view.js
define([
  'jquery',
  'underscore',
  'backbone',
  '../widget2/model',
  'text!../widget2/template.html'
  ],function($, _, Backbone, Model, template)
  {

    var model = new Model({
      title: 'myWidget2!',
      content: 'my content lorem ipsum.'
    });

    var View = Backbone.View.extend({
      model: model,
      //template: _.template(template),
      parent : null,
      setParent : function(parent){
        console.log($(parent).html());
        this.parent = parent;
      },
      tagName: 'article',
      className: 'contact-container',
      template: function () {
        return $(this.parent).html();
      },
      //tmpl : _.template(this.template),

      render: function(){
        //this.$el.append(template);
        //this.$el.append( this.tmpl(model.toJSON()) );
        //this.$el.html( tmpl(model.toJSON()) );
        console.log(this.$el);
      // a convention to enable chained calls
      return this;
    }
  });

    return new View();
  });