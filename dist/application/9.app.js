(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"StatisticsPage",function(){return d});var a=n(1),c=n(5),l=n(2),s=n(4),r=n(6),m=n(3),o=n(8),i=n(45),b=n(96),p=n(0);let d=class extends p.Component{constructor(){super(...arguments),this.appointment=null,this.charts=[s.J,s.O,s.vb,s.S,s.P,s.tb,s.T,s.H]}render(){return p.createElement("div",{className:"sc-pg p-15 p-l-10 p-r-10"},p.createElement(c.e,{maxItemsOnLoad:20,className:"appointments-data-table",heads:[Object(l.B)("Appointment"),Object(l.B)("Treatment"),Object(l.B)("Paid"),Object(l.B)("Outstanding"),Object(l.B)("Expenses"),Object(l.B)("Profits")],rows:s.ob.selectedAppointments.map(e=>({id:e._id,searchableString:e.searchableString,cells:[{dataValue:(e.patient||new s.r).name,component:p.createElement(c.k,{secondaryElement:p.createElement("span",null,Object(r.j)(e.date,s.kb.getSetting("date_format"))," ","/"," ",e.operatingStaff.map(e=>p.createElement("i",{key:e._id},e.name," "))),name:(e.patient||new s.r).name,size:3}),onClick:()=>{this.appointment=e},className:"no-label"},{dataValue:e.treatmentID,component:p.createElement(c.l,{text:e.treatment?e.treatment.type:"",subText:Object(r.j)(e.date,s.kb.getSetting("date_format")),size:3,onClick:()=>{}}),className:"hidden-xs"},{dataValue:e.paidAmount,component:p.createElement("span",null,s.kb.getSetting("currencySymbol")+Object(r.s)(e.paidAmount).toString()),className:"hidden-xs"},{dataValue:e.outstandingAmount,component:p.createElement("span",null,s.kb.getSetting("currencySymbol")+Object(r.s)(e.outstandingAmount).toString()),className:"hidden-xs"},{dataValue:e.expenses,component:p.createElement("span",null,s.kb.getSetting("currencySymbol")+Object(r.s)(e.expenses).toString()),className:"hidden-xs"},{dataValue:e.profit,component:p.createElement("span",null,s.kb.getSetting("currencySymbol")+Object(r.s)(e.profit).toString()),className:"hidden-xs"}]})),farItems:[{key:"1",onRender:()=>p.createElement(i.a,{placeholder:Object(l.B)("Filter by staff member"),defaultValue:"",options:[{key:"",text:Object(l.B)("All members")}].concat(s.mb.list.map(e=>({key:e._id,text:e.name}))),onChange:(e,t)=>{s.ob.filterByMember=t.key.toString()}})}],hideSearch:!0,commands:[{key:"2",onRender:()=>p.createElement(b.a,{onSelectDate:e=>{e&&(s.ob.startingDate=s.ob.getDayStartingPoint(e.getTime()))},value:new Date(s.ob.startingDate),formatDate:e=>`${Object(l.B)("From")}: ${Object(r.j)(e,s.kb.getSetting("date_format"))}`})},{key:"3",onRender:()=>p.createElement(b.a,{onSelectDate:e=>{e&&(s.ob.endingDate=s.ob.getDayStartingPoint(e.getTime()))},value:new Date(s.ob.endingDate),formatDate:e=>`${Object(l.B)("Until")}: ${Object(r.j)(e,s.kb.getSetting("date_format"))}`})}]}),p.createElement(s.b,{appointment:this.appointment,onDismiss:()=>this.appointment=null,onDelete:()=>this.appointment=null}),p.createElement("div",{className:"container-fluid m-t-20 quick"},p.createElement(c.n,{title:Object(l.B)("Quick stats")},p.createElement(c.m,null,p.createElement(c.c,{sm:6,xs:12},p.createElement("label",null,Object(l.B)("Appointments"),":"," ",p.createElement(c.o,{text:Object(r.s)(s.ob.selectedAppointments.length).toString(),type:c.q.primary}))),p.createElement(c.c,{sm:6,xs:12},p.createElement("label",null,Object(l.B)("Payments"),":"," ",p.createElement(c.o,{text:s.kb.getSetting("currencySymbol")+Object(r.s)(s.ob.totalPayments).toString(),type:c.q.warning}))),p.createElement(c.c,{sm:6,xs:12},p.createElement("label",null,Object(l.B)("Expenses"),":"," ",p.createElement(c.o,{text:s.kb.getSetting("currencySymbol")+Object(r.s)(s.ob.totalExpenses).toString(),type:c.q.danger}))),p.createElement(c.c,{sm:6,xs:12},p.createElement("label",null,Object(l.B)("Profits"),":"," ",p.createElement(c.o,{text:s.kb.getSetting("currencySymbol")+Object(r.s)(s.ob.totalProfits).toString(),type:c.q.success})))))),p.createElement("div",{className:"charts container-fluid"},p.createElement("div",{className:"row"},this.charts.map((e,t)=>p.createElement("div",{key:t+e.name,className:"chart-wrapper "+(e.className||"col-xs-12 col-md-5 col-lg-4")},p.createElement(c.n,{title:Object(l.B)(e.name)},p.createElement(e.Component,null)))))))}};a.c([m.k],d.prototype,"appointment",void 0),a.c([m.k],d.prototype,"charts",void 0),d=a.c([o.a],d)}}]);