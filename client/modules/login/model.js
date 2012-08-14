/*jshint*/

define([
  "backbone"
  ], function(Backbone) {
  "use strict";

  var User = Backbone.Model.extend({
    urlRoot: '/user',
    // idAttribute: '_id',
    defaults: {
      _id: null,
      email: 'mon@email.com',
      company: null,
      perimeter: null
    }
  });

  return User;
});
