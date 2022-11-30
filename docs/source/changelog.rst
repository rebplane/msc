Version History/Changelog
=================================

.. contents::

.. _changelog_2_4_7:

2.4.7
=================

**Additions**

- Added new methods to the Entity type:
    - Boolean addPassenger(Entity passenger)​
    - Void ejectPassengers()​



.. _changelog_2_4_6:

2.4.6
=================

**Additions**

- Disabled the following Player methods:
    - Void setPlayerWeather(String weather)​
    - Void resetPlayerWeather()
    - Long getPlayerTime()​
    - Long getPlayerTimeOffset()​
    - Void setPlayerTime(Long time, Boolean serverRelative)​


.. _changelog_2_4_5:

2.4.5
=================

**Additions**

- The Player type has received a number of new methods:
    - String getClickedBlockFace()​
    - String getTargetBlockFace(Int distance)​
    - Block getTargetBlock(Int distance)​
    - Entity getTargetEntity(Int distance)​
    - Boolean hasGravity()​
    - Void setGravity(Boolean gravity)​
    - Boolean isGliding()​
    - String getPlayerWeather()​
    - Void setPlayerWeather(String weather)​
    - Void resetPlayerWeather()
    - Long getPlayerTime()​
    - Long getPlayerTimeOffset()​
    - Void setPlayerTime(Long time, Boolean serverRelative)​
    - Void resetPlayerTime()​
    - Boolean dropItem(Boolean dropAll)​

.. _changelog_2_4_4:

2.4.4
=================

**Additions**

- Added some commands to the blacklist.
- Fixed walk/area/ground scripts triggering before a teleport has taken effect; the target-location script would trigger on the old coordinates.
- All world scripts now have an implicit 1-tick cooldown, fixing infinite recursion when teleporting into scripts.


.. _changelog_2_4_3:

2.4.3
=================

**Additions**

- Added sum() and avg() to Int[], Long[], Float[], Double[].

.. _changelog_2_4_2:

2.4.2
=================

**Additions**

- Scripts now trigger when teleporting into them.

.. _changelog_2_4_1:

2.4.1
=================

**Additions**

- Commands /c setplayercp, /c setplayersub are deprecated (should not be used) in scripts.

.. _changelog_2_4_0:

2.4.0
=================

**Additions**

- Player#canSee(Player) returns if the player can see the target player (i.e., /hide and /block cause it to fail).
- Player constructors will now return null instead of throwing an exception if they do not find a player.
- Added a new constructor for Player: Player(String name, Player visibleTo). It will return null if a player was found but is not visible to visibleTo.
- Player#invalidate() and Player#invalidateTime() have been removed.
- Replaced by getting a timer directly and invalidating / nullifying them.

- You can obtain timers:
    - timer::getMapTimer(Player player, String mapcode)
    - timer::getChallengeTimer(Player player, String challengecode)
    - timer::getCustomTimer(Player player, String tag)
    - timer::getSpecialTimer(Player player, String tag)
- You can construct custom timers by instantiating the timer::Timer type.
- Never store a Timer instance in a namespace variable. It will break on you silently. ALWAYS use timer::getCustomTimer().
- You can remove custom timers with timer::removeCustomTimer(Player player, String tag)
- You can format a time into a string using String timer::formatTime(Long time).
- Added namespace minr. It has a Map and a Challenge type, that allows you to get the ranks and times of players.
- /namespace functions and /type methods now have added colour for parsability.
- Added filtering in /namespace variables, /namespace functions, /type methods, /type fields.
- You can now filter the results of the above commands by adding additional search terms after the command. For example, /type methods Vector3[] value int will only return methods that cantain "value" and "int".

.. _changelog_2_3_4:

2.3.4
=================

**Fixes**
- Op messages containing {{}} will now only send the result to the executing op.

.. _changelog_2_3_3:

2.3.3
=================

**Fixes**
- Fixed interact scripts triggering multiple times in rapid succession.

.. _changelog_2_3_1:

2.3.2
=================

**Fixes**
- Fixed interact scripts on cauldrons or waterloggable blocks not triggering on right click.

.. _changelog_2_3_0:

2.3.0
=================

**Additions**

- Added new generic functions on List. Generic means that they can take any Type within constraints. In the following T will be the base type of your list (i.e., String[] -> T = String).
    - Void append(T value) appends a value to the List.
    - Void add(T value, Int index) places a value at an index, shifting the elements at that index and higher one index up.
    - T pop() removes the last element of the list and returns it.
    - T remove(Int index) removes the element at index from the list and returns it.
    - Boolean contains(T value) returns whether the list contains an element that equals value.
    - Int find(T value) returns the first index that matches the value. Throws a ElementNotFoundException if the value is not in the list. (Tip: always use contains before find)
- Two functions have been added specifically for String[]:
    - String concat() concatenates a list of Strings together: String["hello", "world"].concat() yields "helloworld".
    - String join(String delimiter) joins a list of string, inserting delimiter between each string: String["hello", "world"].join(" ") yields "hello world".

.. _changelog_2_2_2:

2.2.2
========================

**Fixes**

- Fixed /scripts copy and /scripts paste not working when pasting in a different world.

.. _changelog_2_2_1:

2.2.1
========================

**Additions**

- Added Material type

.. _changelog_2_2_0:

2.2.0
========================

**Additions**

- Overhauled scripts loading and internal structure.
- Added String player.getName()
- Added String player.getDisplayName()

