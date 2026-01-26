.. _appendix_namespaces:

Built-in Namespaces
===================

Quick reference for built-in namespace functions and types. For creating and using namespaces, see :ref:`Namespaces <namespaces>`.

.. contents::
   :local:
   :depth: 2

entity
------

Entity type utilities.

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Type
     - Description
   * - ``EntityType``
     - Represents a Minecraft entity type (e.g., ZOMBIE, CREEPER).

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Variable
     - Type
     - Value
   * - ``acaciaBoat``
     - EntityType
     - Represents an acacia boat entity.
   * - ``acaciaChestBoat``
     - EntityType
     - Represents an acacia chest boat entity.
   * - ...
     - EntityType
     - [all other Minecraft entity types]
   * - ``zombieVillager``
     - EntityType
     - Represents a zombie villager entity.
   * - ``zombifiedPiglin``
     - EntityType
     - Represents a zombified piglin entity.

The entity namespace has no functions.

format
------

Text formatting utilities.

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Type
     - Description
   * - ``TextFormat``
     - Represents a text color or formatting code.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Return Type
     - Description
   * - ``formatDate(Long millis, String format)``
     - String
     - Format a Unix timestamp (milliseconds) using the given format string.
   * - ``getChatColorFromChat(String char)``
     - TextFormat
     - Get a TextFormat from a color code character (e.g., ``"a"`` for green).
   * - ``stripColor(String input)``
     - String
     - Remove all color codes from a string.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Variable
     - Type
     - Value
   * - ``black``
     - TextFormat
     - "§0" (black color code)
   * - ``darkBlue``
     - TextFormat
     - "§1" (dark blue color code)
   * - ...
     - TextFormat
     - [all other formatting codes]
   * - ``underline``
     - TextFormat
     - "§n" (underline format code)
   * - ``reset``
     - TextFormat
     - "§r" (reset format code)

list
----

List utility functions.

.. list-table::
   :widths: 40 15 45
   :header-rows: 1

   * - Function
     - Return Type
     - Description
   * - ``range(Int start, Int end)``
     - Int[]
     - Generate a list of consecutive integers from start (inclusive) to end (exclusive).

The list namespace has no types or variables.

material
--------

Material/block type utilities.

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Type
     - Description
   * - ``Material``
     - Represents a Minecraft material (item).

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Variable
     - Type
     - Value
   * - ``acaciaBoat``
     - Material
     - Represents an acacia boat item.
   * - ``acaciaButton``
     - Material
     - Represents an acacia button item.
   * - ...
     - Material
     - [all other Minecraft items and blocks]
   * - ``zombieWallHead``
     - Material
     - Represents a zombie wall head item.
   * - ``zombifiedPiglinSpawnEgg``
     - Material
     - Represents a zombified piglin spawn egg item.

The material namespace has no functions.

math
----

Common mathematical operations.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Return Type
     - Description
   * - ``abs(Double value)``
     - Double
     - Absolute value (value if positive, -value if negative).
   * - ``sqrt(Double value)``
     - Double
     - Positive square root.
   * - ``pow(Double base, Double exponent)``
     - Double
     - Base raised to the power of exponent.
   * - ``floor(Double x)``
     - Int
     - Round down to nearest integer (towards negative infinity).
   * - ``ceil(Double x)``
     - Int
     - Round up to nearest integer (towards positive infinity).
   * - ``sin(Double x)``
     - Double
     - Sine of x (degrees).
   * - ``cos(Double x)``
     - Double
     - Cosine of x (degrees).
   * - ``tan(Double x)``
     - Double
     - Tangent of x (degrees).
   * - ``arcsin(Double x)``
     - Double
     - Arcsine of x (returns degrees).
   * - ``arccos(Double x)``
     - Double
     - Arccosine of x (returns degrees).
   * - ``arctan(Double x)``
     - Double
     - Arctangent of x (returns degrees).
   * - ``radsin(Double x)``
     - Double
     - Sine of x (radians).
   * - ``radcos(Double x)``
     - Double
     - Cosine of x (radians).
   * - ``radtan(Double x)``
     - Double
     - Tangent of x (radians).
   * - ``radarcsin(Double x)``
     - Double
     - Arcsine of x (returns radians).
   * - ``radarccos(Double x)``
     - Double
     - Arccosine of x (returns radians).
   * - ``radarctan(Double x)``
     - Double
     - Arctangent of x (returns radians).
   * - ``rad(Double x)``
     - Double
     - Convert degrees to radians.
   * - ``deg(Double x)``
     - Double
     - Convert radians to degrees.
   * - ``random(Double min, Double max)``
     - Double
     - Random double between min and max.
   * - ``randomDouble()``
     - Double
     - Random double between 0.0 and 1.0.
   * - ``randomFloat()``
     - Float
     - Random float between 0.0 and 1.0.
   * - ``randomInt()``
     - Int
     - Random integer (full Int range).
   * - ``randomLong()``
     - Long
     - Random long (full Long range).

The math namespace has no types or variables. For special cases (NaN, infinity, etc.), see `Java Math documentation <https://docs.oracle.com/javase/10/docs/api/java/lang/Math.html>`_.

minr
----

