window.jsdapi=window.jsdapi||{};
(function(a){var b="https://translate.donjohnston.net",e=b+"/api",f=b+"/languages";a.setServerUrl=function(c){b=c;e=b+"/api";f=b+"/languages"};a.translateText=function(c,b,g){jsdapi.authorize(function(a){a?(a=JSON.stringify({q:c,source:"en",target:b}),jsdapi.http.sendRequest({timeout:3E5,responseType:"json",method:"POST",url:e,contentType:"application/json",content:a},function(c){d(g,c)})):d(g,{error:401,message:"Authorization failed!"})})};a.languages=function(c){jsdapi.authorize(function(a){a?jsdapi.http.sendRequest({timeout:3E5,
method:"POST",url:f,contentType:"application/json"},function(a){d(c,a)}):d(c,{error:401,message:"Authorization failed!"})})};var d=function(a){if(a)try{a.apply(this,[].slice.call(arguments).splice(1))}catch(b){dji.logger.error(b)}}})(window.jsdapi.translate=window.jsdapi.translate||{});
