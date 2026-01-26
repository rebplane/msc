.. _types:

Types
=====

Every value in MSC has a type. The type determines what the value represents, what operations can be performed on it, and what methods are available. So far we have used types like ``Int``, ``String``, and ``Player`` without much explanation. This chapter explores how types work in detail and introduces user-defined types, which allow you to create your own.

.. contents:: Contents
   :local:

What is a Type?
---------------

A type is a classification that defines what a value can do. When you write ``@define Int count = 5``, you are telling MSC that ``count`` holds integer values and can be used with operations like ``+``, ``-``, and ``*``. When you write ``@define Player p = Player("Ajdj123321")``, you are telling MSC that ``p`` holds a reference to a player and can use methods like ``getName()`` and ``getHealth()``.

Types serve three purposes:

1. **Safety**: MSC can catch errors before your script runs. If you try to call ``getName()`` on an integer, MSC knows that doesn't make sense and reports an error.

2. **Documentation**: Types make code easier to understand. Seeing ``Player target`` tells you what kind of value to expect, even without reading the rest of the script.

3. **Organization**: Complex types group related data and behavior together. A ``Player`` bundles a name, position, health, inventory, and dozens of methods into a single value.

Built-in Types
--------------

MSC provides two categories of built-in types: primitive types for basic values, and complex types for interacting with the Minecraft world.

Primitive Types
^^^^^^^^^^^^^^^

Primitive types represent simple values. They are covered in detail in :ref:`Variables <variables>`, but here is a quick summary:

.. list-table::
    :widths: 20 40 40
    :header-rows: 1

    * - Type
      - Description
      - Example Literals
    * - ``String``
      - Text
      - ``"Hello"``, ``"Score: {{x}}"``
    * - ``Int``
      - Whole number (-2 billion to 2 billion)
      - ``42``, ``-7``, ``0``
    * - ``Long``
      - Large whole number
      - ``100L``, ``9999999999L``
    * - ``Float``
      - Decimal number
      - ``3.14``, ``-0.5``
    * - ``Double``
      - Precise decimal number
      - ``3.14159D``, ``1.0D``
    * - ``Boolean``
      - True or false
      - ``true``, ``false``

Primitive types have constructors for converting between types:

.. code-block:: msc

    # Convert a String to an Int
    @define Int x = Int("42")
    # Convert an Int to a String
    @define String s = String(100)
    # Convert an Int to a Double
    @define Double d = Double(5)
    @player {{x}}, {{s}}, {{d}}

.. code-block:: output

    42, 100, 5.0

Complex Types
^^^^^^^^^^^^^

Complex types represent objects in the Minecraft world. Unlike primitives, they are created using constructors and provide methods for interacting with their data.

.. list-table::
    :widths: 20 80
    :header-rows: 1

    * - Type
      - Description
    * - ``Player``
      - A Minecraft player. Provides access to name, position, health, inventory, and more.
    * - ``Entity``
      - Any Minecraft entity (mobs, armor stands, arrows, etc.).
    * - ``Block``
      - A block in the world at specific coordinates.
    * - ``Item``
      - An item stack with a type and amount.
    * - ``Location``
      - A position with decimal coordinates (x, y, z) and a world.
    * - ``BlockLocation``
      - A position with integer coordinates aligned to the block grid.
    * - ``Position``
      - A Location with yaw and pitch (direction the entity is facing).
    * - ``Region``
      - A WorldGuard region or a custom-defined area.
    * - ``Vector3``
      - A 3D vector of Doubles (x, y, z).
    * - ``BlockVector3``
      - A 3D vector of Ints aligned to the block grid.
    * - ``Vector2``
      - A 2D vector of Doubles (x, z).
    * - ``BlockVector2``
      - A 2D vector of Ints on the XZ plane.

For a complete reference of constructors and methods for each type, see :ref:`Built-in Types <appendix_built_in_types>`.

Constructors
------------

A constructor creates a new instance of a type. Constructors are called by writing the type name followed by arguments in parentheses:

.. code-block:: msc

    # Create a Player from their username
    @define Player p = Player("Ajdj123321")
    # Create a Block from coordinates and world name
    @define Block b = Block(100, 64, -200, "Theta")
    # Create a Location with precise decimal coordinates
    @define Location loc = Location(100.5D, 64.0D, -200.5D, "Theta")

Each type has specific constructors that accept different arguments. For example, ``Player`` can be constructed from a name, a UUID, or coordinates:

