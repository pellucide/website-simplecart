
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
var jsonRequest = new Request.JSON({
                      headers: {
                       'Accept': 'text/javascript, text/html, application/json, text/xml'
                      },
                      url:CONFIG.get('URL')+CONFIG.get('BUSINESS_ID'),
                      onRequest: function() { console.log('Request made. Please wait...'); },
                      onSuccess:function(menuJSON) { console.log ("got the JSON"); },
                      onComplete: function(response) { console.log('Response: ' + response);
                                                       $('contains').set('html', response);
                                                     },
                      onFailure: function(xhr) { console.log('Request Failed!!'+xhr); },
                      onException: function(headerName, value) { console.log('Exception! headerName='+headerNAme); },
                     });
//var jsonString = jsonRequest.get();
console.log("json="+jsonString);
});
