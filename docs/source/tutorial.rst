Tutorial
========

This tutorial introduces MSC 2.0, the scripting language for Minr.  We'll cover the basics on scripting and provide the most important points to remember without overcomplicating things or going into too much detail. By the end, you'll know how to create dialogue scripts, use variables to track player progress, and build interactive prompts. For complete reference documentation, see the :ref:`appendix <appendix>`.

.. contents:: Tutorial Contents
   :local:

What is MSC?
------------

MSC (Minr Script Code) is the scripting language developed for Minr. It lets mapmakers add interactivity to their maps: dialogues with NPCs, puzzles that track player progress, timed challenges, and more.

A script is a sequence of lines that execute from top to bottom when triggered. Each line starts with an **operator** (like ``@player`` or ``@if``) that determines what that line does.

Here's a simple script that greets the player:

.. code-block:: msc

    @player Welcome to my map!
    @player Good luck!

When triggered, this displays two messages in the player's chat.


Script Types
------------

Scripts can be attached to blocks, entities, or regions. The **script type** determines how the script is triggered:

- **interact**: Triggered when a player right-clicks the block.
- **walk**: Triggered when a player enters the space above a block (either by walking onto the block or via jumping into the space).
- **ground**: Triggered when a player stands on the block (not jumping).
- **entity**: Triggered when a player right-clicks an entity (armor stand, mob, etc.).
- **area**: Triggered when when a player enters a WorldGuard region.
- **function**: Not triggered automatically: functions can be called explicitly from other scripts. See :ref:`functions <functions>` for more details.

Script Operators
----------------

Every line in a script starts with a single **operator** that determines what the line does. Here are the most common ones:

**@player <message>** displays a message to the player in chat.

.. code-block:: msc

    @player Hello and welcome to my map!

**@bypass <command>** executes a command with elevated permissions. Use this for commands like ``/teleport`` or ``/setblock`` that players can't normally run. **@command <command>** tries to do the same, but only works for commands the player already has permission to use.

.. code-block:: msc

    # This will teleport the player to coordinates (0, 100, 90)
    @bypass /teleport @s 0 100 90

    # This will send the player to spawn.
    @command /spawn

    # A staff member running this line will give themselves 5 diamonds. But a regular player won't be able to, since they lack permission to use /give.
    @command /give @s minecraft:diamond 5

**@delay <time>** pauses the script for the specified duration. Time can be specified in ticks (40t or 40 = 40 ticks, or 2 seconds), seconds (2s = 2 seconds), or minutes (2m = 2 minutes).

.. code-block:: msc

    @player Loading...
    @delay 2s
    @player Done!

For a complete list of operators, see :ref:`Script Operators <appendix_scripts_script_operators>`.


Managing Scripts
----------------

Scripts are created and managed using the ``/script`` command in Minecraft.

Creating a Script
^^^^^^^^^^^^^^^^^

To add a line to a script, use:

.. code-block:: console

    /script create <type> <@operator> <content>

Then click the block (or entity) to attach it. For example:

.. code-block:: console

    /script create interact @player Hello!

After running this command, click a block to attach the script. Now when any player right-clicks that block, they'll see "Hello!" in chat.

To add more lines to an existing script, run ``/script create`` again and click the same block. Each new line is appended to the end of the script.

Viewing or Removing a Script
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To see what script is attached to a block or entity, use:

.. code-block:: console

    /script view <type>

Then click the block or entity. The script contents will be displayed in chat.

To remove a script, similarly use:

.. code-block:: console

    /script remove <type>


Using paste.minr.org
--------------------

Typing long scripts through chat commands quickly becomes tedious. For anything beyond a few lines, use `paste.minr.org <https://paste.minr.org/>`_. This is a web editor to write scripts without having to enter them line-by-line.

**To import a script:**

1. Write your script at paste.minr.org
2. Click **Save** in the top right, or use ``Ctrl+S``
3. Copy the identifier from the URL (the random characters at the end, e.g., ``fomomokumo``)
4. In Minecraft, run: ``/script import <type> <identifier>``
5. Click the block or entity to attach the script

**To export a script:**

