.. _appendix_built_in_types:

Built-in Types
==============

Quick reference for built-in type constructors and methods. For operator compatibility, see :doc:`operators`.

.. contents::
   :local:
   :depth: 2

Primitives
----------

String
^^^^^^

Represents plain text.

**Default value:** ``""`` (empty string)

**Literal:** Any text in double quotes (e.g., ``"Hello, world!"``)

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Constructor
     - Description
   * - ``String(Player other)``
     - Get player name (e.g., ``"Rickyboy320"``).
   * - ``String(Long other)``
     - Convert Long to text (``42L`` to ``"42"``).
   * - ``String(Float other)``
     - Convert Float to text (``3.14`` to ``"3.14"``).
   * - ``String(Int other)``
     - Convert Int to text (``42`` to ``"42"``).
   * - ``String(Double other)``
     - Convert Double to text (``3.14D`` to ``"3.14"``).
   * - ``String(Boolean other)``
     - Convert Boolean to text (``"true"`` or ``"false"``).
   * - ``String(Entity other)``
     - Get entity description (Paper magic value, not meaningful).
   * - ``String(Item other)``
     - Get item description (Paper magic value, not meaningful)..
   * - ``String(Block other)``
     - Get block description (Paper magic value, not meaningful).
   * - ``String(String other)``
     - Clone a String.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``contains(String sequence)``
     - Boolean
     - True if String contains sequence, false otherwise.
   * - ``equalsIgnoreCase(String other)``
     - Boolean
     - Case-insensitive equality check.
   * - ``indexOf(String other)``
     - Int
     - Index of first occurrence, or -1 if not found.
   * - ``length()``
     - Int
     - Number of characters in the String.
   * - ``matches(String regex)``
     - Boolean
     - True if String matches regex pattern, false otherwise.
   * - ``replace(String old, String replacement)``
     - String
     - Replace all occurrences of old with replacement.
   * - ``split(String delimiter)``
     - String[]
     - Split into a list by delimiter.
   * - ``startsWith(String start)``
     - Boolean
     - True if String starts with start, false otherwise.
   * - ``string()``
     - String
     - Returns the String itself.
   * - ``substring(Int start, Int end)``
     - String
     - Substring from start (inclusive) to end (exclusive).
   * - ``toLowerCase()``
     - String
     - Convert all letters to lowercase.
   * - ``toUpperCase()``
     - String
     - Convert all letters to uppercase.
   * - ``trim()``
     - String
     - Remove leading/trailing whitespace.

Int
^^^

Represents whole numbers in the range -2,147,483,648 to 2,147,483,647 inclusive.

**Default value:** ``0``

**Literal:** Any whole number in the range (``42``, ``-7``, ``0``)

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Int(Long other)``
     - Cast Long to Int (causes problems if your Long value is outside the Int range).
   * - ``Int(Float other)``
     - Discard decimals (truncate towards zero, not round).
   * - ``Int(Int other)``
     - Clone an Int.
   * - ``Int(Double other)``
     - Discard decimals (truncate towards zero, not round).
   * - ``Int(String other)``
     - Parse String to Int. Throws NumberFormatException if invalid.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``string()``
     - String
     - Returns the String representation of this Int.

Long
^^^^

Represents large whole numbers in the range -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 inclusive.

**Default value:** ``0``

**Literal:** Number with ``L`` suffix (``42L``, ``-7L``)

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Long(Long other)``
     - Clone a Long.
   * - ``Long(Float other)``
     - Convert Float to Long, discarding decimals.
   * - ``Long(Int other)``
     - Upcast Int to Long.
   * - ``Long(Double other)``
     - Convert Double to Long, discarding decimals.
   * - ``Long(String other)``
     - Parse String to Long. Throws NumberFormatException if invalid.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``string()``
     - String
     - Returns the String representation of this Long.

Float
^^^^^

Represents decimal numbers with single precision.

**Default value:** ``0.0``

**Literal:** Any decimal number (``3.14``, ``-0.5``, ``1.0``)

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Float(Long other)``
     - Cast Long to Float (may incur precision loss).
   * - ``Float(Float other)``
     - Clone a Float.
   * - ``Float(Int other)``
     - Cast Int to Float.
   * - ``Float(Double other)``
     - Cast Double to Float (may incur precision loss).
   * - ``Float(String other)``
     - Parse String to Float. Throws NumberFormatException if invalid.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``string()``
     - String
     - Returns the String representation of this Float.

Double
^^^^^^

Represents decimal numbers with double precision.

**Default value:** ``0.0``

**Literal:** Number with ``D`` suffix (``3.14D``, ``1D``)

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Double(Long other)``
     - Cast Long to Double.
   * - ``Double(Float other)``
     - Upcast Float to Double.
   * - ``Double(Int other)``
     - Cast Int to Double.
   * - ``Double(Double other)``
     - Clone a Double.
   * - ``Double(String other)``
     - Parse String to Double. Throws NumberFormatException if invalid.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``string()``
     - String
     - Returns the String representation of this Double.

Boolean
^^^^^^^

Represents ``true`` or ``false``.

**Default value:** ``false``

**Literal:** ``true`` or ``false``

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Boolean(Boolean other)``
     - Copy a Boolean.
   * - ``Boolean(String other)``
     - Parse ``"true"`` or ``"false"``. Defaults to false. True only if the string is exactly ``"true"`` (case insensitive).

Minecraft Objects
-----------------

Player
^^^^^^

Represents an online Minecraft player.

