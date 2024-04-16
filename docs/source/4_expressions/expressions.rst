.. _expressions:

Expressions
===================================

Expressions describe manipulations on variables with functions, operators and variables.
They follow a few rules, but can be completely freely made as seen fit to the context.
Expressions range from very short assignments to complex logic that can be stored or used
further in the script, or used to perform an action themselves. They are the foundation
of variables, giving the user many ways to manipulate and handle data.

.. _expression_intro:

The Expression
----------------------------------

In the simplest sense, an expression is a piece of text that describes what to do. In
the context of scripts, expressions are used to perform actions (functions) or manipulate
variables (operators), or these two combined.

Expressions always evaluate toward one or no value. An expression ending in a function
call with no return type will result in no value. Other expressions will always result in
one value of a static type.

This static type can in turn be used in a different part of the expression, and so on.
They can also be stored in a variable of the correct type.

Some examples of simple expressions are:

.. code-block:: python

    @player {{5 + 5}}
    @player {{10 / 5}}
    @player {{"Hello" + "World"}}

.. code-block:: console

    10
    2
    HelloWorld


Expressions can also be chained or nested:

.. code-block:: python

    @player {{"Hello" + "World" + 5 + 5}}
    @player {{(5 + 5) * (5 + 5)}}
    @var player.setMaxHealth(5 + 5)

.. code-block:: console

    HelloWorld
    100

As described in :ref:`Execution Order <expressions_execution_order>`, some operators take precedence over others, such
as the * operator taking precedence over the + operator. If operators have the same
precedence, the expression is evaluated from left to right. The above example: ”Hello”
+ ”World” + 5 + 5 therefore evaluates to ”HelloWorld55”.

You may be confused why it is not ”HelloWorld10”. The + operators has equal precedence
whether it is used for a String or an Int. Reading left to right, first Hello and
World are concatenated by the + operator, then HelloWorld + 5 is evaluated, which results
in HelloWorld5 (because String + Int = String), then HelloWorld5 + 5 is evaluated,
resulting in HelloWorld55.

Before a function is called, each of the parameters are first processed. This happens
the same way as a normal expression. Thus player.setMaxHealth(5 + 5) evaluates to
player.setMaxHealth(10) after which the function is successfully called.

Sometimes you may accidentally write an expression that does not work. For example,
you write:

.. code-block:: python

    @var Block(5, 5, 5, "Zero") + 5

.. code-block:: console

    Operator ’+’ is not applicable on types: Block, Int

Because Block has no + operator, this expression cannot complete, and will error. Sometimes
this may be less apparent because of chained expressions. In general it is smart to
keep your expressions as simple as possible, often preferring the most readable solution.

.. _expressions_execution_order:

Execution Order
-------------------------------

Chained expressions have an execution order. You are probably used to this in maths
as well: * comes before +, but + and - happen at the same time (in our case from
left to the right). Expressions also follow these simple rules. The operators with higher
precedence are executed first, and operators with same precedence are executed left to
right.

Expressions have a few more operators than those generally used in maths however, and
we will list the execution order here. From top to bottom, top executes first, and bottom
executes last.


Table 4.1: Precedence of operators

+-----------+------------------------------------------------------------------+
| ()        | Parentheses around an expression prioritize this sub-expression. |
+-----------+------------------------------------------------------------------+
| !         | Negation of Booleans.                                            |
+-----------+------------------------------------------------------------------+
| ^         | Exponentiation                                                   |      
+-----------+------------------------------------------------------------------+
| \*, %, /  | Multiplication, modulo, division.                                |
+-----------+------------------------------------------------------------------+
| \+, -     | Addition, concatenation and subtraction.                         |
+-----------+------------------------------------------------------------------+
| <,<=,>,>= |  Relational operators.                                           |
+-----------+------------------------------------------------------------------+
| ==, !=    | Equality or non-equality.                                        |
+-----------+------------------------------------------------------------------+
| &&        | Logical AND.                                                     |
+-----------+------------------------------------------------------------------+
| ||        | Logical OR.                                                      |
+-----------+------------------------------------------------------------------+
| =         | Assignment.                                                      |
+-----------+------------------------------------------------------------------+

For example:

.. code-block:: python

    @player {{5 - 5 * 5}}
    @player {{5 > 10 && 4 != 4 || 5 == 5}}

.. code-block:: console

    -20
    true

The first one is fairly logical following basic math. The second may be harder to see
at first. Due to the operator precedences, the expression is evaluated as ((5>10) &&
(4 != 4))||(5 == 5). This in turn evaluates to ((false) && (false))||(true), which
corresponds with false||true, which is true.

.. _expressions_short_circuit:

Short Circuit
-----------------------------

In the case of the logical operators, the expression will short circuit whenever the 
expression has gathered enough info about the result. For example, assuming function()
returns a Boolean:

.. code-block:: python

    @var true || function()

will never execute *function*, because the first operand was already true.

One of the most important reasons for this feature is the usage in if statements:

.. code-block::

    @define String var
    @if var != null && var.toLowerCase() == "this is a string"
        @player Incorrect.
    @else
        @player Correct!

.. code-block:: console

    Correct!


It will never evaluate the right side of the logical AND, because the left side was already
false, saving you from a NullPointerException being thrown during the execution of the
script. This will save some lines of code to check if something is null, and almost always
results in predictable behaviour.

.. _expressions_section_syntax:

Syntax
---------------------

Expressions follow fairly strict, but very logical syntax rules. We will list all syntax rules
here with examples. For a more summarized list, refer to :ref:`Syntax <appendix_syntax>`.

.. toctree::

   expressions_syntax
