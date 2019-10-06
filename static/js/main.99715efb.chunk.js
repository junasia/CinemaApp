(window["webpackJsonpcinema-app"]=window["webpackJsonpcinema-app"]||[]).push([[0],{44:function(e,t,a){e.exports=a(74)},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),s=a(3),i=a(19),o=a(40),m=a(4),u=function(){return r.a.createElement("div",{className:"navbar sticky-top navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Cinema Town ",r.a.createElement("small",{className:"navbar-band"},"the best cinemas")),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/"},"Program")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/"},"Now in cinemas")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/prices"},"Prices")))),r.a.createElement(m.b,{to:"/"}," To Program"),r.a.createElement(m.b,{to:"/reservation"}," To Reservation"))},p=a(18),d=a(5),f=a(6),h=a(8),E=a(7),v=a(9),b=a(2),N=a.n(b),g=a(16),y=a(24),w=a.n(y),O=a(23),j=a.n(O),x=j.a.create({baseURL:"https://omdbapi.com/?apikey=144de458&"}),k=j.a.create({baseURL:"https://limitless-reaches-99124.herokuapp.com/api/"}),C=function(e,t){return function(){var a=Object(g.a)(N.a.mark((function a(n){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return!0===t&&(S.cache=new w.a.memoize.Cache),a.abrupt("return",S(e,n));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},S=w.a.memoize(function(){var e=Object(g.a)(N.a.mark((function e(t,a){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("cinemas/"+t);case 3:n=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("fetchFilms action error: ",e.t0);case 9:r=n.data.movies.map((function(e){return e.days=e.days.map((function(e){return e.date=e.date.split("T")[0],e.date=new Date(e.date),e.date.setHours(0,0,0,0),e})),e.day=e.days.find((function(e){var t=new Date(Date.now());return t.setHours(0,0,0,0),new Date(e.date).getTime()===t.getTime()})),e})),a({type:"FETCH_FILMS",payload:r});case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()),D=w.a.memoize(function(){var e=Object(g.a)(N.a.mark((function e(t,a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,x.get("",{params:{i:t}});case 5:n=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("fetchFilm action error: ",e.t0);case 11:a({type:"FETCH_FILM",payload:n.data});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a){return e.apply(this,arguments)}}()),T=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).renderHours=function(){return a.props.film.day?a.props.film.day.seances.map((function(e){return r.a.createElement(m.b,{to:"/reservation",key:e._id,id:e._id,value:e._id,onClick:a.clickButton,className:"btn btn-primary btn-sm mb-1 mr-1"},e.hour)})):r.a.createElement("div",null,"Brak seans\xf3w")},a.clickButton=function(e){a.props.fetchSeats(e.target.id,a.props.film)},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.film.day&&this.props.film.poster?r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2"},r.a.createElement(m.b,{to:"/film/"+this.props.film.imdbID},r.a.createElement("img",{className:"img-thumbnail img-fluid",alt:this.props.film.name,src:this.props.film.poster}))),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("h5",{className:"mb-1"},this.props.film.name),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},this.props.film.genre," | ",this.props.film.runtime)),r.a.createElement("div",null,this.renderHours(this.props.film))))):r.a.createElement("div",null)}}]),t}(r.a.Component),F=Object(s.b)((function(e){return{films:e.films}}),{fetchSeats:function(e,t){return function(){var a=Object(g.a)(N.a.mark((function a(n){var r;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&t){a.next=2;break}return a.abrupt("return",null);case 2:return a.next=4,k.get("seances/"+e);case 4:if((r=a.sent)&&r.data){a.next=7;break}return a.abrupt("return",null);case 7:n({type:"FETCH_SEATS",payload:{id:e,film:t,seats:r.data}});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(T),A=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchFilms(this.props.cinema)}},{key:"render",value:function(){return r.a.createElement("ul",{className:"list-group list-group-flush width-80"},this.renderList())}},{key:"renderList",value:function(){return this.props.films?this.props.films.map((function(e){return r.a.createElement(F,{key:e.imdbID,film:e})})):r.a.createElement("div",null)}}]),t}(r.a.Component),I=Object(s.b)((function(e){return{films:e.films,cinema:e.cinema}}),{fetchFilms:C})(A),R=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).changeCinema=function(e){a.props.saveCinema(e.target.value),a.props.fetchFilms(e.target.value,!0)},a.changeDate=function(e){a.props.saveDate(e.target.value)},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCinemas(),this.props.saveDate(Date.now())}},{key:"dateToString",value:function(e,t){var a=new Date(e);t&&a.setDate(a.getDate()+t);var n=a.getYear()+1900,r=a.getMonth()+1;return n+"-"+(r=r<10?"0"+r:r)+"-"+(a.getDate()<10?"0"+a.getDate():a.getDate())}},{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron pt-3 mt-3 width-80"},r.a.createElement("h1",{className:"display-4"},"Reserve now!"),r.a.createElement("p",{className:"lead"},"Everyone wants to have the best seats. Be faster and reserve it here!"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",{htmlFor:"inputDate"},"Date"),r.a.createElement("input",{type:"date",className:"form-control",id:"inputDate",onChange:this.changeDate,value:this.dateToString(this.props.date),min:this.dateToString(Date.now()),max:this.dateToString(Date.now(),5)})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",{htmlFor:"inputCinema"},"Cinema"),r.a.createElement("select",{id:"inputCinema",className:"form-control",onChange:this.changeCinema},this.renderCinemas())))))}},{key:"renderCinemas",value:function(){return this.props.cinemas?this.props.cinemas.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})):r.a.createElement("div",null)}}]),t}(n.Component),_=Object(s.b)((function(e){return{cinemas:e.cinemas,cinema:e.cinema,date:e.date}}),{fetchFilms:C,fetchCinemas:function(){return function(){var e=Object(g.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("cinemas/");case 2:a=e.sent,t({type:"FETCH_CINEMAS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},saveCinema:function(e){return function(t){if(!e)return null;t({type:"SAVE_CINEMA",payload:e})}},saveDate:function(e){return function(t){if(!e)return null;var a=new Date(e);a.setHours(0,0,0,0),t({type:"SAVE_DATE",payload:a})}}})(R),P=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex flex-column align-items-center position-relative pb-5"},r.a.createElement(_,null),r.a.createElement(I,null))}}]),t}(r.a.Component),H=Object(s.b)(null,{fetchFilms:C})(P),L=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchFilm(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderFilm())}},{key:"renderFilm",value:function(){if(!this.props.film)return null;var e=this.props.film,t=[];for(var a in e)t.push(r.a.createElement("div",null,r.a.createElement("b",null,a+": ")," ",""+e[a]));return r.a.createElement("div",{className:"film-details"},r.a.createElement("img",{src:e.Poster,alt:"poster"}),r.a.createElement("div",{className:"film-info"},r.a.createElement("div",null,t)))}}]),t}(r.a.Component),B=Object(s.b)((function(e){return{film:e.film}}),{fetchFilm:function(e){return function(){var t=Object(g.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",D(e,a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(L),M=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).clickSeatButton=function(e){console.log(e.target),"false"!==e.target.value&&(a.props.reservation.reservations.includes(e.target.id)?a.props.cancelReserve(e.target.id):a.props.reserveSeat(e.target.id),console.log("cancle: ",a.props.reservation))},a.renderNumberOfSeat=function(e){return 3===e.length?e[0]+e[2]:e[0]+e[2]+e[3]},a.logSeats=function(){console.log(a.props,a.props.reservation)},a.getSeatClassName=function(e,t){return a.props.reservation.reservations.includes(t)?"btn btn-primary btn-sm":"btn "+(e?"btn-success":"btn-danger")+" btn-sm"},a.handleClickNext=function(e){a.props.reservation.reservations.length&&a.setState({redirect:!0})},a.state={redirect:!1},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"renderSeats",value:function(){if(!this.props.reservation.seats.length)return r.a.createElement("div",null);var e=this.props.reservation.seats,t=[];for(var a in e)for(var n in e[a]){var l=a+"/"+n;t.push(r.a.createElement("button",{onClick:this.clickSeatButton,value:e[a][n],type:"button",id:l,key:l,className:this.getSeatClassName(e[a][n],l)},l))}return r.a.createElement("div",{className:"seats-container mt-4"},t)}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.redirect?r.a.createElement(p.b,{push:!0,to:"/form"}):"",r.a.createElement("div",{className:"d-flex flex-column align-items-center position-relative pb-5 pt-4"},r.a.createElement("div",{className:"jumbotron pt-3 mt-3 width-80"},r.a.createElement("h1",{className:"display-4"},"Choose seat"),r.a.createElement("p",{className:"lead"},"Find seat, which is the most suitable for you and click on it."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("h5",null,"Title: The Lion King"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",{htmlFor:"inputDate"},"Date"),r.a.createElement("input",{type:"date",className:"form-control",id:"inputDate",defaultValue:"2019-10-01",min:"2019-10-01",max:"2019-10-08"})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",{htmlFor:"inputTime"},"Time"),r.a.createElement("select",{defaultValue:"DEFAULT",id:"inputTime",className:"form-control"},r.a.createElement("option",{value:"DEFAULT"},"13:00"),r.a.createElement("option",{value:"1"},"15:00"),r.a.createElement("option",{value:"2"},"17:30")))))),r.a.createElement("ul",{className:"list-group list-group-flush width-80"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-around"},r.a.createElement("span",{className:"badge badge-secondary"},"Not available"),r.a.createElement("span",{className:"badge badge-success"},"Available"),r.a.createElement("span",{className:"badge badge-danger"},"Your choice")),r.a.createElement("li",{className:"list-group-item d-flex flex-column align-items-center"},r.a.createElement("div",{className:"screen text-center"},r.a.createElement("small",null,"SCREEN")),this.renderSeats(),r.a.createElement("div",{className:"d-flex justify-content-around w-100 mt-5"},r.a.createElement("button",{onClick:this.logSeats,type:"button",className:"btn btn-success btn-lg"},"CHECK PROPS"),r.a.createElement("a",{className:"btn btn-warning",href:"#/",role:"button"},"Back"),r.a.createElement("button",{className:"btn btn-primary",onClick:this.handleClickNext},"Next"))))))}}]),t}(n.Component),V=Object(s.b)((function(e){return{reservation:e.reservation}}),{reserveSeat:function(e){return function(t){if(!e)return null;t({type:"RESERVE_SEAT",payload:e})}},cancelReserve:function(e){return function(t){if(!e)return null;t({type:"CANCEL_RESERVE",payload:e})}}})(M),q=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).handleChange=function(e){switch(e.target.id){case"firstNameInput":a.setState({firstName:e.target.value});break;case"lastNameInput":a.setState({lastName:e.target.value});break;case"phoneInput":a.setState({phone:e.target.value});break;case"emailInput":a.setState({email:e.target.value})}},a.handleSubmit=function(){var e=Object(g.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.props.reservation,a.state),n={phone:a.state.phone,mail:a.state.email,name:a.state.firstName+" "+a.state.lastName,seance:a.props.reservation.seance,seats:a.props.reservation.reservations.map((function(e){var t=e.split("/");return{rowNumber:t[0],seatNumber:t[1]}}))},console.log(n),e.next=5,a.props.postReservation(n);case 5:a.setState({redirect:!0}),t.persist();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={firstName:"",lastName:"",phone:"",email:"",redirect:!1},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.redirect?r.a.createElement(p.b,{push:!0,to:"/done"}):"",r.a.createElement("ul",{className:"list-group list-group-flush width-80"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("form",{className:"formReservation",id:"formReservation",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"firstNameInput",className:"col-sm-3 col-form-label"},"First name"),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"text",className:"form-control",min:"2",onChange:this.handleChange,id:"firstNameInput",placeholder:"First name",required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"lastNameInput",className:"col-sm-3 col-form-label"},"Last name"),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"text",className:"form-control",min:"2",onChange:this.handleChange,id:"lastNameInput",placeholder:"Last name",required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"phoneInput",className:"col-sm-3 col-form-label"},"Phone"),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"number",className:"form-control",min:"4",onChange:this.handleChange,id:"phoneInput",placeholder:"Phone",required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"emailInput",className:"col-sm-3 col-form-label"},"Email adress"),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"email",className:"form-control",id:"emailInput",onChange:this.handleChange,placeholder:"Email adress",required:!0}))),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("small",{className:"text-muted"},"Provided informations will be used only for reservation purposes. We'll never share it with anyone else."))),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement(m.b,{className:"btn btn-warning",to:"/",role:"button"},"Back"),r.a.createElement("button",{type:"submit",form:"formReservation",className:"btn btn-success"},"Next")))))}}]),t}(r.a.Component),K=Object(s.b)((function(e){return{reservation:e.reservation}}),{postReservation:function(e){return function(){var t=Object(g.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,k.post("seances/"+e.seance,e);case 4:if((n=t.sent)&&n.data){t.next=7;break}return t.abrupt("return",null);case 7:console.log(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(q),U=function(){return r.a.createElement("div",{className:"jumbotron pt-3 mt-3 width-80"},r.a.createElement("h1",{className:"display-4"},"Provide contact details"),r.a.createElement("p",{className:"lead"},"We will send you the reservation confirmation to the e-mail address."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("h5",null,"Reservation details:"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"font-weight-bold m-0"},"Title: "),r.a.createElement("p",null,"The Lion King")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"font-weight-bold m-0"},"Date:"),r.a.createElement("p",null,"02.10.2019")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"font-weight-bold m-0"},"Time:"),r.a.createElement("p",null,"15:00")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"font-weight-bold m-0"},"Seats:"),r.a.createElement("p",null,"B2 B3"))))},z=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-column align-items-center position-relative pb-5"},r.a.createElement(U,null),r.a.createElement(K,null)))},J=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("div",{className:"jumbotron pt-3 mt-3 width-80"},r.a.createElement("h1",{className:"display-4"},"Success!"),r.a.createElement("p",{className:"lead"},"The confirmation resrevation has been succesfully sent to provided email adress. Show it at the Box Office and buy your tickets no later than 30 minutes before the screening. See you soon!"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("h5",null,"Reservation details:"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"font-weight-bold m-0"},"Title: "),r.a.createElement("p",null,"The Lion King")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"font-weight-bold m-0"},"Date:"),r.a.createElement("p",null,"02.10.2019")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"font-weight-bold m-0"},"Time:"),r.a.createElement("p",null,"15:00")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"font-weight-bold m-0"},"Seats:"),r.a.createElement("p",null,"B2 B3"))),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("a",{href:"#/"},r.a.createElement("button",{type:"button",className:"btn btn-success mt-5"},"Home"))))))},W=function(){return r.a.createElement(p.a,{basename:"reservation"},r.a.createElement(p.e,null,r.a.createElement(p.c,{path:"/",exact:!0,component:V}),r.a.createElement(p.c,{path:"/form",exact:!0,component:z}),r.a.createElement(p.c,{path:"/done",exact:!0,component:J})))},Y=function(){return r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("ul",{className:"list-group list-group-flush mt-3 width-80"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("h1",null,"Prices")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("table",{id:"priceTable",className:"table table-hover mx-auto text-center"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col"},"Mon-Thu"),r.a.createElement("th",{scope:"col"},"Fri-Sun/ Holidays"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",className:"text-left"},"Adult"),r.a.createElement("td",null,"16 \u20ac"),r.a.createElement("td",null,"18 \u20ac")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",className:"text-left"},"Child ",r.a.createElement("small",{className:"text-muted"},"under 6")),r.a.createElement("td",null,"12 \u20ac"),r.a.createElement("td",null,"14 \u20ac")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",className:"text-left"},"Student ",r.a.createElement("small",{className:"text-muted"},"ID required")),r.a.createElement("td",null,"14 \u20ac"),r.a.createElement("td",null,"16 \u20ac")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",className:"text-left"},"Senior"),r.a.createElement("td",null,"12 \u20ac"),r.a.createElement("td",null,"14 \u20ac")))))))},G=function(){return r.a.createElement(p.e,null,r.a.createElement(p.c,{path:"/",exact:!0,component:H}),r.a.createElement(p.c,{path:"/prices",exact:!0,component:Y}),r.a.createElement(p.c,{path:"/film/:id",exact:!0,component:B}),r.a.createElement(p.c,{path:"/reservation",exact:!0,component:W}))},Q=(a(73),function(){return r.a.createElement(m.a,null,r.a.createElement(u,null),r.a.createElement(G,null),r.a.createElement("footer",{className:"foot bg-secondary",style:{position:"fixed",bottom:"0"}},r.a.createElement("p",{className:"m-0"},"\xa9 wiatrgonifale")))}),X=a(43),Z=a(42);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(Z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var te=Object(i.c)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FILMS":return t.payload;case"SAVE_DATE":var a=Object(X.a)(e).map((function(e){return e.day=e.days.find((function(e){var a=new Date(t.payload);return a.setHours(0,0,0,0),new Date(e.date).getTime()===a.getTime()})),e}));return a;default:return e}},film:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FILM":return t.payload;default:return e}},cinemas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CINEMAS":return t.payload;default:return e}},cinema:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10589",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_CINEMA":return t.payload;default:return e}},date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date(Date.now()),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_DATE":return new Date(t.payload);default:return e}},reservation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{seats:[],reservations:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESERVE_SEAT":var a=ee({},e);return a.reservations||(a.reservations=[]),a.reservations.push(t.payload),a;case"CANCEL_RESERVE":return ee({},e,{reservations:e.reservations.filter((function(e){return e!==t.payload}))});case"FETCH_SEATS":return ee({},e,{seance:t.payload.id,seats:t.payload.seats,reservations:[],film:t.payload.film});default:return e}}}),ae=Object(i.d)(te,Object(i.a)(o.a));c.a.render(r.a.createElement(s.a,{store:ae},r.a.createElement(Q,null)),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.99715efb.chunk.js.map