**Default value:** ``null``

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Player(String value)``
     - Find player by name or UUID. Returns null if not found.
   * - ``Player(String value, Player visibleTo)``
     - Find player by name, only if visible to visibleTo.
   * - ``Player(Int x, Int y, Int z, String world)``
     - Find player at coordinates. Returns null if not found.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``canSee(Player target)``
     - Boolean
     - True if can see target player.
   * - ``closeInventory()``
     - Void
     - Close open inventory.
   * - ``countItem(String id)``
     - Int
     - Count items of type in inventory.
   * - ``damage(Double amount)``
     - Void
     - Deal damage to player.
   * - ``dropItem(Boolean dropAll)``
     - Boolean
     - Drop held item (or stack if dropAll).
   * - ``getAttempts()``
     - Int
     - Times hit a starting checkpoint.
   * - ``getBedLocation()``
     - Location
     - Location of player's bed spawn.
   * - ``getBedLocationWorld()``
     - String
     - World where bed is set.
   * - ``getBedLocationX()``
     - Double
     - X coordinate of bed location.
   * - ``getBedLocationY()``
     - Double
     - Y coordinate of bed location.
   * - ``getBedLocationZ()``
     - Double
     - Z coordinate of bed location.
   * - ``getBoots()``
     - Item
     - Boots slot item.
   * - ``getChallengePoints()``
     - Int
     - Total challenge points.
   * - ``getChallengeTime()``
     - Long
     - Current challenge time (-1 if not in challenge).
   * - ``getChestplate()``
     - Item
     - Chestplate slot item.
   * - ``getClickedBlockFace()``
     - String
     - Block face clicked (for interact scripts).
   * - ``getCurrentChallenge()``
     - String
     - Current challenge tag (or null).
   * - ``getCurrentCheckpoint()``
     - String
     - Current checkpoint (or null).
   * - ``getDirectionX()``
     - Double
     - X component of look direction vector.
   * - ``getDirectionY()``
     - Double
     - Y component of look direction vector.
   * - ``getDirectionZ()``
     - Double
     - Z component of look direction vector.
   * - ``getDisplayName()``
     - String
     - Player's display name (e.g., nickname).
   * - ``getEntityStatistic(Statistic statistic, EntityType entityType)``
     - Int
     - Get entity-related statistic value.
   * - ``getExp()``
     - Float
     - XP progress toward next level (0.0 to 1.0).
   * - ``getFallDistance()``
     - Float
     - Distance fallen since last on ground.
   * - ``getFireTicks()``
     - Int
     - Ticks until fire stops.
   * - ``getFoodLevels()``
     - Float
     - Current food level.
   * - ``getGameMode()``
     - String
     - Current game mode (SURVIVAL, CREATIVE, etc.).
   * - ``getGlobalPoints()``
     - Int
     - Global points.
   * - ``getHealth()``
     - Double
     - Current health (0 = dead).
   * - ``getHelmet()``
     - Item
     - Helmet slot item.
   * - ``getHexaRecord()``
     - Int
     - Hexa stage reached.
   * - ``getItem(Int slot)``
     - Item
     - Item in inventory slot.
   * - ``getItemInMainHand()``
     - Item
     - Item in main hand.
   * - ``getItemInOffHand()``
     - Item
     - Item in off hand.
   * - ``getLeggings()``
     - Item
     - Leggings slot item.
   * - ``getLevel()``
     - Float
     - Current XP level.
   * - ``getLocale()``
     - String
     - Player's client locale.
   * - ``getLocation()``
     - Location
     - Player's location.
   * - ``getMapTime()``
     - Long
     - Current map time.
   * - ``getMaterialStatistic(Statistic statistic, Material material)``
     - Int
     - Get material-related statistic value.
   * - ``getMaxHealth()``
     - Int
     - Maximum health.
   * - ``getName()``
     - String
     - Player's Minecraft username.
   * - ``getObjectPronoun()``
     - String
     - Player's object pronoun (e.g., "them").
   * - ``getPitch()``
     - Float
     - Rotation around X axis.
   * - ``getPlayerTime()``
     - Long
     - Player's current time.
   * - ``getPlayerTimeOffset()``
     - Long
     - Player's time offset from server.
   * - ``getPlayerWeather()``
     - String
     - Player's current weather type.
   * - ``getPoints()``
     - Int
     - FFA points.
   * - ``getPosition()``
     - Position
     - Player's position (location + rotation).
   * - ``getPossessiveDeterminerPronoun()``
     - String
     - Player's possessive determiner (e.g., "their").
   * - ``getPossessivePronoun()``
     - String
     - Player's possessive pronoun (e.g., "theirs").
   * - ``getPronouns()``
     - String
     - Player's full pronoun string.
   * - ``getRank()``
     - String
     - Player's server rank.
   * - ``getReflexivePronoun()``
     - String
     - Player's reflexive pronoun (e.g., "themselves").
   * - ``getSaturation()``
     - Float
     - Current saturation level.
   * - ``getSpeedrunScore()``
     - Int
     - Speedrun score.
   * - ``getStatistic(Statistic statistic)``
     - Int
     - Get statistic value.
   * - ``getSubjectPronoun()``
     - String
     - Player's subject pronoun (e.g., "they").
   * - ``getTargetBlock(Int distance)``
     - Block
     - Block player is looking at (max 120).
   * - ``getTargetBlockFace(Int distance)``
     - String
     - Face of target block (NORTH, UP, etc.).
   * - ``getTargetEntity(Int distance)``
     - Entity
     - Entity player is looking at (max 120).
   * - ``getTimePlayed()``
     - Long
     - Playtime in milliseconds.
   * - ``getUniqueId()``
     - String
     - Player's UUID.
   * - ``getWorld()``
     - String
     - Current world name.
   * - ``getX()``
     - Double
     - X coordinate.
   * - ``getY()``
     - Double
     - Y coordinate.
   * - ``getYaw()``
     - Float
     - Rotation around Y axis.
   * - ``getZ()``
     - Double
     - Z coordinate.
   * - ``giveExp(Int amount)``
     - Void
     - Give XP points.
   * - ``giveExpLevels(Int amount)``
     - Void
     - Give XP levels (negative to take).
   * - ``hasBedLocation()``
     - Boolean
     - True if player has a bed spawn set.
   * - ``hasCompletedChallenge(String challenge)``
     - Boolean
     - True if completed the challenge.
   * - ``hasCompletedMap(String tag)``
     - Boolean
     - True if completed the map.
   * - ``hasGravity()``
     - Boolean
     - True if gravity enabled.
   * - ``hasSpecifiedPronouns()``
     - Boolean
     - True if player has set pronouns.
   * - ``isDead()``
     - Boolean
     - True if dead.
   * - ``isFlying()``
     - Boolean
     - True if flying.
   * - ``isGliding()``
     - Boolean
     - True if gliding with elytra.
   * - ``isInsideVehicle()``
     - Boolean
     - True if in a vehicle.
   * - ``isOnGround()``
     - Boolean
     - True if on solid ground.
   * - ``isOnline()``
     - Boolean
     - True if currently online.
   * - ``isOp()``
     - Boolean
     - True if server operator.
   * - ``isPlayingChallenge()``
     - Boolean
     - True if in a challenge.
   * - ``isPlayingMap()``
     - Boolean
     - True if playing a map.
   * - ``isSneaking()``
     - Boolean
     - True if sneaking.
   * - ``isSprinting()``
     - Boolean
     - True if sprinting.
   * - ``leaveVehicle()``
     - Boolean
     - Leave vehicle. Returns true if was in one.
   * - ``sendMessage(String message)``
     - Void
     - Send a chat message.
   * - ``sendMessageFancy(TextComponent[] msg)``
     - Void
     - Send a rich text message.
   * - ``setBoots(Item item)``
     - Void
     - Set boots.
   * - ``setChestplate(Item item)``
     - Void
     - Set chestplate.
   * - ``setExp(Float exp)``
     - Void
     - Set XP progress.
   * - ``setFireTicks(Int ticks)``
     - Void
     - Set fire ticks.
   * - ``setFoodLevel(Int value)``
     - Void
     - Set food level.
   * - ``setGravity(Boolean gravity)``
     - Void
     - Enable/disable gravity.
   * - ``setHealth(Double health)``
     - Void
     - Set health (0 to maxHealth).
   * - ``setHelmet(Item item)``
     - Void
     - Set helmet.
   * - ``setItem(Int slot, Item item)``
     - Void
     - Set item in slot.
   * - ``setItemInMainHand(Item item)``
     - Void
     - Set main hand item.
   * - ``setItemInOffHand(Item item)``
     - Void
     - Set off hand item.
   * - ``setLeggings(Item item)``
     - Void
     - Set leggings.
   * - ``setLevel(Int level)``
     - Void
     - Set XP level.
   * - ``setMaxHealth(Int value)``
     - Void
     - Set maximum health.
   * - ``setResourcePack(String resourcePackURL, String resourcePackSHA1)``
     - Void
     - Request resource pack download.
   * - ``setSaturation(Float value)``
     - Void
     - Set saturation level.
   * - ``string()``
     - String
     - Returns the player's name.
   * - ``teleport(Position destination)``
     - Void
     - Teleport player to position.