.. code-block:: msc

    # Find player by their current username
    @define Player p1 = Player("Ajdj123321")
    # Find player by their UUID (works even if they changed their name or are offline)
    @define Player p2 = Player("e62bfa1e-f625-4ad3-9403-7e7f8e14d0f1")
    # Find a player standing at specific coordinates
    @define Player p3 = Player(100, 64, -200, "Theta")

The first finds a player by name, the second by UUID, and the third finds a player at specific coordinates. If no matching player exists or is online, the constructor returns ``null``.

Constructors that might fail (like ``Player`` for an offline player or ``Block`` for an unloaded chunk) may return ``null``. Always check for null before using the result:

.. code-block:: msc

    @define Player target = Player("someone")
    @if target != null
        @player Found {{target.getName()}}!
    @else
        @player That player is not online.
    @fi

.. code-block:: output

    That player is not online.

Methods
-------

Methods are functions that belong to a type (see also :ref:`Functions <functions>` for standalone functions). They are called using dot notation on a value:

.. code-block:: msc

    @define Player p = Player("Ajdj123321")
    @player Name: {{p.getName()}}
    @player Health: {{p.getHealth()}}
    @player World: {{p.getWorld()}}

.. code-block:: output

    Name: Ajdj123321
    Health: 20.0
    World: Theta

Methods can take arguments:

.. code-block:: msc

    @define Vector3 initial = Vector3(1.0D, 2.0D, 3.0D)
    @define Vector3 other = Vector3(4.0D, 5.0D, 6.0D)

    @define Double dot_product = initial.dot(other)
    @player Dot product: {{dot_product}}

.. code-block:: output

    Dot product: 32.0

Some methods modify the object (these typically return ``Void``):

.. code-block:: msc

    # Heal the player to full health
    @var player.setHealth(20.0D)
    # Close any open inventory screen
    @var player.closeInventory()

Others return a value that can be used in expressions:

.. code-block:: msc

    @if player.getHealth() < 10.0D
        @player &cYou're low on health!
    @fi

Methods can be chained when each method returns a value:

.. code-block:: msc

    @player {{"  hello world  ".trim().toUpperCase()}}

.. code-block:: output

    HELLO WORLD

Working with Built-in Types
---------------------------

Here are practical examples of working with the most commonly used types.

.. admonition:: Technical Detail
   :class: technical-detail

   A full list of all built-in types, their constructors, and methods can be found in :ref:`Built-in Types <appendix_built_in_types>`. These examples cover only a subset of the available functionality for illustrative purposes.

Player
^^^^^^

The ``Player`` type provides access to nearly everything about a player:

.. code-block:: msc

    @player Name: {{player.getName()}}
    @player Position: {{player.getX()}}, {{player.getY()}}, {{player.getZ()}}
    @player Health: {{player.getHealth()}} / {{player.getMaxHealth()}}
    @player Is sneaking? {{player.isSneaking()}}

.. code-block:: output

    Name: Ajdj123321
    Position: 1508.5, 101.0, -6187.5
    Health: 20.0 / 20.0
    Is sneaking? false

You can modify player state:

.. code-block:: msc

    # Restore full health
    @var player.setHealth(20.0D)
    # Give 100 experience points
    @var player.giveExp(100)
    # Fill hunger bar
    @var player.setFoodLevel(20)

And access inventory:

.. code-block:: msc

    @define Item hand = player.getItemInMainHand()
    # Check if holding something (AIR means empty hand)
    @if hand.getItemType() != "AIR"
        @player You're holding {{hand.getItemType()}}
    @else
        @player Your hand is empty
    @fi

.. code-block:: output

    You're holding DIAMOND_SWORD

Block
^^^^^

The ``Block`` type represents a block in the world:

.. code-block:: msc

    @define Block b = Block(100, 64, -200, "Theta")
    @player Type: {{b.getBlockType()}}
    @player Light level: {{b.getLightLevel()}}
    @player Is powered? {{b.isBlockPowered()}}

.. code-block:: output

    Type: STONE
    Light level: 0
    Is powered? false

Get blocks relative to another block:

.. code-block:: msc

    # Get the block directly below this one
    @define Block below = block.getRelative(0, -1, 0)
    @if below.isEmpty()
        @player There's nothing below!
    @else
        @player Below: {{below.getBlockType()}}
    @fi

.. code-block:: output

    Below: STONE

Location and Position
^^^^^^^^^^^^^^^^^^^^^

``Location`` represents a precise position with decimal coordinates. ``Position`` adds yaw and pitch for direction:

.. code-block:: msc

    # Get the player's current location
    @define Location loc = player.getLocation()
    @player You are at {{loc.getX()}}, {{loc.getY()}}, {{loc.getZ()}}

    # Get full position including where they're looking
    @define Position pos = player.getPosition()
    @player Facing: yaw={{pos.getYaw()}}, pitch={{pos.getPitch()}}

