(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{238:function(e,t,n){e.exports=n(380)},243:function(e,t,n){},244:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(89),i=n.n(s),u=(n(243),n(244),n(91)),l=n(13),c=n(33),o=n(17),d=n(9),m={allDimensions:[],chosenDimensions:[0,1]},f={clustersWithRawData:[],numOfRetainedClusters:{value:10,bufferValue:10,valid:!0}},p={id:"microclusters",data:[]},h={clustersOnRaw:O(p),unclusteredRaw:null,clusteredRaw:null,scales:null};function O(e){return JSON.parse(JSON.stringify(e))}var E=Object(o.b)({dimensions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DIMENSIONS":return Object(d.a)(Object(d.a)({},e),{},{allDimensions:t.payload});case"UPDATE_CHOSEN_DIMENSIONS":return Object(d.a)(Object(d.a)({},e),{},{chosenDimensions:t.payload});default:return e}},clusters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CLUSTERS":return Object(d.a)(Object(d.a)({},e),{},{clustersWithRawData:t.payload});case"UPDATE_NUM_OF_RETAINED_CLUSTERS":return Object(d.a)(Object(d.a)({},e),{},{numOfRetainedClusters:t.payload});default:return e}},scatters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CLUSTERS_ON_RAW":return Object(d.a)(Object(d.a)({},e),{},{clustersOnRaw:t.payload});case"RESET_CLUSTERS_ON_RAW":return Object(d.a)(Object(d.a)({},e),{},{clustersOnRaw:O(p)});case"SET_UNCLUSTERED_RAW":return Object(d.a)(Object(d.a)({},e),{},{unclusteredRaw:t.payload});case"SET_CLUSTERED_RAW":return Object(d.a)(Object(d.a)({},e),{},{clusteredRaw:t.payload});case"SET_SCALES":return Object(d.a)(Object(d.a)({},e),{},{scales:t.payload});default:return e}}}),S=Object(o.d)(E,Object(o.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),v=n(19),b=n.n(v),R=n(191),g=n(14),y=n(192),w=function(e){var t=e.data,n=e.variables;return r.a.createElement(y.a,{data:t,variables:n,lineOpacity:.5,colors:{scheme:"dark2"},margin:{top:50,right:60,bottom:50,left:60}})},D=n(30),N=n(74);function j(e,t){t=JSON.parse(JSON.stringify(t));return Object.keys(t).forEach((function(n){t[n].forEach((function(a,r){var s={};e.map((function(e,t){s[e]=a[t]})),t[n][r]=s,s={}}))})),t}function _(e,t){if(2!==e.length)throw new Error("not 2 dimensional");var n=e[0],a=e[1];if(null==t)return[];var r=t.raw_data,s=r.map((function(e){return e[n]})),i=r.map((function(e){return e[a]})),u=[];return s.map((function(e,t){u.push({x:e,y:i[t]})})),{id:"raw_data",data:u}}function C(e,t){if(2!==e.length)throw new Error("not 2 dimensional");var n=e[0],a=e[1],r=[];if(null==t)return[];var s=t.all_clusters,i=t.raw_data,u=Array.from(new Set(s)).sort();-1==u[0]&&(u.shift(),u.push(-1));var l,c=Object(D.a)(u);try{for(c.s();!(l=c.n()).done;){var o,d=l.value,m=[],f=0,p=Object(D.a)(s);try{for(p.s();!(o=p.n()).done;){o.value==d&&m.push({x:i[f][n],y:i[f][a]}),f+=1}}catch(O){p.e(O)}finally{p.f()}f=0;var h="";h=0==d?"largest_cluster":-1==d?"noise":d+". cluster",r.push({id:h,data:m})}}catch(O){c.e(O)}finally{c.f()}return r}function x(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(2!==e.length)throw new Error("not 2 dimensional");var r,s=e[0],i=e[1],u=t.cluster.map((function(e){return t.raw_data[e]})),l=u.map((function(e){return e[s]})),c=u.map((function(e){return e[i]})),o=l.length,d=l.reduce((function(e,t){return e+t}),0),m=c.reduce((function(e,t){return e+t}),0),f=d*d+m*m,p=Math.pow(d/o,2),h=Math.pow(m/o,2),O=Math.sqrt(f/o-p),E=Math.sqrt(f/o-h),S=parseInt(Math.max(O,E)),v=parseInt(d/o),b=parseInt(m/o),R=n.data.reduce((function(e,t){return t.radius+e}),0)/n.data.length;n.data.forEach((function(e){return e.normalizedRadius=e.radius/R}));var g=S/(R||S);r={x:v,y:b,radius:S,normalizedRadius:g};var y=n.data.map((function(e){return JSON.stringify(e)})),w=JSON.stringify(r);return-1!==y.indexOf(w)||(n.data.length>=a&&n.data.shift(),n.data.push(r)),n}function M(e,t){return e.map((function(e){return t[e]}))}function T(e,t){if(2!=t.length)throw new Error("length of dimension must be 2");var n=e.data,a=n.map((function(e){return e.x})),r=n.map((function(e){return e.y})),s=Object(N.mean)(a),i=Object(N.mean)(r),u=Object(N.standardDeviation)(a),l=Object(N.standardDeviation)(r);return{xScaleMin:s-5*u,xScaleMax:s+5*u,yScaleMin:i-5*l,yScaleMax:i+5*l}}function U(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}function I(e,t,n){var a=t.cluster.map((function(e){return t.raw_data[e]}));return e.length>=n.value?(e.shift(),e.push(a)):e.push(a),e}function A(e,t){3==(e=e.replace(/^\s*#|\s*$/g,"")).length&&(e=e.replace(/(.)/g,"$1$1"));var n=parseInt(e.substr(0,2),16),a=parseInt(e.substr(2,2),16),r=parseInt(e.substr(4,2),16);return"#"+(0|256+n+(256-n)*t/100).toString(16).substr(1)+(0|256+a+(256-a)*t/100).toString(16).substr(1)+(0|256+r+(256-r)*t/100).toString(16).substr(1)}var k=n(201),W=function(e){var t=e.data,n=e.nodeSize,a=e.dimNames,s=e.scales,i=e.colors;return i||(i={scheme:"red_blue"}),r.a.createElement(k.a,{data:t,nodeSize:n,margin:{top:60,right:140,bottom:70,left:90},xScale:{type:"linear",min:s.xScaleMin,max:s.xScaleMax},yScale:{type:"linear",min:s.yScaleMin,max:s.yScaleMax},axisTop:null,axisRight:null,colors:i,blendMode:"lighten",axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:void 0==a?"X":a[0],legendPosition:"middle",legendOffset:46},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:void 0==a?"Y":a[1],legendPosition:"middle",legendOffset:-60},legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:130,translateY:0,itemWidth:100,itemHeight:12,itemsSpacing:5,itemDirection:"left-to-right",symbolSize:12,symbolShape:"circle",effects:[{on:"hover",style:{itemOpacity:1}}]}]})},L=function(e){return{type:"SET_DIMENSIONS",payload:e}},J=function(e){return{type:"UPDATE_CHOSEN_DIMENSIONS",payload:e}},P=function(e){return{type:"UPDATE_CLUSTERS",payload:e}},z=function(e){return{type:"UPDATE_NUM_OF_RETAINED_CLUSTERS",payload:e}},F=function(e){return{type:"SET_CLUSTERS_ON_RAW",payload:e}},V=function(){return{type:"RESET_CLUSTERS_ON_RAW",payload:null}},X=function(e){return{type:"SET_UNCLUSTERED_RAW",payload:e}},B=function(e){return{type:"SET_CLUSTERED_RAW",payload:e}},$=function(e){return{type:"SET_SCALES",payload:e}};var H=Object(c.b)((function(e){return{numOfRetainedClusters:e.clusters.numOfRetainedClusters}}),(function(e){return Object(o.a)({updateNumOfRetainedClusters:z,resetClustersOnRaw:V},e)}))((function(e){return r.a.createElement("div",{className:"controlPanelWrapper"},r.a.createElement("form",{className:"control-panel"},r.a.createElement("div",{className:"retained-clusters-wrapper"},r.a.createElement("label",{className:"retained-clusters-label"},"Retained Clusters: "),r.a.createElement("input",{type:"retained-clusters",className:"retained-clusters-input",value:e.numOfRetainedClusters.bufferValue,onChange:function(t){var n=t.target.value,a=!0;isNaN(n)||""==n||n<=0?(a=!1,e.updateNumOfRetainedClusters(Object(d.a)(Object(d.a)({},e.numOfRetainedClusters),{},{bufferValue:n,valid:a}))):(n=parseInt(n,10),e.updateNumOfRetainedClusters(Object(d.a)(Object(d.a)({},e.numOfRetainedClusters),{},{bufferValue:n,valid:a})))}})),r.a.createElement("button",{className:"control-submitter",type:"submit",onClick:function(t){t.preventDefault(),e.numOfRetainedClusters.valid?(e.updateNumOfRetainedClusters(Object(d.a)(Object(d.a)({},e.numOfRetainedClusters),{},{value:e.numOfRetainedClusters.bufferValue})),e.resetClustersOnRaw()):e.updateNumOfRetainedClusters(Object(d.a)(Object(d.a)({},e.numOfRetainedClusters),{},{bufferValue:e.numOfRetainedClusters.value,valid:!0}))}},"Update")))}));var q=Object(c.b)((function(e){var t=e.dimensions;return{allDimensions:t.allDimensions,chosenDimensions:t.chosenDimensions}}),(function(e){return Object(o.a)({setDimensions:L,chooseDimensions:J,resetClustersOnRaw:V},e)}))((function(e){return r.a.createElement("div",{className:"dimensionsControlWrapper"},r.a.createElement("div",{className:"choose-dim"},["First Dimension","Second Dimension"].map((function(t,n){return r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement("select",{defaultValue:e.allDimensions[e.chosenDimensions[n]],onChange:function(t){return function(t,n){var a=0===n?[e.allDimensions.indexOf(t.target.value),e.chosenDimensions[1]]:[e.chosenDimensions[0],e.allDimensions.indexOf(t.target.value)];e.chooseDimensions(a),e.resetClustersOnRaw()}(t,n)}},e.allDimensions.map((function(e){return r.a.createElement("option",{value:e}," ",e," ")}))))}))))}));var Y=Object(c.b)((function(e){var t=e.dimensions,n=e.clusters,a=e.scatters;return{allDimensions:t.allDimensions,chosenDimensions:t.chosenDimensions,clustersWithRawData:n.clustersWithRawData,clustersOnRaw:a.clustersOnRaw,unclusteredRaw:a.unclusteredRaw,clusteredRaw:a.clusteredRaw,scales:a.scales,numOfRetainedClusters:n.numOfRetainedClusters}}),(function(e){return Object(o.a)({setDimensions:L,updateClusters:P,setClustersOnRaw:F,setUnclusteredRaw:X,setClusteredRaw:B,setScales:$,updateNumOfRetainedClusters:z},e)}))((function(e){var t=Object(a.useState)(null),n=Object(g.a)(t,2),s=n[0],i=n[1],u=Object(l.g)().pathname,c=Object(l.f)();return U((function(){u="/"==u?"/default":u,fetch("/dataBroker"+u).then((function(e){if(500==e.status)throw new Error(e.status);return e.json()})).then(function(){var t=Object(R.a)(b.a.mark((function t(n){var a,r,s,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=n){t.next=5;break}return c.push("/dataAbsent"),t.abrupt("return");case 5:if("string"!=typeof n||!n.includes("error")||!n.includes("ResourceNotFound")){t.next=8;break}return c.push("/resourceNotFound"),t.abrupt("return");case 8:a=JSON.parse(JSON.parse(n)),e.setDimensions(a.dimensions),P(I(e.clustersWithRawData,a,e.numOfRetainedClusters)),a.cluster=M(a.cluster,a.raw_data),r=j(e.allDimensions,a),i(r),s=JSON.parse(JSON.parse(n)),e.setClustersOnRaw(x(e.chosenDimensions,s,e.clustersOnRaw,e.numOfRetainedClusters.value)),u=_(e.chosenDimensions,s),e.setUnclusteredRaw(u),e.setClusteredRaw(C(e.chosenDimensions,s)),e.setScales(T(u,e.chosenDimensions));case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){"500"===e.message&&c.push("/serverDown")}))}),500),null==s||null==e.clustersOnRaw||null==e.unclusteredRaw||null==e.scales||e.allDimensions==[]?null:r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement("div",{className:"category-graph"},r.a.createElement(W,{data:[e.unclusteredRaw,e.clustersOnRaw],nodeSize:function(e){return void 0!=e.normalizedRadius?40*e.normalizedRadius:9},dimNames:e.chosenDimensions.map((function(t){return e.allDimensions[t]})),scales:e.scales})),r.a.createElement("div",{className:"category-graph"},r.a.createElement(W,{data:e.clusteredRaw,dimNames:e.chosenDimensions.map((function(t){return e.allDimensions[t]})),scales:e.scales})),r.a.createElement(q,null),["raw_data","cluster"].map((function(t){return r.a.createElement("div",{className:"parallel-graphs"},r.a.createElement(w,{data:s[t],variables:e.allDimensions.map((function(e){return{key:e,type:"linear",legend:e,ticksPosition:"before",legendPosition:"start",legendOffset:20}}))}))})))})),G=n(140);var K=Object(c.b)((function(e){var t=e.scatters,n=e.clusters,a=e.dimensions;return{scales:t.scales,numOfRetainedClusters:n.numOfRetainedClusters,dimensions:a.allDimensions}}),(function(e){return Object(o.a)({setScales:$,setDimensions:L},e)}))((function(e){var t=Object(a.useState)([]),n=Object(g.a)(t,2),s=n[0],i=n[1],u=Object(a.useState)([]),c=Object(g.a)(u,2),o=c[0],d=c[1],m=Object(a.useState)([]),f=Object(g.a)(m,2),p=f[0],h=f[1],O=Object(l.g)().pathname,E=Object(l.f)(),S=O.split("/clusters");O="/"==(O=""==S[1]&&2==S.length?"/":S[1])?"/default":O,U((function(){fetch("/clusterBroker"+O).then((function(e){if(500==e.status)throw new Error(e.status);return e.json()})).then((function(t){if("string"==typeof t&&t.includes("error")&&t.includes("ResourceNotFound"))E.push("/resourceNotFound");else{var n=JSON.parse(JSON.parse(t)),a=n.clusters.map((function(e){return{x:e.centroid[0],y:e.centroid[1],radius:e.radius}}));i([{id:"Clusters",data:a}]),b(a),v(a),n.dimensions?e.setDimensions(n.dimensions):e.setDimensions(["First Dimension","Second Dimension"]);for(var r=[],s=0;s<o.length;s++){var u=100*((o.length-s)/(2*o.length)+.5);u=100==u?1:100-u,r.push(A("#C9202C",u))}r.reverse(),h(r)}})).catch((function(e){"500"===e.message&&E.push("/serverDown")}))}),500);var v=function(t){var n=Object(G.a)(o),a=Object(G.a)(t.sort((function(e,t){return e.radius-t.radius}))).pop();n.some((function(e){return a.x==e.data[0].x&&a.y==e.data[0].y&&a.radius==e.data[0].radius}))||(e.numOfRetainedClusters.value<n.length&&(n=[]),n.length>=e.numOfRetainedClusters.value?(n.shift(),n.push({id:"cluster_"+Math.random().toString(),data:[a]})):n.push({id:"cluster_"+Math.random().toString(),data:[a]}),n.forEach((function(e,t){return e.id=t.toString()+". Cluster"})),d(n))},b=function(t){var n=function(e,t){return e-t},a=t.map((function(e){return e.x})).sort(n),r=t.map((function(e){return e.y})).sort(n);e.scales?e.setScales({xScaleMin:Math.min(a[0],e.scales.xScaleMin),xScaleMax:Math.max(a[a.length-1],e.scales.xScaleMax),yScaleMin:Math.min(r[0],e.scales.yScaleMin),yScaleMax:Math.max(r[r.length-1],e.scales.yScaleMax)}):e.setScales({xScaleMin:a[0],xScaleMax:a[a.length-1],yScaleMin:r[0],yScaleMax:r[r.length-1]})};return s==[]||null==e.scales?null:r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement("div",{className:"category-graph"},r.a.createElement(W,{data:o,nodeSize:function(e){return e.radius},scales:e.scales,dimNames:e.dimensions,colors:p})),r.a.createElement("div",{className:"category-graph"},r.a.createElement(W,{data:s,nodeSize:function(e){return e.radius},scales:e.scales,dimNames:e.dimensions})))}));function Q(e){return r.a.createElement("div",{className:"data-absent-error error"}," Null is returned instead of data. Make sure there is data in the storage to be displayed.")}function Z(e){return r.a.createElement("div",{className:"resource-not-found-error error"},"No resource with the given ID found.")}function ee(e){return r.a.createElement("div",{className:"server-down-error error"},"500 - Server not responding.")}var te=function(){return r.a.createElement(c.a,{store:S},r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/serverDown"},r.a.createElement(ee,null)),r.a.createElement(l.a,{path:"/dataAbsent"},r.a.createElement(Q,null)),r.a.createElement(l.a,{path:"/resourceNotFound"},r.a.createElement(Z,null)),r.a.createElement(l.a,{path:"/clusters"},r.a.createElement(K,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(Y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[238,1,2]]]);