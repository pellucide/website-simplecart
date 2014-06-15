var CONFIG = (function() {
     var private = {
         'URL': 'http://www.dookansserver.com//Innovommerce/rest/businessinfolist/itemswithchoice?BUSINESSID=',
         'BUSINESS_ID': '1'
     };

     return {
        get: function(name) { return private[name]; }
    };
})();


window.addEvent('domready', function(){
var jsonRequest = new Request.JSONP({
                      headers: {
                       'Accept': 'application/json'
                      },
                      //url: 'http://www.dookansserver.com//Innovommerce/rest/businessinfolist/itemswithchoice?BUSINESSID=1',
                      url: './test.json',
                      onRequest: function() { console.log('Request made. Please wait...'); },
                      onSuccess:function(menuJSON) { console.log ("got the JSON"); },
                      onComplete: function(response) { console.log('Response: ' + response);
                                                       $('contains').set('html', response);
                                                     },
                      onFailure: function(xhr) { console.log('Request Failed!! '+xhr); },
                      onException: function(headerName, value) { console.log('Exception! headerName='+headerName); },
                     });
var jsonString = jsonRequest.get();
console.log("json="+jsonString);
});
