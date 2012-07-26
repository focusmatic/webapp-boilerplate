define([
  // loading ext first
  'jquery',
  'underscore',
  'backbone',
  // loading modules
  'toolboxUI/modelEmpty',
  //'mySharedModule',
  'shared/sharedModule2',
  // loading other files
  'text!Content/content.html'
  ], function (
    $,
    _,
    Backbone,
    Model,
    sharedModule,
    templateContent
    ){

    var model = new Model({
      title: 'Hello !',
      content: 'My content lorem ipsum.'
    });

    var View = Backbone.View.extend({
      el: '#container',
      model: model,
      template: _.template(templateContent),
      
      render: function () {
        this.$el.append( this.template(model.toJSON()) );
        console.log(this.$el);
        // using a shared module
        console.log('using a shared module :'+sharedModule(1,1));
      // a convention to enable chained calls
      return this;
    }
  });

    return new View();
  });