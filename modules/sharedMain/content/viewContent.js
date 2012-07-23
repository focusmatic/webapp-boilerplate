// Filename: views/contentView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'sharedMain/modelEmpty',
  'text!Content/content.html'
  ],function(
    $,
    _,
    Backbone,
    Model,
    templateContent
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
        //loading widget1
        //viewWidget1.render();
        viewWidget2.setParent('#container');
        //viewWidget2.render();
        //masterView.render();
      // a convention to enable chained calls
      return this;
    }
  });

    return new View();
  });
