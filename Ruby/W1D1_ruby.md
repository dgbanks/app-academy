### Ruby

* ##### dynamic language
  * Ruby programs are not compiled--all class, module, method definitions are built by the code when its run
  * enables metaprogramming, more abstraction, less code, duck typing (coercion)
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
  * Every value is an object
  * Every object has a class and every class has a super class

* ##### multi-paradigm
  * supports object-oriented, procedural, and functional programming
  * **procedural programming**: privileges procedure invocations / method calls (outside of a class)
  * **functional programming**: privileges pure functions, whose return value is only determined by input, without side effects
    * **Blocks** provide Ruby with many functional programming features, such as **anonymous functions**, **lexical closures** (functions that capture variables within a specific context), and **higher-order functions** (functions that accept functions as arguments or return values)

### Public, Private, Protected Methods
  * when you have an instance of an object, you call its public methods, because they are the only methods that canbe called outside the scope of the object
  * Protected and Private methods have more to do with the objects internal implementation than with the outside world
  * Private methods can't be called with a receiver, even if that receiver is ```self```
  * Protected methods, though not accessible from outside the context of the object, are accessible from inside the context of another object of the same type (so, for example, you could compare protected attributes of two objects that are of the same type)

### ```attr_reader```, ```attr_writer```, ```attr_accessor```
  * ```attr_accessor``` automatically creates getter and setter methods for the named properties
  * ```attr_reader``` and ```attr_writer``` create only the getter or the setter method, respectively

### Procs, Lambdas

### ```include``` vs ```extend```
  * ```include``` mixes in module methods as **instance** methods of the target class
  * ```extend``` mixes in module methods as **class** methods of the target class

### Variable Types
  * class
  * instance
  * global
  * local
