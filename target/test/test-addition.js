require(['shared/sharedModule'], function(module){

	module('operations test');
	test('addition test1', function(){
		equal(module(1,2),3,'adding 1 to 2 equals 2');
	});
	test('addition test2', function(){
		equal(module(1,1),2,'adding 1 to 1 equals 2');
	});
	test('addition test3', function(){
		equal(module(1,2),4,'fail example: adding 1 to 2 equals 4');
	});
	test('addition test4', function(){
		equal(module(2,6),8,'adding 2 to 6 equals 4');
	});

});