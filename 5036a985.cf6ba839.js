(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),i=(n(0),n(78)),o={title:"Intro \ud83d\udee3\ufe0f",sidebar_label:"Intro"},s={unversionedId:"start_here/intro",id:"start_here/intro",isDocsHomePage:!0,title:"Intro \ud83d\udee3\ufe0f",description:"**Flamingo is compiler and runtime for ALM[1], a DSL for describing state",source:"@site/docs\\start_here\\intro.md",permalink:"/docs/",editUrl:"https://github.com/flamingo-lang/flamingo-docs/edit/master/docs/start_here/intro.md",sidebar_label:"Intro",sidebar:"sidebar",next:{title:"Installing Flamingo \ud83d\udce6",permalink:"/docs/start_here/install"}},c=[{value:"A Little Example",id:"a-little-example",children:[]}],l={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Flamingo is compiler and runtime for ALM[",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"#1"}),"1"),"], a DSL for describing state\nmachines in an ultra-compact way, emphasizing simplicity, modularity, and\ncorrectness.")," "),Object(i.b)("p",null,"Flamingo is built with web apps in mind and compiles to ",Object(i.b)("del",{parentName:"p"},"efficient, portable"),"\nJavascript[",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#2"}),"2"),"].\nFlamingo programs handle ",Object(i.b)("em",{parentName:"p"},"state management")," - you can think of Flamingo as DSL for writing\nRedux reducers. Hook up browser events to Flamingo's runtime, bind state changes\nto the DOM as views with, e.g., React, and ",Object(i.b)("em",{parentName:"p"},"voil\xe0"),"! you have a web app!"),Object(i.b)("p",null,"The ALM language is designed for ",Object(i.b)("em",{parentName:"p"},"commonsense reasoning about real-world\nproblems"),". Using a few simple but powerful constructs from logic, ALM allows\nus to express ",Object(i.b)("em",{parentName:"p"},"pure business logic"),", free from the incidental complexity of\nalgorithms. As a logic programming system, Flamingo trades performance for\nexpressiveness. Flamingo programs can be much slower than their imperative\ncounterparts; however, they are often orders of magnitude less overall code.\nAt the same time, ALM is carefully limited in its expressiveness compared to other\nlogic programming systems, always favoring simplicity and maintainability over\nterseness and higher-orderedness."),Object(i.b)("p",null,"Flamingo is also built for ",Object(i.b)("em",{parentName:"p"},"correctness"),". Its semantics as a state machine language\nmake it amenable to automatic verification: describe both your positive and negative\nconstraints in the same expressive language, and Flamingo will automatically verify\nthey hold on every possible sequence of inputs[",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#3"}),"3"),"]. It's like Alloy or TLA+, but easy."),Object(i.b)("p",null,"Flamingo benefits from decades of optimization research in the fields of\nDatalog and ASP. Combined with Flamingos' automatic verification, these\ncharacteristics make Flamingo ideal for the rapid design and implementation of\ncomplex, practical systems. "),Object(i.b)("p",null,"In terms of language theory, ALM is a ",Object(i.b)("em",{parentName:"p"},"logic programming language"),", specifically\nan extension of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Datalog"}),"Datalog")," that adds an explicit\nnotion of action and change, negative constraints, and a powerful, object-oriented module\nsystem[",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#4"}),"4"),"]."),Object(i.b)("h2",{id:"a-little-example"},"A Little Example"),Object(i.b)("p",null,"Here's a small example that models menus that can open and close."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-alm"}),"module menu\nsorts\n    menu :: universe\n        attributes\n            title : string\n            text : string\nactions\n    menu_action :: action\n        target : menu\n    open_menu :: menu_action\n    close_menu :: menu_action\nfluents\n    basic\n        open : menu -> booleans\naxioms\n    occurs(A) causes open(Menu) if\n        instance(A, open_menu),\n        target(A) = Menu.\n\n    occurs(A) causes open(Menu) if\n        instance(A, open_menu),\n        target(A) = Menu.\n")),Object(i.b)("p",null,"Obviously, ALM's syntax is quite different from imperative\nor functional languages; however, it's ultimately much simpler - even\nthis small example covers the majority of it. We'll cover the syntax\nin depth in the coming sections. But first, let's discuss the motivation\nbehind the language: the tar pit of modern software development."),Object(i.b)("hr",null),Object(i.b)("p",null,"[",Object(i.b)("a",{name:"1"},"1"),"]",': ALM is the "Action Language with Modules", first described in\n',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://arxiv.org/abs/1505.05022"}),"this paper")," by Daniela Inclezan and Michael Gelfond.\nIt is the successor to AL, which comes from a long line of research on reasoning about\nactions and change beginning with John McCarthy's\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Situation_calculus"}),"situation calculus")," in 1975."),Object(i.b)("p",null,"[",Object(i.b)("a",{name:"2"},"2"),"]",": The Flamingo-to-JS is a work in progress. For now, Flamingo is translated\ninto Prolog and interpreted by the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tau-prolog.org"}),"Tau Prolog Interpreter"),"."),Object(i.b)("p",null,"[",Object(i.b)("a",{name:"3"},"3"),"]",": This is currently a bit hand-wavy in that we only check a fixed number of\nobjects up to a fixed horizon of actions. In the short term, this will be configurable. In the\nlong term, a major focus of my grad research is figuring out a way to verify infinite domains\nvia induction and SMT. If this is possible, Flamingo will be the easiest proof language in existence\nby a long shot."),Object(i.b)("p",null,"[",Object(i.b)("a",{name:"4"},"4"),"]",": Flamingo is a mostly-faithful Javascript implementation of the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://arxiv.org/abs/1505.05022"}),"Modular Action Language ALM"),", a specification language\nwith a rich history beginning with John McCarthy's\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Situation_calculus"}),"situation calculus"),"."))}m.isMDXComponent=!0},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),b=a,g=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(g,s(s({ref:t},l),{},{components:n})):r.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);