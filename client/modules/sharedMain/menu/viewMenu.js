// Filename: views/contentView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'sharedMain/modelEmpty',
  'text!Navbar/navbar.html',
  'text!Menu/menu.html'
  ],function($, _, Backbone, Model, templateNavbar, templateMenu)
  {

    var model = new Model({});

    var View = Backbone.View.extend({
      el: '#container',
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