.. code-block:: output

    You are at 1508.5, 101.0, -6187.5
    Facing: yaw=90.0, pitch=0.0

Convert between location types:

.. code-block:: msc

    # Create a precise location
    @define Location loc = Location(100.7D, 64.3D, 200.2D, "Theta")
    # Convert to block coordinates (floors each component)
    @define BlockLocation blockLoc = loc.asBlockLocation()
    @player Block coordinates: {{blockLoc}}

.. code-block:: output

    Block coordinates: 100 64 200 Theta

Teleport a player using a Position:

.. code-block:: msc

    # Create destination: x, y, z, yaw (90 = west), pitch (0 = level), world
    @define Position destination = Position(100.0D, 64.0D, -200.0D, 90.0, 0.0, "Theta")
    @var player.teleport(destination)
    @player Teleported!

.. code-block:: output

    Teleported!

Region
^^^^^^

The ``Region`` type wraps WorldGuard regions:

.. code-block:: msc

    # Look up an existing WorldGuard region
    @define Region r = Region("spawn", "Alpha")
    @if r.containsPlayer(player)
        @player You are in spawn!
    @else
        @player You are not in spawn.
    @fi

.. code-block:: output

    You are not in spawn.

Create a temporary region for checking bounds:

.. code-block:: msc

    # Define corners of a bounding box
    @define BlockVector3 min = BlockVector3(0, 60, 0)
    @define BlockVector3 max = BlockVector3(100, 80, 100)
    # Create a transient region (not saved to WorldGuard)
    @define Region bounds = Region(min, max, "Theta")
    @if bounds.containsPlayer(player)
        @player You are within the bounds!
    @else
        @player You are outside the bounds.
    @fi

.. code-block:: output

    You are outside the bounds.

User-Defined Types
------------------

While built-in types cover most needs, you can create your own types to organize related data. User-defined types group fields (variables) and methods (functions) into a reusable structure.

.. admonition:: Beginner Note
   :class: beginner-note

   User-defined types are an advanced feature. If you're new to MSC, focus on built-in types first before exploring this section. The rest of this chapter can be revisited when you're more comfortable with MSC scripting and ready to create complex data structures.

Consider a map that tracks player statistics. You might have separate variables for each stat:

.. code-block:: console

    /variable define mymap relative Int deaths = 0
    /variable define mymap relative Int jumps = 0
    /variable define mymap relative Long startTime = 0L

This works, but the variables are loosely connected. A user-defined type bundles them together:

.. code-block:: console

    /type define mymap PlayerStats

Now ``PlayerStats`` is a type that can hold fields and methods, just like ``Player`` or ``Block``.

Creating a Type
^^^^^^^^^^^^^^^

Types are created with the ``/type define`` command (all type-related commands are listed in the :ref:`Command Reference <appendix_commands>`):

.. code-block:: console

    /type define <namespace> <TypeName>

Type names must start with an uppercase letter:

.. code-block:: console

    /type define mymap Coordinate
    /type define mymap PuzzleState
    /type define mymap Timer

Once a type exists, you can add fields, methods, and constructors to it.

Fields
------

Fields are variables that belong to each instance of a type. They store the state of the instance.

Add a field with the ``/type field define`` command:

.. code-block:: console

    /type field define <namespace> <TypeName> <FieldType> <fieldName>

For example, a ``Coordinate`` type might store a position and a label:

.. code-block:: console

    /type field define mymap Coordinate Int x
    /type field define mymap Coordinate Int y
    /type field define mymap Coordinate Int z
    /type field define mymap Coordinate String label

Access fields using dot notation:

.. code-block:: msc

    @using mymap
    # Create a coordinate (assuming constructor is defined)
    @define Coordinate spot = Coordinate(100, 64, -200, "Treasure")
    @player "{{spot.label}}" is at {{spot.x}}, {{spot.y}}, {{spot.z}}

.. code-block:: output

    "Treasure" is at 100, 64, -200

Modify fields the same way:

.. code-block:: msc

    # Update the position and label
    @var spot.x = 150
    @var spot.label = "New Treasure"
    @player Now at {{spot.x}} with label "{{spot.label}}"

.. code-block:: output

    Now at 150 with label "New Treasure"

Each instance has its own copy of each field. Changing one instance does not affect others:

.. code-block:: msc

    @define Coordinate c1 = Coordinate(0, 64, 0, "A")
    @define Coordinate c2 = Coordinate(100, 64, 100, "B")
    # Only c1 is changed
    @var c1.label = "Changed"
    @player c1: {{c1.label}}, c2: {{c2.label}}