Entity
^^^^^^

Represents a moveable object in Minecraft (mobs, arrows, item frames, etc.).

**Default value:** ``null``

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Entity(String uuid)``
     - Find entity by UUID. Returns null if not found.
   * - ``Entity(Int x, Int y, Int z, String world)``
     - Find entity at coordinates. Returns null if not found.

.. list-table::
   :widths: 40 15 45
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``addPassenger(Entity passenger)``
     - Boolean
     - Add passenger. Returns false if failed.
   * - ``damage(Double amount)``
     - Void
     - Deal damage.
   * - ``ejectPassengers()``
     - Void
     - Eject all passengers.
   * - ``getDirectionX()``
     - Double
     - X component of facing direction.
   * - ``getDirectionY()``
     - Double
     - Y component of facing direction.
   * - ``getDirectionZ()``
     - Double
     - Z component of facing direction.
   * - ``getEntityType()``
     - String
     - Entity type (magic value, may change).
   * - ``getHealth()``
     - Double
     - Current health.
   * - ``getLocation()``
     - Location
     - Entity's location.
   * - ``getMaxHealth()``
     - Int
     - Maximum health.
   * - ``getPitch()``
     - Float
     - Rotation around X axis.
   * - ``getPosition()``
     - Position
     - Entity's position (location with rotation).
   * - ``getUniqueId()``
     - String
     - Entity UUID.
   * - ``getVelocityX()``
     - Double
     - X velocity.
   * - ``getVelocityY()``
     - Double
     - Y velocity.
   * - ``getVelocityZ()``
     - Double
     - Z velocity.
   * - ``getWorld()``
     - String
     - Current world name.
   * - ``getX()``
     - Double
     - X coordinate.
   * - ``getY()``
     - Double
     - Y coordinate.
   * - ``getYaw()``
     - Float
     - Rotation around Y axis.
   * - ``getZ()``
     - Double
     - Z coordinate.
   * - ``isDead()``
     - Boolean
     - True if marked for removal.
   * - ``isOnGround()``
     - Boolean
     - True if on solid ground.
   * - ``setHealth(Double health)``
     - Void
     - Set health.
   * - ``setMaxHealth(Int value)``
     - Void
     - Set maximum health.
   * - ``string()``
     - String
     - Returns the entity's string representation.
   * - ``teleport(Position destination)``
     - Void
     - Teleport entity.

Block
^^^^^

Represents a block in the Minecraft world.

**Default value:** ``null``

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Block(BlockLocation location)``
     - Get block at location.
   * - ``Block(Int x, Int y, Int z, String world)``
     - Get block at coordinates.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``getBlockPower()``
     - Int
     - Redstone power level.
   * - ``getBlockType()``
     - String
     - Block type (magic value, may change).
   * - ``getLightFromBlocks()``
     - Int
     - Light from nearby blocks.
   * - ``getLightFromSky()``
     - Int
     - Light from sky.
   * - ``getLightLevel()``
     - Int
     - Total light level.
   * - ``getLocation()``
     - BlockLocation
     - Block's location.
   * - ``getWorld()``
     - String
     - World name.
   * - ``getX()``
     - Int
     - X coordinate.
   * - ``getY()``
     - Int
     - Y coordinate.
   * - ``getZ()``
     - Int
     - Z coordinate.
   * - ``isBlockIndirectlyPowered()``
     - Boolean
     - True if indirectly powered.
   * - ``isBlockPowered()``
     - Boolean
     - True if powered by redstone.
   * - ``isEmpty()``
     - Boolean
     - True if air.
   * - ``isLiquid()``
     - Boolean
     - True if liquid.
   * - ``string()``
     - String
     - Returns the block's string representation.

Item
^^^^

Represents an item stack.

**Default value:** ``null``

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Item(String item, Int amount)``
     - Create item by name with stack size. Throws MaterialNotFoundException if invalid.

.. list-table::
   :widths: 40 15 45
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``getAmount()``
     - Int
     - Stack size.
   * - ``getDisplayName()``
     - String
     - Custom name (null if none).
   * - ``getItemType()``
     - String
     - Item type name.
   * - ``getMaxStackSize()``
     - Int
     - Maximum stack size (-1 if unknown).
   * - ``hasDisplayName()``
     - Boolean
     - True if has custom name.
   * - ``isSimilar(Item item)``
     - Boolean
     - True if same type (ignores amount).
   * - ``setAmount(Int amount)``
     - Void
     - Set stack size.
   * - ``setItemType(String item)``
     - Void
     - Set item type (resets extra data).
   * - ``string()``
     - String
     - Returns the item's string representation.

Spatial Types
-------------

Location
^^^^^^^^

Represents a position in a world with Double precision coordinates.

**Default value:** ``null``

