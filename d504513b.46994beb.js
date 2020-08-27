(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(78)),o={title:"Step 4: Axioms \ud83e\uddfe",sidebar_label:"Step 4: Axioms"},s={unversionedId:"basics/axioms",id:"basics/axioms",isDocsHomePage:!1,title:"Step 4: Axioms \ud83e\uddfe",description:"In imperative programming, we bring our program to life with procedures",source:"@site/docs\\basics\\axioms.md",permalink:"/docs/basics/axioms",editUrl:"https://github.com/flamingo-lang/flamingo-docs/edit/master/docs/basics/axioms.md",sidebar_label:"Step 4: Axioms",sidebar:"sidebar",previous:{title:"Step 3: Actions \ud83d\udca3",permalink:"/docs/basics/actions"},next:{title:"Verifying Your Program \u2714\ufe0f",permalink:"/docs/basics/verifying_your_program"}},l=[],c={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In imperative programming, we bring our program to life with ",Object(r.b)("em",{parentName:"p"},"procedures"),"\nthat implement some particular ",Object(r.b)("em",{parentName:"p"},"algorithm"),". In contrast, ALM is completely\n",Object(r.b)("em",{parentName:"p"},"declarative")," - we state ",Object(r.b)("em",{parentName:"p"},"what must always be true"),", and the Flamingo runtime\nmakes it so (or the Flamingo compiler explains why it can't). Axioms are the\nrules for what must always be true."),Object(r.b)("p",null,"There are four kinds of axioms:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Facts, which hold true unconditionally. The syntax is a function expression with a period, e.g.:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"f(x) = y.\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'State constraints, which say, e.g., "if f(X) is true in given state, then g(X) is also true\nin that same state". These have the syntax[',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#1"}),"1"),"]:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"```\ng(X) if f(X).\n```\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Causal laws, which say, e.g., "if f(X) is true in a given state, and Y occurs, then g(X) is\ntrue in the next state". These have the syntax:'),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"```\noccurs(Y) causes g(X) if f(X).\n```\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Executability conditions, which say "if a given condition is true in a given state,\nthen it is impossible for a given action to occur in that state."'),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"```\nimpossible occurs(A) if [some condition].\n```\n")),Object(r.b)("p",{parentName:"li"},"(We'll cover executability conditions more in the next section)."))),Object(r.b)("p",null,"This syntax might be strange at first, but will make sense with a few more examples.\nLet's write  out the axioms of our fruit and basket system (in plain English first):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Golden Delicious and Granny Smith apples are good for baking."),Object(r.b)("li",{parentName:"ul"},"The basket is full if there are three distinct fruits in it."),Object(r.b)("li",{parentName:"ul"},"You can bake a pie if you have two apples that are good for baking."),Object(r.b)("li",{parentName:"ul"},"When you put a fruit in the basket, it becomes in the basket.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udca1 Always write your axioms out in plain English first. You don't really know\nwhat you're writing until you've done so, and converting it to ALM's syntax\nafterwards is usually trivial. Always write it out! ",Object(r.b)("em",{parentName:"p"},"Always!"))),Object(r.b)("p",null,"The first axiom represents two facts about varieties of apples. The\nsyntax is pretty straight forward:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"good_for_baking(golden_delicious).\ngood_for_baking(granny_smith).\n")),Object(r.b)("p",null,"The next axiom is a state constraint. In ALM's syntax:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-alm"}),"// The basket is full if there are three distinct fruits in it. \nbasket_is_full = true if\n    in_basket(X) = true,\n    in_basket(Y) = true,\n    in_basket(Z) = true,\n    X != Z,\n    X != Y,\n    Y != Z.\n")),Object(r.b)("p",null,"A few things of note:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Identifiers that begin with an uppercase letter stand for ",Object(r.b)("em",{parentName:"li"},"variables"),". These will try to\nmatch ",Object(r.b)("em",{parentName:"li"},"any"),' value that fits in that "position" - e.g, in this example, ',Object(r.b)("inlineCode",{parentName:"li"},"X"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Y"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"Z")," all\nstand for ",Object(r.b)("inlineCode",{parentName:"li"},"fruits")," since, in our function declaration for ",Object(r.b)("inlineCode",{parentName:"li"},"in_basket"),", the first parameter is\n",Object(r.b)("inlineCode",{parentName:"li"},"fruits"),"."),Object(r.b)("li",{parentName:"ul"},"Different variables do not automatically represent different values. Thus, we must explicitly\ncompare the fruits ",Object(r.b)("inlineCode",{parentName:"li"},"X"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Y"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"Z")," with the ",Object(r.b)("inlineCode",{parentName:"li"},"!=")," operator to ensure they are truly distinct."),Object(r.b)("li",{parentName:"ul"},"Boolean functions are so common in ALM that they have built-in shorthands. Any function\nlike ",Object(r.b)("inlineCode",{parentName:"li"},"f(x) = true")," can be written as just ",Object(r.b)("inlineCode",{parentName:"li"},"f(x)"),", and any expression ",Object(r.b)("inlineCode",{parentName:"li"},"f(x) = false")," as ",Object(r.b)("inlineCode",{parentName:"li"},"-f(x)"),".\nSo the idiomatic syntax for the first axiom is as follows [",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#2"}),"2"),"]:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-alm"}),"// The basket is full if there are three distinct fruits in it. \nbasket_is_full if\n    in_basket(X),\n    in_basket(Y),\n    in_basket(Z),\n    X != Z,\n    X != Y,\n    Y != Z.\n")),Object(r.b)("p",null,"Our third axiom, also a state constraint, is quite similar:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-alm"}),"// You can bake a pie if you have two apples that are good for baking.\ncan_bake_pie if\n    in_basket(X),\n    in_basket(Y),\n    good_for_baking(X),\n    good_for_baking(Y),\n    X != Y.\n")),Object(r.b)("p",null,"The last axiom, a causal law, is a bit different:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// When you put a fruit in the basket, it becomes in the basket.\noccurs(A) causes in_basket(Fruit) if\n    instance(A, put_fruit_in_basket),\n    selected_fruit(A) = Fruit.\n")),Object(r.b)("p",null,"This ALM axiom would read something like this in English:"),Object(r.b)("p",null,'"When action ',Object(r.b)("inlineCode",{parentName:"p"},"A")," occurs, it causes ",Object(r.b)("inlineCode",{parentName:"p"},"Fruit")," to be ",Object(r.b)("inlineCode",{parentName:"p"},"in_basket")," if\n",Object(r.b)("inlineCode",{parentName:"p"},"A")," is an instance of the ",Object(r.b)("inlineCode",{parentName:"p"},"put_fruit_in_basket")," action AND\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"selected_fruit")," of ",Object(r.b)("inlineCode",{parentName:"p"},"A")," is ",Object(r.b)("inlineCode",{parentName:"p"},"Fruit"),'."'),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"instance")," function is a built-in static function that returns\ntrue if the first argument is an instance of the sort given in\nthe second argument (or a transitive subsort).\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"instance")," function is ",Object(r.b)("em",{parentName:"p"},"extremely")," useful - you can use it do all kinds\nof cool object-oriented tricks for modular goodness. That said, we'll\nleave the fancier stuff for later examples."),Object(r.b)("p",null,"That's all the axioms of our fruit and basket system. In fact, that's\nthe whole system! Let's the see the whole program all together:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-alm"}),"module fruits\nsorts\n    fruits :: universe\n    varieties :: { macintosh, fuji, golden_delicious, granny_smith }\n    apples :: universe\n        attributes\n            variety : varieties\n    oranges :: fruits\nactions\n    put_fruit_in_basket :: action\n        attributes\n            selected_fruit : fruits\nstatics\n    good_for_baking : varieties -> booleans\nfluents\n    basic\n        in_basket : fruit -> booleans\n        basket_is_full : booleans\n    defined\n        can_bake_pie : booleans\naxioms\n    good_for_baking(golden_delicious).\n    good_for_baking(granny_smith).\n\n    // The basket is full if there are three distinct fruits in it. \n    basket_is_full if\n        in_basket(X),\n        in_basket(Y),\n        in_basket(Z),\n        X != Z,\n        X != Y,\n        Y != Z.\n    \n    // You can bake a pie if you have two apples that are good for baking.\n    can_bake_pie if\n        in_basket(X),\n        in_basket(Y),\n        good_for_baking(X),\n        good_for_baking(Y),\n        X != Y.   \n    \n    // When you put a fruit in the basket, it becomes in the basket.\n    occurs(A) causes in_basket(Fruit) if\n        instance(A, put_fruit_in_basket),\n        selected_fruit(A) = Fruit.\n")),Object(r.b)("p",null,"The syntax of logic programming takes practice. But note something important:\neach axiom has a very straightforward reading in English that is ",Object(r.b)("em",{parentName:"p"},"very similar"),"\nto its original formulation in English. This is what Flamingo is all about: reducing\nthe gap between informal specification (in English) and the formal specification (in\na programming language). This leads to more simpler, more compact, and easier-to-maintain\ncode."),Object(r.b)("hr",null),Object(r.b)("p",null,"[",Object(r.b)("a",{name:"1"},"1"),"]",": While it's sometimes it's more natural in English to say \"if ","[condition]",",\nthen ","[conclusion]",'", Flamingo follows decades of logic programming tradition\nand puts the conclusion first.'),Object(r.b)("p",null,"[",Object(r.b)("a",{name:"2"},"2"),"]",': This method of "counting" up to three is pretty tedious and doesn\'t scale -\ncounting to 50 would require 50 variables and 1225 comparisons! This problem\nis solved by a construct called ',Object(r.b)("em",{parentName:"p"},"aggregates"),", which allow functions like min, max,\nsum, and count. These haven't been added to Flamingo\nyet, but are high on the priority list!"))}b.isMDXComponent=!0},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?i.a.createElement(f,s(s({ref:t},c),{},{components:n})):i.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);