1. Run ``/script export <type>`` and click the block or entity
2. A paste.minr.org link will appear in chat
3. Click **Duplicate & Edit** (``Ctrl+D``) on the page to modify it, then save and re-import

You can also manage scripts without having to click on blocks by specifying coordinates or entity UUIDs. For example:

.. code-block:: console

    /script create interact 100 64 -200 Theta @player Welcome to the map!
    /script view walk Theta_the_end 100 64 -200
    /script remove entity 8c8f8962-37e4-4591-a19e-8a12e73cee21

Color Codes
-----------

Messages can be colored and styled using ``&`` codes. For example:

.. code-block:: msc

    @player &cThis is red, but &athis is green!
    @player &l&nThis is bold and underlined!
    @player &11 &22 &33 &44 &55 &66 &77 &88 &99 &aa &bb &cc &dd &ee &ff
    @player &#FF5733This is custom orange text!

The player sees:

.. code-block:: output

    &cThis is red, but &athis is green!
    &l&nThis is bold and underlined!
    &11 &22 &33 &44 &55 &66 &77 &88 &99 &aa &bb &cc &dd &ee &ff
    &#FF5733This is custom orange text!

Common codes include:

- ``&0``-``&9``, ``&a``-``&f``: Colors (black through white)
- ``&k``: :obfuscated:`Obfuscated` (random characters)
- ``&l``: **Bold**
- ``&m``: :strike:`Strikethrough`
- ``&n``: :underline:`Underline`
- ``&o``: *Italic*
- ``&r``: Reset formatting

See `this reference <https://www.digminecraft.com/lists/color_list_pc.php>`_ for a complete list. Note that the color codes reset the other formatting, so ``&c&lBold Red`` works, but ``&l&cBold Red`` results in normal red text.


Example: NPC Dialogue
---------------------

Let's create a dialogue where an NPC greets the player, pauses, then says goodbye:

.. code-block:: msc

    @cooldown 10s
    @player &6&lJohn&f: Hello there, traveler!
    @delay 3s
    @player &6&lJohn&f: Safe travels!

The ``@cooldown 10s`` prevents the player from retriggering the dialogue while it's still playing (or shortly after). This shows as:

.. code-block:: output

    &6&lJohn&f: Hello there, traveler!
    &6&lJohn&f: Safe travels!

with a 3-second pause between messages.



Expressions
-----------

MSC automatically evaluates expressions inside double curly braces like ``{{expression}}``. Anything inside the braces is computed and replaced with the result:

.. code-block:: msc

    @player 2 + 2 = {{2 + 2}}

.. code-block:: output

    2 + 2 = 4

Expressions can include arithmetic, function calls, and variable references. They work anywhere in a script line.


Variables
---------

Variables store values that can be used and modified throughout a script.

Defining Variables
^^^^^^^^^^^^^^^^^^

Use ``@define`` to create a variable:

.. code-block:: msc

    @define <Type> <name> = <value>

For example:

.. code-block:: msc

    @define String greeting = "Hello!"
    @define Int count = 0
    @define Boolean found = false

Modifying Variables
^^^^^^^^^^^^^^^^^^^

Use ``@var`` to change a variable's value:

.. code-block:: msc

    @define Int count = 1
    @var count = count + 1
    @player The count is now {{count}}

.. code-block:: output

    The count is now 2

Using Variables in Messages
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Use ``{{ }}`` to insert variable values into messages:

.. code-block:: msc

    @define String name = "Steve"
    @player &eHello, {{name}}!

.. code-block:: output

    &eHello, Steve!


Namespaces
----------

Variables defined with ``@define`` inside a script are local. They exist only while the script runs and are deleted when it finishes. To keep variables across script executions (or share them between scripts), you need a namespace.

A namespace is a container for persistent variables and functions. Variables in a namespace keep their values between script runs.

Creating Namespace Variables
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Use the ``/namespace`` command in Minecraft to define a namespace:

.. code-block:: console

    /namespace define mymap

To create variables within that namespace, use the ``/variable`` command:

.. code-block:: console

    /variable define <namespace> <Type> <name> = <value>

For example:

.. code-block:: console

    /variable define mymap Int score = 0
    /variable define mymap String secretWord = "banana"

