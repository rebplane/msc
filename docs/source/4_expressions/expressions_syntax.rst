Syntax
---------------------

Expressions follow fairly strict, but very logical syntax rules. We will list all syntax rules
here with examples. For a more summarized list, refer to :ref:`Syntax <appendix_syntax>`.

.. _expressions_define:

Define
----------------------

The syntax for the define operator and command is as follows:

.. code-block:: console

    [qualifiers [...]] <Type> <name> [= expression]

*qualifiers* can be any amount of qualifiers handled in :ref:`Qualifiers <variables_qualifiers>`. These always precede
the rest of the definition and are always in lowercase. The qualifiers are **keywords** and
can therefore not be used as a variable, function or type name. Qualifiers can only be
used on persistent variables, and therefore not in scripts.

*Type* is the type of the variable, which always starts with an uppercase character. This
makes it easier to distinguish the type from the variable and qualifiers.

*name* can be any word that is not a keyword or literal. The name can consist of the
following characters: a-z, A-Z, 0-9,. The name cannot start with a number, , or an
uppercase character.

*expression* has to be a valid expression resulting in a value of Type. See :ref:`Expression <expressions_expression>`

.. code-block:: python

    @define String correctName = "5"
    @player {{correctName}}
    @define String 0invalidName
    @define String InvalidName
    @define InvalidType correctName
    @define String true
    @define String final

.. code-block:: console

    5
    Variable does not start with a lowercase character: ’0’
    Variable does not start with a lowercase character: ’I’
    Type ’InvalidType’ could not be found in namespace local
    Collision with a keyword: ’true’
    Collision with a keyword: ’final’


.. code-block:: python

    /variable define namespace final String example = "Unchangeable."

.. code-block:: python

    @var namespace::example = "5"

.. code-block:: console

    Variable ’final String example = Unchangeable’ is declared final and
    can therefore not be assigned a new value.

.. _expressions_var:

Var
-----------------------

The syntax for the var operator and command is as follows:

.. code-block:: console

    [name] <op> <expression>

*name* can be any predefined variable, or field that is available.

.. code-block:: python

    @define String example = "This is an example of good things."
    @var example = "5"

.. code-block::  python

    @define String example = "This is an example of bad things."
    @var undefined = "5"

.. code-block:: console

    Variable ’undefined’ could not be found in namespace local

*op* can be either ’=’ or any of the numerical operators followed by ’=’. The former case
sets the variable to the result of the expression, the latter case performs the operation
on the variable itself and the expression, and saves the result in the variable. Available
operators are: =, \+=, -=, \*=, /=, %=.

.. code-block:: python

    @define Int example = 5
    @var example += 5
    @player example

.. code-block:: console

    10

*expression* has to be a valid expression resulting in a value of the correct type. See
Expression :ref:`Expression <expressions_expression>`.

.. _expressions_string_formatting:

String Formatting
---------------------------

The String literal supports a formatting context in which all expressions are allowed.
This is useful for both debugging and readability.

Within any String literal, an expression is started with a ’{{’ and closed with a ’}}’.
The resulting value is automatically converted to a String. If this is not possible, it will
result in an error.

.. code-block:: python

    @define String hello = "I can do math: {{5 + 5}}!"
    @player {{hello}}

.. code-block:: console

    I can do math: 10!

.. _expressions_expression:

Expression
----------------------------

The expression syntax allows any variables, literals and functions to be used.

Variables are just referred to by their name.

.. code-block:: python

    @define String name = "Hello"
    @player {{name}}

.. code-block:: console

    Hello

Literals follow the syntax rules of their type.

.. code-block:: python

    @player {{"This is a literal."}}
    @player {{true}}
    @player {{5.0D}}

.. code-block:: python

    This is a literal
    true
    5.

Function names are always immediately followed by an opening parenthesis ’(’, after
which the parameters come, separated by a comma, and closes with a ’)’. Functions
always start with a lowercase character to distinguish from a constructor.

.. code-block:: python

    @player {{"Hello".contains("e")}}

.. code-block:: console

    true

To chain variables, results of functions and literals, operators are required.

.. code-block:: 
        
    @player {{5 + (5 / 5)}}
    @player {{!true}}
    @player {{!(true && true)}}

.. code-block:: console

    6
    false
    false

The resulting type is decided by the last remaining object after all sub-expressions have
been evaluated, and has to fit the context. If any sub-expressions can not perform an 
operation with an operator, or be assigned to a given type, the expression fails and an
error is thrown.

.. code-block:: python

    @define Int x = 5 + 5
    @define String y = "5" + 5
    @define Block z = Block(0, 0, 0, "Zero")
    @player {{x}}
    @player {{y}}
    @player {{z}}
    @player {{z + 5}}

.. code-block:: console

    10
    55
    0 0 0
    Operator ’+’ is not applicable on types: Block, Int