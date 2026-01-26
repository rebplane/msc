.. _functions:

Functions
=========

Functions are reusable pieces of code that can be called from scripts or other functions. They solve three common problems in scripting:

1. **Repetition**: When the same sequence of operations appears in multiple scripts, a function lets you write it once and call it from anywhere.

2. **Parameterization**: Functions can take parameters, allowing the same code to operate on different values. Instead of writing separate scripts for teleporting to different locations, you can write one function that takes the destination as a parameter.

3. **Computation**: Functions can return values, allowing you to encapsulate calculations or lookups and use the result in expressions.

Functions are never triggered automatically by the server. Unlike interact or walk scripts, functions only run when explicitly called from another script, function, or chatscript.

.. contents:: Contents
   :local:

Defining Functions
------------------

Functions are defined with a name, an optional return type, and an optional list of parameters. The general form is:

.. code-block:: console

    /function define <namespace> [ReturnType] <name>([<Type1> <param1>], [<Type2> <param2>], ...)

For example, to define a function that takes two integers and returns their sum:

.. code-block:: console

    /function define mymap Int add(Int a, Int b)

If the function does not return a value, omit the return type:

.. code-block:: console

    /function define mymap greet(String name)

If the function takes no parameters, use empty parentheses:

.. code-block:: console

    /function define mymap Int getScore()
    /function define mymap resetAll()

After defining a function, you need to add its body using the script command. This works similarly to creating other script types, using either:

.. code-block:: console

    /script create function mymap add() @return a + b
    /script import function mymap add() https://paste.minr.org/petojeniwe

Parameters
----------

Parameters are values passed into a function when it is called. They act as local variables within the function, initialized to the values provided by the caller.

Each parameter has a type and a name. When calling the function, you must provide values that match the parameter types:

.. code-block:: msc

    @define Int result = mymap::add(5, 3)
    @player {{result}}

.. code-block:: output

    8

Pass-by-Sharing
^^^^^^^^^^^^^^^

.. admonition:: Beginner Note
   :class: beginner-note

   You might encounter this if you write a function that takes a list or other object and you expect the function to modify it. If you're just passing numbers or strings and using return values, feel free to skip ahead.

Parameters use *pass-by-sharing* (sometimes called *pass-by-object-reference*). This means the function receives a reference to the same object, not a copy. The distinction matters for understanding what changes are visible to the caller.

Reassignment does not affect the caller's variable. If you assign a new value to a parameter, only the local binding changes:

.. code-block:: console

    /function define mymap modify(Int[] x)

.. code-block:: msc

    @var x = [10, 20, 30]
    @player Inside function: {{x}}

Calling this function:

.. code-block:: msc

    @define Int[] value = [1, 2, 3]
    @var mymap::modify(value)
    @player After function: {{value}}

.. code-block:: output

    Inside function: [100, 200, 300]
    After function: [1, 2, 3]

The original ``value`` remains unchanged because reassigning ``x`` inside the function only changed the local binding, not the caller's variable.

Mutation *does* affect the original object. If you call methods that modify an object's state, the caller sees those changes. If the above function instead used:

.. code-block:: msc

    @var x.append(4)
    @player Inside function: {{x}}

Calling this function:

.. code-block:: msc

    @define Int[] value = [1, 2, 3]
    @var mymap::modify(value)
    @player After function: {{value}}

.. code-block:: output

    Inside function: [1, 2, 3, 4]
    After function: [1, 2, 3, 4]

The original ``value`` now includes the appended 4, because the function mutated the list object that both ``x`` and ``value`` reference, rather than just reassigning ``x`` to point to a new list.

This distinction is important when working with objects like Player, Entity, Block, and lists. Reassigning a parameter does nothing to the caller's variable, but calling mutating methods affects the actual object. If you only need to read values or return new ones, this behavior is usually not a concern.

Return Types
------------

Functions can return a value using the ``@return`` operator. The return type is specified in the function definition:

.. code-block:: console

    /function define mymap Double average(Double a, Double b)

.. code-block:: msc

    @return (a + b) / 2

The returned value can be used in expressions:

.. code-block:: msc

    @player The average is {{mymap::average(10.0D, 20.0D)}}

.. code-block:: output

    The average is 15.0

When a function has a return type, every ``@return`` statement must provide a value of that type. It is good practice to ensure all code paths end with an explicit ``@return``, even if returning null:

.. code-block:: msc

    @if someCondition
        @return "found"
    @fi
    @return null

If a function reaches the end without hitting a ``@return``, it implicitly returns null.

