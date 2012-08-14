/*jshint*/

define([
  "backbone"
  ], function(Backbone) {
  "use strict";

  var User = Backbone.Model.extend({
    urlRoot: function() {
        return 'https://'+document.location.host+'/user';
    },
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
