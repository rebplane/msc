Anatomy of Scripts
-------------------------

.. contents::

.. _scripts_script_types:

Script Types
----------------------------

As mentioned before, scripts are triggered, while functions are explicitly called. Scripts
have to be bound to a block, entity, ground, or area in order to function. A script can
be triggered by walking over a block, interacting with an entity, entering an area, or
interacting with a block.

Each of these triggers come with a type.

**interact**

The interact script type triggers when the player interacts with a block (stone, button,
or anything else). There is no vanilla counterpart to this, except triggering a button or
causing a block update.

The interact script type is often used for passwords, submit buttons, NPC (wool-type)
dialogue, and much more.

**walk**

The walk script type triggers when the player walks over the block containing the script.
If the script was bound to a block that is now removed, the script still triggers when the
player is in the space just above the block.

The walk script type is often used for traps, story elements, resets, and much more.

**ground**

The ground script type triggers only when the player walks over the block containing
the script. It only triggers once the player is **on** the block, and not while jumping over
it, or when the block is air.

The ground script type can be used for crumbling pathways and other effects that require
the player to stand on the block.


**entity**

The entity script type triggers when a player interacts with an entity. The script gets
removed once the entity dies or despawns. When a script is applied to an entity, the
server tries its best to keep the entity from despawning, but sometimes the inevitable
occurs. Therefore, be prepared to respawn the entity with all scripts in place (by for
example creating a function that correctly restores the entity may it be missing, and
calling it whenever the entity is needed).

The entity script type is often used for dialogue.

**area**

The area script type is a new script type in MSC 2.0, triggering a script once when a
player enters the set area.

**function**

To create content in a function, the function type is used. A function is always explicitly
called from a script or other function. When adding script lines to a function, the
function has to be defined using the function command. See :ref:`Function Commands <appendix_commands_function>` for
details on defining a function

.. _scripts_lines:

Lines
-----------------------

Every script consists of script lines, which are the actual content of the script. Each line
is prefixed with the :ref:`Script Operator <script_operators>`, described in Script Operators. The Script Operator
takes parameters that make up the rest of the script line.

A script is executed from top to bottom, waiting, delaying and executing commands as
necessary. A script may not execute fully when a *@return* operator is used. @return
cancels the script upon being run, halting further execution. Any resets should therefore
always be done before the script terminates.

Once a script starts, a local namespace is created. In this namespace temporary variables
can be declared using *@define*. Since the script executes from top to bottom, the script
cannot use a variable before it is defined. The local namespace of the script always
overrides the global namespace. Even if a used namespace contains a variable of the
same name as the local namespace, the variable in the local namespace will always be
used, unless a namespace specifier is used (::).

Once the script ends (due to a @return, expired @prompt or the end of the script), the
local namespace is deleted, including any variables stored in it.

.. _scripts_parameters:

Parameters
--------------------

Alongside default types and variables, a script can also contain parameters. Script
Parameters are set by the ’system’. Parameters can be accessed much like any other
variable.

A script can have the following basic parameters (situationally, use /s v *type* to see which
ones are present):

**player**

A Player type. Represents the player executing the script. Is not present within functions.

**block**

A Block type. Represents the block the script is bound to (if any). Is not present within
functions, entity scripts or area scripts.

**entity**

An Entity type. Represents the entity the script is bound to (if any). Is only present in
entity scripts.

