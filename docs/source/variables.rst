.. _variables:

Variables
=========

Variables are named containers that store values. A script without variables produces the same result every time it runs. Variables allow scripts to track state, respond to conditions, and produce different outcomes based on data.

Every variable has a name that identifies it within its namespace. Variables also have a type that determines what kind of value they can hold and which operations can be performed on them.

.. contents:: Contents
   :local:

Names and Types
---------------

The type of a variable determines how its value is stored and what can be done with it. When defining a variable, the type always appears immediately before the variable name:

.. code-block:: msc

    @define String name
    @define Int count
    @define Boolean found

In these examples, ``name`` has type ``String``, ``count`` has type ``Int``, and ``found`` has type ``Boolean``. Note that every variable name can only contain letters, digits, and underscores, and must start with a lowercase letter.

MSC provides a set of built-in types that can be used from any namespace. The primitive types are:

- **String**: Plain text written in double quotes like ``"Hello"``.
- **Int**: A whole number from :math:`-2^{31}` to :math:`2^{31}-1` (about 2 billion) like ``42`` or ``-7``.
- **Long**: A larger integer from :math:`-2^{63}` to :math:`2^{63}-1` (about 9 quintillion), with an L suffix like ``100L``.
- **Float**: A decimal number like ``3.14`` or ``-0.5``.
- **Double**: A more precise decimal, written with a D suffix like ``3.14159265358979D``.
- **Boolean**: Either ``true`` or ``false``.

MSC also provides types for interacting with the Minecraft world:

- **Player**: Represents a Minecraft player.
- **Entity**: Represents any Minecraft entity (mobs, armor stands, etc.).
- **Block**: Represents a block in the world.
- **Location**: A position in a world (with decimal x, y, z coordinates and a world).
- **BlockLocation**: A block position in a world (with integer x, y, z coordinates and a world).
- **Position**: A Location with yaw and pitch (direction).
- **Vector2** and **Vector3**: A 2D and 3D vector of Doubles.
- **BlockVector2** and **BlockVector3**: A 2D and 3D vector of Ints.
- **Region**: Represents a WorldGuard region or a custom region.

For a complete reference of all methods and constructors for each type, see :ref:`Built-in Types <appendix_built_in_types>`.

Literals
--------

A literal is a value written directly in code. Each primitive type has its own literal syntax:

.. code-block:: msc

    @define String name = "Steve"
    @define Int count = 42
    @define Long bigNumber = 9999999999999L
    @define Float ratio = 0.75
    @define Double precise = 3.14159265358979D
    @define Boolean active = true

Strings are enclosed in double quotes. To include a quote character inside a string, escape it with a backslash: ``"He said \"hello\""``.

Ints and Floats are written as plain numbers. Longs require an ``L`` suffix, and Doubles require a ``D`` suffix. Without these suffixes, ``42`` is an Int and ``3.14`` is a Float.

Complex types like Player, Entity, and Block do not have literals. They must be created using constructors (see :ref:`Types <types>` for more details):

.. code-block:: msc

    @define Player p = Player("Rickyboy320")
    @define Block b = Block(100, 64, -200, "Theta")

Defining Variables
------------------

There are two ways to define variables: locally within a script using ``@define``, or persistently within a namespace using the ``/variable define`` command.

Local variables are created with the ``@define`` operator (see :ref:`Scripts <scripts>` for more on script operators):

.. code-block:: msc

    @define Int count = 0
    @define String message = "Hello"

These exist only while the script is running. When the script finishes, they are deleted. The next time the script runs, it starts fresh with no memory of previous values. Note that the local namespace sometimes comes pre-loaded with variables like ``player``, ``block``, and ``entity`` that represent the context in which the script is running.

Persistent variables are created with the ``/variable define`` command and stored in a namespace:

.. code-block:: console

    /variable define <namespace> [qualifiers] <Type> <name> [= expression]

For example:

.. code-block:: console

    /variable define mymap Int score = 0
    /variable define mymap String secretWord = "banana"
    /variable define mymap Boolean doorOpen = false

These variables persist across script executions and server restarts. They can be accessed from any script that uses the namespace.

If no initial value is provided, variables are initialized to their default state: ``0`` for numeric types, ``""`` for String, ``false`` for Boolean, and ``null`` for complex types.

Modifying Variables
-------------------

Use the ``@var`` operator to change a variable's value:

.. code-block:: msc

    @define Int count = 0
    @var count = 20
    @var count = count + 1
    @var count = count * 2
    @player The count is {{count}}

.. code-block:: output

    The count is 42