.. list-table::
   :widths: 55 45
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Location(Vector3 vector, String world)``
     - Create from a Vector3 and world name.
   * - ``Location(Double x, Double y, Double z, String world)``
     - Create from Double coordinates and world name.
   * - ``Location(Int x, Int y, Int z, String world)``
     - Create from Int coordinates and world name.
   * - ``Location(Float x, Float y, Float z, String world)``
     - Create from Float coordinates and world name.

.. list-table::
   :widths: 35 20 45
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``asBlockLocation()``
     - BlockLocation
     - Convert to block-aligned location.
   * - ``asVector2()``
     - Vector2
     - Convert to XZ vector (drops Y).
   * - ``asVector3()``
     - Vector3
     - Convert to XYZ vector.
   * - ``getWorld()``
     - String
     - Get the world name.
   * - ``getX()``
     - Double
     - Get the X coordinate.
   * - ``getY()``
     - Double
     - Get the Y coordinate.
   * - ``getZ()``
     - Double
     - Get the Z coordinate.
   * - ``string()``
     - String
     - Returns string representation.

BlockLocation
^^^^^^^^^^^^^

Represents a block-aligned position in a world with Int precision coordinates.

**Default value:** ``null``

.. list-table::
   :widths: 55 45
   :header-rows: 1

   * - Constructor
     - Description
   * - ``BlockLocation(BlockVector3 vector, String world)``
     - Create from a BlockVector3 and world name.
   * - ``BlockLocation(Int x, Int y, Int z, String world)``
     - Create from Int coordinates and world name.

.. list-table::
   :widths: 35 20 45
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``asBlockVector2()``
     - BlockVector2
     - Convert to XZ block vector (drops Y).
   * - ``asBlockVector3()``
     - BlockVector3
     - Convert to XYZ block vector.
   * - ``asLocation()``
     - Location
     - Convert to Location.
   * - ``getRegions()``
     - Region[]
     - Get all regions containing this location.
   * - ``getWorld()``
     - String
     - Get the world name.
   * - ``getX()``
     - Int
     - Get the X coordinate.
   * - ``getY()``
     - Int
     - Get the Y coordinate.
   * - ``getZ()``
     - Int
     - Get the Z coordinate.
   * - ``set(String block)``
     - Void
     - Set the block at this location.
   * - ``string()``
     - String
     - Returns string representation.

Position
^^^^^^^^

Like Location, but includes yaw and pitch rotation.

**Default value:** ``null``

.. list-table::
   :widths: 65 35
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Position(Location location, Float yaw, Float pitch)``
     - Create from Location with rotation.
   * - ``Position(Float x, Float y, Float z, Float yaw, Float pitch, String world)``
     - Create from Float coordinates and rotation.
   * - ``Position(Int x, Int y, Int z, Int yaw, Int pitch, String world)``
     - Create from Int coordinates and rotation.
   * - ``Position(Float x, Float y, Float z, Int yaw, Int pitch, String world)``
     - Create from Float coords, Int rotation.
   * - ``Position(Double x, Double y, Double z, Float yaw, Float pitch, String world)``
     - Create from Double coords, Float rotation.
   * - ``Position(Double x, Double y, Double z, Int yaw, Int pitch, String world)``
     - Create from Double coords, Int rotation.
   * - ``Position(Int x, Int y, Int z, Float yaw, Float pitch, String world)``
     - Create from Int coords, Float rotation.

.. list-table::
   :widths: 30 20 50
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``asLocation()``
     - Location
     - Convert to Location (loses rotation).
   * - ``getPitch()``
     - Float
     - Get pitch rotation.
   * - ``getWorld()``
     - String
     - Get the world name.
   * - ``getX()``
     - Double
     - Get the X coordinate.
   * - ``getY()``
     - Double
     - Get the Y coordinate.
   * - ``getYaw()``
     - Float
     - Get yaw rotation.
   * - ``getZ()``
     - Double
     - Get the Z coordinate.
   * - ``string()``
     - String
     - Returns string representation.

Vector3
^^^^^^^

3D vector with Double precision, for abstract positions without a world.

**Default value:** ``null``

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Vector3(Float x, Float y, Float z)``
     - Create from Float coordinates.
   * - ``Vector3(Long x, Long y, Long z)``
     - Create from Long coordinates.
   * - ``Vector3(Double x, Double y, Double z)``
     - Create from Double coordinates.
   * - ``Vector3(Int x, Int y, Int z)``
     - Create from Int coordinates.

.. list-table::
   :widths: 55 15 30
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``abs()``
     - Vector3
     - Absolute value of each component.
   * - ``asBlockVector3()``
     - BlockVector3
     - Convert to block vector (truncates).
   * - ``asLocation(String world)``
     - Location
     - Convert to Location in world.
   * - ``asVector2()``
     - Vector2
     - Convert to XZ vector (drops Y).
   * - ``ceil()``
     - Vector3
     - Ceiling of each component.
   * - ``clampY(Int min, Int max)``
     - Vector3
     - Clamp Y between min and max.
   * - ``containedWithin(Vector3 min, Vector3 max)``
     - Boolean
     - True if within bounding box.
   * - ``cross(Vector3 other)``
     - Vector3
     - Cross product with other.
   * - ``distance(Vector3 other)``
     - Double
     - Distance to other vector.
   * - ``distanceSq(Vector3 other)``
     - Double
     - Squared distance to other.
   * - ``dot(Vector3 other)``
     - Double
     - Dot product with other.
   * - ``floor()``
     - Vector3
     - Floor of each component.
   * - ``getMaximum(Vector3 other)``
     - Vector3
     - Component-wise maximum.
   * - ``getMinimum(Vector3 other)``
     - Vector3
     - Component-wise minimum.
   * - ``getX()``
     - Double
     - Get the X component.
   * - ``getY()``
     - Double
     - Get the Y component.
   * - ``getZ()``
     - Double
     - Get the Z component.
   * - ``length()``
     - Double
     - Vector magnitude.
   * - ``lengthSq()``
     - Double
     - Squared magnitude.
   * - ``normalise()``
     - Vector3
     - Unit vector in same direction.
   * - ``round()``
     - Vector3
     - Round each component.
   * - ``string()``
     - String
     - Returns string representation.
   * - ``transform2D(Double angle, Double aboutX, Double aboutZ, Double translateX, Double translateZ)``
     - Vector3
     - 2D transform in XZ plane.

BlockVector3
^^^^^^^^^^^^

3D vector with Int precision, for block-aligned positions without a world.

**Default value:** ``null``

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Constructor
     - Description
   * - ``BlockVector3(Int x, Int y, Int z)``
     - Create from Int coordinates.

