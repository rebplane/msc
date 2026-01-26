.. _scripts:

Scripts
=======

A script is an ordered list of operations that execute in sequence. Scripts can execute commands, manipulate variables, control game state, and respond to player actions. Unlike functions, which must be called explicitly, scripts are triggered automatically when certain events occur.

.. contents:: Contents
   :local:

Script Types
------------

Scripts must be bound to a trigger: a block, entity, or area. The type of trigger determines when the script runs.

- **interact** scripts trigger when a player right-clicks on the associated block.

- **walk** scripts trigger when a player enters the space above the block. The block itself doesn't need to exist; the script triggers based on the saved coordinates.

- **ground** scripts trigger only when a player is standing on the block. Unlike walk scripts, these require the player to actually be on the block, not jumping over it.

- **entity** scripts trigger when a player right-clicks on the associated entity.

- **area** scripts trigger when a player enters a WorldGuard region. The script runs once per entry.

Script Variables
^^^^^^^^^^^^^^^^

Depending on their type, some scripts have special built-in variables with context about the trigger.

- ``player`` (of type Player) is the player triggering the script, available in non-function scripts.

- ``block`` (of type Block) is the block the script is on, available in interact/walk/ground scripts.

- ``entity`` (of type Entity) is the entity the script is bound to, available only in entity scripts.

- ``region`` (of type Region) is the region the script is bound to, available only in area scripts.

.. code-block:: msc

    @player Hi, {{player.getName()}}! You clicked the block at {{block.getX()}}, {{block.getY()}}, {{block.getZ()}}.
    @bypass /teleport @s {{player.getLocation().getX()}} 100 {{player.getLocation().getZ()}}

.. code-block:: output

    Hi, Rickyboy320! You clicked the block at 100, 64, -200.

(This example assumes the script is bound to a block at those coordinates.)

Script Operators
----------------

