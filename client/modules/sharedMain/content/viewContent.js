// Filename: views/contentView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'sharedMain/modelEmpty',
  'text!Content/content.html'
  //'sharedModule'
  ],function(
    $,
    _,
    Backbone,
    Model,
    templateContent,
    sharedModule
   )
  {

    var model = new Model({
      title: 'Hello !',
      content: 'My content lorem ipsum.'
    });

    var View = Backbone.View.extend({
      el: '#container',
      model: model,
      template: _.template(templateContent),
      
      render: function(){
        this.$el.append( this.template(model.toJSON()) );
        console.log(this.$el);
        //console.log(sharedModule(1,1));
      // a convention to enable chained calls
      return this;
    }
  });

    return new View();
  });
