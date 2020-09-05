(this["webpackJsonp100.platzi-coding-challenge"]=this["webpackJsonp100.platzi-coding-challenge"]||[]).push([[0],{19:function(e,a,t){e.exports=t(30)},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),o=t.n(r),c=t(7),s=t(1),m=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__logo"}),l.a.createElement(c.b,{className:"header__name",to:"/"},"Platzi Coding Challenge"))},i=function(){return l.a.createElement("div",{className:"logo"},"100 Days of Coding")},u=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"footer__logo"}),l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"footer__name",href:"https://github.com/josedagale/platzi-coding-challenge"},"Jose David Garzon"))},d=function(e){return l.a.createElement("div",{className:"main-container"},l.a.createElement(m,null),l.a.createElement(i,null),l.a.createElement("div",{className:"content"},e.children),l.a.createElement(u,null))},p=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("li",{className:"content__item-list"},l.a.createElement(c.b,{to:e.route},e.title)))},E=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"content__title"},"100 retos diarios para aprender a programar"),l.a.createElement("p",{className:"content__description"},"Me estoy entrenando para ser un Frontend Developer,",l.a.createElement("br",null),"por eso los retos los voy a resolver con ",l.a.createElement("strong",null,"Javascript")," y vinculandolos con interfaces en el navegador"),l.a.createElement("ol",{className:"content__list"},l.a.createElement(p,{route:"/helloworld",title:"Hello World"}),l.a.createElement(p,{route:"/areatriangulo",title:"Area de un triangulo"}),l.a.createElement(p,{route:"/reloj",title:"Reloj"}),l.a.createElement(p,{route:"/repitepalabra",title:"Repite la palabra"}),l.a.createElement(p,{route:"/vocales",title:"\xbfNecesitamos vocales?"}),l.a.createElement(p,{route:"/calculadora",title:"Calculadora"}),l.a.createElement(p,{route:"/piedrapapeltijeras",title:"Piedra, papel o tijera"}),l.a.createElement(p,{route:"/volumencilindro",title:"Volumen de un cilindro"}),l.a.createElement(p,{route:"/numerosecreto",title:"N\xfamero secreto"}),l.a.createElement(p,{route:"/piglatin",title:"Traductor de Pig Latin"}),l.a.createElement(p,{route:"/passwords",title:"Generador de contrase\xf1as"}),l.a.createElement(p,{route:"/birthday",title:"Pr\xf3ximo cumplea\xf1os"}),l.a.createElement(p,{route:"/propina",title:"Calculadora de propina"}),l.a.createElement(p,{route:"/numerosprimos",title:"N\xfameros primos"})))},_=t(10),g=function(e){var a=e.value,t=e.handleClick;return l.a.createElement("button",{onClick:t,className:"button"},a)},h=function(e){var a=e.link;return l.a.createElement(c.b,{className:"next",to:a},">")},N=function(){var e=Object(n.useState)(""),a=Object(_.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"content__title"},"Reto D\xeda 1 | Hello World"),l.a.createElement("p",{className:"content__description"},"Que satisfactorio es el primer ",l.a.createElement("strong",null,"hello World")),l.a.createElement(g,{value:"Impr\xedmelo",handleClick:function(e){r(""===t?"Platzi Hello World!":"")}}),l.a.createElement("p",{className:"content__result"},t),l.a.createElement(h,{link:"/areatriangulo"}))},b=t(9),f=t(3),v=function(e){var a=e.name,t=e.placeholder,n=e.handleChange;return l.a.createElement("input",{className:"content__input",type:"text",name:a,placeholder:t,onChange:n})},j=function(){var e=Object(n.useState)({message:""}),a=Object(_.a)(e,2),t=a[0],r=a[1],o=function(e){r(Object(f.a)(Object(f.a)({},t),{},Object(b.a)({},e.target.name,Number(e.target.value))))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"content__title"},"Reto D\xeda 2 | \xc1rea de un Tri\xe1ngulo"),l.a.createElement("p",{className:"content__description"},"\xbfCu\xe1l es el ",l.a.createElement("strong",null,"\xe1rea")," de un tri\xe1ngulo? \xbfqu\xe9"," ",l.a.createElement("strong",null,"tipo")," de tri\xe1ngulo es?"),l.a.createElement("form",{className:"content__form"},l.a.createElement(v,{name:"lado1",placeholder:"Lado 1",handleChange:o}),l.a.createElement(v,{name:"lado2",placeholder:"Lado 2",handleChange:o}),l.a.createElement(v,{name:"lado3",placeholder:"Lado 3",handleChange:o})),l.a.createElement(g,{value:"Calcular",handleClick:function(){var e=t.lado1,a=t.lado2,n=t.lado3;if(isNaN(e)||isNaN(a)||isNaN(n))r(Object(f.a)(Object(f.a)({},t),{},{message:"Los datos ingresados ".concat(e,", ").concat(a,", ").concat(n," no son v\xe1lidos.\n        Ingresa s\xf3lo n\xfameros.")}));else{var l=function(e,a,t){var n=(e+a+t)/2;return Math.sqrt(Math.abs(n*(n-e)*(n-a)*(n-t))).toFixed(2)}(n,a,n),o=function(e,a,t){return e===a&&a===t&&t===e?"equil\xe1tero":e!==a&&a!==t&&t!==e?"escaleno":"is\xf3celes"}(e,a,n);r(Object(f.a)(Object(f.a)({},t),{},{message:"El \xe1rea del tri\xe1gulo es ".concat(l," m2.\n        Es un tri\xe1ngulo ").concat(o,".")}))}}}),l.a.createElement("p",{className:"content__result"},t.message),l.a.createElement(h,{link:"/reloj"}))},y=function(){var e=Object(n.useState)({message:""}),a=Object(_.a)(e,2),t=a[0],r=a[1],o=function(e){r(Object(f.a)(Object(f.a)({},t),{},Object(b.a)({},e.target.name,Number(e.target.value))))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"content__title"},"Reto D\xeda 3 | Reloj"),l.a.createElement("p",{className:"content__description"},"\xbfCu\xe1ntos ",l.a.createElement("strong",null,"segundos")," hay?"),l.a.createElement("form",{className:"content__form"},l.a.createElement(v,{name:"hours",placeholder:"Horas",handleChange:o}),l.a.createElement(v,{name:"mins",placeholder:"Minutos",handleChange:o})),l.a.createElement(g,{value:"Calcular",handleClick:function(){var e=t.hours,a=t.mins;if(isNaN(e)||isNaN(a))r(Object(f.a)(Object(f.a)({},t),{},{message:"Los datos ingresados ".concat(e,", ").concat(a," no son v\xe1lidos. <br/> Ingresa s\xf3lo n\xfameros.")}));else{var n=function(e,a){return 3600*e+60*a}(e,a);r(Object(f.a)(Object(f.a)({},t),{},{message:"Hay <strong>".concat(n,"</strong> segundos en ").concat(e," horas y ").concat(a," minutos.")}))}}}),l.a.createElement("p",{className:"content__result"},t.message),l.a.createElement(h,{link:"/reloj"}))},x=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"content__title"},"Reto D\xeda 4 | Repite la palabra"),l.a.createElement("p",{className:"content__description"},"Ingresa un ",l.a.createElement("strong",null,"mensaje")," y la ",l.a.createElement("strong",null,"cantidad")," de veces que quieres que se repita"),l.a.createElement("form",{className:"content__form"},l.a.createElement("input",{className:"content__input",id:"msg",type:"text",placeholder:"Mensaje"}),l.a.createElement("input",{className:"content__input",id:"repeat",type:"text",placeholder:"Repeticiones"})),l.a.createElement("button",{className:"button"},"Calcular"),l.a.createElement("p",{className:"content__result--multiple",id:"result"}),l.a.createElement("a",{className:"next",href:"./5-necesitamosVocales.html"},">"))},C=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"content__title"},"Reto D\xeda 5 | Necesitamos vocales"),l.a.createElement("p",{className:"content__description"},"\xbfSin ",l.a.createElement("strong",null,"vocales")," podemos entender?"),l.a.createElement("button",{className:"button"},"Sin vocales"),l.a.createElement("p",{className:"content__paragraph"},"En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que viv\xeda un hidalgo de los de lanza en astillero, adarga antigua, roc\xedn flaco y galgo corredor. Una olla de algo m\xe1s vaca que carnero, salpic\xf3n las m\xe1s noches, duelos y quebrantos los s\xe1bados, lantejas los viernes, alg\xfan palomino de a\xf1adidura los domingos, consum\xedan las tres partes de su hacienda. El resto della conclu\xedan sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los d\xedas de entresemana se honraba con su vellor\xed de lo m\xe1s fino. Ten\xeda en su casa una ama que pasaba de los cuarenta y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza que as\xed ensillaba el roc\xedn como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta a\xf1os. Era de complexi\xf3n recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que ten\xeda el sobrenombre de \xabQuijada\xbb, o \xabQuesada\xbb, que en esto hay alguna diferencia en los autores que deste caso escriben, aunque por conjeturas veris\xedmiles se deja entender que se llamaba \xabQuijana\xbb. Pero esto importa poco a nuestro cuento: basta que en la narraci\xf3n d\xe9l no se salga un punto de la verdad."),l.a.createElement("a",{className:"next",href:"./6-calculadora.html"},">"))},q=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"content__title"},"Reto D\xeda 6 | Calculadora"),l.a.createElement("p",{className:"content__description"},"\xbfQu\xe9 ",l.a.createElement("strong",null,"n\xfameros")," quieres calcular?"),l.a.createElement("form",{className:"content__form"},l.a.createElement("input",{className:"content__input",id:"number1",type:"text",placeholder:"N\xfamero 1"}),l.a.createElement("select",{className:"content__input",id:"operation",name:"operation"},l.a.createElement("option",{value:"+"},"suma"),l.a.createElement("option",{value:"-"},"resta"),l.a.createElement("option",{value:"*"},"multiplica"),l.a.createElement("option",{value:"/"},"divide")),l.a.createElement("input",{className:"content__input",id:"number2",type:"text",placeholder:"N\xfamero 2"})),l.a.createElement("button",{className:"button"},"Calcular"),l.a.createElement("p",{className:"content__result--big",id:"result"}),l.a.createElement("a",{className:"next",href:"./7-piedraPapelTijera.html"},">"))},O=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"content__title"},"Reto D\xeda 7 | Piedra Papel o Tijeras"),l.a.createElement("p",{className:"content__description"},l.a.createElement("strong",null,"Escoje")," bien, la m\xe1quina es un duro rival. ",l.a.createElement("br",null)," Gana el que complete ",l.a.createElement("strong",null,"3 victorias"),"."),l.a.createElement("form",{className:"content__form"},l.a.createElement("select",{className:"content__input",id:"userOption",name:"userOption"},l.a.createElement("option",{value:"1"},"Piedra"),l.a.createElement("option",{value:"2"},"Papel"),l.a.createElement("option",{value:"3"},"Tijeras"))),l.a.createElement("button",{className:"button"},"Jugar"),l.a.createElement("p",{className:"content__result",id:"randomOption"}),l.a.createElement("p",{className:"content__result msg",id:"message"}),l.a.createElement("p",{className:"content__result msg",id:"score"}),l.a.createElement("a",{className:"next",href:"./8-valumencilindro.html"},">"))},R=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"content__title"},"Reto D\xeda 8 | Volumen de un cilindro"),l.a.createElement("p",{className:"content__description"},"\xbfComo se haya el ",l.a.createElement("strong",null,"volumen")," de un cilindro?"),l.a.createElement("form",{className:"content__form"},l.a.createElement("input",{className:"content__input",id:"radio",type:"text",placeholder:"Radio del c\xedrculo"}),l.a.createElement("input",{className:"content__input",id:"height",type:"text",placeholder:"Altura"})),l.a.createElement("button",{className:"button"},"Calcular"),l.a.createElement("p",{className:"content__result",id:"result"}),l.a.createElement("a",{className:"next",href:"./9-numeroSecreto.html"},">"))},F=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"content__title"},"Reto D\xeda 9 | N\xfamero secreto"),l.a.createElement("p",{className:"content__description"},"Encuentra el n\xfamero secreto.",l.a.createElement("br",null)," Te diremos si es ",l.a.createElement("strong",null,"mayor o menor")," hasta que lo encuentres."),l.a.createElement("form",{className:"content__form hide",id:"form"},l.a.createElement("input",{className:"content__input",id:"number",type:"text",placeholder:"Escribe un n\xfamero"})),l.a.createElement("button",{className:"button",id:"init"},"Iniciar Juego"),l.a.createElement("p",{className:"content__result",id:"result"}),l.a.createElement("a",{className:"next",href:"/"},">"))},k=function(){return l.a.createElement(c.a,null,l.a.createElement(d,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:E}),l.a.createElement(s.a,{exact:!0,path:"/helloworld",component:N}),l.a.createElement(s.a,{exact:!0,path:"/areatriangulo",component:j}),l.a.createElement(s.a,{exact:!0,path:"/reloj",component:y}),l.a.createElement(s.a,{exact:!0,path:"/repitepalabra",component:x}),l.a.createElement(s.a,{exact:!0,path:"/vocales",component:C}),l.a.createElement(s.a,{exact:!0,path:"/calculadora",component:q}),l.a.createElement(s.a,{exact:!0,path:"/piedrapapeltijeras",component:O}),l.a.createElement(s.a,{exact:!0,path:"/volumencilindro",component:R}),l.a.createElement(s.a,{exact:!0,path:"/numerosecreto",component:F}))))};t(29);o.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.68d2fb12.chunk.js.map