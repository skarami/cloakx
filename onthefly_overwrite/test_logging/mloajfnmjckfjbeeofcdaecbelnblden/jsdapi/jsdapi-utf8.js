window.jsdapi=window.jsdapi||{};
(function(h){function b(){this.m_data=[]}h.Utf8Data=b;b.prototype.appendString=function(a){if(a&&a.length){for(var b=a.length,c=new Uint8Array(new ArrayBuffer(4*b)),d=0,g=0,f=0,e=0,g=0;g<b;++g)if(e=a.charCodeAt(g),127>=e)c[d++]=e;else if(2047>=e)c[d++]=192|e>>>6,c[d++]=128|e&63;else if(65535>=e)c[d++]=224|e>>>12,c[d++]=128|e>>>6&63,c[d++]=128|e&63;else{for(f=4;e>>6*f;)f++;for(c[d++]=65280>>>f&255|e>>>6*--f;f--;)c[d++]=128|e>>>6*f&63}this.m_data.push.apply(this.m_data,c.subarray(0,d))}};b.prototype.appendArray=
function(a){a&&a.length&&this.m_data.push.apply(this.m_data,a)};b.prototype.appendArrayBuffer=function(a){if(a&&(a instanceof ArrayBuffer||"[object ArrayBuffer]"===a.toString())){a=new Uint8Array(a);for(var b=a.length,c=0,d=0,g=parseInt(b/10240)+(0==b%10240?0:1),f=0;f<g;f++)d=Math.min(10240,b-c),this.m_data.push.apply(this.m_data,a.subarray(c,c+d)),c+=d}};b.prototype.appendData=function(a){a&&(a instanceof ArrayBuffer||"[object ArrayBuffer]"===a.toString()?this.appendArrayBuffer(a):a instanceof Array?
this.appendArray(a):this.appendString(a))};b.prototype.toBlob=function(){return new Blob([this.m_data],{type:"application/octet-stream"})};b.prototype.toArrayBuffer=function(){return new ArrayBuffer(this.m_data)};b.prototype.toUint8Array=function(){return new Uint8Array(this.m_data)}})(window.jsdapi.utf8=window.jsdapi.utf8||{});