- Added new built-in spatial types:
    - Position(Double x, Double y, Double z, Float yaw, Float pitch, String world)
    - Location(Double x, Double y, Double z, String world)
    - Vector3(Double x, Double y, Double z)
    - Vector2(Double x, Double z)
    - BlockLocation(Int x, Int y, Int z, String world)
    - BlockVector3(Int x, Int y, Int z)
    - BlockVector2(Int x, Int z)
    - Region(String id, String world, String type, X points, Boolean transient)
    - These all have methods, too innumerable to mention here.
- Added Location player.getLocation(), Position player.getPosition() and BlockLocation block.getLocation().
- Added Player.teleport(Position destination) and Entity.teleport(Position destination).
- Added BlockLocation.set(String block)
- Overhauled scripts loading and internal structure.
- Added String player.getName()
- Added String player.getDisplayName()


.. _changelog_2_1_5:

2.1.5
========================

**Additions**

- Added Int player.countItem(String id).
- Added Boolean util::executeAndQuerySuccess(String command) and Int util::executeAndQueryResult(String command).
- Added String util::randomUUID() to randomly generate an UUID.
- format::formatDate now uses a timezone of UTC, so you can use more formats.


.. _changelog_2_1_4:

2.1.4
========================

**Additions**

- Scripts are no longer triggered while the player is in spectator mode.

.. _changelog_2_1_3:

2.1.3
========================

**Additions**

-  Added @fast and @slow script operators.
- By default, the @command, @bypass or @console script operators have a one-tick delay (like @delay 1).
- @fast will remove that delay for all subsequent command operators.
- @slow will re-add it.
- Having either one multiple times in a row without the other is legal.
- Note that this effect only applies to the local execution context - other functions called will be unaffected.
- Added player.getSpeedrunScore(). player.getGlobalPoints() is now deprecated.

.. _changelog_2_1_2:

2.1.2
========================

**Additions**

- Added String Player.getBedLocationWorld(), which returns a String containing the world where the player has set their bed.
- Added String[] String.split(String separator), which splits the string based on the separator into a list of pieces around the separator. For example: "hi world".split(" ") would yield: ["hi", "world"].
- Added Double[] system::getTPS() which returns a list of size 3, containing the average TPS over the last 1 minute, 5 minutes and 15 minutes.

.. _changelog_2_1_1:

2.1.1
========================

**Additions**

- Added the exponentiation operator ^.
- Added literals pi and π (both equal to 3.14159265358979323846)
- Added the following functions to the math namespace:
    - sin(), cos(), tan()
    - arcsin(), arccos(), arctan()
    - radsin(), radcos(), radtan()
    - radarcsin(), radarctan(), radarctan()
    - rad()
    - deg()
- Functions with the rad prefix take radians, all others take degrees.

.. _changelog_2_1:

2.1.0
=================================

**Additions**

- Added List type (with max size 1000) - if this is too limiting, we can increase it, but I feel this should allow for enough leeway while not spending too many server resources).
- For loops to iterate over list types. (Including a python-like range(Int inclusiveStart, Int exclusiveEnd)).
- Player indexing on relative variables.
- Whitespace will now be preserved when importing from Hastebin, and will be exported as well.
- When creating a script, the co-ordinates of the script will be displayed. If you accidentally misplace a script this will allow you to easily remove the script.
- Added Int floor(Double x) and Int ceil(Double x), which floor and ceiling a number respectively.
- Added sendMessage(String message) to send a raw message directly to a player.

**Fixes**:
- Issues with default vars & relatives.
- Minor bugfixes.

.. _changelog_2_0:

2.0
==================================

**Note**

The initial documentation for 2.0 was written by rickyboy320 and was copied here.

**Additions**

**Namespaces**

Grouping variables and functions so that variables with the same names over different
projects do not clash.

**User Types**

Players can define their own variable Types, including constructors, methods and fields.
This also supports the this keyword to select the current instance.

**Qualifiers**

To support strict variables and still support per-player variables, qualifiers were 
introduced. The two available qualifiers currently are: relative and final.

**Null**

To support the absence of a value (due to failed computation or other), null is supported
as a substitute for a variable on unambiguous functions, or as the value of a variable.

**Expressions**

To allow multiple operations on one line (and not separate lines as was previously the case
in MSC 1.0), full expression support was added to provide easier operations, function
calls, assignment and more.

**Functions**

Functions have been added to greatly favor reuse of scripts. Functions can take input
and can output values, and can be called from any context.

**Hastebin**

To support easier script writing, MSC 2.0 supports Hastebin. This allows the user to
write scripts in a notepad-like environment, and import the scripts to the server from
there. Exports are also supported.

**Var Script Operators**

Variable related script operators have been added: @var supports any assignment or
simply an expression. @define supports variable definitions within the local namespace.
@using supports switching namespaces for the rest of the script.

**Script Metadata**

In order for the user to trace back who the script originally belongs to, how many times
the script has been executed and more metadata, scripts now store metadata to keep
track of sometimes quintessential information while maintaining maps.

**Modifications**

**Variable Typing**

Variables are now typed. MSC 2.0 supports built-in types: String, Int, Long, Float,
Double, Player, Block, Entity. Variables are strictly typed, and a String can no longer
be implicitly used as an Int, as was possible before.

**Literals**

Literals have been modified to support the new built-in types, and automatically change
to the corresponding type. Previously everything was parsed as a String.

@chatscript

Chatscript now only takes a function call as argument, instead of the previously sup-
ported script lines.


