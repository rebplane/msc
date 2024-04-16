The Function
---------------

A function is a script that can be explicitly called at any point, but is never triggered
implicitly by the server. Because they are explicitly called, they can be called from
within another function, from within a script, or even triggered as a chatscript.

Functions take parameters, which allows them to do a similar operation on different
values, or simply change the operation when passed a different value.

Because it may be useful to grab a value from a type, convert a series of input variables
to a single output variable, or anything else you can come up with, functions can return
a value as well. Returning a value will allow the caller to store or use the result in a
different script or function, further allowing for re-usability. For this reason functions
have a return type, alongside parameter types. We will go a little more in depth later.

Functions are primarily meant to write parts of a script that are repetitive or can be used
somewhere else. They are also used to condense a long script into one call (such as the
use of functions in @chatscript).

Do keep in mind that functions are very much able to stall your script using @delay,
@prompt and similar script operations. Cooldowns (@cooldown and @globalcooldown)
terminate the calling script with an error when the function is on cooldown.

The definition of a function looks like:

.. code-block:: console

    ReturnType functionname(Type_1 name_1, ..., Type_n name_n)

Then the syntax of calling this function is as follows:

.. code-block:: console

    functionname(parameter_1, ..., parameter_n)

The ReturnType is discussed in :ref:`Return Type <functions_return_type>`. The parameters are discussed in :ref:`Parameters <scripts_parameters>`. 

.. _functions_parameters:

Parameters
--------------------

Functions are optionally defined with a series of parameters. Each parameter acts as
a simple variable, but in reality they are a little more complex. A variable entering a
function is a pass-by-value, which means that changing the value of the parameter will
not change the value of the variable in the caller’s script. The values of the call are
copied over into the function, where they act as local variables.

Because they act as variables, they have to also be defined with a Type. However,
because they are not persistent variables, qualifiers have no impact and are therefore
not allowed.

Because they are copied over with value, variables with the relative qualifier will contain
the player’s value, the types passed will remain the same, and therefore any actions
on a player within the function will also succeed. The only difference between these
parameters and default (global) variables is that they do not change the value on the
label of the variables that the function was called with.

Variables passed to a function should always match the type of the definition. If this is
not the case, an error will occur.

.. _functions_return_type:

Return Type
-----------------

Functions can optionally return a value. The type of the value returned is governed by
the definition of the function. Any @return operators should therefore return a value
of the given type, and it is best practice to always explicitly return a value (or null).
Implicitly, the function will return null when no return value is defined.

When no type is passed, the function internally takes the type ’Void’, which is a type
that has no functions, no operators, no literals and no constructors. Thus, when a
function has no (or Void) return type, any expressions involving the function will fail,
unless the function is a standalone expression.

When the function does have a return type, it can be freely used in expressions following
the rules of the type. Functions are evaluated in the same order of expression rules, so
keep in mind that short circuiting can occur.

Returning is always done using the @return operator, which takes an optional expression.
The expression should always evaluate to the return type defined for the function, and
can be left empty if the return type is Void or not present.
