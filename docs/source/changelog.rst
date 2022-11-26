Version History/Changelog
=================================

2.0
-----------

**Additions**

**Namespaces**

Grouping variables and functions so that variables with the same names over different
projects do not clash.

**User Types**

Players can define their own variable Types, including constructors, methods and fields.
This also supports the this keyword to select the current instance.

**Qualifiers**

To support strict variables and still support per-player variables, qualifiers were 
introduced. The two available qualifiers currently are: relative and final.

**Null**

To support the absence of a value (due to failed computation or other), null is supported
as a substitute for a variable on unambiguous functions, or as the value of a variable.

**Expressions**

To allow multiple operations on one line (and not separate lines as was previously the case
in MSC 1.0), full expression support was added to provide easier operations, function
calls, assignment and more.

**Functions**

Functions have been added to greatly favor reuse of scripts. Functions can take input
and can output values, and can be called from any context.

**Hastebin**

To support easier script writing, MSC 2.0 supports Hastebin. This allows the user to
write scripts in a notepad-like environment, and import the scripts to the server from
there. Exports are also supported.

**Var Script Operators**

Variable related script operators have been added: @var supports any assignment or
simply an expression. @define supports variable definitions within the local namespace.
@using supports switching namespaces for the rest of the script.

**Script Metadata**

In order for the user to trace back who the script originally belongs to, how many times
the script has been executed and more metadata, scripts now store metadata to keep
track of sometimes quintessential information while maintaining maps.

**Modifications**

**Variable Typing**

Variables are now typed. MSC 2.0 supports built-in types: String, Int, Long, Float,
Double, Player, Block, Entity. Variables are strictly typed, and a String can no longer
be implicitly used as an Int, as was possible before.

**Literals**

Literals have been modified to support the new built-in types, and automatically change
to the corresponding type. Previously everything was parsed as a String.

@chatscript

Chatscript now only takes a function call as argument, instead of the previously sup-
ported script lines.


