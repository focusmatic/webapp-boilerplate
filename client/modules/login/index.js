define([
	'./router',
	'modules/utils',
	'text!./style.css'
	], function (Router, utils, style){
		// App definition
		var init = function () {
            // pass in router module and call its init function
            console.log('###### app trying initialize. #######');
            this.router = new Router();
            
            // injecting css
            utils.loadCSS(style);
            console.log('CSS loaded');
            console.log('###### app initialized. #######');

        };
        return {
            init: init
        };
	});