.. list-table::
   :widths: 55 15 30
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``abs()``
     - BlockVector3
     - Absolute value of each component.
   * - ``asBlockLocation(String world)``
     - BlockLocation
     - Convert to BlockLocation in world.
   * - ``asBlockVector2()``
     - BlockVector2
     - Convert to XZ block vector (drops Y).
   * - ``asVector3()``
     - Vector3
     - Convert to Vector3.
   * - ``ceil()``
     - BlockVector3
     - Ceiling of each component (no-op for Int).
   * - ``clampY(Int min, Int max)``
     - BlockVector3
     - Clamp Y between min and max.
   * - ``containedWithin(BlockVector3 min, BlockVector3 max)``
     - Boolean
     - True if within bounding box.
   * - ``cross(BlockVector3 other)``
     - BlockVector3
     - Cross product with other.
   * - ``distance(BlockVector3 other)``
     - Double
     - Distance to other vector.
   * - ``distanceSq(BlockVector3 other)``
     - Double
     - Squared distance to other.
   * - ``dot(BlockVector3 other)``
     - Double
     - Dot product with other.
   * - ``floor()``
     - BlockVector3
     - Floor of each component (no-op for Int).
   * - ``getMaximum(BlockVector3 other)``
     - BlockVector3
     - Component-wise maximum.
   * - ``getMinimum(BlockVector3 other)``
     - BlockVector3
     - Component-wise minimum.
   * - ``getX()``
     - Int
     - Get the X component.
   * - ``getY()``
     - Int
     - Get the Y component.
   * - ``getZ()``
     - Int
     - Get the Z component.
   * - ``length()``
     - Double
     - Vector magnitude.
   * - ``lengthSq()``
     - Double
     - Squared magnitude.
   * - ``normalise()``
     - BlockVector3
     - Unit vector in same direction.
   * - ``round()``
     - BlockVector3
     - Round each component (no-op for Int).
   * - ``string()``
     - String
     - Returns string representation.
   * - ``transform2D(Double angle, Double aboutX, Double aboutZ, Double translateX, Double translateZ)``
     - BlockVector3
     - 2D transform in XZ plane.

Vector2
^^^^^^^

2D vector with Double precision, for XZ plane positions.

**Default value:** ``null``

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Vector2(Double x, Double z)``
     - Create from Double coordinates.
   * - ``Vector2(Long x, Long z)``
     - Create from Long coordinates.
   * - ``Vector2(Float x, Float z)``
     - Create from Float coordinates.
   * - ``Vector2(Int x, Int z)``
     - Create from Int coordinates.

.. list-table::
   :widths: 55 15 30
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``abs()``
     - Vector2
     - Absolute value of each component.
   * - ``asBlockVector2()``
     - BlockVector2
     - Convert to block vector (truncates).
   * - ``asVector3()``
     - Vector3
     - Convert to Vector3 (Y = 0).
   * - ``ceil()``
     - Vector2
     - Ceiling of each component.
   * - ``containedWithin(Vector2 min, Vector2 max)``
     - Boolean
     - True if within bounding box.
   * - ``distance(Vector2 other)``
     - Double
     - Distance to other vector.
   * - ``distanceSq(Vector2 other)``
     - Double
     - Squared distance to other.
   * - ``dot(Vector2 other)``
     - Double
     - Dot product with other.
   * - ``floor()``
     - Vector2
     - Floor of each component.
   * - ``getMaximum(Vector2 other)``
     - Vector2
     - Component-wise maximum.
   * - ``getMinimum(Vector2 other)``
     - Vector2
     - Component-wise minimum.
   * - ``getX()``
     - Double
     - Get the X component.
   * - ``getZ()``
     - Double
     - Get the Z component.
   * - ``length()``
     - Double
     - Vector magnitude.
   * - ``lengthSq()``
     - Double
     - Squared magnitude.
   * - ``normalise()``
     - Vector2
     - Unit vector in same direction.
   * - ``round()``
     - Vector2
     - Round each component.
   * - ``string()``
     - String
     - Returns string representation.
   * - ``transform2D(Double angle, Double aboutX, Double aboutZ, Double translateX, Double translateZ)``
     - Vector2
     - 2D transform.

BlockVector2
^^^^^^^^^^^^

2D vector with Int precision, for block-aligned XZ plane positions.

**Default value:** ``null``

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Constructor
     - Description
   * - ``BlockVector2(Int x, Int z)``
     - Create from Int coordinates.

.. list-table::
   :widths: 55 15 30
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``abs()``
     - BlockVector2
     - Absolute value of each component.
   * - ``asBlockVector3()``
     - BlockVector3
     - Convert to BlockVector3 (Y = 0).
   * - ``asVector2()``
     - Vector2
     - Convert to Vector2.
   * - ``ceil()``
     - BlockVector2
     - Ceiling of each component (no-op for Int).
   * - ``containedWithin(BlockVector2 min, BlockVector2 max)``
     - Boolean
     - True if within bounding box.
   * - ``distance(BlockVector2 other)``
     - Double
     - Distance to other vector.
   * - ``distanceSq(BlockVector2 other)``
     - Double
     - Squared distance to other.
   * - ``dot(BlockVector2 other)``
     - Double
     - Dot product with other.
   * - ``floor()``
     - BlockVector2
     - Floor of each component (no-op for Int).
   * - ``getMaximum(BlockVector2 other)``
     - BlockVector2
     - Component-wise maximum.
   * - ``getMinimum(BlockVector2 other)``
     - BlockVector2
     - Component-wise minimum.
   * - ``getX()``
     - Int
     - Get the X component.
   * - ``getZ()``
     - Int
     - Get the Z component.
   * - ``length()``
     - Double
     - Vector magnitude.
   * - ``lengthSq()``
     - Double
     - Squared magnitude.
   * - ``normalise()``
     - BlockVector2
     - Unit vector in same direction.
   * - ``round()``
     - BlockVector2
     - Round each component (no-op for Int).
   * - ``string()``
     - String
     - Returns string representation.
   * - ``transform2D(Double angle, Double aboutX, Double aboutZ, Double translateX, Double translateZ)``
     - BlockVector2
     - 2D transform.

Region
^^^^^^

Wrapper for WorldGuard regions.

**Default value:** ``null``

