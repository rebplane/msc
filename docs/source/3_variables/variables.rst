.. _variables:

Variables
================

Variables are the objects that can be adjusted to make a process behave differently. A
process without variables yields the same result every time. Variables have certain characteristics defined by their type. The type defines what a variable can do and restricts
what variable can passed to functions. Variables can be manually set and/or changed
through operators.

.. contents::

.. _variables_types:

Types
--------------------

Variables do not have a strict feature set. They are simply name tags for a value, to
which a new value can be attached. The Type is what determines in what format the
value is stored and what operations can be performed on the value.

Whenever a variable is defined, the Type is always the word immediately preceding the
variable’s name. For example, the variable *name* defined as:

.. code-block:: console
    
    @define String name

has the type *String* (see :ref:`Built-in Types <appendix_built_in_types>` for more information on the String type).
The type both represents how the variable can be instantiated and how it can be used.

.. _variables_builtin_types:

Built-in Types
---------------------

MSC 2 comes with a set of predefined types which can be used at any time from any
namespace. User defined types can build on top of these to further expand functionality,
or represent an entire different structure.

As of version 2.0, MSC contains:

=================== ===============================================================================
=================== ===============================================================================
String                  Plain text. Commands passed to @bypass, @command, @console and              

                        @player must be of this type.                                               
Int                     A (signed) integer. Represents whole positive and negative numbers.         

                        Can be used to define an amount among other things.                         

                        Can represent values from 2^{31} through 2^{31} − 1.                        
Long                    A (signed) integer. Represents more values than an Int can. Can             

                        represent values from −2^{63} through 2^{63} − 1. Generally not necessary   

                        until the Int does not suffice.                                             
Float                   A single-precision floating point number. Can represent a wide range of     

                        decimals (but sometimes suffers from being unable to represent a            

                        number). Can be used for a lot of things.                                   
Double                  A double-precision floating point number. Can represent a wider range of    

                        decimals than Float can (but still not all). For general purposes, Float is 

                        likely enough, but if it is not, Double can represent more precise state    

                        when needed, such as when doing precise maths                               
Boolean                 Can either be *true* or *false*. Used to keep track of conditions           
Player                  Represents the Minecraft Player. Contains a wide range of utility           

                        functions and access to player statistics and variables. Can be used to     

                        directly read and alter a Player state, to some extent.                     
Entity                  Represents a Minecraft Entity. Contains a wide range of utility functions   

                        to read and alter the Entity state, to some extent.                         
Block                   Represents a Minecraft Block. Contains information about a block and        

                        ways to alter it, to some extent.
Location                Represents a position in a world.
BlockLocation           Represents a position of a block in a world.
Position                Similar to Location, but has yaw and pitch.
Vector3                 A 3 dimensional vector of Doubles.
Vector2                 A 2 dimensional vector of Doubles.
BlockVector3            A 3 dimensional vector of Ints.
BlockVector2            A 2 dimensional vector of Ints.
Region                  Can either be used to represent existing WorldGuard regions

                        in the world, or you can create your own region.
=================== ===============================================================================      

For a more detailed list on what functions and variables each of these types expose, take
a look at the appendix: Built-in Types. :ref:`Built-in Types <appendix_built_in_types>`

.. _variables_literals:

Literals
---------------------

+---------+-----------------------------------------------------------------------------+
| String  | ”Content of the string” - text contained between two ” characters. If a     |
|         |                                                                             |
|         | String has to contain a ” character, use the escape character: \. ”This is  |
|         |                                                                             |
|         | in the string: \” ”                                                         |
+---------+-----------------------------------------------------------------------------+
| Int     | 1 - any integer                                                             | 
+---------+-----------------------------------------------------------------------------+
| Long    | 1L - an integer followed by L.                                              |
+---------+-----------------------------------------------------------------------------+
| Float   | 1.0 - any decimal.                                                          |
+---------+-----------------------------------------------------------------------------+
| Double  | 1.0D - any decimal followed by D.                                           |
+---------+-----------------------------------------------------------------------------+
| Boolean | true or false.                                                              |
+---------+-----------------------------------------------------------------------------+

Note that Block, Player and Entity have no literals. They always require constructors
to instantiate the state. User-defined types can be instantiated in the same way, taking
parameters as required.

.. _variables_qualifiers:

Qualifiers
---------------------

When defining a new type or namespace, sometimes it is useful to have variables that
are player relative, or a variable that has a constant value. Persistent variables can
be qualified by a qualifier keywords that determine their behaviour. Where the type
determines what can be done with the value of the variable, the qualifier determines
what properties the variable itself has. As of MSC 2.0 there are two qualifiers:

+---------+-----------------------------------------------------------------------------+
| final   | A constant variable. Once initialized cannot be changed. Useful for more    |
|         |                                                                             |
|         | clear scripts, and makes changing values more maintainable                  |
+---------+-----------------------------------------------------------------------------+
| Int     | A variable that is player-bound. This is MSC 2’s way of defining            | 
|         |                                                                             |
|         | per-player variables, rather than shared variables                          |
+---------+-----------------------------------------------------------------------------+

.. _variables_usage:

3.4 Usage
--------------------------

As described in the previous sections, variables consist of one or more qualifiers, a type
and a changeable value. Through commands, variables can be defined and operated
upon. The main commands are:

.. code-block:: console
    
    /variable define <namespace> [qualifier [...]] <Type> <name> [= expression]

.. code-block:: console
    
    /variable set <namespace> <name> = <expression>

In scripts this is can be written shorter by:

.. code-block:: console

    @define <Type> <name> [= expression]

and

.. code-block:: console

    @var [name =] <expression>

*namespace* is where you define which namespace is being altered.

*[qualifier [...]]* is where you define any amount of qualifiers. These are not present
in scripts because variables in scripts are not persistent.

*Type* is where you define the Type of the variable. The Type has to be an already
defined Type within the namespace. (If using an external type, use :: to indicate the namespace it comes from). Type names always start with an uppercase
character.

*name* is where you define the name of the variable. Choose a descriptive name
that makes clear what the variable is used for. Variable names may not begin with
an uppercase character.

*expression* is how you first initialize the variable. Note that when using a final
variable, this field is required. Otherwise, this can be left blank, to initialize
the variable to their default state. (See :ref:`Built-in Types <appendix_built_in_types>` for the default states of
each type). For user-defined variables this will be null. See :ref:`Expressions <expressions>` for more
information on how to build an expression.

.. _variables_null:

Null
--------------------------

Types that do not have a default state can sometimes be null. Null means multiple
things, taking the form of ’unrepresentable’, ’undefined’, and ’non-existent’. As became
apparent in the previous section a variable can be defined without expression, automatically taking on the default state. User-defined variables do not have a default state, and
therefore automatically take the value null.

Some functions are unable to return a meaningful result. For example the Player()
constructor can only return a Player if the player exists. If the Player is not online, it
cannot return a meaningful result and thus returns null.

The reader should be aware that this case can occur. Performing operations on and
with null variables will cause the script to fail with a NullPointerException. It is wise
to keep track of the variables that can become null and script defensively. The Script
cannot make assumptions to what behaviour is wanted when the value is undefined, and
therefore it should always be explicitly stated.
