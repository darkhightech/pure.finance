_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{DsSW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/merkle-claims",function(){return n("w9yP")}])},w9yP:function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),a=n("Z6YE"),l=n("q1tI"),s=n("9/5/"),i=n.n(s),u=n("tiF4"),r=n("5Yp1"),o=n("T7VE"),m=n("CIUX"),b=n("Qi1R"),f=n("UxD7");t.default=function(){var e=Object(a.b)(),t=e.active,n=e.account,s=Object(l.useState)(""),j=s[0],x=s[1],d=Object(l.useState)(!1),O=d[0],w=d[1],g=Object(l.useState)({amount:"",isClaimable:!1}),h=g[0],C=g[1],k=Object(l.useState)({color:"text-black",message:""}),v=k[0],N=k[1],_=Object(l.useContext)(u.b).merkle,p=function(){return N({color:"text-black",message:""})},E=function(e){return N({color:"text-red-600",message:e})},y=Object(l.useCallback)(i()((function(e){return function(e){return e&&_.getHolding(e).then((function(e){e.isClaimable?p():E("Already Claimed"),C(e)})).catch((function(e){return E(e.message)}))}(e)}),500),[_]);return Object(l.useEffect)((function(){p(),x("")}),[t,n]),Object(l.useEffect)((function(){return C({amount:"",isClaimable:!1})}),[j]),Object(c.jsx)(r.a,{title:"Merkle Claims",walletConnection:!0,children:Object(c.jsxs)("div",{className:"text-center max-w-2xl w-full mx-auto",children:[Object(c.jsx)("h1",{className:"text-1.5xl font-bold text-center",children:"Merkle Claims"}),Object(c.jsxs)("div",{className:"flex flex-wrap space-y-3 max-w-lg w-full mx-auto mt-10 justify-center",children:[Object(c.jsx)("div",{className:"w-full",children:Object(c.jsx)(o.a,{title:"Claim ID:",value:j,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&(p(),x(e.target.value),y(e.target.value))},disabled:!t||O})}),Object(c.jsx)("div",{className:"w-full tabular-nums",children:Object(c.jsx)(f.a,{title:"Balance:",value:h.amount&&Object(b.toFixed)(Object(b.fromUnit)(h.amount,h.token.decimals),6),suffix:h&&h.token&&h.token.symbol})})]}),Object(c.jsx)("div",{className:"flex justify-center mt-7.5",children:Object(c.jsx)(m.a,{disabled:!t||!h.isClaimable||O,onClick:function(){return w(!0),N({color:"text-black",message:"Claim in Progress"}),_.claim(j,h.amount,h.proof).then((function(){!function(e){N({color:"text-green-600",message:e})}("Claim Succeeded"),x("")})).catch((function(e){return E(e.message)})).finally((function(){return w(!1)}))},children:"CLAIM"})}),Object(c.jsx)("p",{className:"text-center text-sm mt-6 ".concat(v.color),children:v.message})]})})}}},[["DsSW",1,2,0,3,4,5,6]]]);