.. list-table::
   :widths: 65 35
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Region(String id, String world)``
     - Look up existing WorldGuard region.
   * - ``Region(BlockVector3 min, BlockVector3 max, String world)``
     - Create transient cuboid region.
   * - ``Region(BlockVector2[] points, Int minY, Int maxY, String world)``
     - Create transient polygonal region.
   * - ``Region(String id, BlockVector3 min, BlockVector3 max, String world)``
     - Create named transient cuboid region.
   * - ``Region(String id, BlockVector2[] points, Int minY, Int maxY, String world)``
     - Create named transient polygonal region.
   * - ``Region(Int minX, Int minY, Int minZ, Int maxX, Int maxY, Int maxZ, String world)``
     - Create transient cuboid from coordinates.
   * - ``Region(String id, Int minX, Int minY, Int minZ, Int maxX, Int maxY, Int maxZ, String world)``
     - Create named transient cuboid from coordinates.

.. note::

   Transient regions created via constructor are not saved to WorldGuard and are not visible to ``/region info`` or the spider eye.

.. list-table::
   :widths: 45 20 35
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``addMemberGroup(String group)``
     - Void
     - Add a group as member.
   * - ``addMemberPlayer(Player player)``
     - Void
     - Add a player as member.
   * - ``addOwnerGroup(String group)``
     - Void
     - Add a group as owner.
   * - ``addOwnerPlayer(Player player)``
     - Void
     - Add a player as owner.
   * - ``clearParent()``
     - Void
     - Remove parent region.
   * - ``containsAny(BlockVector2[] positions)``
     - Boolean
     - True if any position is inside.
   * - ``containsBlockVector2(BlockVector2 vector)``
     - Boolean
     - True if vector is inside (2D check).
   * - ``containsBlockVector3(BlockVector3 vector)``
     - Boolean
     - True if vector is inside.
   * - ``containsCoordinates(Int x, Int y, Int z, String world)``
     - Boolean
     - True if coordinates are inside.
   * - ``containsLocation(BlockLocation location)``
     - Boolean
     - True if location is inside.
   * - ``containsPlayer(Player player)``
     - Boolean
     - True if player is inside.
   * - ``getDoubleFlag(String flag)``
     - Double
     - Get a Double flag value.
   * - ``getID()``
     - String
     - Get the region ID.
   * - ``getIntFlag(String flag)``
     - Int
     - Get an Int flag value.
   * - ``getIntersectingRegions(Region[] candidates)``
     - Region[]
     - Get regions that intersect.
   * - ``getMaximumPoint()``
     - BlockLocation
     - Maximum corner.
   * - ``getMemberGroups()``
     - String[]
     - Member group names.
   * - ``getMemberPlayers()``
     - Player[]
     - Region members.
   * - ``getMinimumPoint()``
     - BlockLocation
     - Minimum corner.
   * - ``getOwningGroups()``
     - String[]
     - Owner group names.
   * - ``getOwningPlayers()``
     - Player[]
     - Region owners.
   * - ``getParent()``
     - Region
     - Get parent region.
   * - ``getPlayersInside()``
     - Player[]
     - All players currently inside.
   * - ``getPoints()``
     - Vector2[]
     - Get polygon points.
   * - ``getPriority()``
     - Int
     - Get region priority.
   * - ``getRegionType()``
     - String
     - Get the region type.
   * - ``getVolume()``
     - Int
     - Get the region volume.
   * - ``getWorld()``
     - String
     - Get the world name.
   * - ``hasMembersOrOwners()``
     - Boolean
     - True if has any members or owners.
   * - ``isMemberGroup(String group)``
     - Boolean
     - True if group is a member.
   * - ``isMemberPlayer(Player player)``
     - Boolean
     - True if player is a member.
   * - ``isOwnerGroup(String group)``
     - Boolean
     - True if group is an owner.
   * - ``isOwnerPlayer(Player player)``
     - Boolean
     - True if player is an owner.
   * - ``isPhysicalArea()``
     - Boolean
     - True if has physical bounds.
   * - ``isTransient()``
     - Boolean
     - True if not saved to WorldGuard.
   * - ``setDoubleFlag(String flag, Double value)``
     - Void
     - Set a Double flag value.
   * - ``setIntFlag(String flag, Int value)``
     - Void
     - Set an Int flag value.
   * - ``setParent(Region parent)``
     - Void
     - Set parent region.
   * - ``setPriority(Int priority)``
     - Void
     - Set region priority.
   * - ``string()``
     - String
     - Returns string representation.

Reference Types
---------------

These types represent Minecraft registry entries. They have no constructors; use the predefined instances from their namespaces (e.g., ``entity::zombie``, ``material::diamond``).

entity::EntityType
^^^^^^^^^^^^^^^^^^

Represents a Minecraft entity type. Access via ``entity::`` namespace variables (e.g., ``entity::zombie``, ``entity::creeper``).

.. list-table::
   :widths: 35 15 50
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``getName()``
     - String
     - Get the entity type name (e.g., ``"ZOMBIE"``).
   * - ``string()``
     - String
     - Returns string representation.

material::Material
^^^^^^^^^^^^^^^^^^

Represents a Minecraft material (item or block type). Access via ``material::`` namespace variables (e.g., ``material::diamond``, ``material::diamondBlock``).

.. list-table::
   :widths: 45 20 35
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``getBlastResistance()``
     - Float
     - Block's explosion resistance.
   * - ``getBukkitName()``
     - String
     - Bukkit material name.
   * - ``getCraftingRemainingItem()``
     - Material
     - Item left after crafting (e.g., bucket).
   * - ``getHardness()``
     - Float
     - Block's hardness value.
   * - ``getID()``
     - String
     - Material ID string.
   * - ``getKey()``
     - NamespacedKey
     - Namespaced key (e.g., ``minecraft:diamond``).
   * - ``getMaxDurability()``
     - Int
     - Max durability for tools/armor.
   * - ``getMaxStackSize()``
     - Int
     - Maximum stack size (usually 64).
   * - ``getTranslationKey()``
     - String
     - Minecraft translation key.
   * - ``hasGravity()``
     - Boolean
     - True if affected by gravity (sand, gravel).
   * - ``isAir()``
     - Boolean
     - True if air block.
   * - ``isBlock()``
     - Boolean
     - True if placeable as block.
   * - ``isBurnable()``
     - Boolean
     - True if can burn.
   * - ``isEdible()``
     - Boolean
     - True if food item.
   * - ``isFlammable()``
     - Boolean
     - True if catches fire.
   * - ``isFuel()``
     - Boolean
     - True if usable as furnace fuel.
   * - ``isInteractable()``
     - Boolean
     - True if has right-click action.
   * - ``isOccluding()``
     - Boolean
     - True if blocks light fully.
   * - ``isRecord()``
     - Boolean
     - True if music disc.
   * - ``isSolid()``
     - Boolean
     - True if solid block.
   * - ``string()``
     - String
     - Returns string representation.

