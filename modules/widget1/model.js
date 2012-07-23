// Filename: /modules/widget1/model.js
define([
    'backbone'
    ],function(Backbone)
    {
     var model = Backbone.Model.extend({
        defaults: {
          title: 'myWidget1!',
          content: 'my content lorem ipsum.'
      }
  });
     return model;
 });