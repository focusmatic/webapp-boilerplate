if (typeof define !== 'function') { var define = require('amdefine')(module);}

define([], function () {
	return function(x,y){
		return x+y;
	};
});