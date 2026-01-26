.. _appendix_scripts:

Script Reference
================

Quick reference for script types and operators. For detailed explanations, see :ref:`Scripts <scripts>`.

.. contents::
   :local:
   :depth: 2

Script Types
------------

Scripts are bound to triggers that determine when they execute.

.. list-table::
   :widths: 15 40 45
   :header-rows: 1

   * - Type
     - Trigger
     - Available Variables
   * - interact
     - Player right-clicks the bound block
     - ``player``, ``block``
   * - walk
     - Player enters the space above the bound coordinates
     - ``player``, ``block``
   * - ground
     - Player stands on the bound block (not jumping)
     - ``player``, ``block``
   * - entity
     - Player right-clicks the bound entity
     - ``player``, ``entity``
   * - area
     - Player enters the bound WorldGuard region
     - ``player``, ``region``
   * - function
     - Called explicitly from other scripts
     - (parameters only)
   * - method
     - Called on an instance of a custom type
     - ``this``, (parameters)
   * - constructor
     - Called when creating an instance of a custom type
     - ``this``, (parameters)

.. _appendix_scripts_script_operators:

Script Operators
----------------

Every script line begins with an operator. Blank lines and lines starting with ``#`` are ignored.

.. list-table::
   :header-rows: 1
   :class: operators-table

   * - Operator
     - Description
   * - ``@command <command>``
     - Execute a command with the player's permissions.
   * - ``@bypass <command>``
     - Execute a command with elevated (semi-admin) permissions. Most common.
   * - ``@console <command>``
     - Execute a command from the server console. Full permissions but no player context.
   * - ``@player <message>``
     - Send a message to the player. Supports ``&`` color codes and ``{{expr}}`` interpolation.
   * - ``@prompt <time> <var> [timeout msg]``
     - Wait for player chat input, store in variable. Script ends if time expires.
   * - ``@chatscript <group> <time> <func>``
     - Make the next ``@player`` message clickable, calling the function when clicked.
   * - ``@using <namespace>``
     - Set the active namespace for the rest of the script.
   * - ``@define <Type> <name> [= expr]``
     - Define a local variable, optionally with an initial value.
   * - ``@var [name =] <expression>``
     - Evaluate an expression, optionally assigning the result to a variable.
   * - ``@delay <time>``
     - Pause execution for the specified duration.
   * - ``@cooldown <time>``
     - Prevent this player from re-triggering the script until time expires.
   * - ``@global_cooldown <time>``
     - Prevent any player from re-triggering the script until time expires.
   * - ``@cancel``
     - Cancel the default interaction (e.g., prevent button click animation).
   * - ``@return [expression]``
     - Stop execution and optionally return a value (for functions).
   * - ``@fast``
     - Remove the one-tick delay after command operators.
   * - ``@slow``
     - Restore the one-tick delay after ``@fast``.
   * - ``@if <condition>``
     - Begin a conditional block; execute following lines if condition is true.
   * - ``@elseif <condition>``
     - Alternative condition if previous ``@if``/``@elseif`` was false.
   * - ``@else``
     - Execute following lines if all previous conditions were false.
   * - ``@fi``
     - End a conditional block.
   * - ``@for <Type> <name> in <list>``
     - Iterate over a list, binding each element to the named variable.
   * - ``@done``
     - End a ``@for`` loop block.
   * - ``# comment``
     - Comment line (ignored by the interpreter).

Script Actions
--------------

Commands for managing scripts. Parent command: ``/script``

.. list-table::
   :widths: 35 65
   :header-rows: 1

   * - Action
     - Description
   * - ``create <type> [line] [content]``
     - Add a line to the script. Specify ``line`` to insert at a position.
   * - ``view <type>``
     - Display the script contents.
   * - ``remove <type> [line]``
     - Delete the entire script, or just a specific line.
   * - ``info <type>``
     - Show script metadata.
   * - ``export <type>``
     - Upload the script to paste.minr.org.
   * - ``import <type> <id>``
     - Download and import a script from paste.minr.org.
   * - ``copy``
     - Copy all scripts in WorldEdit selection to clipboard.
   * - ``paste <type>``
     - Paste scripts of type from clipboard.
   * - ``wipe <type>``
     - Remove all scripts of type in WorldEdit selection.
   * - ``count <type>``
     - Count scripts of type in WorldEdit selection.
   * - ``undo``
     - Undo the last script command (up to 10 actions).