Every line in a script begins with an operator that determines what the line does. The exception to this is blank lines or comments (lines starting with ``#``), which are ignored.

Operators fall into several categories.

Command Operators
^^^^^^^^^^^^^^^^^

Three operators execute Minecraft commands:

``@command <command>`` executes with the player's permissions. If the player doesn't have permission to run the command, it fails.

``@bypass <command>`` elevates the player to semi-admin permissions, allowing most Minecraft and Minr commands. This is the most commonly used command operator.

``@console <command>`` executes from the server console. This has full permissions but cannot use player-relative features like ``@s``.

.. code-block:: msc

    @command /spawn
    @bypass /teleport @s 100 64 200
    @console /say Hello from the server!

All command operators introduce a one-tick (0.05s) delay before continuing. A script with 20 commands takes at least one second to complete.

Branching Operators
^^^^^^^^^^^^^^^^^^^

Branching operators control which parts of a script execute based on conditions.

``@if <condition>`` starts a conditional block. If the condition is true, the following lines execute. If false, execution skips to the matching ``@elseif``, ``@else``, or ``@fi``.

``@elseif <condition>`` provides an alternative condition if the previous ``@if`` or ``@elseif`` was false.

``@else`` executes if all previous conditions were false.

``@fi`` ends the conditional block.

.. code-block:: msc

    @if score >= 100
        @player &aYou win!
    @elseif score >= 50
        @player &eAlmost there...
    @else
        @player &cKeep trying!
    @fi

Conditional blocks can be nested:

.. code-block:: msc

    @if hasKey
        @if doorOpen
            @player The door is already open.
        @else
            @player You unlock the door.
            @var doorOpen = true
        @fi
    @else
        @player You need a key.
    @fi

``@return`` stops the script immediately. In functions, it can also return a value.

.. code-block:: msc

    @if !authorized
        @player &cAccess denied.
        @return
    @fi
    @player Welcome to the secret room!

Control Operators
^^^^^^^^^^^^^^^^^

Control operators affect script timing and execution.

``@delay <time>`` pauses the script for the specified duration. Time can be written as ``5s`` (seconds), ``100t`` (ticks), or ``2m`` (minutes).

.. code-block:: msc

    @player The door will close in 5 seconds...
    @delay 5s
    @bypass /setblock 100 64 200 stone

``@cooldown <time>`` prevents the same player from triggering the script again until the cooldown expires. Must appear before any delays.

``@global_cooldown <time>`` prevents *any* player from triggering the script again until the cooldown expires. Must appear before any delays.

.. code-block:: msc

    @cooldown 1m
    @player You found a coin!
    @var coins = coins + 1

``@cancel`` prevents the default interaction (for interact scripts). Useful for buttons that shouldn't visually click. Must appear before any delays.

``@fast`` makes the script execute as fast as possible, ignoring the one-tick delay after commands. Use with caution, as long scripts may cause server lag or cause some commands to fail.

``@slow`` restores normal timing after ``@fast``.

Variable Operators
^^^^^^^^^^^^^^^^^^

Variable operators work with data. These are covered in detail in :ref:`Variables <variables>` and :ref:`Expressions <expressions>`.

``@using <namespace>`` sets the active namespace for the rest of the script.

``@define <Type> <name> [= value]`` creates a local variable.

``@var <expression>`` modifies a variable or calls a function.

.. code-block:: msc

    @using mymap
    @define Int temp = score * 2
    @var score = temp + 3

Loop Operators
^^^^^^^^^^^^^^

``@for <Type> <name> in <list>`` iterates over a list (see :ref:`Lists <lists>`). The loop body ends with ``@done``.

.. code-block:: msc

    @define Int[] my_list = Int[1, 10, 100, 1000]
    @for Int i in my_list
        @player Number: {{i}}
    @done

.. code-block:: output

    Number: 1
    Number: 10
    Number: 100
    Number: 1000

Chat Operators
^^^^^^^^^^^^^^

``@player <message>`` sends a message to the player. Supports color codes with ``&`` and expressions with ``{{ }}``.

.. code-block:: msc

    @player &aWelcome, &b{{player.getName()}}&a!
    @player Your score is {{score}}.

``@prompt <time> <variable> [timeout message]`` waits for the player to type something in chat. The input is stored in the variable (which must be a String). If time expires, the script ends.

.. code-block:: msc

    @define String answer
    @player What is the password?
    @prompt 30s answer &cTime's up!
    @if answer == "secret"
        @player &aCorrect!
    @else
        @player &cWrong password.
    @fi

``@chatscript <group> <time> <function>`` makes the next ``@player`` message clickable. Clicking it calls the specified function (see :ref:`Functions <functions>`). Only one chatscript per group can be clicked.

.. code-block:: msc

    @chatscript choice 30s mymap::chooseRed()
    @player [Click for Red]
    @chatscript choice 30s mymap::chooseBlue()
    @player [Click for Blue]

If the player clicks "Red", the ``chooseRed()`` function runs and "Blue" becomes unclickable (same group). After 30 seconds, both expire.

Paste.minr.org
--------------

Writing scripts in Minecraft chat is tedious. MSC supports `paste.minr.org <https://paste.minr.org/>`_, an online text editor where you can write scripts. To use it:

1. Write your script at paste.minr.org
2. Click Save (or Ctrl+S)
3. Copy the URL or the identifier at the end (looks like ``ovoguqaxum``)
4. Run ``/script import <type> <identifier>`` and click the target block/entity

To edit an existing script:

1. Run ``/script export <type>`` and click the target
2. Click the link to view the script on paste.minr.org
3. Click Edit, make changes, and Save
4. Import the new version with the new ID

The import command accepts the full URL or just the ID.

Command Reference
-----------------

.. list-table::
    :widths: 35 65
    :header-rows: 1

    * - Command
      - Description
    * - ``/script create <type> [@operator] [content]``
      - Adds a line to the script. If the script doesn't exist, creates it.
    * - ``/script create <type> <line> [@operator] [content]``
      - Inserts a line at the specified position.
    * - ``/script view <type>``
      - Displays the script contents.
    * - ``/script remove <type>``
      - Deletes the entire script.
    * - ``/script remove <type> <line>``
      - Deletes a specific line.
    * - ``/script info <type>``
      - Shows script metadata.
    * - ``/script export <type>``
      - Uploads to paste.minr.org.
    * - ``/script import <type> <id>``
      - Downloads from paste.minr.org.
    * - ``/script copy``
      - Copies scripts in WorldEdit selection to clipboard.
    * - ``/script paste <type>``
      - Pastes scripts from clipboard.
    * - ``/script wipe <type>``
      - Removes all scripts of type in WorldEdit selection.
    * - ``/script count <type>``
      - Counts scripts of type in WorldEdit selection.
    * - ``/script undo``
      - Undoes the last script command.

Note that these commands can only be run by admins on the main server. You will have to use the test server to run these commands yourself, or ask an admin to set up scripts for you on the main server.

Type Parameters
^^^^^^^^^^^^^^^

Each type has optional parameters to specify the target.

For interact, walk, and ground scripts, you can specify the block coordinates and world. If omitted, you'll be prompted to click a block.

For entity scripts, you can specify the entity UUID. If omitted, you'll be prompted to click an entity.

For area scripts, you must specify the WorldGuard region name and world (since you can't click a region).

For functions, methods, and constructors, you must specify the namespace and signature.

For example:

.. code-block:: console

    /script create interact 1234 56 -789 Theta @bypass /give @s diamond 1
    