.. code-block:: output

    c1: Changed, c2: B

Methods
-------

Methods are functions that operate on instances of a type. They can read and modify the instance's fields, and they have access to the ``this`` keyword.

Define a method with the ``/type method define`` command:

.. code-block:: console

    /type method define <namespace> <TypeName> [ReturnType] <methodName>([parameters])

For example, a method to calculate distance from the coordinate to a player:

.. code-block:: console

    /type method define mymap Coordinate Double distanceTo(Player p)

Then add the method body with the script command:

.. code-block:: console

    /script create method mymap Coordinate distanceTo(Player)

The script might be:

.. code-block:: msc

    # Calculate the difference in each dimension
    @define Double dx = Double(this.x) - p.getX()
    @define Double dy = Double(this.y) - p.getY()
    @define Double dz = Double(this.z) - p.getZ()
    # Return the Euclidean distance
    @return math::sqrt(dx*dx + dy*dy + dz*dz)

Now the method can be called on any instance:

.. code-block:: msc

    @define Coordinate goal = Coordinate(100, 64, -200, "Goal")
    @player Distance to goal: {{goal.distanceTo(player)}} blocks

.. code-block:: output

    Distance to goal: 42.5 blocks

Methods without a return type perform actions:

.. code-block:: console

    /type method define mymap Coordinate teleportHere(Player p)

.. code-block:: msc

    # Build a Position from the coordinate's fields
    @define Position pos = Position(Double(this.x), Double(this.y), Double(this.z), 0.0, 0.0, "Theta")
    # Teleport the player
    @var p.teleport(pos)
    @player {{p.getName()}} teleported to "{{this.label}}"!

The ``this`` Keyword
--------------------

Inside a method or constructor, ``this`` refers to the current instance. Use it to access the instance's fields and methods.

Without ``this``, there would be no way for a method to access its own instance's data:

.. code-block:: msc

    @return this.x + this.y + this.z

If a parameter has the same name as a field, ``this`` disambiguates them:

.. code-block:: msc

    @var this.x = x
    @var this.y = y

In this example, ``x`` refers to the parameter, while ``this.x`` refers to the field.

Constructors
------------

Constructors initialize new instances. Without a constructor, fields start at their default values (0 for numbers, ``""`` for strings, ``false`` for booleans, ``null`` for complex types).

Define a constructor with the ``/type constructor define`` command:

.. code-block:: console

    /type constructor define <namespace> <TypeName>([parameters])

For the ``Coordinate`` type:

.. code-block:: console

    /type constructor define mymap Coordinate(Int x, Int y, Int z, String label)

Then add the constructor body:

.. code-block:: console

    /script create constructor mymap Coordinate(Int, Int, Int, String)

.. code-block:: msc

    # Store the parameters in the instance's fields
    @var this.x = x
    @var this.y = y
    @var this.z = z
    @var this.label = label

Now you can create coordinates with initial values:

.. code-block:: msc

    @define Coordinate spawn = Coordinate(100, 64, -200, "Spawn Point")
    @player Created: {{spawn.label}} at {{spawn.x}}, {{spawn.y}}, {{spawn.z}}

.. code-block:: output

    Created: Spawn Point at 100, 64, -200

Multiple Constructors
^^^^^^^^^^^^^^^^^^^^^

A type can have multiple constructors with different parameters. This is called *overloading*:

.. code-block:: console

    /type constructor define mymap Coordinate(Int x, Int y, Int z, String label)
    /type constructor define mymap Coordinate(BlockLocation loc, String label)
    /type constructor define mymap Coordinate(String label)

Each constructor has its own body. The third might set default coordinates:

.. code-block:: msc

    # Default to world origin
    @var this.x = 0
    @var this.y = 64
    @var this.z = 0
    @var this.label = label

MSC chooses the constructor based on the arguments provided:

.. code-block:: msc

    # Uses (Int, Int, Int, String) constructor
    @define Coordinate c1 = Coordinate(100, 64, -200, "A")
    # Uses (BlockLocation, String) constructor
    @define Coordinate c2 = Coordinate(block.getLocation(), "B")
    # Uses (String) constructor with defaults
    @define Coordinate c3 = Coordinate("C")
    @player c3 is at {{c3.x}}, {{c3.y}}, {{c3.z}}

.. code-block:: output

    c3 is at 0, 64, 0

Returning from Constructors
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. admonition:: Technical Detail
   :class: technical-detail

   Constructors implicitly return the constructed instance. An explicit ``@return`` can be used for constructor chaining, where one constructor calls another. The return value must be the type being constructed.

