define([
  // loading ext first
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  // loading other files
  'modules/utils',
  'text!Login/template.html',
  'jquery-validate',
  'jquery-form'
  ], function (
    $,
    _,
    Backbone,
    bootstrap,
    utils,
    templateLogin
    ){

    utils.loadTemplateScripts(templateLogin);

    var optionsForm = {
                    beforeSubmit:  showRequest,
                    success:       showResponse,
                    error: showError,
                    clearForm: true
                };

    function showRequest(formData, jqForm, options) {
        if($('#login-form').valid()){
            return true;
        } else {
            return false;
        }
    }
    function showResponse(responseText, statusText, xhr, $form)  {
        console.log('StatusText: '+statusText );
        if(statusText === 'success'){
            window.location.href = '/';
        }
    }
    function showError(error){
        console.log(error);
        $('#login-form-modal').modal('show');
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
            $('#login-form').submit(function() {
                $(this).ajaxSubmit(optionsForm);
                // always return false to prevent standard browser submit and page navigation
                return false;
            });
            return this;
        }
    });

    return new View();
});