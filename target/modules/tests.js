    function waitFor(testFx, onReady, timeOutMillis) {
        var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3001, //< Default Max Timout is 3s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                    // If not time-out yet and condition not yet fulfilled
                    condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
                } else {
                    if(!condition) {
                        // If condition still not fulfilled (timeout but condition is 'false')
                        console.log("'waitFor()' timeout");
                        phantom.exit(1);
                    } else {
                        // Condition fulfilled (timeout and/or condition is 'true')
                        console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                        typeof(onReady) === "string" ? eval(onReady) : onReady();
                    } //< Do what it's supposed to do once the condition is fulfilled
                        clearInterval(interval); //< Stop this interval
                }
            },100); //< repeat check every 250ms
}

var page = new WebPage();

    // Route "console.log()" calls from within the Page context to the main Phantom context (i.e. current "this")
    page.onConsoleMessage = function(msg) {
        console.log(msg);
    };

    page.open('http://localhost:8888/test', function(status){
        if (status !== "success") {
            console.log("Unable to access network");
            phantom.exit();
        } else {
            waitFor(function(){
                return page.evaluate(function(){
                    var el = document.getElementById('qunit-testresult');
                    if (el && el.innerText.match('completed')) {
                        return true;
                    }
                    return false;
                });
            }, function(){
                var failedNum = page.evaluate(function(){
                    var el = document.getElementById('qunit-testresult');
                    console.log(el.innerText);
                    var divFail = document.getElementsByClassName('fail');
                    for(i=0;i<((divFail.length)/2);i++){
                        console.log('####################');
                        console.log(divFail[2*i].innerText);
                    }
                    try {
                        return el.getElementsByClassName('failed')[0].innerHTML;
                    } catch (e) { }
                    return 10000;
                });
                phantom.exit((parseInt(failedNum, 10) > 0) ? 1 : 0);
            });
        }
    });