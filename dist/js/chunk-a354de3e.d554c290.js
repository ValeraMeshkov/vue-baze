(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a354de3e"],{4852:function(e,t,i){"use strict";i("6fce")},"6fce":function(e,t,i){},bc72:function(e,t,i){"use strict";i.r(t);var a=i("7a23");function s(e,t,i,s,n,l){const o=Object(a["N"])("color-picker");return Object(a["F"])(),Object(a["i"])(a["b"],null,[Object(a["j"])("canvas",{id:"canvas1",onClick:t[0]||(t[0]=e=>n.showFullPicker=!n.showFullPicker)}),Object(a["n"])(a["d"],{name:"fade"},{default:Object(a["ab"])(()=>[n.showFullPicker?(Object(a["F"])(),Object(a["g"])(o,Object(a["v"])({key:0,class:"colorPicker"},n.colorLines,{onInput:l.colorPickInput,"initially-collapsed":"false"}),null,16,["onInput"])):Object(a["h"])("",!0)]),_:1})],64)}var n=i("5502");const l=180/Math.PI,o=e=>{const t=e%360;return t<0?360+t:t},r=({x:e,y:t},i)=>{const a=i.left+i.width/2,s=i.top+i.height/2;return Math.atan2(t-s,e-a)*l},c=()=>{};class h{constructor(e,t){this.active=!1,this.element=e,this.element.style.willChange="transform",this.initOptions(t),this.updateCSS(),this.bindHandlers(),this.addListeners()}get angle(){return this._angle}set angle(e){this._angle!==e&&(this._angle=o(e),this.updateCSS())}initOptions(e){e=e||{},this.onRotate=e.onRotate||c,this.onDragStart=e.onDragStart||c,this.onDragStop=e.onDragStop||c,this._angle=e.angle||0}bindHandlers(){this.onRotationStart=this.onRotationStart.bind(this),this.onRotated=this.onRotated.bind(this),this.onRotationStop=this.onRotationStop.bind(this)}addListeners(){this.element.addEventListener("touchstart",this.onRotationStart,{passive:!0}),document.addEventListener("touchmove",this.onRotated,{passive:!1}),document.addEventListener("touchend",this.onRotationStop,{passive:!0}),document.addEventListener("touchcancel",this.onRotationStop,{passive:!0}),this.element.addEventListener("mousedown",this.onRotationStart,{passive:!0}),document.addEventListener("mousemove",this.onRotated,{passive:!1}),document.addEventListener("mouseup",this.onRotationStop,{passive:!0}),document.addEventListener("mouseleave",this.onRotationStop,{passive:!1})}removeListeners(){this.element.removeEventListener("touchstart",this.onRotationStart),document.removeEventListener("touchmove",this.onRotated),document.removeEventListener("touchend",this.onRotationStop),document.removeEventListener("touchcancel",this.onRotationStop),this.element.removeEventListener("mousedown",this.onRotationStart),document.removeEventListener("mousemove",this.onRotated),document.removeEventListener("mouseup",this.onRotationStop),document.removeEventListener("mouseleave",this.onRotationStop)}destroy(){this.onRotationStop(),this.removeListeners()}onRotationStart(e){"touchstart"!==e.type&&0!==e.button||(this.active=!0,this.onDragStart(e),this.setAngleFromEvent(e))}onRotationStop(){this.active&&(this.active=!1,this.onDragStop()),this.active=!1}onRotated(e){this.active&&(e.preventDefault(),this.setAngleFromEvent(e))}setAngleFromEvent(e){const t=e.targetTouches?e.targetTouches[0]:e,i=r({x:t.clientX,y:t.clientY},this.element.getBoundingClientRect());this._angle=o(i+90),this.updateCSS(),this.onRotate(this._angle)}updateCSS(){this.element.style.transform="rotate("+this._angle+"deg)"}}const d=["red","yellow","green","cyan","blue","magenta","red"],u={ArrowUp:(e,t)=>e+t,ArrowRight:(e,t)=>e+t,ArrowDown:(e,t)=>e-t,ArrowLeft:(e,t)=>e-t,PageUp:(e,t)=>e+10*t,PageDown:(e,t)=>e-10*t,Home:()=>0,End:()=>359},v={name:"ColorPicker",emits:["select","input","change"],props:{hue:{default:0},saturation:{default:100},luminosity:{default:50},alpha:{default:1},step:{default:1},mouseScroll:{default:!1},variant:{default:"collapsible"},disabled:{default:!1},initiallyCollapsed:{default:!1},ariaLabel:{default:"color picker"},ariaRoledescription:{default:"radial slider"},ariaValuetext:{default:""},ariaLabelColorWell:{default:"color well"}},setup(e,{emit:t}){const i=Object(a["K"])(null),s=Object(a["K"])(null);let n=null;const l=e.hue+"deg",o=Object(a["K"])(e.hue),r=Object(a["K"])(!e.initiallyCollapsed),c=Object(a["K"])(!e.initiallyCollapsed),v=Object(a["K"])(!1),p=Object(a["K"])(!1),g=Object(a["K"])(!1),b=Object(a["e"])(()=>`hsla(${o.value}, ${e.saturation}%, ${e.luminosity}%, ${e.alpha})`),m=Object(a["e"])(()=>d[Math.round(o.value/60)]);Object(a["Z"])(()=>e.hue,e=>{o.value=e,n.angle=e}),Object(a["D"])(()=>{n=new h(s.value,{angle:o.value,onRotate(e){o.value=e,t("input",o.value)},onDragStart(){g.value=!0},onDragStop(){g.value=!1,t("change",o.value)}})}),Object(a["B"])(()=>{n.destroy(),n=null});const O=i=>{!e.disabled&&!v.value&&c.value&&i.key in u&&(i.preventDefault(),n.angle=u[i.key](n.angle,e.step),o.value=n.angle,t("input",o.value),t("change",o.value))},S=i=>{!v.value&&c.value&&(i.preventDefault(),i.deltaY>0?n.angle+=e.step:n.angle-=e.step,o.value=n.angle,t("input",o.value),t("change",o.value))},C=()=>{v.value=!0,r.value&&c.value?(t("select",o.value),p.value=!0):r.value=!0},x=()=>{"persistent"!==e.variant&&(c.value?c.value=!1:(c.value=!0,r.value=!0)),p.value=!1,v.value=!1},y=()=>{c.value||(r.value=!1)};return{rcp:n,el:i,rotator:s,initialAngle:l,angle:o,isPaletteIn:r,isKnobIn:c,isDragging:g,isRippling:p,isPressed:v,color:b,valuetext:m,onKeyDown:O,onScroll:S,selectColor:C,togglePicker:x,hidePalette:y}}};function p(e,t,i,s,n,l){return Object(a["F"])(),Object(a["g"])("div",{ref:"el",role:"slider","aria-roledescription":i.ariaRoledescription,"aria-label":i.ariaLabel,"aria-expanded":s.isPaletteIn,"aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":s.angle,"aria-valuetext":i.ariaValuetext||s.valuetext,"aria-disabled":i.disabled,class:["rcp",{dragging:s.isDragging,disabled:i.disabled}],tabindex:i.disabled?-1:0,style:{"--rcp-initial-angle":s.initialAngle},onKeyup:t[4]||(t[4]=Object(a["cb"])((...e)=>s.selectColor&&s.selectColor(...e),["enter"])),onKeydown:t[5]||(t[5]=(...e)=>s.onKeyDown&&s.onKeyDown(...e))},[Object(a["n"])("div",{class:["rcp__palette",s.isPaletteIn?"in":"out"]},null,2),Object(a["n"])("div",Object(a["v"])({class:"rcp__rotator",style:{"pointer-events":i.disabled||s.isPressed||!s.isKnobIn?"none":null}},Object(a["R"])(i.mouseScroll?{wheel:s.onScroll}:{}),{ref:"rotator"}),[Object(a["n"])("div",{class:["rcp__knob",s.isKnobIn?"in":"out"],onTransitionend:t[1]||(t[1]=(...e)=>s.hidePalette&&s.hidePalette(...e))},null,34)],16),Object(a["n"])("div",{class:["rcp__ripple",{rippling:s.isRippling}],style:{borderColor:s.color}},null,6),Object(a["n"])("button",{type:"button",class:["rcp__well",{pressed:s.isPressed}],"aria-label":i.ariaLabelColorWell,disabled:i.disabled,tabindex:i.disabled?-1:0,style:{backgroundColor:s.color},onAnimationend:t[2]||(t[2]=(...e)=>s.togglePicker&&s.togglePicker(...e)),onClick:t[3]||(t[3]=(...e)=>s.selectColor&&s.selectColor(...e))},null,46,["aria-label","disabled","tabindex"])],46,["aria-roledescription","aria-label","aria-expanded","aria-valuenow","aria-valuetext","aria-disabled","tabindex"])}v.render=p,v.install=function(e){e.component("ColorPicker",v)};var g=v,b={name:"AnimateFirst",components:{ColorPicker:g},data(){return{canvas:null,ctx:null,mouse:null,colorLines:{hue:186,saturation:56,luminosity:45,alpha:1},heightHeader:80,showFullPicker:!0}},mounted(){this.startCanvas()},unmounted(){this.closeCanvas()},computed:{...Object(n["c"])({WINDOW_WIDTH:e=>e.WINDOW_WIDTH,WINDOW_HEIGHT:e=>e.WINDOW_HEIGHT,MOUSE_COORDINATES:e=>e.MOUSE_COORDINATES,styleWebsiteColor:e=>e.styleWebsiteColor,circlesCount:e=>e.canvas1.circlesCount,circles:e=>e.canvas1.circles,lines:e=>e.canvas1.lines,localStorageApp:e=>e.localStorageApp})},methods:{...Object(n["b"])("canvas1",["addCircle","addLine","clearAllCircles","clearAllLines"]),colorPickInput(e){this.colorLines.hue=e},closeCanvas(){this.canvas=null,this.ctx=null,this.clearAllCircles(),this.clearAllLines()},updateCanvas(){this.closeCanvas(),this.$router.go(0)},startCanvas(){this.loadCanvas(),this.createCircles();for(let e=0;e<this.circles.length-1;e++)for(let t=e+1;t<this.circles.length;t++)this.createLines(e,t);this.createMouse();for(let e=0;e<this.circles.length;e++)this.createLines(this.circles.length,e);this.init()},loadCanvas(){this.canvas=document.querySelector("#canvas1"),this.canvas.width=this.WINDOW_WIDTH,this.canvas.height=this.WINDOW_HEIGHT-this.heightHeader},createCircles(){for(let e=0;e<this.circlesCount;e++)this.addCircle({w:this.canvas.width,h:this.canvas.height})},createLines(e,t){this.addLine({i:e,j:t})},createMouse(){this.mouse={r:.5,x:this.MOUSE_COORDINATES.x,y:this.MOUSE_COORDINATES.y+100,color:"white"}},init(){this.ctx=this.canvas.getContext("2d"),this.drawAllComponents()},drawAllComponents(){null!==this.ctx?(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.circles.forEach(e=>{this.drawCircle(e)}),this.lines.forEach(e=>{this.drawLine(e)}),this.drawMouse(),window.requestAnimationFrame(this.drawAllComponents.bind(this))):window.cancelAnimationFrame(this.drawAllComponents.bind(this))},drawCircle(e){this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.localStorageApp.styleWebsiteColor?e.color:"#2c3e50",this.ctx.fill(),this.circleUpdate(e)},drawLine(e){let t;function i(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}this.ctx.beginPath(),e.circleI===this.circles.length?(this.ctx.moveTo(this.MOUSE_COORDINATES.x,this.MOUSE_COORDINATES.y-this.heightHeader),this.ctx.lineTo(this.circles[e.circleJ].x,this.circles[e.circleJ].y),t=i(this.MOUSE_COORDINATES,this.circles[e.circleJ])):(this.ctx.moveTo(this.circles[e.circleI].x,this.circles[e.circleI].y),this.ctx.lineTo(this.circles[e.circleJ].x,this.circles[e.circleJ].y),t=i(this.circles[e.circleI],this.circles[e.circleJ])),this.ctx.strokeStyle=`hsla(${this.colorLines.hue}, 100%, 50%,${1-t/200})`,this.ctx.lineWidth=2,this.ctx.fill(),this.ctx.stroke()},drawMouse(){this.ctx.beginPath(),this.ctx.arc(this.mouse.x,this.mouse.y-this.heightHeader,this.mouse.r,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.ctx.fill()},circleUpdate(e){(e.x+e.radius>=this.canvas.width||e.x-e.radius<=0)&&(e.dx=-e.dx),(e.y+e.radius>=this.canvas.height||e.y-e.radius<=0)&&(e.dy=-e.dy),e.x+=e.dx,e.y+=e.dy}},watch:{WINDOW_WIDTH(e){this.canvas.width=e,this.updateCanvas()},WINDOW_HEIGHT(e){this.canvas.height=e},MOUSE_COORDINATES(e){this.mouse.x=e.x,this.mouse.y=e.y}}},m=(i("4852"),i("6b0d")),O=i.n(m);const S=O()(b,[["render",s]]);t["default"]=S}}]);
//# sourceMappingURL=chunk-a354de3e.d554c290.js.map