statistic::Statistic
^^^^^^^^^^^^^^^^^^^^

Represents a Minecraft statistic. Access via ``statistic::`` namespace variables (e.g., ``statistic::jump``, ``statistic::walkOneCm``).

.. list-table::
   :widths: 35 20 45
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``getKey()``
     - NamespacedKey
     - Namespaced key for the statistic.
   * - ``getName()``
     - String
     - Get the statistic name (e.g., ``"JUMP"``).
   * - ``string()``
     - String
     - Returns string representation.

NamespacedKey
^^^^^^^^^^^^^

Represents a Minecraft namespaced identifier (e.g., ``minecraft:diamond``). Returned by methods like ``Material.getKey()`` and ``Statistic.getKey()``. No constructors.

.. list-table::
   :widths: 35 20 45
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``getKey()``
     - String
     - Get the key part (e.g., ``"diamond"``).
   * - ``getNamespace()``
     - String
     - Get the namespace part (e.g., ``"minecraft"``).
   * - ``string()``
     - String
     - Returns full identifier (e.g., ``"minecraft:diamond"``).

Map Types
---------

Types for interacting with Minr maps, challenges, and timers.

minr::Challenge
^^^^^^^^^^^^^^^

Represents a Minr challenge. Used for querying challenge leaderboards.

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Challenge(String tag)``
     - Create from challenge tag.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``getPlayerFromRank(Int rank)``
     - Player
     - Get player at leaderboard rank.
   * - ``getPlayerFromTime(Long time)``
     - Player
     - Get player with specific time.
   * - ``getRankOfTime(Long time)``
     - Int
     - Get rank for a given time.
   * - ``getTimeFromRank(Int rank)``
     - Long
     - Get time at leaderboard rank.
   * - ``getTimeOfPlayer(Player player)``
     - Long
     - Get player's best time.
   * - ``string()``
     - String
     - Returns string representation.

minr::Map
^^^^^^^^^

Represents a Minr map. Used for querying map leaderboards.

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Map(String tag)``
     - Create from map tag.

.. list-table::
   :widths: 45 15 40
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``getPlayerFromRank(Int rank)``
     - Player
     - Get player at leaderboard rank.
   * - ``getPlayerFromTime(Long time)``
     - Player
     - Get player with specific time.
   * - ``getRankOfTime(Long time)``
     - Int
     - Get rank for a given time.
   * - ``getTimeFromRank(Int rank)``
     - Long
     - Get time at leaderboard rank.
   * - ``getTimeOfPlayer(Player player)``
     - Long
     - Get player's best time.
   * - ``string()``
     - String
     - Returns string representation.

timer::Timer
^^^^^^^^^^^^

Represents a timer instance for tracking player progress on maps or challenges.

.. list-table::
   :widths: 70 30
   :header-rows: 1

   * - Constructor
     - Description
   * - ``Timer(Player player, String tag, String name)``
     - Create timer for player.
   * - ``Timer(Player player, String tag, String name, Boolean silent)``
     - Create timer, optionally silent.
   * - ``Timer(Player player, String tag, String name, Boolean silent, Boolean validate)``
     - Create timer with validation option.

.. list-table::
   :widths: 40 15 45
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``deactivate()``
     - Void
     - Deactivate the timer.
   * - ``finish(Boolean silent)``
     - Void
     - Finish the timer.
   * - ``getDeltaTime()``
     - Long
     - Get elapsed time since start.
   * - ``getFinishTime()``
     - Long
     - Get the finish timestamp.
   * - ``getName()``
     - String
     - Get the timer name.
   * - ``getStartTime()``
     - Long
     - Get the start timestamp.
   * - ``getTag()``
     - String
     - Get the timer tag.
   * - ``getTimerType()``
     - String
     - Get the timer type.
   * - ``invalidate()``
     - Void
     - Mark timer as invalid.
   * - ``isActive()``
     - Boolean
     - True if timer is running.
   * - ``isInvalidated()``
     - Boolean
     - True if timer is invalid.
   * - ``isNullified()``
     - Boolean
     - True if timer is nullified.
   * - ``nullify()``
     - Void
     - Nullify the timer.
   * - ``setFinishTime(Long milli)``
     - Void
     - Set the finish timestamp.
   * - ``setInvalidState(Boolean state)``
     - Void
     - Set invalid state.
   * - ``setNullifiedState(Boolean state)``
     - Void
     - Set nullified state.
   * - ``setStartTime(Long milli)``
     - Void
     - Set the start timestamp.
   * - ``start()``
     - Void
     - Start the timer.
   * - ``string()``
     - String
     - Returns string representation.

.. warning::

   Never store Timer instances in namespace variables. They will break silently. Always use ``timer::getCustomTimer(...)`` to retrieve a fresh reference.

Text Types
----------

Types for working with rich text (JSON chat components).

format::TextFormat
^^^^^^^^^^^^^^^^^^

Represents a text color or formatting style. Access predefined formats via ``format::`` namespace variables (e.g., ``format::green``, ``format::bold``), or construct from a color code.

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Constructor
     - Description
   * - ``TextFormat(String value)``
     - Create from color code character (e.g., ``"a"`` for green).

.. list-table::
   :widths: 35 15 50
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``string()``
     - String
     - Returns the section sign code (e.g., ``"§a"``).

text::TextComponent
^^^^^^^^^^^^^^^^^^^

A single rich text component with formatting, click events, hover events, etc.

.. list-table::
   :widths: 55 45
   :header-rows: 1

   * - Constructor
     - Description
   * - ``TextComponent(String text)``
     - Create from plain text.
   * - ``TextComponent(String componentType, String value)``
     - Create specific component type (e.g., ``"keybind"``, ``"score"``).

