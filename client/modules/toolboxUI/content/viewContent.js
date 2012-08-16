// Copyright © 2012, Focusmatic SAS
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
  'jquery',
  'underscore',
  'backbone',
  'toolboxUI/modelEmpty',
  'modules/utils',
  'text!Content/content.html',
  'shared/sharedModule'
  ], function (
    $,
    _,
    Backbone,
    Model,
    utils,
    templateContent,
    sharedModule
    ){

    utils.loadTemplateScripts(templateContent);

    var model = new Model({
        title: 'Hello !',
        content: 'My content lorem ipsum.',
        result: sharedModule(2,3)
    });

    var View = Backbone.View.extend({
        el: '#container',
        template: _.template($("#content").html()),
      
        render: function () {
            this.$el.append( this.template(model.toJSON()) );
        // a convention to enable chained calls
        return this;
        }
    });

    return new View();
});