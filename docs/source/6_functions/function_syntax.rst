Syntax
-----------------

A function can either be a standalone function, or a function bound to a type (often
known as methods).

.. contents::


.. _functions_definition:

Definition
--------------

Functions are always defined with a name, parameter list and optionally a return type
in the following format:

.. code-block:: console
    
    ReturnType name(Type parameter1, Type parameter2, ..., Type parametern)

The amount of parameters is completely variable. It is possible to declare a function
without parameters by simply ending the declaration without defining any parameters:

.. code-block:: console

    ReturnType name()

When a function should merely perform an action, and should not result in a value,
ReturnType can be removed as well:

.. code-block:: console

    name()

Do note that when a function is defined without a return type, any @returns taking
variables will error, as it is probably a mistake.

In general, it is best to keep the amount of parameters within a reasonable range. Having
a large amount of parameters not only makes it hard to read, but may also be hard to
remember, document, and is often better split up into multiple functions. Some personal
judgment is required to see what fits the situation best.

.. _functions_funtion_calls:

Function Calls
-------------------------

The functions can be called as follows, assuming the function is in the currently used
namespace. Given a function called *sum* taking two arguments:

.. code-block:: python

    sum(parameter1, parameter2)

If the function is not in the current namespace, you can either use a different namespace
using @using, or using the local namespace specifier:

.. code-block:: python

    math::sum(parameter1, parameter2)

In a script situation, this can look like:

.. code-block:: python

    @define Int result = math::sum(1, 2)
    @player {{result}}

.. code-block:: console

    3

Most types (such as String, Player, Block and Entity) provide functions. For example,
the function *closeInventory()* contained in the *Player* type can be called as follows:

.. code-block:: python

    @define Player player = Player("rickyboy320")
    @var player.closeInventory()