Minr-specific map and challenge utilities.

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Type
     - Description
   * - ``Challenge``
     - Represents a Minr challenge.
   * - ``Map``
     - Represents a Minr map.

The minr namespace has no functions or variables.

scoreboard
----------

Minecraft scoreboard manipulation.

.. list-table::
   :widths: 55 15 30
   :header-rows: 1

   * - Function
     - Return Type
     - Description
   * - ``addObjective(String name, String type, String displayName)``
     - Void
     - Create a new scoreboard objective.
   * - ``removeObjective(String objective)``
     - Void
     - Remove a scoreboard objective.
   * - ``objectiveExists(String objective)``
     - Boolean
     - Check whether an objective exists.
   * - ``getScore(String player, String objective)``
     - Int
     - Get a player's score for a given objective.
   * - ``setScore(String player, String objective, Int score)``
     - Void
     - Set a player's score for a given objective.
   * - ``setObjectiveDisplaySlot(String objective, String slot)``
     - Void
     - Set which slot displays the objective.
   * - ``getObjectiveDisplaySlot(String objective)``
     - String
     - Get the display slot for an objective.
   * - ``getObjectiveInDisplaySlot(String slot)``
     - String
     - Get which objective is in a display slot.
   * - ``clearDisplaySlot(String slot)``
     - Void
     - Clear a display slot.
   * - ``resetObjectiveDisplaySlot(String objective)``
     - Void
     - Reset an objective's display slot.

The scoreboard namespace has no types or variables.

statistic
---------

Minecraft statistic utilities.

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Type
     - Description
   * - ``Statistic``
     - Represents a Minecraft statistic (e.g., JUMP, WALK_ONE_CM). No constructors.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Variable
     - Type
     - Value
   * - ``animalsBred``
     - Statistic
     - Represents the ANIMALS_BRED statistic.
   * - ``armorCleaned``
     - Statistic
     - Represents the ARMOR_CLEANED statistic.
   * - ...
     - Statistic
     - [all other Minecraft statistics]
   * - ``walkOneCm``
     - Statistic
     - Represents the WALK_ONE_CM statistic.
   * - ``walkUnderWaterOneCm``
     - Statistic
     - Represents the WALK_UNDER_WATER_ONE_CM statistic.

The statistic namespace has no functions.

system
------

Miscellaneous system functions.

.. list-table::
   :widths: 35 15 50
   :header-rows: 1

   * - Function
     - Return Type
     - Description
   * - ``currentTimeMillis()``
     - Long
     - Returns the current time in milliseconds since Unix epoch (January 1, 1970).
   * - ``getTPS()``
     - Double[]
     - Returns a list of 3 values: average server TPS over the last 1, 5, and 15 minutes.

The system namespace has no types or variables.

text
----

Rich text (JSON chat component) utilities.

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Type
     - Description
   * - ``TextComponent``
     - A single rich text component with formatting, click events, etc.
   * - ``ComponentBuilder``
     - Builder pattern for constructing TextComponent arrays.

.. list-table::
   :widths: 55 20 25
   :header-rows: 1

   * - Function
     - Return Type
     - Description
   * - ``deserialise(String json)``
     - TextComponent[]
     - Parse JSON text into components.
   * - ``serialise(TextComponent[] components)``
     - String
     - Convert components to JSON.
   * - ``fromLegacyText(String text, TextFormat defaultColor)``
     - TextComponent[]
     - Convert legacy color-coded text to components.
   * - ``toLegacyText(TextComponent[] components)``
     - String
     - Convert components to legacy color-coded text.
   * - ``toPlainText(TextComponent[] components)``
     - String
     - Strip formatting, return plain text.
   * - ``escapeJSON(String json)``
     - String
     - Escape special characters in JSON.

The text namespace has no variables.

timer
-----

Timer management functions for maps and challenges.

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Type
     - Description
   * - ``Timer``
     - Represents a timer instance for tracking player progress.

.. list-table::
   :widths: 50 15 35
   :header-rows: 1

   * - Function
     - Return Type
     - Description
   * - ``getMapTimer(Player player, String mapcode)``
     - Timer
     - Get a player's timer for a map.
   * - ``getChallengeTimer(Player player, String tag)``
     - Timer
     - Get a player's timer for a challenge.
   * - ``getCustomTimer(Player player, String tag)``
     - Timer
     - Get a player's custom timer by tag.
   * - ``getSpecialTimer(Player player, String tag)``
     - Timer
     - Get a player's special timer.
   * - ``removeCustomTimer(Player player, String tag)``
     - Void
     - Remove a custom timer.
   * - ``formatTime(Long time)``
     - String
     - Format a time value as a human-readable string.


The timer namespace has no variables.

.. warning::

   Never store Timer instances in namespace variables, as they will break silently. Always use ``timer::getCustomTimer(...)`` to retrieve a fresh reference each time.

util
----

Utility functions.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Function
     - Return Type
     - Description
   * - ``executeAndQueryResult(String cmd)``
     - Boolean
     - Run an ``/execute`` command as the console and return its result value.
   * - ``executeAndQuerySuccess(String cmd)``
     - Int
     - Run an ``/execute`` command as the console and return whether or not it succeeded.
   * - ``randomUUID()``
     - String
     - Generate a random UUID string.

The util namespace has no types or variables.