Using a Namespace in Scripts
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add ``@using <namespace>`` at the top of your script to access its variables:

.. code-block:: msc

    @using mymap
    @var score = score + 10
    @player Your score is now {{score}}

Each time this script runs, the score increases by 10 and persists.

You can also specify the namespace explicitly when accessing variables, rather than using ``@using``:

.. code-block:: msc

    @var mymap::score = mymap::score + 5
    @player The score is now {{mymap::score}}


Relative Variables
------------------

By default, namespace variables are shared, which means all players see the same value. To give each player their own copy, use the ``relative`` qualifier:

.. code-block:: console

    /variable define mymap relative Int personalScore = 0

Now each player has their own ``personalScore`` that starts at 0. 

We can use this to create a click counter. First, create the namespace and variable:

.. code-block:: console

    /namespace define mymap
    /variable define mymap relative Int clicks = 0

Then create this script:

.. code-block:: msc

    @using mymap
    @var clicks = clicks + 1
    @player &eNumber of clicks so far: &d{{clicks}}

Each player sees their own click count.

.. code-block:: output

    &eNumber of clicks so far: &d1
    &eNumber of clicks so far: &d2
    (for another player)
    &eNumber of clicks so far: &d1


Branching with @if
------------------

Scripts can make decisions using ``@if``, ``@else``, and ``@fi``:

.. code-block:: msc

    @if <condition>
        # code here only runs if the condition is true
    @elseif <other condition>
        # code here runs if the first condition is false but this one is true
    @else
        # code here only runs if none of the above conditions are true
    @fi

The ``@elseif`` and ``@else`` sections are optional. ``@fi`` marks the end of the conditional block. For example:

.. code-block:: msc

    @define Int x = 5

    @if x > 10
        @player x is greater than 10
    @elseif x > 3
        @player x is greater than 3
    @else
        @player x is 3 or less
    @fi

.. code-block:: output

    x is greater than 3

Example: Collectible Egg
------------------------

Here's an example script for an egg that can only be collected once per player. First, we set up the namespace and variable:

.. code-block:: console

    /namespace define mymap
    /variable define mymap relative Boolean eggCollected = false

Then create this script and attach it to an egg block:

.. code-block:: msc

    @using mymap
    @if eggCollected
        @player &cYou have already found this egg!
    @else
        @player &aCongratulations! You found a secret egg!
        @var eggCollected = true
    @fi

The first time a player interacts with the egg, they see:

.. code-block:: output

    &aCongratulations! You found a secret egg!

Subsequent interactions show:

.. code-block:: output

    &cYou have already found this egg!


Chat Input with @prompt
-----------------------

The ``@prompt`` operator pauses the script and waits for the player to type something in chat:

.. code-block:: msc

    @prompt <timeout> <variable> [timeout message]

- **timeout**: How long to wait (e.g., ``30s``)
- **variable**: A String variable to store the player's input
- **timeout message**: Optional message shown if time runs out (default: "Prompt expired")

Note that the prompt does not give instructions to the player; you should display a message **before** the prompt to tell them to type something.

**Example: Quiz Question**

.. code-block:: msc

    @define String player_input

    @player &dWhat color is a banana?
    @prompt 30s player_input You took too long!

    @if player_input.equalsIgnoreCase("yellow")
        @player &aCorrect!
    @else
        @player &cIncorrect. The answer was yellow.
    @fi

The ``.equalsIgnoreCase()`` method compares strings ignoring capitalization, so "Yellow", "YELLOW", and "yellow" all match. The player sees:

.. code-block:: output

    &dWhat color is a banana?
    &aCorrect!                            &7(if player types "yellow" within 30 seconds)
    &cIncorrect. The answer was yellow.   &7(if player types anything else)
    &eYou took too long!                  &7(if player doesn't respond in time)

@return
-------

The ``@return`` operator immediately stops the script:

.. code-block:: msc

    @if alreadyCompleted
        @player You've already done this!
        @return
    @fi
    @player Starting the challenge...

This is useful for early exits when a condition is met.


Next Steps
----------

You now know the fundamentals of MSC! To learn more, you can work through the full documentation.