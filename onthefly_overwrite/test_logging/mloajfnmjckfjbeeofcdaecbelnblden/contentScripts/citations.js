window.sru=window.sru||{};(function(c){var d={};citeprocSys={retrieveLocale:function(a){return dji.utils.loadFile("thirdParty/citeproc/locales-"+a+".xml")},retrieveItem:function(a){return d[a]}};c.generateCition=function(a,c,b){d={id0:a};a=dji.utils.loadFile("thirdParty/citeproc/"+c+".csl");b=new CSL.Engine(citeprocSys,a,b);b.updateItems(["id0"]);return b.makeBibliography()[1][0]}})(window.sru.citations=window.sru.citations||{});
