.. _expressions:

Expressions
===========

Expressions are pieces of code that compute values. They combine variables, literals, operators, and function calls to produce a result. Expressions are the foundation of all computation in MSC, from simple arithmetic to complex logic.

.. contents:: Contents
   :local:

What is an Expression?
----------------------

An expression is anything that evaluates to a value. The simplest expressions are just literals or variables:

.. code-block:: msc

    @player {{5}}
    @player {{"Hello"}}
    @player {{mymap::score}}

.. code-block:: output

    5
    Hello
    10

More complex expressions combine values with *operators*:

.. code-block:: msc

    @player {{5 + 5}}
    @player {{mymap::score * 2}}
    @player {{mymap::score > 8 && true}}

.. code-block:: output

    10
    20
    true

Expressions can also include function or method calls (see :ref:`Functions <functions>` and :ref:`Types <types>` for details):

.. code-block:: msc

    @player {{math::sqrt(16.0D)}}
    @player {{"hello".toUpperCase()}}

.. code-block:: output

    4.0
    HELLO

The {{ }} Syntax
----------------

Expressions in MSC are written inside double curly braces: ``{{ }}``. This syntax can be used in two places. Firstly, in script operators like ``@player``, and ``@bypass``, expressions are evaluated and their results are inserted into the text:

.. code-block:: msc

    @define Int x = 5
    @player The value of x is {{x}}
    @player Double that is {{x * 2}}
    @bypass /teleport @s {{x * 5}} 64 {{x + 10}}

.. code-block:: output

    The value of x is 5
    Double that is 10

The last line becomes ``/teleport @s 25 64 15`` after the expressions are evaluated, and this is where the player will be teleported.

Secondly, expressions can be embedded inside string literals:

.. code-block:: msc

    @define String message = "The answer is {{5 + 5}}"
    @player {{message}}

.. code-block:: output

    The answer is 10

This is useful for building complex strings that include computed values.

Operators
---------

Operators combine values to produce new values. MSC supports arithmetic, comparison, logical, and assignment operators.

.. admonition:: Technical Detail
   :class: technical-detail

   If you have a background in computer science or mathematics, you will find these operators familiar. You can skip to the next section to see a list of all operators in order of precedence.

Arithmetic Operators
^^^^^^^^^^^^^^^^^^^^

Arithmetic operators work on numbers:

.. code-block:: msc

    @player {{10 + 3}}, {{10 - 3}}, {{10 * 3}}
    @player {{10 / 3}}, {{10 % 3}}
    @player {{2 ^ 8}}

.. code-block:: output

    13, 7, 30
    3, 1
    256.0

The ``^`` operator is exponentiation: ``2 ^ 8`` computes :math:`2^8 = 256`. This returns a Double, rather than an integer.

The ``%`` operator is modulo (which computes remainder after division). Division between two integers produces an integer result (truncated). To get a decimal result, use a Float or Double:

.. code-block:: msc

    @player {{10 / 3}} (integer) vs {{10.0 / 3.0}} (precise)

.. code-block:: output

    3 (integer) vs 3.3333333 (precise)

The ``+`` operator can also be used to concatenate strings:

.. code-block:: msc

    @player {{"Hello" + " " + "World"}}
    @player {{"Score: " + 100}}

.. code-block:: output

    Hello World
    Score: 100

When a string is added to a number, the number is converted to a string.

Comparison Operators
^^^^^^^^^^^^^^^^^^^^

Comparison operators compare values and return a Boolean:

.. code-block:: msc

    @player {{5 > 3}}
    @player {{5 < 3}}
    @player {{5 >= 5}}
    @player {{5 <= 4}}
    @player {{5 == 5}}
    @player {{5 != 3}}

.. code-block:: output

    true
    false
    true
    false
    true
    true

Note that ``==`` checks for equality of value, while ``!=`` checks for inequality. Make sure to use double equals for comparison, as a single equals sign is used to set the value of a variable.

Logical Operators
^^^^^^^^^^^^^^^^^

Logical operators combine Boolean values:

.. code-block:: msc

    @player {{true && true}}
    @player {{true && false}}
    @player {{true || false}}
    @player {{false || false}}
    @player {{!true}}

.. code-block:: output

    true
    false
    true
    false
    false

The ``&&`` operator is logical AND (true if both sides are true). The ``||`` operator is logical OR (true if either side is true). The ``!`` operator negates a Boolean.

Assignment Operators
^^^^^^^^^^^^^^^^^^^^

Assignment operators are used with ``@var`` to modify variables:

.. code-block:: msc

    @define Int x = 10
    @var x += 5
    @player {{x}}
    @var x -= 3
    @player {{x}}
    @var x *= 2
    @player {{x}}

.. code-block:: output

    15
    12
    24

The operators ``+=``, ``-=``, ``*=``, ``/=``, and ``%=`` are shorthand. For example, ``x += 5`` is equivalent to ``x = x + 5``.

Incorrect Operators
^^^^^^^^^^^^^^^^^^^

Sometimes an operator is used with incompatible types. This causes an error:

