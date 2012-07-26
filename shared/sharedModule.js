// an example with a dependies between shared modules using relative path
if (typeof define !== 'function') { var define = require('amdefine')(module);}

define(['./sharedModule2'], function ( sharedModule2 ) {
	console.log('using neighbor module: ' + sharedModule2(3.2,1));
	return function(x,y){
		return x+y;
	};
});