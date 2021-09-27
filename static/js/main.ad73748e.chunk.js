(this.webpackJsonpcovide19=this.webpackJsonpcovide19||[]).push([[0],{103:function(e,t,a){e.exports={container:"Chart_container__1-u-y"}},20:function(e,t,a){e.exports={container:"Cards_container__21Dlc",card:"Cards_card__10eDu",infected:"Cards_infected__14VSX",recovered:"Cards_recovered__1m1HN",deaths:"Cards_deaths__31WEj"}},243:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(95),c=a.n(n),o=a(10),s=a.n(o),i=a(16),u=a(3),d=a(4),l=a(7),j=a(6),f=a(261),p=a(265),h=a(262),b=a(263),v=a(44),x=a.n(v),m=a(45),O=a.n(m),g=a(20),y=a.n(g),_=a(2),C=function(e){var t=e.data,a=t.confirmed,r=t.recovered,n=t.deaths,c=t.lastUpdate;return a&&r&&n&&c?Object(_.jsx)("div",{className:y.a.container,children:Object(_.jsxs)(f.a,{container:!0,spacing:3,justifyContent:"center",children:[Object(_.jsx)(f.a,{item:!0,component:p.a,xs:12,md:3,className:O()(y.a.card,y.a.infected),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(_.jsx)(b.a,{variant:"h5",children:Object(_.jsx)(x.a,{start:0,end:a.value,duration:2,separator:","})}),Object(_.jsx)(b.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(b.a,{variant:"body2",children:"Number of active cases from COVID-19."})]})}),Object(_.jsx)(f.a,{item:!0,component:p.a,xs:12,md:3,className:O()(y.a.card,y.a.recovered),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(_.jsx)(b.a,{variant:"h5",children:Object(_.jsx)(x.a,{start:0,end:r.value,duration:2,separator:","})}),Object(_.jsx)(b.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(b.a,{variant:"body2",children:"Number of recoveries from COVID-19."})]})}),Object(_.jsx)(f.a,{item:!0,component:p.a,xs:12,md:3,className:O()(y.a.card,y.a.deaths),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(_.jsx)(b.a,{variant:"h5",children:Object(_.jsx)(x.a,{start:0,end:n.value,duration:2,separator:","})}),Object(_.jsx)(b.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(b.a,{variant:"body2",children:"Number of deaths caused by COVID-19."})]})})]})}):"Loading..."},w=a(24),D=a(66),k=a(46),S=a.n(k),N="https://covid19.mathdro.id/api",I=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,o,i,u,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,i=n.deaths,u=n.countries,d=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:i,countries:u,lastUpdate:d});case 15:e.prev=15,e.t0=e.catch(2),console.error("error fetching data",e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log("error getting daily data",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log("error getting countries",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(103),J=a.n(B),A=function(e){var t=e.data,a=e.country,n=Object(r.useState)([]),c=Object(w.a)(n,2),o=c[0],u=c[1];Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var d=o.length?Object(_.jsx)(D.b,{data:{labels:o.map((function(e){return e.date})),datasets:[{data:o.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:o.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,l=t.confirmed?Object(_.jsx)(D.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(a)}}}):null;return Object(_.jsx)("div",{className:J.a.container,children:a?l:d})},M=a(266),P=a(264),U=a(47),H=a.n(U),R=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),n=Object(w.a)(a,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]),Object(_.jsx)("div",{className:H.a.container,children:Object(_.jsx)(M.a,{className:H.a.formControl,children:Object(_.jsxs)(P.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},className:H.a.select,children:[Object(_.jsx)("option",{value:"global",children:"Global"}),c.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))]})})})},z=a.p+"static/media/covide19.9e5d4fc7.png",F=a(65),G=a.n(F),L=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"global"===a&&(a=""),t.next=3,I(a);case 3:r=t.sent,e.setState({data:r,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(_.jsxs)("div",{className:G.a.container,children:[Object(_.jsx)("img",{className:G.a.image,src:z,alt:"COVID-19"}),Object(_.jsx)(C,{data:t}),Object(_.jsx)(R,{handleCountryChange:this.handleCountryChange}),Object(_.jsx)(A,{data:t,country:a})]})}}]),a}(r.Component),T=L;c.a.render(Object(_.jsx)(r.StrictMode,{children:Object(_.jsx)(T,{})}),document.getElementById("root"))},47:function(e,t,a){e.exports={container:"CountryPicker_container__1nJTJ",formControl:"CountryPicker_formControl___3zOH",select:"CountryPicker_select__hEFMw"}},65:function(e,t,a){e.exports={container:"App_container__3_puu",image:"App_image__773El"}}},[[243,1,2]]]);
//# sourceMappingURL=main.ad73748e.chunk.js.map