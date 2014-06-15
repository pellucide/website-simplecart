var CONFIG = (function() {
     var private = {
         'URL': 'https://www.dookansserver.com//Innovommerce/rest/businessinfolist/itemswithchoice?BUSINESSID=',
         'BUSINESS_ID': '1'
     };

     return {
        get: function(name) { return private[name]; }
    };
})();


$.get(CONFIG.get('URL')+CONFIG.get('BUSINESS_ID'),
      function(data){ console.log("data returned:"+ data);  });
