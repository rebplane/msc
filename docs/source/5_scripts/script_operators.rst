.. _script_operators:

Script Operators
-------------------------

Every line within a script contains exactly one operator. The operator gives meaning
to the line, because it determines what has to be done with the arguments. There are
operators to execute commands, control the script flow and manipulate variables. Each
such type has a dedicated section. Additionally, a full summary is available in :ref:`Script Operators <script_operators>`. 

.. _scripts_command_operators:

Command Operators
--------------------------------

There are three operators to execute a command in a script: @command, @bypass and
@console.

**@command <command>**

Executes the command with the permissions of the player. A greenie can use /warp,
/rocket, while a whitie cannot. @command keeps in mind these differences in rank, and
executes a command normally as if it was typed in chat.

**@bypass <command>**

Elevates the permissions of a player to semi-admin rank. It allows the script to perform
all Minr admin commands and most Minecraft op commands (including specifiers @a,
@e, @p, @s, @r).

**@console<command>**

Executes the command from the console, which means all commands can be executed,
but it has the drawback of having to explicitly state the player, world, or sometimes not
being able to perform a command at all.


To prevent lag and potential server hiccups, all command operators introduce a one-tick
delay between their execution and the rest of the script. When a script or function uses
a substantial amount of commands, the script may take a while to execute (remember,
20 ticks is one second, so 20 commands already takes one second).

.. code-block:: python
    
    @command /say hi
    @bypass /say hi
    @console /say hi

Assuming a non-admin executes this script:

.. code-block:: console

    You do not have the permission to execute this command.
    Machete: hi
    Machete: hi

.. code-block:: python

    @command /rocket
    @bypass /rocket
    @console /rocket

Assuming a whitie or a blue executes this script:

.. code-block:: python

    You do not have the permission to execute this command.
    You rocketed yourself.
    Invalid command: missing player parameter.

.. _script_branching_operators:

Branching Operators
---------------------------

Sometimes a script needs to conditionally execute a part of the script. For this reason
we have branching operators, which provide ways to cause different execution flows
using variables. The branching operators can be nested, causing more and more possible
execution paths. Be warned, as increasing the amount of execution paths greatly
complexifies the script.

**@if <Boolean expression>**

Takes an expression that evaluates to a Boolean. If the Boolean is true, the following
section is executed, if it is false, the section is skipped until reaching an @elseif, @else
or @fi of the same level.

**@else**

Executes the following section if the preceding @if and @elseif operators of the same
level were false.

**@elseif<Boolean expression>**

Executes the following section if the preceding @if and @elseif operators of the same
level were false, and the expression of this @elseif evaluates to true.

**@fi**

Ends the conditional section. Any @if, @else or @elseif operators of the same level will
no longer apply after this operator.

**@return**
Stops the execution of the current script or function, and optionally returns a value.

Because the branching operators can be nested, the script maintains an ’if level’ to
keep track of which @if has impact on which @else and @elseif operators. This level is
demonstrated visually through the use of indentation in both this document and any
script viewings (such as /scripts view).

.. code-block:: python

    @if true
        @player 1
        @return
    @fi
    @player 2

.. code-block:: console
    
    1

.. code-block:: python

    @if true
        @if false
            @player 1
        @else
            @player 2
        @fi
    @elseif true
        @player 3
    @else
        @player 4
    @fi
    @player 5

.. code-block:: console

    2
    5

.. _scripts_control_operators:

Control Operators
---------------------------

There are also operators that provide control on the execution of a script.

**@delay <time>**

Allows an arbitrary delay in the midst of a script, making the rest of the script wait
with execution until the delay is over.

**@cooldown <time>**
Takes an arbitrary time that controls when the script can be re-executed by the same
player. If used in a function, a function will terminate the calling script when the function
is on cooldown.

**@global_cooldown<time>** 

Takes an arbitrary time that controls when the script can be executed again by any
player. If used in a function, a function will terminate the calling script when the
function is on cooldown.

**@cancel**

Disables the interaction between player and the object the script is bound to. Only has
effect in interact scripts and before any delays introduced by other operators (such as
@delay, the command operators and other halting operators).

Do note that any @cooldown and @global_cooldown operators only have effect once they
are executed. Due to these constraints, @cancel, @cooldown and @global_cooldown have
to be used before any delay because we cannot turn back time to stop an interaction
after it has already happened. Therefore an interaction should always be cancelled while
it is still happening, thus before any delays. Cooldowns are locked to the beginning in
order to ensure proper usage.

The time parameter is explained in :ref:`Time <appendix_syntax_time>`. 

.. _scripts_variable_operators:

Variable Operators
--------------------------------

To simplify the definitions of local variables and altering of local and global variables,
MSC 2 introduces new operators that can readily alter the variable state.

**@define <Type> <name> [= expression]**

Defines a new variable and sets the value to an optionally defined expression. The
expression has to match the type of the variable. Refer to :ref:`Define <expressions_define>` for more information
on the parameters.

**@var [name =] <expression>**

Executes an expression. This can be an assignment, function call, or any valid expression.
For more information, refer to :ref:`Var <expressions_var>`. 

**@using <namespace>**
Switches the namespace of lines following this line. For more information, refer to :ref:`Using Namespaces <namespace_using>`. 

.. _scripts_chat_operators:

Chat Operators
-----------------------

To interface with the player chat, there are operators that send a message, send a
clickable message or store a player’s input in a variable.


**@player <message>**

Sends a message to the player. Supports color codes prefixed by &. Supports 
:ref:`String Formatting <expressions_string_formatting>` by using{{and}}.

**@chatscript <group> <time> <expression>**
Binds a function to the first following @player script operation. The function can be
activated by the player at any time upon clicking the chat message.

Only one of the chatscripts in the same **group** can be executed. This means that when
binding a chatscript to multiple messages with the same group, only one chatscript can
be executed.

Once time runs out, the chatscript expires and the expression can no longer be executed
by clicking the text in chat. The chatscript also expires once the chatscript has been
executed once.

.. code-block:: console

    /function define example Void one()

.. code-block:: console

    /function define example Void two()

.. code-block:: console

    /function define example Void three()

.. code-block:: console

    /s c f example one @player one

.. code-block:: console

    /s c f example two @player two

.. code-block:: console

    /s c f example three @player three

.. code-block:: python

    @chatscript same example::one()
    @player Option 1
    @chatscript same example::two()
    @player Option 2
    @chatscript other example::three()
    @player Option 3

.. code-block:: console

    Option 1
    Option 2
    Option 3

If the player clicks Option 1:

.. code-block:: console

    one

Then, if the player clicks Option 2:

.. code-block:: console

Then, if the player clicks Option 3:

.. code-block:: console

    three

*two* was not displayed because it shares the same *group* with *one*, and since *one* was
already executed, *two* could no longer be executed. *three* was a separate group, and
therefore was able to be executed after *one* executed.

**@prompt <time> <variable> [message]**

Halts the script until the player types something. If time runs out, the script ends here,
sending the message the optional message, or ’Prompt expired’ otherwise. Message
supports color codes with &.

If the player types something in time, the text the player typed is stored in the passed
variable. Therefore, variable has to be of type String.
