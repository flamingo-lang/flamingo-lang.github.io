---
title: Intro 🛣️
sidebar_label: Intro 
---

**Flamingo is compiler and runtime for ALM[[1](#1)], a DSL for describing state
machines in an ultra-compact way, emphasizing simplicity, modularity, and
correctness.** 

Flamingo is built with web apps in mind and ~~compiles to efficient, portable
Javascript~~ solved by a WASM interpreter[[2](#2)].
Flamingo programs handle _state management_ - you can think of Flamingo as DSL for writing
Redux reducers. Hook up browser events to Flamingo's runtime, bind state changes
to the DOM as views with, e.g., React, and _voilà_! you have a web app!

The ALM language is designed for _commonsense reasoning about real-world
problems_. Using a few simple but powerful constructs from logic, ALM allows
us to express _pure business logic_, free from the incidental complexity of
algorithms. As a logic programming system, Flamingo trades performance for
expressiveness. Flamingo programs can be much slower than their imperative
counterparts; however, they are often orders of magnitude less overall code.
At the same time, ALM is carefully limited in its expressiveness compared to other
logic programming systems, always favoring simplicity and maintainability over
terseness and higher-orderedness.

Flamingo is also built for _correctness_. Its semantics as a state machine language
make it amenable to automatic verification: describe both your positive and negative
constraints in the same expressive language, and Flamingo will automatically verify
they hold on every possible sequence of inputs[[3](#3)]. It's like Alloy or TLA+, but easy.

Flamingo benefits from decades of optimization research in the fields of
Datalog and ASP. Combined with Flamingos' automatic verification, these
characteristics make Flamingo ideal for the rapid design and implementation of
complex, practical systems. 

In terms of language theory, ALM is a _logic programming language_, specifically
an extension of [Datalog](https://en.wikipedia.org/wiki/Datalog) that adds an explicit
notion of action and change, negative constraints, and a powerful, object-oriented module
system[[4](#4)].
  
## A Little Example

Here's a small example that models menus that can open and close.
```alm
module menu
sorts
    menu :: universe
        attributes
            title : string
            text : string

    menu_action :: action
        target : menu
    open_menu :: menu_action
    close_menu :: menu_action
fluents
    basic
        open : menu -> booleans
axioms
    occurs(A) causes open(Menu) if
        instance(A, open_menu),
        target(A) = Menu.

    occurs(A) causes -open(Menu) if
        instance(A, close_menu),
        target(A) = Menu.
```

Obviously, ALM's syntax is quite different from imperative
or functional languages; however, it's ultimately much simpler - even
this small example covers the majority of it. We'll cover the syntax
in depth in the coming sections. But first, let's discuss the motivation
behind the language: the tar pit of modern software development.

----------------
[<a name="1">1</a>]: ALM is the "Action Language with Modules", first described in
[this paper](https://arxiv.org/abs/1505.05022) by Daniela Inclezan and Michael Gelfond.
It is the successor to AL, which comes from a long line of research on reasoning about
actions and change beginning with John McCarthy's
[situation calculus](https://en.wikipedia.org/wiki/Situation_calculus) in 1975.

[<a name="2">2</a>]: The Flamingo-to-JS is a work in progress. For now, Flamingo is translated
into ASP and solved by the wonderful [Clingo solver](https://github.com/potassco/clingo).

[<a name="3">3</a>]: This is currently a bit hand-wavy in that we only check a fixed number of
objects up to a fixed horizon of actions. In the short term, this will be configurable. In the 
long term, a major focus of my grad research is figuring out a way to verify infinite domains
via induction and SMT. If this is possible, Flamingo will be the easiest proof language in existence
by a long shot.

[<a name="4">4</a>]: Flamingo is a mostly-faithful Javascript implementation of the
[Modular Action Language ALM](https://arxiv.org/abs/1505.05022), a specification language
with a rich history beginning with John McCarthy's
[situation calculus](https://en.wikipedia.org/wiki/Situation_calculus).