The ``@var`` operator can modify both local variables and namespace variables (when using ``@using`` or the ``::`` specifier):

.. code-block:: msc

    @using mymap
    @var score = score + 10
    @var othermap::counter = othermap::counter + 1

When modifying a variable using its own value, you can use the shorthand ``+=``, ``-=``, ``*=`` etc.:

.. code-block:: msc

    @define Int count = 5
    @var count += 3
    @player The count is {{count}}, since &acount += 3&r is the same as &acount = count + 3&r.

.. code-block:: output

    The count is 8, since &acount += 3&r is the same as &acount = count + 3&r.

Qualifiers
----------

Persistent variables (those defined with ``/variable define``) can have two qualifiers that modify their behavior. Qualifiers are placed between the namespace and the type.

The ``final`` qualifier creates a constant that cannot be changed after initialization:

.. code-block:: console

    /variable define mymap final Double pi = 3.14159D

Attempting to modify a final variable in a script will cause an error. This is useful for values that should never change, and makes scripts more maintainable since the value is defined in one place.

.. code-block:: msc

    @var mymap::pi = 3.0D

.. code-block:: output

    &7[&eScripts&7] &eVariable 'final Double pi' is declared final and can
    &etherefore not be assigned a new value.

The ``relative`` qualifier creates a per-player variable. Instead of all players sharing one value, each player gets their own independent copy:

.. code-block:: console

    /variable define mymap relative Int checkpoint = 0
    /variable define mymap relative Boolean completedTutorial = false

Without ``relative``, if one player sets ``score`` to 100, all players see 100. With ``relative``, each player has their own ``score`` that starts at the default value and changes independently.

Relative variables with a default value can be reset to that value using ``/variable reset``.

Null
----

Some variables can have the value ``null``, which represents the absence of a value. This occurs in two situations:

1. A complex type (like Player, Entity, or a user-defined type) is defined with no initial value.

2. A function or constructor fails to return a meaningful result. For example, ``Player("nonexistent")`` returns null if no player by that name is online.

Performing operations on a null value often causes the script to fail with a NullPointerException. To avoid this, check for null before using a variable that might be null:

.. code-block:: msc

    @define Player target = Player("someone")
    @if target != null
        @player Found the player!
        @bypass /give {{target}} diamond 1
    @else
        @player That player is not online.
    @fi

Be careful when dealing with constructors that might fail, such as ``Player()`` for offline players or ``Block()`` for unloaded chunks. These might return null, so always check before using the result. See :ref:`Built-in Types <appendix_built_in_types>` for which constructors can return null.

Accessing Other Players' Relative Variables
-------------------------------------------

.. admonition:: Beginner Note
    :class: beginner-note

    This section may contain some confusing syntax. Unless you plan to change relative variables for players other than the one triggering the script, you can safely skip this section.

Relative variables store a separate value for each player. Normally you access the current player's value, but you can access another player's value using indexing syntax with a Player object:

.. code-block:: console

    /variable define mymap relative Int score = 0

.. code-block:: msc

    @using mymap
    @player Your score: {{score}}
    @player Chillers's score: {{score[Player("Chillers")]}}

If Chillers has a score of 50 and you have a score of 30:

.. code-block:: output

    Your score: 30
    Chillers's score: 50

You can also write to another player's relative variable:

.. code-block:: msc

    @using mymap
    @var score[Player("Chillers")] = 100
    @player Chillers's new score: {{score[Player("Chillers")]}}

.. code-block:: output

    Chillers's new score: 100

Looking up a player by name fails if they're offline. For reliable lookups, use UUIDs instead:

.. code-block:: msc

    @player {{score[Player("63664a36-a4c4-4541-a337-dd5639600407")]}}

If a player has no value set for a relative variable, the default value is returned.

Command Reference
-----------------

.. list-table::
    :widths: 40 60
    :header-rows: 1

    * - Command
      - Description
    * - ``/variable define <namespace> [qualifiers] <Type> <name> [= expr]``
      - Creates a new variable in a namespace.
    * - ``/variable remove <namespace> <variable>``
      - Deletes a variable from a namespace.
    * - ``/variable info <namespace> <variable>``
      - Shows information about a variable.
    * - ``/variable set <namespace> <variable> = <expression>``
      - Sets a variable's value (bypasses ``final``).
    * - ``/variable set <player> <namespace> <variable> = <expression>``
      - Sets a relative variable for a specific player.
    * - ``/variable reset <namespace> <variable>``
      - Resets a relative variable to its default value for everyone.

Note that these commands can only be run by admins on the main server. You will have to use the test server to run these commands yourself, or ask an admin to set up variables for you on the main server.
