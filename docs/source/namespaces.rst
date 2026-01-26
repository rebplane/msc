.. _namespaces:

Namespaces
==========

Namespaces are a way of separating variables, functions, and types into logical groups to prevent name collisions. In previous versions of MSC, variables were global and could easily cause collisions when using common names like ``x`` or ``count``. With namespaces, the same variable name can exist in different namespaces without conflict.

Generally, a namespace encapsulates a given project, a module within a project, or a logical module that can be reused in different projects (such as the ``math`` namespace, which provides mathematical functions).

.. contents:: Contents
   :local:

What is a Namespace?
--------------------

A namespace is a container that holds three kinds of elements:

- **Variables**: Named values that can be read and modified (see :ref:`Variables <variables>`)
- **Functions**: Reusable code blocks that can be called from scripts (see :ref:`Functions <functions>`)
- **Types**: Custom data structures (see :ref:`Types <types>`)

Before using a variable, function, or type in a script, you need to tell the script which namespace to look in. If no namespace is specified, MSC looks in the local namespace by default.

The Local Namespace
-------------------

When a script starts executing, it begins with an empty local namespace. Variables defined within the script using ``@define`` are placed in this local namespace:

.. code-block:: msc

    @define Int count = 5
    @define String message = "Hello"
    @player {{count}}, {{message}}

.. code-block:: output

    5, Hello

The local namespace has two important properties:

1. It is not persistent. When the script finishes executing, the local namespace is deleted along with all its variables. The next time the script runs, it starts with a fresh, empty local namespace.

2. It always takes precedence. If a variable exists in both the local namespace and another namespace, the local variable will be used. This is called *shadowing* and is explained further below.

Persistent Namespaces
---------------------

Unlike the local namespace, user-defined namespaces are persistent. Variables stored in them are saved to disk and survive server restarts. This makes them essential for tracking state across script executions, such as player progress, puzzle states, or counters.

To create a namespace, use the ``/namespace define`` command:

.. code-block:: console

    /namespace define <name>

Namespace names should be lowercase and descriptive. Common conventions include using your map name, titling related namespaces with the same prefix, and including part of your username to avoid collisions with other mapmakers. 

Once a namespace exists, variables and functions can be defined within it (see :ref:`Variables <variables>` for details on defining variables).

Using Namespaces in Scripts
---------------------------

There are two ways to access elements from a namespace in your scripts: the ``@using`` operator and the ``::`` specifier.

The ``@using`` operator sets a namespace as the active namespace for the rest of the script. Variables, functions, and types from that namespace can then be accessed directly by name:

.. code-block:: msc

    @using mymap
    @player Your score is {{score}}
    @var score = score + 10

Without ``@using mymap``, the script would not know where to find ``score`` and would throw an error.

A script can switch namespaces at any time by using ``@using`` again. Only one namespace (besides the local namespace) is active at a time.

The ``::`` specifier allows you to access a specific namespace directly, without changing the active namespace:

.. code-block:: msc

    @player Your score is {{mymap::score}}
    @var mymap::score = mymap::score + 10

This is useful when you need to access variables from multiple namespaces in the same script, or when you only need a variable from a namespace once or twice.

You can also call functions using the ``::`` specifier:

.. code-block:: msc

    @player The square root of 144 is {{math::sqrt(144.0D)}}
    @player Random number: {{math::random(1.0D, 100.0D)}}

You can use both approaches in the same script. A common pattern is to use ``@using`` for the namespace you access most frequently, and ``::`` for occasional access to others:

.. code-block:: msc

    @using mymap
    @player Score: {{score}}
    @player The square root of two is {{math::sqrt(2.0D)}}

.. code-block:: output

    Score: 20
    The square root of two is 1.4142135623730951

Shadowing
---------

The local namespace always takes precedence over the active namespace. If you define a local variable with the same name as a namespace variable, the local variable *shadows* the namespace variable:

.. code-block:: msc

    @using mymap
    @define Int score = 999
    @player Local score: {{score}}
    @player Namespace score: {{mymap::score}}

.. code-block:: output

    Local score: 999
    Namespace score: 20

In this example, ``score`` refers to the local variable (999), while ``mymap::score`` explicitly accesses the namespace variable (20).

This behavior ensures that adding a new variable to a namespace will never unexpectedly change the behavior of existing scripts that happen to use the same variable name locally.

Function Namespaces
-------------------

When a function is called, execution switches to the function's namespace. The function can access variables from its own namespace directly, but must use ``::`` to access variables from other namespaces. Variables can be passed between namespaces through function parameters. For more details on functions, see :ref:`Functions <functions>`.

Command Reference
-----------------

.. list-table::
    :widths: 40 60
    :header-rows: 1

    * - Command
      - Description
    * - ``/namespace define <name>``
      - Creates a new namespace.
    * - ``/namespace remove <name>``
      - Deletes a namespace and all its contents.
    * - ``/namespace info <name>``
      - Shows all variables, functions, and types in a namespace.
    * - ``/namespace variables <name> [query]``
      - Lists variables, optionally filtered by query.
    * - ``/namespace functions <name> [query]``
      - Lists functions, optionally filtered by query.
    * - ``/namespace types <name> [query]``
      - Lists types, optionally filtered by query.

Note that these commands can only be run by admins on the main server. You will have to use the test server to run these commands yourself, or ask an admin to set up namespaces for you on the main server.