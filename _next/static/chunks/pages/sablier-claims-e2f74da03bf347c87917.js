_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{A0TD:function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),a=n("rePB"),r=n("Z6YE"),l=n("q1tI"),i=n("9/5/"),s=n.n(i),o=n("tiF4"),u=n("5Yp1"),b=n("T7VE"),f=n("CIUX"),j=n("Qi1R"),m=n("UxD7");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(r.b)(),t=e.active,n=e.account,a=Object(l.useState)(""),i=a[0],O=a[1],d=Object(l.useState)(!1),g=d[0],w=d[1],p=Object(l.useState)({balance:""}),h=p[0],v=p[1],y=Object(l.useState)({color:"text-black",message:""}),S=y[0],P=y[1],E=Object(l.useContext)(o.b).sablier,N=function(){return P({color:"text-black",message:""})},_=function(e){return P({color:"text-red-600",message:e})},k=Object(l.useCallback)(s()((function(e){return function(e){return e&&E.getStream(e).then((function(e){v(e),N()})).catch((function(e){return _(e.message)}))}(e)}),500),[E]);return Object(l.useEffect)((function(){N(),O("")}),[t,n]),Object(l.useEffect)((function(){return v({balance:""})}),[i]),Object(l.useEffect)((function(){if(h.balance){var e=BigInt(h.balance)+BigInt(h.ratePerSecond),t=BigInt(h.remainingBalance),n=e>t?t:e,c=setTimeout((function(){v(x(x({},h),{},{balance:n.toString()}))}),1e3);return function(){clearTimeout(c)}}}),[h.balance]),Object(c.jsx)(u.a,{title:"Sablier Claims",walletConnection:!0,children:Object(c.jsxs)("div",{className:"text-center max-w-2xl w-full mx-auto",children:[Object(c.jsx)("h1",{className:"text-1.5xl font-bold text-center",children:"Sablier Claims"}),Object(c.jsxs)("div",{className:"flex flex-wrap space-y-3 max-w-lg w-full mx-auto mt-10 justify-center",children:[Object(c.jsx)("div",{className:"w-full",children:Object(c.jsx)(b.a,{title:"Stream ID:",value:i,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&(N(),O(e.target.value),k(e.target.value))},disabled:!t||g})}),Object(c.jsx)("div",{className:"w-full tabular-nums",children:Object(c.jsx)(m.a,{title:"Balance:",value:h.balance&&Object(j.toFixed)(Object(j.fromUnit)(h.balance,h.token.decimals),6),suffix:h&&h.token&&h.token.symbol})})]}),Object(c.jsx)("div",{className:"flex justify-center mt-7.5",children:Object(c.jsx)(f.a,{disabled:!t||g||!h.balance,onClick:function(){return w(!0),P({color:"text-black",message:"Claim in Progress"}),E.withdrawFromStream(i).then((function(){!function(e){P({color:"text-green-600",message:e})}("Claim Succeeded"),O("")})).catch((function(e){return _(e.message)})).finally((function(){return w(!1)}))},children:"CLAIM"})}),Object(c.jsx)("p",{className:"text-center text-sm mt-6 ".concat(S.color),children:S.message})]})})}},lliB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sablier-claims",function(){return n("A0TD")}])}},[["lliB",1,2,0,3,4,5,6]]]);