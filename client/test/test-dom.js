require(['Navbar/viewNavbar'], function(Navbar){

    module('DOM test');
    test('loading Navbar test', function(){
       // rendering
        Navbar.render();
        notEqual($('#testul').length,0,'loading test Navbar');
   });

}); 