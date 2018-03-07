### Ruby

* ##### dynamic language
  * compiles at runtime; executes at compile-time
  * enables metaprogramming, more abstraction, and less code
  * static languages use a compiler that translates the high level instructions into object code and passes it to a linker that produces machine code

* ##### reflective
  * the program can manipulate its own structure and behavior as data (makes much of metaprogramming possible)
    * **metaprogramming**:
  * different from **type introspection**

* ##### object-oriented
  * privileges objects over actions, data over functions and logic
  * a program is a group of objects that receive messages telling them use their own discrete operations
  * **Object**: a self-contained entity that consists of both data and procedures to manipulate it
    * instances of classes, which usually determine type

* ##### multi-paradigm
  * supports object-oriented, procedural, and functional programming
  * **procedural programming**: privileges procedure invocations / method calls (outside of a class)
  * **functional programming**: privileges pure functions, whose return value is only determined by input, without side effects
    * **Blocks** provide Ruby with many functional programming features, such as **anonymous functions**, **lexical closures** (functions that capture variables within a specific context), and **higher-order functions** (functions that accept functions as arguments or return values)