A constructor can end without a ``@return`` statement. In this case, it returns the instance that was being constructed. If you need to return early or chain to another constructor, use ``@return``:

.. code-block:: msc

    # If no label provided, delegate to another constructor with a default
    @if label == ""
        @return Coordinate(x, y, z, "Unnamed")
    @fi
    # Otherwise initialize normally
    @var this.x = x
    @var this.y = y
    @var this.z = z
    @var this.label = label

Putting It All Together
-----------------------

Here is a complete example of a user-defined type for tracking puzzle progress:

.. code-block:: console

    # Create the type
    /type define mymap PuzzleState

    # Add fields to track progress
    /type field define mymap PuzzleState Int currentStage
    /type field define mymap PuzzleState Boolean[] stagesCompleted
    /type field define mymap PuzzleState Long startTime

    # Add a constructor
    /type constructor define mymap PuzzleState(Int totalStages)

    # Add methods for interacting with the puzzle
    /type method define mymap PuzzleState completeStage(Int stageNum)
    /type method define mymap PuzzleState Boolean isFinished()
    /type method define mymap PuzzleState Int countCompleted()

Constructor body (initializes the state):

.. code-block:: msc

    # Start at stage 0
    @var this.currentStage = 0
    # Create a list of booleans, one per stage, all false
    @var this.stagesCompleted = Boolean[]
    @for Int i in list::range(0, totalStages)
        @var this.stagesCompleted.append(false)
    @done
    # Record when the puzzle was started
    @var this.startTime = system::currentTimeMillis()

The ``completeStage`` method body:

.. code-block:: msc

    # Make sure the stage number is valid
    @if stageNum >= 0 && stageNum < this.stagesCompleted.length()
        # Mark this stage as done
        @var this.stagesCompleted[stageNum] = true
        # Advance current stage if needed
        @if stageNum >= this.currentStage
            @var this.currentStage = stageNum + 1
        @fi
    @fi

The ``isFinished`` method body:

.. code-block:: msc

    # Check if any stage is still incomplete
    @for Boolean done in this.stagesCompleted
        @if !done
            @return false
        @fi
    @done
    # All stages complete!
    @return true

The ``countCompleted`` method body:

.. code-block:: msc

    @define Int count = 0
    @for Boolean done in this.stagesCompleted
        @if done
            @var count = count + 1
        @fi
    @done
    @return count

Using the type in a script:

.. code-block:: msc

    @using mymap
    # Create a 5-stage puzzle
    @define PuzzleState puzzle = PuzzleState(5)

    # Player completes stages 0 and 2 (out of order is fine)
    @var puzzle.completeStage(0)
    @var puzzle.completeStage(2)

    # Show progress
    @player Progress: {{puzzle.countCompleted()}} / {{puzzle.stagesCompleted.length()}} stages
    @player Finished? {{puzzle.isFinished()}}

.. code-block:: output

    Progress: 2 / 5 stages
    Finished? false

Command Reference
-----------------

.. list-table::
    :widths: 45 55
    :header-rows: 1

    * - Command
      - Description
    * - ``/type define <namespace> <Type>``
      - Creates a new type in a namespace.
    * - ``/type remove <namespace> <Type>``
      - Deletes a type and all its fields, methods, and constructors.
    * - ``/type field define <namespace> <Type> <field-type> <name>``
      - Adds a field to a type.
    * - ``/type field remove <namespace> <Type> <name>``
      - Removes a field from a type.
    * - ``/type field info <namespace> <Type> <name>``
      - Shows information about a field.
    * - ``/type fields <namespace> <Type>``
      - Lists all fields on a user-defined type.
    * - ``/type method define <namespace> <Type> [ret] <name>([params])``
      - Adds a method to a type.
    * - ``/type method remove <namespace> <Type> <name>``
      - Removes a method from a type.
    * - ``/type method info <namespace> <Type> <name>``
      - Shows information about a method.
    * - ``/type methods <builtin-type>``
      - Lists all methods on a built-in type.
    * - ``/type methods <namespace> <Type>``
      - Lists all methods on a user-defined type.
    * - ``/type constructor define <namespace> <Type>([params])``
      - Adds a constructor to a type.
    * - ``/type constructor remove <namespace> <Type>([params])``
      - Removes a constructor from a type.
    * - ``/type constructors <builtin-type>``
      - Lists all constructors for a built-in type.
    * - ``/type constructors <namespace> <Type>``
      - Lists all constructors for a user-defined type.

Note that these commands can only be run by admins on the main server. You will need to use the test server to run these commands yourself, or ask an admin to set up types for you on the main server.
