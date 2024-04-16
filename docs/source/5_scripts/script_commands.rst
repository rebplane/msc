Commands
--------------------

The scripts command always has the following format:

.. code-block:: console
    
    /script <action> <type> [typeparameters] [actionparameters]

.. _scripts_action:

Action
-----------------------

*A summarized version can be found in the appendix:* :ref:`Supported actions for script commands <appendix_scripts_actions>`

In this section, all <type> [typeparameters] are replaced by ... for easier overview. Do
note that the type is still required, and the type parameters come **before** the action
parameters.

*action* can be one of the following:

**create ... [line] <@operator> <script>**

Adds a line to the end of the script. When *line* is passed, it adds the line on the given
line number instead.

Example:

.. code-block:: console

    /script create interact @player hi!

.. code-block:: console

    @player hi!

.. code-block:: console

    /script create interact @player hi2!

.. code-block:: console

    @player hi!
    @player hi2!

.. code-block:: console

    /script create interact 1 @player hi3!

.. code-block:: console

    @player hi3!
    @player hi!
    @player hi2!

**view ...**

View the lines of the script in chat.

Example: (viewing the script created above).

.. code-block:: console

    /script view interact

.. code-block:: console

    @player hi3!
    @player hi!
    @player hi2!

**remove ... [line]**

Remove the entire script. When *line* is passed, it removes only the line instead.

Example: (editing the script created above).

.. code-block:: console

    /script remove interact 1

.. code-block:: console

    @player hi!
    @player hi2!

.. code-block:: console

    /script remove interact

.. code-block:: console

**info ...**

List metadata and comments about the script.


**export ...**

Export the script to hastebin. (See :ref:`Hastebin <script_hastebin>` for more information).

**import ... <id>**

Import the script from hastebin. *id* is the identifier of your hastebin script, and should
be passed. (See Hastebin for more information).

**copy**

Copy all scripts in a World-Edit selected region to the players’ clipboard, relative to
player position.

**paste <type>**

Pastes all scripts of type previously copied to clipboard relative to player position.

**wipe <type>**

Removes all scripts of type in a World-Edit selected region.

**count <type>**

Counts all scripts of type in a World-Edit selected region.

**undo**

Undoes a previously executed Script command.

.. _scripts_type:

Type
-------------------

Type is one of the triggers described in :ref:`Script Types <scripts_script_types>`. Each type has their own set of
optional type parameters to select a block, entity, area or function. Some types also
support leaving this blank, allowing the player to interact with a block, entity or area
to define it afterwards.


**interact [x y z] [world]**

*x y z* are the coordinates the script should be bound to. *world* is the world in which the
block should be found. If world is undefined, it will take the player’s current world. If
x y z are undefined, the player will be asked to interact with a block to bind the script.

**walk [x y z] [world]**

*x y z* are the coordinates the script should be bound to. *world* is the world in which the
block should be found. If world is undefined, it will take the player’s current world. If
x y z are undefined, the player will be asked to interact with a block to bind the script.

**ground [x y z] [world]**

*x y z* are the coordinates the script should be bound to. *world* is the world in which the
block should be found. If world is undefined, it will take the player’s current world. If
x y z are undefined, the player will be asked to interact with a block to bind the script.

**entity [uuid] [world]**

uuid is the UUID of the entity the script should be bound to. *world* is the world in
which the entity should be found. If world is undefined, it will take the player’s current
world. If uuid is undefined, the player will be asked to interact with an entity to bind
the script. If no entity exists with the given UUID, the command will fail.

**area [world] <region>**

*world* is the world in which the block should be found. If world is undefined, it will take
the player’s current world. *region* is the WorldGuard region the script should be bound
to. The script is executed upon entering the region.

**function <namespace> <function>**

Binds the script to the corresponding *function* in *namespace*. If no such function exists
in the namespace, the command will fail.

**method<namespace> <Type> <method>**

Binds the script to the corresponding *method* in *Type*. If no such method exists, the
command will fail.


**constructor <namespace> <Constructor Signature>**

Binds the script to the corresponding constructor. The Constructor Signature serves to
distinguish multiple constructors with different signatures, such as:

.. code-block:: console

    String(Player)
    String(Int)

These, while having the same type, have different signatures. To access these constructors
(note that built-in constructors cannot be edited), you would use the full definition, in 
contrast to functions and methods, where only the name suffices.