.. list-table::
   :widths: 55 20 25
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``addExtraComponent(TextComponent component)``
     - TextComponent
     - Add child component.
   * - ``addExtraString(String text)``
     - TextComponent
     - Add child text.
   * - ``clearBold()``
     - TextComponent
     - Remove bold formatting.
   * - ``clearClickEvent()``
     - TextComponent
     - Remove click event.
   * - ``clearItalic()``
     - TextComponent
     - Remove italic formatting.
   * - ``clearObfuscated()``
     - TextComponent
     - Remove obfuscated formatting.
   * - ``clearStrikethrough()``
     - TextComponent
     - Remove strikethrough.
   * - ``clearUnderlined()``
     - TextComponent
     - Remove underline.
   * - ``copyFormatting(TextComponent component, Boolean replace)``
     - TextComponent
     - Copy formatting from another component.
   * - ``debug()``
     - String
     - Get debug representation.
   * - ``duplicate()``
     - TextComponent
     - Create a copy.
   * - ``getClickEventAction()``
     - String
     - Get click event action type.
   * - ``getClickEventValue()``
     - String
     - Get click event value.
   * - ``getColor()``
     - TextFormat
     - Get effective color.
   * - ``getColorRaw()``
     - TextFormat
     - Get directly set color.
   * - ``getComponentType()``
     - String
     - Get component type.
   * - ``getContent()``
     - String
     - Get text content.
   * - ``getExtra()``
     - TextComponent[]
     - Get child components.
   * - ``getFont()``
     - String
     - Get effective font.
   * - ``getFontRaw()``
     - String
     - Get directly set font.
   * - ``getInsertion()``
     - String
     - Get shift-click insertion text.
   * - ``hasFormatting()``
     - Boolean
     - True if has any formatting.
   * - ``isBold()``
     - Boolean
     - True if bold (inherited).
   * - ``isBoldRaw()``
     - Boolean
     - True if bold (directly set).
   * - ``isItalic()``
     - Boolean
     - True if italic (inherited).
   * - ``isItalicRaw()``
     - Boolean
     - True if italic (directly set).
   * - ``isObfuscated()``
     - Boolean
     - True if obfuscated (inherited).
   * - ``isObfuscatedRaw()``
     - Boolean
     - True if obfuscated (directly set).
   * - ``isStrikethrough()``
     - Boolean
     - True if strikethrough (inherited).
   * - ``isStrikethroughRaw()``
     - Boolean
     - True if strikethrough (directly set).
   * - ``isUnderlined()``
     - Boolean
     - True if underlined (inherited).
   * - ``isUnderlinedRaw()``
     - Boolean
     - True if underlined (directly set).
   * - ``retain(String retention)``
     - TextComponent
     - Retain specific formatting.
   * - ``serialise()``
     - String
     - Convert to JSON string.
   * - ``setBold(Boolean state)``
     - TextComponent
     - Set bold formatting.
   * - ``setClickEvent(String action, String value)``
     - TextComponent
     - Set click event.
   * - ``setColor(TextFormat color)``
     - TextComponent
     - Set text color.
   * - ``setContent(String value)``
     - TextComponent
     - Set text content.
   * - ``setExtra(TextComponent[] components)``
     - TextComponent
     - Set child components.
   * - ``setFont(String font)``
     - TextComponent
     - Set font.
   * - ``setInsertion(String insertion)``
     - TextComponent
     - Set shift-click insertion.
   * - ``setItalic(Boolean state)``
     - TextComponent
     - Set italic formatting.
   * - ``setObfuscated(Boolean state)``
     - TextComponent
     - Set obfuscated formatting.
   * - ``setStrikethrough(Boolean state)``
     - TextComponent
     - Set strikethrough.
   * - ``setUnderlined(Boolean state)``
     - TextComponent
     - Set underline.
   * - ``string()``
     - String
     - Returns string representation.
   * - ``toLegacyText()``
     - String
     - Convert to legacy color-coded text.
   * - ``toPlainText()``
     - String
     - Convert to plain text (no formatting).

text::ComponentBuilder
^^^^^^^^^^^^^^^^^^^^^^

Builder pattern for constructing TextComponent arrays. Methods return the builder for chaining.

.. list-table::
   :widths: 55 45
   :header-rows: 1

   * - Constructor
     - Description
   * - ``ComponentBuilder()``
     - Create empty builder.
   * - ``ComponentBuilder(TextComponent component)``
     - Create from existing component.
   * - ``ComponentBuilder(ComponentBuilder other)``
     - Copy another builder.
   * - ``ComponentBuilder(String text)``
     - Create with initial text.

.. list-table::
   :widths: 60 20 20
   :header-rows: 1

   * - Method
     - Return Type
     - Description
   * - ``appendComponent(TextComponent component)``
     - ComponentBuilder
     - Append a component.
   * - ``appendComponentRetain(TextComponent component, String formatRetention)``
     - ComponentBuilder
     - Append component, retaining format.
   * - ``appendComponents(TextComponent[] components)``
     - ComponentBuilder
     - Append multiple components.
   * - ``appendComponentsRetain(TextComponent[] components, String formatRetention)``
     - ComponentBuilder
     - Append components, retaining format.
   * - ``appendLegacyText(String text)``
     - ComponentBuilder
     - Append legacy color-coded text.
   * - ``appendText(String text)``
     - ComponentBuilder
     - Append plain text.
   * - ``appendTextRetain(String text, String formatRetention)``
     - ComponentBuilder
     - Append text, retaining format.
   * - ``bold(Boolean bold)``
     - ComponentBuilder
     - Set bold on current.
   * - ``click(String action, String value)``
     - ComponentBuilder
     - Set click event on current.
   * - ``color(TextFormat color)``
     - ComponentBuilder
     - Set color on current.
   * - ``create()``
     - TextComponent[]
     - Build the component array.
   * - ``font(String font)``
     - ComponentBuilder
     - Set font on current.
   * - ``getComponent(Int pos)``
     - TextComponent
     - Get component at position.
   * - ``getCurrentComponent()``
     - TextComponent
     - Get current component.
   * - ``insertion(String insertion)``
     - ComponentBuilder
     - Set insertion on current.
   * - ``italic(Boolean italic)``
     - ComponentBuilder
     - Set italic on current.
   * - ``obfuscated(Boolean obfuscated)``
     - ComponentBuilder
     - Set obfuscated on current.
   * - ``removeComponent(Int pos)``
     - Void
     - Remove component at position.
   * - ``reset()``
     - ComponentBuilder
     - Reset current formatting.
   * - ``resetCursor()``
     - ComponentBuilder
     - Reset cursor to end.
   * - ``retain(String formatRetention)``
     - ComponentBuilder
     - Set format retention mode.
   * - ``setCursor(Int pos)``
     - ComponentBuilder
     - Set cursor position.
   * - ``strikethrough(Boolean strikethrough)``
     - ComponentBuilder
     - Set strikethrough on current.
   * - ``string()``
     - String
     - Returns string representation.
   * - ``underline(Boolean underline)``
     - ComponentBuilder
     - Set underline on current.