.. code-block:: msc

    @player {{Player("Ajdj123321") + true}}

.. code-block:: output

    &7[&eScripts&7] &eOperator &f'+' &eis not applicable on types: &fPlayer&e, &fBoolean

This means that you can't add a Player and a Boolean together (which makes sense: what would that even mean?). When in doubt, keep expressions simple and use parentheses to make the evaluation order explicit.

Operator Precedence
-------------------

When an expression contains multiple operators, they are evaluated in a specific order. Operators with higher precedence are evaluated first. Operators with the same precedence are evaluated left to right. You can override precedence using parentheses.

You are probably familiar with standard arithmetic precedence from mathematics, where multiplication comes before addition. MSC follows similar rules, with some additions for logical and assignment operators.

From highest to lowest precedence:

.. list-table::
    :widths: 20 80
    :header-rows: 1

    * - Operator
      - Description
    * - ``()``
      - Parentheses (used to override the default precedence)
    * - ``!``
      - Logical NOT (turning true to false and vice versa)
    * - ``^``
      - Exponentiation (raising to a power)
    * - ``*``, ``/``, ``%``
      - Multiplication, division, modulo
    * - ``+``, ``-``
      - Addition/concatenation, subtraction
    * - ``<``, ``<=``, ``>``, ``>=``
      - Comparison (less than, greater than, and their non-strict variants)
    * - ``==``, ``!=``
      - Equality and inequality
    * - ``&&``
      - Logical AND (both sides must be true)
    * - ``||``
      - Logical OR (at least one side must be true)
    * - ``=``, ``+=``, etc.
      - Assignment (evaluated last)

For example:

.. code-block:: msc

    @player {{5 + 3 * 2}}
    @player {{(5 + 3) * 2}}

.. code-block:: output

    11
    16

In the first expression, ``3 * 2`` is evaluated first (giving 6), then ``5 + 6`` gives 11. In the second, the parentheses force ``5 + 3`` to be evaluated first.

A more complex example:

.. code-block:: msc

    @player {{5 > 3 && 2 < 4 || false}}

This evaluates as ``((5 > 3) && (2 < 4)) || false``, which becomes ``(true && true) || false``, which is ``true``.

Short-Circuit Evaluation
------------------------

.. admonition:: Technical Detail
   :class: technical-detail

   MSC uses *short-circuit evaluation*. With ``&&``, if the left side is false, the right side is skipped (since ``false && anything`` is always false). With ``||``, if the left side is true, the right side is skipped (since ``true || anything`` is always true).

The logical operators ``&&`` and ``||`` use short-circuit evaluation. This means they stop evaluating as soon as the result is determined.

For ``&&``, if the left side is false, then the expression will be false regardless of the right side (as ``false && false`` and ``false && true`` are both false). Therefore, the compiler skips even checking what the right side is. This can have consequences if the right side has side effects (like function calls).

.. code-block:: msc

    @define Boolean result = false && namespace::someExpensiveFunction()

The function is never called because ``false && anything`` is always false.

For ``||``, if the left side is true, the right side is never evaluated:

.. code-block:: msc

    @define Boolean result = true || someExpensiveFunction()

The function is never called because ``true || anything`` is always true.

This behavior is especially useful for null checks:

.. code-block:: msc

    @define Player target = Player("someone")
    @if target != null && target.getHealth() > 0
        @player Target is alive!
    @fi

If ``target`` is null, the ``&&`` short-circuits and ``target.getHealth()`` is never called. This prevents a NullPointerException. Without short-circuit evaluation, checking for null and using the variable would require separate ``@if`` statements (see :ref:`Scripts <scripts>` for conditional operators).

Type Behavior
-------------

Operators behave differently depending on the types of their operands. Understanding this helps avoid unexpected results.

Arithmetic on integers produces integers:

.. code-block:: msc

    @player {{7 / 2}}

.. code-block:: output

    3

To get a decimal result, at least one operand must be a Float or Double:

.. code-block:: msc

    @player {{7.0 / 2}}
    @player {{7 / 2.0D}}

.. code-block:: output

    3.5
    3.5

String concatenation with ``+`` converts non-strings automatically:

.. code-block:: msc

    @player {{"Value: " + 42}}
    @player {{"Is active: " + true}}

.. code-block:: output

    Value: 42
    Is active: true

However, the order matters. Expressions are evaluated left to right:

.. code-block:: msc

    @player {{1 + 2 + " apples"}}
    @player {{"apples: " + 1 + 2}}

.. code-block:: output

    3 apples
    apples: 12

In the first example, ``1 + 2`` is evaluated first (giving 3), then ``3 + " apples"`` produces the string. In the second, ``"apples: " + 1`` produces ``"apples: 1"``, then adding 2 gives ``"apples: 12"``.

Not all types support all operators. Attempting an unsupported operation causes an error:

.. code-block:: msc

    @player {{Block(0, 0, 0, "world") + 5}}

.. code-block:: output

    Operator '+' is not applicable on types: Block, Int

When in doubt, keep expressions simple and use parentheses to make the evaluation order explicit.