When a function should only perform actions without returning a value, omit the return type from the definition. Internally, such functions have the type ``Void``. A Void function cannot be used in expressions (except as a standalone statement), and its ``@return`` operator should not include a value:

.. code-block:: console

    /function define mymap announceScore(Player p)

.. code-block:: msc

    @player {{p.getName()}}'s score is {{mymap::score}}
    @return

The ``@return`` with no value exits the function early. You can also omit it entirely if the function should run to the end.

Calling Functions
-----------------

Functions are called by name, with arguments in parentheses. If the function is in a different namespace than the current script, use the ``::`` specifier:

.. code-block:: msc

    @var mymap::greet("Alice")
    @define Int sum = mymap::add(10, 20)

If you have set the namespace with ``@using``, you can call functions directly:

.. code-block:: msc

    @using mymap
    @var greet("Alice")
    @define Int sum = add(10, 20)

Functions that return a value can be used anywhere an expression is expected:

.. code-block:: msc

    @player {{mymap::add(5, 3) * 2}}
    @if mymap::getScore() > 100
        @player High score!
    @fi

.. code-block:: output

    16

Functions that return Void must be called as standalone statements using ``@var``:

.. code-block:: msc

    @var mymap::resetAll()

Attempting to use a Void function in an expression will cause an error.

Methods
-------

Methods are functions that belong to a type. They are called using dot notation on a value of that type:

.. code-block:: msc

    @player {{"hello".toUpperCase()}}
    @player {{player.getName()}}
    @var player.closeInventory()

Built-in types like String, Player, Entity, and Block provide many methods. For example, String has methods like ``toUpperCase()``, ``contains()``, ``replace()``, and ``length()``. Player has methods like ``getName()``, ``getHealth()``, ``teleport()``, and ``sendMessage()``.

Methods can be chained when each method returns a value:

.. code-block:: msc

    @player {{"  hello world  ".trim().toUpperCase().replace("WORLD", "THERE")}}

.. code-block:: output

    HELLO THERE

You can also define methods on user-defined types (see :ref:`Types <types>`).

For a complete reference of methods available on each built-in type, see :ref:`Built-in Types <appendix_built_in_types>`.

Control Flow in Functions
-------------------------

Functions support all the same operators as regular scripts (see :ref:`Scripts <scripts>`), including ``@if``, ``@for``, ``@delay``, ``@prompt``, ``@cooldown``, and ``@global_cooldown``.

Be aware that ``@delay`` and ``@prompt`` will pause the calling script while the function waits. If your function uses a 5-second delay, the script that called it will also wait 5 seconds before continuing.

The ``@cooldown`` and ``@global_cooldown`` operators behave differently in functions than in regular scripts. If a function is called while on cooldown, the calling script is terminated with an error. This prevents the function from running but also stops the entire script that tried to call it.

The ``@return`` operator immediately exits the function and returns to the caller:

.. code-block:: msc

    @if score < 0
        @player Invalid score!
        @return
    @fi
    @player Processing score...

If the function has a return type, ``@return`` must include a value. If the function is Void (no return type), ``@return`` should have no value.

Functions and Chatscripts
-------------------------

Functions are commonly used with ``@chatscript`` (see :ref:`Scripts <scripts>`) to create clickable chat options. Because chatscripts require a function reference, you must define a function for each clickable action:

.. code-block:: console

    /function define mymap selectRed()
    /function define mymap selectBlue()

.. code-block:: msc

    @chatscript color 60s mymap::selectRed()
    @player &c[Click for Red]
    @chatscript color 60s mymap::selectBlue()
    @player &9[Click for Blue]

When the player clicks one of the colored messages, the corresponding function is called. The group name (``color`` in this example) ensures that clicking one option prevents clicking the others in the same group.

This pattern is useful for creating interactive menus, confirmation prompts, and branching dialogue.

Command Reference
-----------------

.. list-table::
    :widths: 40 60
    :header-rows: 1

    * - Command
      - Description
    * - ``/function define <namespace> [ReturnType] <name>(<params>)``
      - Creates a new function in a namespace.
    * - ``/function remove <namespace> <function>``
      - Deletes a function from a namespace.
    * - ``/function info <namespace> <function>``
      - Shows information about a function.
    * - ``/function execute <expression>``
      - Executes a function call expression directly.
    * - ``/script create function <namespace> <function>``
      - Opens the script editor to add/edit the function body.

Note that these commands require admin permissions. On the main server, you will need to ask an admin to create functions for you, or use the test server where you have full permissions.
