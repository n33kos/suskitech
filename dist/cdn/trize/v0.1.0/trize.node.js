!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("trize",[],e):"object"==typeof exports?exports.trize=e():t.trize=e()}(global,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=16)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i}return n(t,[{key:"toArray",value:function(){return[this.x,this.y]}},{key:"add",value:function(t){return"x"in t&&(this.x+=t.x),"y"in t&&(this.y+=t.y),"number"==typeof t&&(this.x+=t,this.y+=t),this}},{key:"subtract",value:function(t){return"x"in t&&(this.x-=t.x),"y"in t&&(this.y-=t.y),"number"==typeof t&&(this.x-=t,this.y-=t),this}},{key:"multiply",value:function(t){return"number"==typeof t&&(this.x*=t,this.y*=t),this}},{key:"divide",value:function(t){return"number"==typeof t&&(this.x/=t,this.y/=t),this}},{key:"clone",value:function(){return Object.assign(Object.create(Object.getPrototypeOf(this)),this)}}]),t}();e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=i(0),o=(n=r)&&n.__esModule?n:{default:n};e.default=function(t,e){return new o.default(t.width/2+e.x*(t.width/2),t.height/2+-e.y*(t.height/2))}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=i(0),o=(n=r)&&n.__esModule?n:{default:n};e.default=function(t,e){return new o.default(t.x+.5*(e.x-t.x),t.y+.5*(e.y-t.y))}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return 180*t/Math.PI}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=i(0),o=(n=r)&&n.__esModule?n:{default:n};e.default=function(t,e,i){return new o.default(e.x+i*Math.cos(t),e.y+i*Math.sin(t))}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=i(0),o=(n=r)&&n.__esModule?n:{default:n};e.default=function(t,e){return new o.default(e.x/t.width*2-1,e.y/t.height*-2+1)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,i){return Math.acos((Math.pow(i,2)-(Math.pow(e,2)+Math.pow(t,2)))/(-2*e*t))}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i=t.x-e.x,n=t.y-e.y;return Math.sqrt(i*i+n*n)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t*Math.PI/180}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=i(0),o=(n=r)&&n.__esModule?n:{default:n};e.default=function t(e){var i=e.arc,n=void 0===i?{color:"black",width:0,radius:30}:i,r=e.side,a=void 0===r?{color:"black",width:1}:r,u=e.vertex,l=void 0===u?{color:"black",width:0}:u,s=e.position,f=void 0===s?new o.default:s;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.arc=n,this.side=a,this.vertex=l,this.position=f}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(""+t).indexOf("e")>=0)return+(Math.round(t+"e+"+e)+"e-"+e);var i=(""+t).split("e"),n="";return+i[1]+e>0&&(n="+"),+(Math.round(+i[0]+"e"+n+(+i[1]+e))+"e-"+e)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=c(i(1)),o=(c(i(8)),c(i(7))),a=c(i(6)),u=c(i(5)),l=c(i(9)),s=c(i(4)),f=(c(i(3)),c(i(2))),d=c(i(0));function c(t){return t&&t.__esModule?t:{default:t}}var h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.geometry=e,e||(this.geometry=[new l.default({position:new d.default(0,-.75)}),new l.default({position:new d.default(-.75,.25)}),new l.default({position:new d.default(.75,.25)})]),this.sides=null,this.angles=null,this.arcBoundaries=null}return n(t,[{key:"getSideCenterPoint",value:function(t,e){return{x:t.x+.5*(e.x-t.x),y:t.y+.5*(e.y-t.y)}}},{key:"getSideLengths",value:function(t,e){return[(0,o.default)((0,r.default)(t,e[0].position),(0,r.default)(t,e[1].position)),(0,o.default)((0,r.default)(t,e[1].position),(0,r.default)(t,e[2].position)),(0,o.default)((0,r.default)(t,e[2].position),(0,r.default)(t,e[0].position))]}},{key:"getAngles",value:function(t){return[(0,a.default)(t[2],t[0],t[1]),(0,a.default)(t[0],t[1],t[2]),(0,a.default)(t[1],t[2],t[0])]}},{key:"getArcBoundaries",value:function(t){var e=this,i=[];return this.geometry.forEach(function(n,o){var a=e.geometry[0];o<e.geometry.length-1&&(a=e.geometry[o+1]);var u=e.geometry[e.geometry.length-1];o>0&&(u=e.geometry[o-1]);var l=(0,r.default)(t,n.position),s=(0,r.default)(t,a.position),f=(0,r.default)(t,u.position),d=f.x-l.x,c=f.y-l.y,h=s.x-l.x,y=s.y-l.y,v=Math.atan2(c,d),p=Math.atan2(y,h);if(d*y-c*h<0){var b=p;p=v,v=b}v<p&&(v+=2*Math.PI),i.push({start:v,end:p})}),i}},{key:"drawArc",value:function(t,e,i,n,o){var a=(0,r.default)(t,i.position);e.beginPath(),e.lineWidth=i.arc.width,e.strokeStyle=i.arc.color,e.arc(a.x,a.y,i.arc.radius,o.start,o.end),e.stroke(),i.arc.label&&(i.arc.label.position=(0,u.default)(t,(0,s.default)(o.start+n/2,a,i.arc.radius)),i.arc.label.draw(t,e))}},{key:"drawLine",value:function(t,e,i,n){var o=(0,r.default)(t,i.position),a=(0,r.default)(t,n.position);e.lineCap="round",e.strokeStyle=i.side.color,e.beginPath(),e.lineWidth=i.side.width,e.moveTo(o.x,o.y),e.lineTo(a.x,a.y),e.stroke(),i.side.label&&(i.side.label.position=(0,f.default)(i.position,n.position),i.side.label.draw(t,e))}},{key:"drawVertex",value:function(t,e,i){var n=(0,r.default)(t,i.position);e.fillStyle=i.vertex.color,e.beginPath(),e.arc(n.x,n.y,i.vertex.width,0,2*Math.PI),e.fill(),i.vertex.label&&(i.vertex.label.position=i.position.clone(),i.vertex.label.draw(t,e))}},{key:"draw",value:function(t,e){this.sides=this.getSideLengths(t,this.geometry),this.angles=this.getAngles(this.sides),this.arcBoundaries=this.getArcBoundaries(t);for(var i=0;i<this.geometry.length;i++){var n=this.geometry[i],r=this.geometry[0];i<this.geometry.length-1&&(r=this.geometry[i+1]),n.arc.width>0&&this.drawArc(t,e,n,this.angles[i],this.arcBoundaries[i]),n.side.width>0&&this.drawLine(t,e,n,r),n.vertex.width>0&&this.drawVertex(t,e,n)}}}]),t}();e.default=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=document.getElementById(e),n=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight,this.canvas=i,this.ctx=n,this.cx=n.canvas.width/2,this.cy=n.canvas.height/2,this.scene=[]}return n(t,[{key:"resizeCanvas",value:function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.cx=this.ctx.canvas.width/2,this.cy=this.ctx.canvas.height/2}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"add",value:function(t){this.scene.push(t)}},{key:"render",value:function(){var t=this;this.clear(),this.scene.forEach(function(e){e.draw(t.canvas,t.ctx)})}}]),t}();e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=a(i(1)),o=a(i(0));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(e){var i=e.color,n=void 0===i?"black":i,r=e.end,a=void 0===r?new o.default:r,u=e.start,l=void 0===u?new o.default:u,s=e.width,f=void 0===s?1:s;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=n,this.end=a,this.start=l,this.width=f}return n(t,[{key:"draw",value:function(t,e){var i=(0,r.default)(t,this.start),n=(0,r.default)(t,this.end);e.lineCap="round",e.strokeStyle=this.color,e.beginPath(),e.lineWidth=this.width,e.moveTo(i.x,i.y),e.lineTo(n.x,n.y),e.stroke()}}]),t}();e.default=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=a(i(0)),o=a(i(1));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(e){var i=e.fillStyle,n=void 0===i?"#000000":i,o=e.font,a=void 0===o?"16px sans-serif":o,u=e.offset,l=void 0===u?new r.default:u,s=e.position,f=void 0===s?new r.default:s,d=e.rotation,c=void 0===d?0:d,h=e.strokeStyle,y=void 0===h?"#000000":h,v=e.text,p=void 0===v?"Hello World":v,b=e.textAlign,w=void 0===b?"center":b,g=e.shouldStroke,x=void 0!==g&&g,_=e.shouldFill,k=void 0===_||_;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.fillStyle=n,this.font=a,this.offset=l,this.position=f,this.rotation=c,this.shouldFill=k,this.shouldStroke=x,this.strokeStyle=y,this.text=p,this.textAlign=w}return n(t,[{key:"draw",value:function(t,e){var i=(0,o.default)(t,this.position),n=new r.default(i.x+this.offset.x,i.y+this.offset.y);e.font=this.font,e.textAlign=this.textAlign,e.translate(n.x,n.y),e.rotate(this.rotation),this.shouldFill&&(e.fillStyle=this.fillStyle,e.fillText(this.text,0,0)),this.shouldStroke&&(e.strokeStyle=this.strokeStyle,e.strokeText(this.text,0,0)),e.setTransform(1,0,0,1,0,0)}}]),t}();e.default=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=a(i(0)),o=a(i(1));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(e){var i=e.arcEnd,n=void 0===i?2*Math.PI:i,o=e.arcStart,a=void 0===o?0:o,u=e.fillStyle,l=void 0===u?"#000000":u,s=e.position,f=void 0===s?new r.default(0,0):s,d=e.radius,c=void 0===d?100:d,h=e.shouldFill,y=void 0===h||h,v=e.shouldStroke,p=void 0!==v&&v,b=e.strokeStyle,w=void 0===b?"#000000":b;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.arcEnd=n,this.arcStart=a,this.fillStyle=l,this.position=f,this.radius=c,this.shouldFill=y,this.shouldStroke=p,this.strokeStyle=w}return n(t,[{key:"draw",value:function(t,e){var i=(0,o.default)(t,this.position);this.shouldFill&&(e.fillStyle=this.fillStyle,e.beginPath(),e.arc(i.x,i.y,this.radius,this.arcStart,this.arcEnd),e.fill()),this.shouldStroke&&(e.strokeStyle=this.strokeStyle,e.beginPath(),e.arc(i.x,i.y,this.radius,this.arcStart,this.arcEnd),e.stroke())}}]),t}();e.default=u},function(t,e,i){"use strict";var n=g(i(15)),r=g(i(14)),o=g(i(13)),a=g(i(9)),u=g(i(12)),l=g(i(11)),s=g(i(0)),f=g(i(1)),d=g(i(8)),c=g(i(7)),h=g(i(6)),y=g(i(5)),v=g(i(4)),p=g(i(3)),b=g(i(10)),w=g(i(2));function g(t){return t&&t.__esModule?t:{default:t}}var x={Circle:n.default,Label:r.default,Line:o.default,Point:a.default,Renderer:u.default,Triangle:l.default,Vector2:s.default,clipSpaceToPixels:f.default,degToRad:d.default,distance:c.default,lawOfCosines:h.default,pixelsToClipSpace:y.default,pointOnCircle:v.default,radToDeg:p.default,round:b.default,sideCenterPoint:w.default};void 0!==t&&void 0!==t.exports?t.exports=x:window.trize=x}])});