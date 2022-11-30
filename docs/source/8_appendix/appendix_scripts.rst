Scripts
---------------


.. contents::

.. _appendix_scripts_actions:

Script Actions
----------------

Table 9.34: Supported actions for script commands

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - create ... [line] 
      - Add a line to the end of the script. Whenlineis passed, it adds

        the line on the given line number instead.

    * - view ... 
      - View the lines of the script in chat.

    * - remove ... [line] 
      - Remove the entire script or a given line.

    * - info ... 
      - List metadata and comments about the script.

    * - export ... 
      - Export the script to hastebin. (See Hastebin (link) for more

        information).

    * - import ...<id> 
      - Import the script from hastebin.idis the identifier of your

        hastebin script, and must be passed. (See Hastebin (link) for more

        information).

    * - copy 
      - Copies all scripts in a WorldEdit selected area to the players

        clipboard, relative to the position of the player. Scripts in the

        copied area that are removed or not present upon pasting, will

        not be pasted.

    * - wipe <type> 
      - Removes all scripts of the given script *type* in a WorldEdit

        selected area.
    
    * - paste <type> 
      - Pastes all scripts of the given script *type* relative to the new
        
        location. (Offsets are calculated from the copy position and then
        
        reapplied from the new position).

    * - count <type> 
      - Counts the amount of scripts of the given script *type* in the
        
        WorldEdit selected area.

    * - undo 
      - Undos the last script creation, removal, edit, import or export.
        
        Currently not supported for any commands involving Functions,
        
        Constructors or Methods. Stores up to 10 actions.

.. _appendix_scripts_script_types:

Script Types
----------------

Table 9.35: Supported Script types

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - interact [x y z] [world] 
      - Binds to a script triggered

        when the player interacts

        with a block. Optionally

        attached to x, y, z in world.

    * - walk [x y z] [world] 
      - Binds to a script triggered

        when the player walks over a

        block. Optionally attached

        to x, y, z in world.

    * - ground [x y z] [world] 
      - Binds to a script triggered

        when the player is on the

        ground. Optionally attached

        to x, y, z in world.

    * - entity [uuid] [world] 
      - Binds to a script triggered

        when the player interacts

        with an entity. Script is

        removed once the entity dies.

        Optionally attached to a

        specific UUID in world.

    * - area <region> 
      - Binds to a script triggered

        once when a player enters an

        area. Attached to a

        WorldGuard region.

    * - function<namespace> <function> 
      - Binds to a function explicitly

        called from within other

        scripts or expressions.

    * - method <namespace> <Type> <method> 
      - Binds to a method explicitly

        called with an instance of

        Type.

    * - constructor<namespace> <Constructor Signature> 
      - Binds to a constructor

        explicitly called when

        constructing an instance.

        Constructor Signatureserves

        to distinguish multiple

        constructors with different

        signatures.

.. _appendix_scripts_script_operators:

Script Operators
--------------------------


Table 9.36: Command Script operators

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - @command<command> 
      - Execute a command as the player. Can only execute the
        
        commands the player can also execute.

    * - @bypass<command> 
      - Execute a command as the player in an elevated
        
        position. Allows the execution of most admin
        
        commands.

    * - @console<command> 
      - Execute a command as the console. Allows the
        
        execution of all admin commands, but not those relative
        
        to the player.

Table 9.37: Chat Script operators

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - @chatscript <group> <time> <function> 
      - Binds a function to the following

        @player message. When the message is

        clicked in chat, it will be executed.

        Chatscript runs out whentimeruns

        out, or if a chatscript ofgroupwas

        already clicked.

    * - @player<message> 
      - Sends a message to the player in chat.

        Supports color codes prefixed with the

        character ’&’.

    * - @prompt<time> <variable>[message] 
      - Stores the next message the player

        types in chat in the variable. Prompt

        ends when time runs out, with the

        given optional message. Defaults to

        Prompt expired. Message supports

        color codes with &.

Table 9.38: Variable Script operators

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - @using<namespace> 
      - Sets the namespace for the following

        lines. The script can then use the

        variables and functions from the

        namespace. Note that the variables in

        the local namespace will always override

        variables from an @using namespace.

    * - @define<Type> <name>[= expression] 
      - Defines a variable in the local

        namespace.

    * - @var [name =]<expression> 
      - Performs an expression or assigns a

        variable to the result of an expression.

Table 9.39: Control Script operators

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - @delay<time> 
      - Delays the execution of the rest of the script by a

        specified amount.

    * - @cooldown<time> 
      - Disallows the executor to re-execute the script for a

        specified amount of time. When used in functions,

        terminates the calling script when the function is on

        cooldown.

    * - @globalcooldown<time> 
      - Disallows all players to execute the script for a specified

        amount of time. When used in functions, terminates

        the calling script when the function is on cooldown.

    * - @cancel 
      - Cancels the interaction between player and the object

        the script is bound to. Only has effect before any

        @delay, @prompt, @command, @console or @bypass

        lines.

    * - @return [expression] 
      - Stops the execution of the current script/function, and

        optionally returns a value, if required.
    
    * - @fast 
      - By default, the @command, @bypass or @console script operators have 
      
        a one-tick delay (like @delay 1). @fast will remove that delay for all 
      
        subsequent command operators.

    * - @slow
      - Re-adds the delay that was removed with @fast. Note that this 
      
        effect (@fast and @slow) only applies to the local execution 
        
        context - other functions called will be unaffected.


Table 9.40: Branching Script operators

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - @if<expression> 
      - Conditionally evaluate the following section of the script if
        
        the operand is (or evaluates to) true.

    * - @else 
      - Evaluate the following section of the script if the preceding
        
        @if was false.

    * - @elseif<expression> 
      - Conditionally evaluate the following section of the script if
        
        the preceding @if was false, and the operand is (or evaluates

        to) true.

    * - @fi 
      - Ends a conditional section.


Table 9.41: Misc Script operators

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - @undefined No operation. 
      - May sometimes appear on legacy scripts. Can be used

        as a comment for complex lines or scripts.