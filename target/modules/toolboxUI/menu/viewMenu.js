// Copyright © Focusmatic SAS
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

define([
  // loading ext first
  'jquery',
  'underscore',
  'backbone',
  // loading modules
  'toolboxUI/modelEmpty',
  'modules/utils',
  // loading other files
  'text!Navbar/navbar.html',
  'text!Menu/menu.html'
  ], function (
    $,
    _,
    Backbone,
    Model,
    utils,
    templateNavbar,
    templateMenu
    ){

    utils.loadTemplateScripts(templateMenu);

    var model = new Model({});

    var View = Backbone.View.extend({
      el: '#container',
      model: model,
      template: _.template($("#menu").html()),

      render: function () {
        this.$el.append( this.template(model.toJSON()) );
      // a convention to enable chained calls
      return this;
    }
  });

    return new View();
  });
