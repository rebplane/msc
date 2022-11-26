.. _appendix_syntax:

Syntax
----------------

.. _appendix_syntax_define:

Define
-------------

The syntax for the define operator and command is as follows:

.. code-block:: console

    [qualifiers [...]] <Type> <name> [= expression]

*qualifiers* can be any amount of qualifiers handled in Qualifiers. These always precede
the rest of the definition and are always in lowercase. The qualifiers are *keywords* and
can therefore not be used as a variable, function or type name. Qualifiers only work on
persistent variables and can therefore not be used in scripts.

*Type* is the type of the variable, which always starts with an uppercase character. This
makes it easier to distinguish the type from the variable and qualifiers.

*name* can be any word that is not a keyword or literal. The name can consist of the
following characters: a-z, A-Z, 0-9,. The name cannot start with a number, , or an
uppercase character.

*expression* has to be a valid expression resulting in a value of Type. See Expression.

.. _appendix_syntax_var:

Var
------------------

The syntax for the var operator and command is as follows:

.. code-block:: console

    [name] <op> <expression>

*name* can be any predefined variable or field that is available.

*op* can be either ’=’ or any of the numerical operators followed by ’=’. The former case
sets the variable to the result of the expression, the latter case performs the operation
on the variable itself and the expression, and saves the result in the variable. Available
numerical operators are: =, +=, -=, \*=, /=, %=.

*expression*  has to be a valid expression resulting in a value of the correct type. See
:ref:`Expression <expressions>`.

.. _appendix_syntax_string_formatting:

String Formatting
------------------

The String literal supports a formatting context in which all expressions are allowed.
This is useful for both debugging and readability.

Within any String literal, an expression is started with a ’{{’ and closed with a ’}}’.
The resulting value is automatically converted to a String. If this is not possible, it will
result in an error.


.. _appendix_syntax_expression:

Expression
------------------

The expression syntax allows any variables, literals and functions to be used. Variables
are just referred to by their name. Literals follow the syntax rules of their type. Functions
are always immediately followed by an opening parenthesis ’(’, after which the
parameters come, separated by a comma, and closes with a ’)’. Fields and methods are
accessed from an instance by using a ’.’.

To chain variables, results of functions and literals, operators are required.

The resulting type is decided by the last remaining object after all sub-expressions have
been evaluated, and has to fit the context. If any sub-expressions can not perform an
operation with an operator, or be assigned to a given type, the expression fails and an
error is thrown.

.. _appendix_syntax_time:

Time
---------------

Some operators and commands take a time parameter. The parameter is the same as in
a temporary /ban command:<amount>[s/m/h/d/w].

*amount* decides the amount of the unit that is used.

The unit can either be blank, s, m, h, d, or w. A blank unit means ticks, that is 1/20 of
a second. s means seconds, m means minutes, h means hours, d means days, w means
weeks.

Thus 5d means 5 days, 10 means 10 ticks, 7h means 7 hours, and so on.