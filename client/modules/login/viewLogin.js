define([
  // loading ext first
  'jquery',
  'underscore',
  'backbone',
  'bootstrapJS',
  // loading other files
  'modules/utils',
  'text!Login/template.html',
  'ext/jquery/jquery.validate',
  'jquery-form'
  ], function (
    $,
    _,
    Backbone,
    bootstrapJS,
    utils,
    templateLogin
    ){

    utils.loadTemplateScripts(templateLogin);

    function showRequestLogin(formData, jqForm, options) {
        var queryString = $.param(formData);
        console.log('About to submit: \n' + queryString);
        return true;
    }
    function showResponseLogin(responseText, statusText, xhr, $form)  {
        console.log('StatusText: '+statusText );
        if(statusText === 'success'){
            window.location.href = '/';
        }
    }
    function showErrorLogin(error){
        console.log(error);
        $('#login-failed-modal').modal('show');
    }

    var View = Backbone.View.extend({
        el: 'body',
        template: _.template($("#login-template").html()),
      
        render: function () {
            this.$el.append( this.template() );
            $('#login-form').validate();
            // prepare the form when the DOM is ready
            $('#forgot-password').click(function(){
                $('#forgot-password-modal').modal('show');
            });
            $(document).ready(function() {
                var options = {
                    beforeSubmit:  showRequestLogin,
                    success:       showResponseLogin,
                    error: showErrorLogin,
                    clearForm: true
                };
                $('#login-form').submit(function() {
                    $(this).ajaxSubmit(options);
                    // always return false to prevent standard browser submit and page navigation
                    return false;
                });
            });
        
            return this;
        }
    });

    return new View();
});