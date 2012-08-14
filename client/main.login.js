/*jshint*/
/*global require*/

require(['./common'], function (common) {
  "use strict";

  require(['modules/login/index'], function (app) {
    console.log('####### executing main.js #######');
    app.init();
  });
});
