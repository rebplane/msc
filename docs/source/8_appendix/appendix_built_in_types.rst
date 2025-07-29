.. _appendix_built_in_types:

Built-in Types
------------------


.. contents::

.. _appendix_built_in_types_string:

String
---------------

A String represents plain text. Any piece of text surrounded with ” is considered a
String. Script operators that take exactly one string (such as @player, @bypass, @con-
sole, @command) do not require this (for backwards compatibility and less clutter).


.. code-block:: python

    @player Hey
    @player "Hey"

.. code-block:: console

    Hey
    "Hey"

A String will be null when it is referenced before initialization.

.. _appendix_built_in_types_constructors:

Constructors
------------------------

A string can be created in one of two ways. The first one is using the String literal, and
the other is the String constructor. The string literal is any piece of text surrounded with
”. If the String needs to contain a ”, use the backslash to escape the double quotation
marks, as follows: ”This is escaped:\”. Cool.”

The second way is through a constructor. Available constructors are:


Supported constructors for the String type

=========================== ====================================
=========================== ====================================
String(String value)            Clone a String.
String(Int value)               Get the textual value of an Int.
String(Long value)              Get the textual value of a Long.
String(Float value)             Get the textual value of a Float.
String(Boolean value)           Get the textual value of a Boolean.
String(Double value)            Get the textual value of a Double.
String(Player value)            Get the Player name in textual form.
String(Entity value)            Get the Entity UUID in textual form.
String(Block value)             Get the Block coordinates in textual form.
String(Item value)              Get the Item in textual form.
=========================== ====================================

The String literal has an additional property for easier formatting. Within the quotation
marks it supports string formatting using {{ and }}. Any expression or value represented
within these double curly brackets will be evaluated and converted to a String. If any
other type remains within the curly brackets, the appropriate constructor is automatically 
called to convert it into a String, if any. Admins can use these curly brackets in
chat to quickly evaluate an expression (for example to see the contents of a variable).
Do keep in mind that expressions in chat will require the local namespace specifiers to
specify the namespace, as there is no @using in chat.

For example:

.. code-block:: python 

    @player {{Player("rickyboy320")}}

.. code-block:: console

    rickyboy320

This works because the String(Player) constructor defaults to the player name in textual
form. Additionally, script operators that take exactly one string do not take quotation
marks.

(If required, {{ and }} can be escaped like the quotation marks, using a backslash:\)

.. _appendix_built_in_types_operators:

Operators
------------------------

Supported operators for the String type

+-----+----------------------------+------------------------------------------------------+
| \+  |   String                   |   Concatenates two Strings together.                 |  
|     +----------------------------+------------------------------------------------------+
|     |   Boolean                  |   Concatenates String and Boolean together, as if    |
|     |                            |                                                      |  
|     |                            |   the value were a string.                           |  
|     |                            |                                                      |  
|     |                            |   (*”true” +true= ”truetrue”*)                       | 
|     +----------------------------+------------------------------------------------------+
|     |   Int, Double, Float, Long |   Concatenates String and the textual value of the   |
|     |                            |                                                      |  
|     |                            |   other together.                                    |
|     +----------------------------+------------------------------------------------------+
|     |   Player                   |   Concatenates String and the name of the Player     |
|     |                            |                                                      |     
|     |                            |   together.                                          |  
|     +----------------------------+------------------------------------------------------+
|     |   Entity                   |   Concatenates String and the UUID of the Entity     |
|     |                            |                                                      |    
|     |                            |   together.                                          | 
|     +----------------------------+------------------------------------------------------+ 
|     |   Block                    |   Concatenates String and the coordinates of Block   |
|     |                            |                                                      |  
|     |                            |   together.                                          |
|     +----------------------------+------------------------------------------------------+  
|     |   Item                     |   Concatenates String and Item together.             |
+-----+----------------------------+------------------------------------------------------+
| ==  |    String                  |   Checks for equality between Strings. This is       |
|     |                            |                                                      |  
|     |                            |   case-sensitive. For case-insensitive equality, use |
|     |                            |                                                      |      
|     |                            |   .equalsIgnoreCase(). (Returns Boolean with the     |
|     |                            |                                                      |  
|     |                            |   result: true if equal).                            |
+-----+----------------------------+------------------------------------------------------+
| !=  |    String                  |   Checks for inequality between Strings. (Returns    |
|     |                            |                                                      |    
|     |                            |   Boolean with the result: true if not equal).       |
+-----+----------------------------+------------------------------------------------------+

**Methods**

Supported Methods for the String type

=========================================== ====================================
=========================================== ====================================
Boolean **contains**\(String sequence)      Returns true if the String contains

                                            sequence, false otherwise.
Boolean **equalsIgnoreCase**\(String other) Returns true if the String is equal

                                            except for case to *other*, false otherwise.
Boolean **matches**\(String regex)          Returns true if the string matches a specified
                                            regular expression.
Boolean **startsWith**\(String start)       Returns true if the String starts with a
                                            specified value.
Int **indexOf**\(String sequence)           Returns the index the first occurrence

                                            of *sequence* starts at. If the String does

                                            not contain *sequence*, returns -1.
Int **length**\()                           Returns the length of a String.
String **replace**\(String old, String new) Replaces all occurrences of *old* with
                                            
                                            *new* in the String.
String **substring**\(Int start, Int end)   Returns a substring starting (inclusive)

                                            at *start* and ending (exclusive) at *end*.

                                            Throws IndexOutOfBoundsException

                                            when *start* or *end* are invalid indices

                                            within the string. Throws

                                            InvalidParameterException when*end*

                                            is smaller than *start*.

String **toLowerCase**\()                   Returns the String in lowercase.
String **toUpperCase**\()                   Returns the String in uppercase.
String **trim**\()                          Returns the String with leading and

                                            trailing whitespace omitted.
=========================================== ====================================

.. _appendix_built_in_types_int_and_long:

Int & Long
-------------------

The Integer represents whole numbers (-1, 0, 1, 2, etc). Within a computing environment,
not all numbers can be represented.

The Java standard upholds a max Integer value of :math:`2^{31}`` − 1 and a minimum Integer
value of :math:`− 2^{31}`. Any number outside of this range will overflow, resulting in a sign flip
and counting the opposite way. Roughly said: :math:`2^{31}` −1 + 1 =− :math:`2^{31}` (note that this is
unsupported and can change at any time).

If you need to represent a discrete number outside of this range, you can use Long
instead. Long has a max value of :math:`2^{63}` −1 and a min value of :math:`− 2^{63}`.

Int and Long are *recessive* types. Any operation with a Float, Double or String will take
priority and converts the Int or Long to the correct type. The resulting type will always
be that of the operand. This is exactly why Integer division does not occur when using
a Double or Float as the operand.

An Int and Long will be 0 when it is referenced before initialization.

**Constructors**

Integers and Longs can be created in one of two ways. The first one is using the Int or
Long literal, and the other is a constructor.

The Int literal is any whole number: 1, 2, 4, 10, -5.

The Long literal is any whole number followed by L: 1L, 2L, 4L, 10L, -5L.

The second way is through a constructor. Available constructors are:

Supported constructors for the Int and Long type

========================================== ====================================
========================================== ====================================
Int(Int value)                              Make an Int from another Int. (Clone operation)
Int(Long value)                             Cast a Long down to an Int. (Precision loss)
Int(Float value)                            Discard the decimals and convert a Float to Int.
Int(Double value)                           Discard the decimals and convert a Double to Int.
Int(String value)                           Attempt to parse a String into an Int. Only succeeds if the

                                            entire String can be represented as an Int. Throws

                                            NumberFormatException otherwise.
Long(Int value)                             Upcast an Int to a Long.
Long(Long value)                            Clone a Long.
Long(Float value)                           Discard the decimals and convert a Float to Long.
Long(Double value)                          Discard the decimals and convert a Double to Long.
Long(String value)                          Attempt to parse a String into an Long. Only succeeds if the

                                            entire String can be represented as a Long. Throws

                                            NumberFormatException otherwise.
========================================== ====================================

**Operators**


Supported operators for the Int and Long type

+-----+----------------------------+------------------------------------------------------+
| \+  |   String                   |   Concatenates Int and String together, as if the    |  
|     |                            |                                                      |   
|     |                            |   value were a string. (2 + ”2” = ”22”)              |  
|     +----------------------------+------------------------------------------------------+
|     |   Int, Double, Float, Long |   Adds the value to the numerical value of the       |
|     |                            |                                                      |  
|     |                            |   operand.                                           |
+-----+----------------------------+------------------------------------------------------+
| \-  |   Int, Double, Float, Long |   Subtracts the operand value from the value.        |
+-----+----------------------------+------------------------------------------------------+
| \*  |   Int, Double, Float, Long |   Multiplies the value with the operand value.       |
+-----+----------------------------+------------------------------------------------------+
|  /  |   Int, Long                |   Integer divides the value and the operand.         |  
|     |                            |                                                      |   
|     |                            |   (5/2 = 2)                                          |  
|     +----------------------------+------------------------------------------------------+
|     |   Double, Float            |   Float divides the value and the operand.           |  
|     |                            |                                                      |  
|     |                            |   (5/ 2 .0 = 2.5)                                    |
+-----+----------------------------+------------------------------------------------------+
|  %  |   Int, Double, Float, Long |   The modulo operation. Finds the remainder after    |
|     |                            |                                                      |  
|     |                            |   division. (5 % 2 = 1)                              |  
+-----+----------------------------+------------------------------------------------------+
| ==  |   Int, Double, Float, Long |   Returns whether this numerical value and the       |
|     |                            |                                                      |  
|     |                            |   other numerical value are *exactly* the same.      |  
+-----+----------------------------+------------------------------------------------------+
| !=  |   Int, Double, Float, Long |   Returns whether this numerical value and the       |
|     |                            |                                                      |  
|     |                            |   other numerical value are not *exactly* the same.  |  
+-----+----------------------------+------------------------------------------------------+
|  <  |   Int, Double, Float, Long |   Returns whether this numerical value is less than  |
|     |                            |                                                      |  
|     |                            |   the other numerical value                          |  
+-----+----------------------------+------------------------------------------------------+
|  >  |   Int, Double, Float, Long |   Returns whether this numerical value is more than  |
|     |                            |                                                      |  
|     |                            |   the other numerical value                          |  
+-----+----------------------------+------------------------------------------------------+
| <=  |   Int, Double, Float, Long |   Returns whether this numerical value is less than  |
|     |                            |                                                      |  
|     |                            |   or equal to the other numerical value              |  
+-----+----------------------------+------------------------------------------------------+
|  >= |   Int, Double, Float, Long |   Returns whether this numerical value is more than  |
|     |                            |                                                      |  
|     |                            |   or equal to the other numerical value              |  
+-----+----------------------------+------------------------------------------------------+

**Methods**

======================= ====================================
======================= ====================================
Int floor(Double x)       Returns the floor of a double.
Int ceiling(Double x)     Returns the ceiling of a double.
======================= ====================================

.. _appendix_built_in_types_float_and_double:

Float & Double
-----------------

The Float and Double represent decimal values (-0.1, 37.5, 42.0, etc.). Internally it uses
an interesting notation, a bit like the scientific notation to represent numbers. Because
of this way of representing the numbers (using a floating point), not all numbers are
represented as accurately. A Float and a Double can both represent a wider range of
values than the Integer or Long can, but not as precisely.

The Java standard upholds a max Float value of (2− :math:`2^{−23}`` )· :math:`2^{127}` and a minimum
(positive) Float value of :math:`2^{-149}`. All numbers that can be represented positively can also
be represented negatively (including 0!). Do note that not all numbers in the range of
the min and max value can be represented, and that there is more than often a case of
precision loss.

The Double type can represent numbers more accurately, maintaining a maximum value
of (2− :math:`2^{-52}` )· :math:`2^{1023}` and a minimum value of :math:`2^{-1074}`. It can represent numbers more
accurately than a Float, but can still have precision loss. In most cases this should not
pose a problem.

On top of overflowing, much like the Integer and Long types, the Float and Double
can also underflow. This occurs when it tries to represent a number between 0 and the
minimum positive (or negative) value. In most cases this should not be a problem.

An Float and Double will be 0.0 when it is referenced before initialization.

**Constructors**

Floats and Doubles can be created in one of two ways. The first one is using the Float
or Double literal, and the other is a constructor.

The Float literal is any decimal number: 1.0, 2.0, 4.0, 10.2342, -5.12.

The Double literal is any number followed by D: 1D, 2D, 4.0D, 10.2342D, -5.12D.

The second way is through a constructor. Available constructors are:

Supported constructors for the Float and Double type

========================================== ====================================
========================================== ====================================
Float(Int value)                            Cast an Int to a Float.
Float(Long value)                           Cast a Long down to an Int. (Precision loss)
Float(Float value)                          Clone a Float.
Float(Double value)                         Cast a Double to a Float. (Precision loss)
Float(String value)                         Attempt to parse a String into an Float. Only succeeds if

                                            the entire String can be represented as a Float. Throws

                                            NumberFormatException otherwise.
Double(Int value)                           Cast an Int to a Double.
Double(Long value)                          Cast a Long to a Double.
Double(Float value)                         Upcast a Float to a Double.
Double(Double value)                        Clone a Double.
Double(String value)                        Attempt to parse a String into an Double. Only succeeds if

                                            the entire String can be represented as a Double. Throws

                                            NumberFormatException otherwise.
========================================== ====================================

**Operators**

Supported operators for the Float and Double type

+-----+----------------------------+------------------------------------------------------+
| \+  |   String                   |   Concatenates Float and String together, as if the  |  
|     |                            |                                                      |   
|     |                            |   value were a string. (2.0 + ”2” = ”2.02”)          |  
|     +----------------------------+------------------------------------------------------+
|     |   Int, Double, Float, Long |   Adds the value to the numerical value of the       |
|     |                            |                                                      |  
|     |                            |   operand.                                           |
+-----+----------------------------+------------------------------------------------------+
| \-  |   Int, Double, Float, Long |   Subtracts the operand value from the value.        |
+-----+----------------------------+------------------------------------------------------+
| \*  |   Int, Double, Float, Long |   Multiplies the value with the operand value.       |
+-----+----------------------------+------------------------------------------------------+
| /   |   Int, Double, Float, Long |   Divides the value and the operand. (5. 0 /2 = 2.5) |
+-----+----------------------------+------------------------------------------------------+
|  %  |   Int, Double, Float, Long |   The modulo operation. Finds the remainder after    |
|     |                            |                                                      |  
|     |                            |   division. (0.5 % 0.2 = 0.1)                        |  
+-----+----------------------------+------------------------------------------------------+
| ==  |   Int, Double, Float, Long |   Returns whether this numerical value and the       |
|     |                            |                                                      |  
|     |                            |   other numerical value are *exactly* the same.      |  
+-----+----------------------------+------------------------------------------------------+
| !=  |   Int, Double, Float, Long |   Returns whether this numerical value and the       |
|     |                            |                                                      |  
|     |                            |   other numerical value are not *exactly* the same.  |  
+-----+----------------------------+------------------------------------------------------+
|  <  |   Int, Double, Float, Long |   Returns whether this numerical value is less than  |
|     |                            |                                                      |  
|     |                            |   the other numerical value                          |  
+-----+----------------------------+------------------------------------------------------+
|  >  |   Int, Double, Float, Long |   Returns whether this numerical value is more than  |
|     |                            |                                                      |  
|     |                            |   the other numerical value                          |  
+-----+----------------------------+------------------------------------------------------+
| <=  |   Int, Double, Float, Long |   Returns whether this numerical value is less than  |
|     |                            |                                                      |  
|     |                            |   or equal to the other numerical value              |  
+-----+----------------------------+------------------------------------------------------+
|  >= |   Int, Double, Float, Long |   Returns whether this numerical value is more than  |
|     |                            |                                                      |  
|     |                            |   or equal to the other numerical value              |  
+-----+----------------------------+------------------------------------------------------+

**Methods**

There are no methods contained in the Float and Double type.

.. _built_in_types_boolean:

Boolean
---------------

The Boolean can either represent *true* or *false*. It is primarily used in branches (such
as @if, @elseif) or conditions. Booleans contain some additional operators to perform
boolean logic with.

A Boolean will be false when it is referenced before initialization.

**Constructors**

Booleans can be created in one of two ways. The first one is using the Boolean literal,
and the other is a constructor.


The Boolean literal is either true or false.

The second way is through a constructor. Available constructors are:


Supported constructors for the Boolean type

========================================== ====================================
========================================== ====================================
Boolean(Boolean)                            Copy a Boolean.
Boolean(String)                             Parse true or false in string format to a boolean. Defaults to

                                            false.
========================================== ====================================

**Operators**


Supported operators for the Boolean type

===== ========================================== ====================================
===== ========================================== ====================================
\+      String                                      Concatenates Boolean and String together, as if the value were a
                
                                                    string. (true+ ”true” = ”truetrue”)
!       (Prefix)                                    Negates the boolean value. (!true = false)
&&      Boolean                                     ANDs the booleans together. Results in true only if both booleans

                                                    are true. (true && true = true, true && false = false,

                                                    false && false = false)
||      Boolean                                     ORs the booleans. Results in true when either boolean is true.

                                                    (true || true = true, true || false = true, false || false= false)
==      Boolean                                     Returns whether two Boolean values are the same (both true, or

                                                    both false).
!=      Boolean                                     Returns whether two Boolean values are not the same.
===== ========================================== ====================================

The logical operators && and||are short-circuiting. This means that when reading
from left to right, one of the operands causes the result to always be true or false, the
other operand is not evaluated. For example the expression

.. code-block:: console

    @if x != null && x.contains("blue")

will not throw a NullPointerException even if x is null, because the if statement short
circuits before it reaches the substring expression.

**Methods**

There are no methods contained in the Boolean type.

Player
--------------------

The Player represents an (online) Minecraft Player. There are a multitude of things
you can accomplish through supported methods that are generally not directly available
through commands.

A Player will be null when it is referenced before initialization.

**Constructors**

Table 9.12: Supported constructors for the Player type

========================================== ====================================
========================================== ====================================
Player(String value)                        Construct a player from their name or

                                            UUID. Null if the player does not exist.
Player(Int x, Int y, Int z, String world)   Find a player at these coordinates in the

                                            passed world. Null if the player does not

                                            exist. In the scenario that multiple Players

                                            are in the same location,
                                            
                                            nondeterministically returns one Player at

                                            that location.
Player(String name, Player visibleTo).      Construct a player from their name.

                                            It will return null if a player was found but is not 
                                            
                                            visible to visibleTo.
========================================== ====================================

**Operators**

Table 9.13: Supported operators for the Player type

===== ========================================== ====================================
===== ========================================== ====================================
\+      String                                      Concatenates the name of Player and String together.
==      Player                                      Checks for equality between Players. (Returns true when the players

                                                    are the same player).
!=      Player                                      Checks for inequality between Players. (Returns true when the

                                                    players are not the same player).
===== ========================================== ====================================

**Methods**

Table 9.14: Supported Methods for the Player type

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - Float **getFallDistance**\() 
      - Returns the distance this entity has fallen.

    * - Int **getFireTicks**\() 
      - Returns the entity’s current fire ticks (ticks before
      
        the entity stops being on fire).

    * - **setFireTicks**\(Int ticks) 
      - Sets the entity’s current fire ticks (ticks before the

        entity stops being on fire).

    * - Double **getX**\() 
      - Gets the entity’s current x position.

    * - Double **getY**\() 
      - Gets the entity’s current y position.

    * - Double **getZ**\() 
      - Gets the entity’s current z position.

    * - Float **getYaw**\() 
      - Gets the entity’s current rotation around the y axis.

    * - Float **getPitch**\() 
      - Gets the entity’s current rotation around the x axis.
      
    * - String **getWorld**\() 
      - Gets the current world this entity resides in.

    * - Boolean **isDead**\() 
      - Returns true if this entity has been marked for
        
        removal.

    * - Boolean **isFlying**\() 
      - Checks to see if this player is currently flying or not.

    * - Boolean **isOnGround**\() 
      - Returns true if the entity is supported by a block.

        This value is a state updated by the server and is

        not recalculated unless the entity moves.

    * - Boolean **isSneaking**\() 
      - Returns if the player is in sneak mode.

    * - Boolean **isSprinting**\() 
      - Gets whether the player is sprinting or not.

    * - **giveExp**\(Int amount) 
      - Gives the player the amount of experience specified.

    * - Float **getExp**\() 
      - Gets the players current experience points towards
      
        the next level.

    * - **setExp**\(Float exp) 
      - Sets the players current experience points towards

        the next level.

    * - **giveExpLevels**\(Int amount) 
      - Gives the player the amount of experience levels

        specified. Levels can be taken by specifying a

        negative amount.

    * - Float **getLevel**\() 
      - Gets the players current experience level.

    * - **setLevel**\(Int level) 
      - Sets the players current experience level.

        damage(Double amount) Deals the given amount of damage to

        this entity.

    * - Double **getHealth**\() 
      - Gets the entity’s health from 0 to

        getMaxHealth(), where 0 is dead.

    * - **setHealth**\(Double health) 
      - Sets the entity’s health from 0 to
        
        getMaxHealth(), where 0 is dead.
        
        Throws IllegalArgumentException if
        
        the health is <0 or>
        getMaxHealth().

    * - Double **getMaxHealth**\() 
      - Gets the maximum health this entity

        has.

    * - **setMaxHealth**\() 
      - Sets the maximum health this entity
        
        has. If the health of the entity is
        
        above the value provided it will be
        
        clamped to the max value. Only sets
        
        the ’base’ max health value, any
        
        modifiers changing this value (potions,
        
        etc) will applyafterthis value. The
        
        value returned by getMaxHealth may
        
        deviate from the value set here.

    * - Float **getFoodLevels**\() 
      - Gets the players current food level.

    * - **setFoodLevel**\(Int value) 
      - Sets the players current food level.

    * - Float **getSaturation**\() 
      - Gets the players current saturation
        
        level. Saturation is a buffer for food
        
        level. Your food level will not drop if
        
        you are saturated > 0.

    * - **setSaturation**\(Float value) 
      - Sets the players current saturation
        
        level.

    * - Boolean **isInsideVehicle**\() 
      - Returns whether this entity is inside a
        vehicle.

    * - Boolean **leaveVehicle**\() 
      - Leave the current vehicle. If the entity
        
        is currently in a vehicle (and is
        
        removed from it), true will be
        
        returned, otherwise false will be
        
        returned.

    * - **closeInventory()**\ 
      - Force-closes the currently open
        
        inventory view for this player, if any.

    * - Long **getTimePlayed()**\ 
      - Gets the player’s playtime on the
        server in milliseconds.

    * - String **getLocale()**\ 
      - Gets the player’s current locale. The
        
        value of the locale String is not
        
        defined properly. The vanilla
        
        Minecraft client will use lowercase
        
        language / country pairs separated by
        
        an underscore, but custom resource
        
        packs may use any format they wish.

    * - String **getUniqueId**\() 
      - Gets the UUID of the entity (in string
        
        format).

    * - Boolean **isOnline**\() 
      - Checks if this player is currently
        
        online.

    * - Boolean **isOp**\() 
      - Checks if this Player is a server
        
        operator.

    * - String **getRank**\()
      - Gets the rank of the player.

    * - **setResourcePack**\(String url, String hash) 
      - Request that the player’s client
        
        downloads and switches resource
        
        packs.

    * - Item **getItem**\(Int slot) 
      - Returns the Item found in the slot at the given
        
        index.

    * - Item **getItemInMainHand**\() 
      - Gets a copy of the item the player is currently
        
        holding in their main hand.

    * - Item **getItemInOffHand**\() 
      - Gets a copy of the item the player is currently
        
        holding in their off hand.

    * - Item **getBoots**\() 
      - Return the Item from the boots slot.

    * - Item **getLeggings**\() 
      - Return the Item from the leg slot.

    * - Item **getChestplate**\() 
      - Return the Item from the chestplate slot.

    * - Item **getHelmet**\() 
      - Return the Item from the helmet slot.

    * - **setItem**\(Int slot, Item item) 
      - Stores the Item at the given index of the
        
        inventory. Indexes 0 through 8 refer to the
        
        hotbar. 9 through 35 refer to the main
        
        inventory, counting up from 9 at the top left
        
        corner of the inventory, moving to the right,
        
        and moving to the row below it back on the
        
        left side when it reaches the end of the row. It
        
        follows the same path in the inventory like you
        
        would read a book. Indexes 36 through 39
        
        refer to the armor slots. Though you can set
        
        armor with this method using these indexes,
        
        you are encouraged to use the provided
        
        methods for those slots. If you attempt to use
        
        this method with an index less than 0 or
        
        greater than 39, an ArrayIndexOutOfBounds
        
        exception will be thrown.

    * - **setItemInMainHand**\(Item item) 
      - Sets the item the player is holding in their
        
        main hand.

    * - **setItemInOffHand**\(Item item) 
      - Sets the item the player is holding in their off
        
        hand.
        
    * - **setBoots**\(Item item) 
      - Put the given Item into the boots slot.    

        does not check if the Item is a boots.

        setLeggings(Item item) Put the given Item into the leg slot. This does

        not check if the Item is a pair of leggings.

    * - **setChestplate**\(Item item) 
      - Put the given Item into the chestplate slot.

        This does not check if the Item is a chestplate.

        setHelmet(Item item) Put the given Item into the helmet slot. This

        does not check if the Item is a helmet.

    * - Boolean **isPlayingChallenge**\() 
      - Returns whether the

        player is playing a

        challenge.

    * - String **getCurrentChallenge**\() 
      - Returns the challenge

        the player is playing.

        Returns null when

        player is not playing any

        challenge.

    * - Int **getChallengePoints**\() 
      - Returns the amount of

        challenge points the

        player has.

    * - Int **getHexaRecord**\() 
      - Returns the stage the

        player reached in hexa.

    * - Boolean **hasCompletedChallenge**\(String challengetag) 
      - Returns whether the

        player has completed the

        specified challenge.

    * - Long **getChallengeTime**\() 
      - Returns the current time

        the player has spent in

        the challenge. Returns - 1 if the player

        is not in a challenge.

    * - Boolean **isPlayingMap**\() 
      - Returns whether the

        player is playing a map.

    * - String **getCurrentCheckpoint**\() 
      - Returns the checkpoint

        the player has. Returns

        null when no checkpoint

        in the current checkpoint
        
        mode is set. Returns the

        checkpoint from the

        current checkpoint mode

        (HC or FFA).

    * - Int **getPoints**\() 
      - Returns the amount of

        FFA points the player

        has.

    * - Int **getSpeedrunScore**\() 
      - Returns the speedrun score of the player.

    * - Boolean **hasCompletedMap**\(String maptag) 
      - Returns whether the

        player has completed the

        specified map.

    * - Long **getMapTime**\() 
      - Returns the current time

        the player has spent in

        the map.

    * - Int **getAttempts**\() 
      - Get the amount of times

        a player has hit any

        starting checkpoint sign.

    * - String **sendMessage**\(String message) 
      - Sends a raw message directly to a player.

    * - String **getBedLocationWorld**\()
      - Returns a String containing the world where 

        the player has set their bed.

    * - Int **countItem**\(String id)
      - Returns the number of items with Minecraft ID *id*

        that the player has in their inventory.

    * - String **getName**\()
      - Returns the player's Minecraft username.

    * - String **getDisplayName**\()
      - Returns the player's display name on the server (e.g. nickname
        
        given by /nick)

    * - Location **getLocation**\()
      - Returns the location of a player. Stringifies to "x y z world". 

    * - **teleport**\(Position position)
      - Teleports a player to position.

    * - **canSee**\(Player player)
      - Returns if the player can see the target player (i.e., /hide and /block cause it to fail).

    * - String **getClickedBlockFace**\()​
      - Returns the clicked block face of the player (e.g. EAST, UP, SOUTH). 
      
        Used in interact scripts.   

    * - String **getTargetBlockFace**\(Int distance)
      - Gets the block face of the block that the player is looking 
      
        at (must be within *distance*). Max distance is 120.

    * - Block **getTargetBlock**\(Int distance)
      - Returns the Block type of the block that the player is looking 
      
        at (must be within *distance*). Max distance is 120.

    * - Entity **getTargetEntity**\(Int distance)
      - Returns the Entity type of the entity that the player is 
      
        targeting (must be within *distance*). Max distance is 120.

    * - Void **setGravity**\(Boolean gravity)
      - Sets gravity to be true or false for the player.

    * - Boolean **hasGravity**\()
      - Returns whether the player has their gravity true or false.
    
    * - Boolean **isGliding**\()
      - Returns whether the player is gliding.

    * - String **getPlayerWeather**\()
      - Returns the type of weather the player is currently experiencing.

    * - Void **resetPlayerTime**\()
      - Resets the player's time to be in sync with the server.

    * - Boolean **dropItem**\(Boolean dropAll)
      - Drops the item the player is holding. If *dropAll* is true,
       
        then the player drops the whole stack.

.. _appendix_built_in_type_entity:

Entity
-------------

An Entity is a move-able or dynamic object in the Minecraft world. Animals and mon-
sters are Entities, but also arrows, item frames and paintings.

An Entity will be null when it is referenced before initialization.

**Constructors**

Table 9.18: Supported constructors for the Entity type

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - Entity(String uuid) 
      - Construct an entity from its UUID.
      
        Returns null if it does not exist.

    * - Entity(Int x, Int y, Int z, String world) 
      - Find an entity in the passed world at these
      
        coordinates. Returns null if it does not
      
        exist. In the scenario that multiple entities
      
        are in the same location,
      
        nondeterministically returns any entity.


**Operators**

Table 9.19: Supported operators for the Entity type

.. list-table:: 
    :widths: 5 10 50
    :stub-columns: 0
    
    * - \+ 
      - String 
      - Concatenates the UUID of Entity and String together.

    * - == 
      - Entity 
      - Checks for equality between Entities. (Returns true when the entities

        are the same entity).

    * - != 
      - Entity 
      - Checks for inequality between Entities. (Returns true when the

        entities are not the same entity).

**Methods**

Table 9.20: Supported Methods for the Entity type

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - String **getEntityType**\() 
      - Gets the entity’s type. Actual value returned is a
        
        ’magic value’ and can change at any spigot or bukkit
        
        update.

    * - Double **getX**\() 
      - Gets the entity’s current x position.

    * - Double **getY**\() 
      - Gets the entity’s current y position.

    * - Double **getZ**\() 
      - Gets the entity’s current z position.

    * - Float **getYaw**\() 
      - Gets the entity’s current rotation around the y axis.

    * - Float **getPitch**\() 
      - Gets the entity’s current rotation around the x axis.

    * - Double **getVelocityX**\() 
      - Gets the entity’s current velocity in the x direction.

    * - Double **getVelocityY**\() 
      - Gets the entity’s current velocity in the x direction.

    * - Double **getVelocityZ**\() 
      - Gets the entity’s current velocity in the x direction.

    * - String **getWorld**\() 
      - Gets the current world this entity resides in.

    * - Boolean **isDead**\() 
      - Returns true if this entity has been marked for removal.

    * - Boolean **isOnGround**\() 
      - Returns true if the entity is supported by a block. This
        
        value is a state updated by the server and is not
        
        recalculated unless the entity moves.

    * - **damage**\(Double amount) 
      - Deals the given amount of damage to this entity.

    * - Double **getHealth**\() 
      - Gets the entity’s health from 0 to getMaxHealth(),

        where 0 is dead.

    * - **setHealth**\(Double health) 
      - Sets the entity’s health from 0 to getMaxHealth(),
        
        where 0 is dead. Throws IllegalArgumentException if
        
        the health is ¡ 0 or ¿ getMaxHealth().

    * - Double **getMaxHealth**\() 
      - Gets the maximum health this entity has.

    * - **setMaxHealth**\() 
      - Sets the maximum health this entity has. If the health
        
        of the entity is above the value provided it will be set
        
        to that value.

    * - String **getUniqueId**\() 
      - Gets the UUID of the entity (in string format).

    * - Location **getLocation**\()
      - Returns the location of a entity. Stringifies to "x y z world".

    * - **teleport**\(Position position)
      - Teleports an entity to position. 

    * - Boolean **addPassenger**\(Entity passenger)
      - Adds a passenger to a vehicle. Returns false if 
        
        could not be done for whatever reason.
    * - Void **ejectPassenger**\(Entity passenger)
      - Ejects any passenger from the vehicle.

.. _appendix_built_in_types_block:

Block
---------------

A Block represents a Block in the Minecraft world. Any valid block (within reasonable
bounds, 0≤y≤255) can be represented, whether it is an empty (air) block, liquid, or
a solid block.

A Block will be null when it is referenced before initialization.


**Constructors**

Table 9.21: Supported constructors for the Block type

========================================= ========================
========================================= ========================
Block(Int x, Int y, Int z, String world)    Get the block at these coordinates in the given world.
========================================= ========================

**Operators**

Table 9.22: Supported operators for the Block type

===== ========= ==================================
===== ========= ==================================
\+      String      Concatenates the coordinates of Block and String together.
==      Block       Checks for equality between Blocks. (Returns true when the blocks

                    are the same block).
!=      Block       Checks for inequality between Blocks. (Returns true when the blocks

                    are not the same block).
===== ========= ==================================

**Methods**

Table 9.23: Supported Methods for the Block type

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - Int **getBlockPower**\() 
      - Returns the Redstone power
        
        being provided to this block.

    * - Int **getLightLevel**\(() 
      - Returns the amount of light
        
        at this block.

    * - Int **getLightFromBlocks**\() 
      - Returns the amount of light
        
        at this block from nearby
        
        blocks.

    * - Int **getLightFromSky**\() 
      - Returns the amount of light
        
        at this block from the sky.

    * - Block **getRelative**\(Int modX, Int modY, Int modZ) 
      - Gets the block at the given
        
        offsets.

    * - String **getBlockType**\() 
      - Gets the type of this block.
        
        Actual value returned is a
        
        ’magic value’ and can change
        
        at any spigot or bukkit
        
        update.

    * - Int **getX**\() 
      - Returns the x-coordinate of
        
        this block.

    * - Int **getY**\() 
      - Returns the y-coordinate of
        
        this block.
        
    * - Int **getZ**\() 
      - Returns the z-coordinate of
        
        this block.

    * - String **getWorld**\() 
      - Returns the world where this
        
        block resides in.

    * - Boolean **isBlockIndirectlyPowered**\() 
      - Returns true if the block is
        
        being indirectly powered by
        
        Redstone.

    * - Boolean **isBlockPowered**\() 
      - Returns true if the block is
        
        being powered by Redstone.

    * - Boolean **isEmpty**\() 
      - Returns true if this block is
        
        Air.

    * - Boolean **isLiquid**\() 
      - Returns true if this block is
        
        liquid.
    * - BlockLocation **getLocation**\()
      - Returns the location of a block. Stringifies to "x y z world". 

.. _appendix_built_in_types_item:

Item
--------------

An Item represents an Item in the Minecraft world. Any valid item can be represented,
along with the stack size.


An Item will be null when it is referenced before initialization.

**Constructors**


Table 9.24: Supported constructors for the Item type

============================== ===============================
============================== ===============================
Item(String item, Int amount)   Create an item from the passed name with a stack
                                
                                size of amount. Throws

                                MaterialNotFoundException when passed an

                                invalid name.
============================== ===============================

**Operators**

Table 9.25: Supported operators for the Item type

===== ========== ===============================
===== ========== ===============================
\+      String      Concatenates the Item and String together.
==      Item        Checks for equality between Items. (Returns true when the items

                    match and the stack size is equal).
!=      Item        Checks for inequality between Items. (Returns true when the blocks
                    are not the same, and/or the stack size is unequal).
===== ========== ===============================

**Methods**

Table 9.26: Supported Methods for the Item type

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - Int **getAmount**\() 
      - Gets the amount of items in this stack.

    * - String **getItemType**\() 
      - Gets the type of this item.

    * - String **getDisplayName**\()
      - Returns the custom name of an Item. (Returns null if the
        Item does not have a custom name).

    * - Int **getMaxStackSize**\() 
      - Get the maximum stacksize for the material hold in

        this ItemStack. (Returns -1 if it has no idea).

    * - **setAmount**\(Int amount) 
      - Sets the amount of items in this stack.

    * - **setItemType**\(String item) 
      - Sets the type of this item. Note that in doing so
        
        you will reset the extra data for this stack as well.
        
        Throws MaterialNotFoundException when passed
        
        an invalid name.

    * - Boolean **isSimilar**\(Item item) 
      - Returns whether two items are equal, but does not
        
        consider stack size (amount).

    * - Boolean **hasDisplayName**\()
      - Returns true if an Item has a custom name.

.. _appendix_spatial_types:

Spatial Types
---------------
Script update 2.2.0 brought spatial built-in types including Location and BlockLocation, to represent points in the Minecraft world.


.. _appendix_location:

Location
---------------------------

Location is used to represent a position in a world, especially one that can be occupied by an entity. This is why it uses Doubles (since they can be on any part of a block).

To obtain a Location from a Player or Entity, call getLocation().  Stringifies to "x y z world". This allows you to easily do something 

**Constructors**

Supported constructors for the Location type:

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - Location(Double x, Double y, Double z, String world)
      - Creates a Location from the passed in coordinates and world.

    * - Location(Vector3, String world)
      - Creates a Location from the passed in vector and world.
  
**Methods**

Supported operators for the Location type:

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - BlockLocation **asBlockLocation**\()
      - Converts to a BlockLocation type.
    * - Vector2 **asVector2**\() 
      - Converts to a Vector2 type.
    * - Vector3 **asVector3**\().
      - Converts to a Vector3 type.
    * - Region[] Location **getRegions()**
      - Get all regions that intersect the Location.

.. _appendix_block_location:

BlockLocation
------------------

BlockLocation is used to represent the position of a block in the world, or any other time you want to keep the position aligned to the block grid. This uses Ints instead, since you can only set which block it is (if you want to choose the part of the block, use Location).

To obtain a BlockLocation of a Block, call getLocation(). Stringifies to "x y z world". This allows you to easily do something like @bypass tp {{loc}}. 

**Constructors**


Supported constructors for the BlockLocation type:

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - BlockLocation(Int x, Int y, Int z, String world)
      - Creates a BlockLocation from the passed in coordinates and world.

    * - BlockLocation(BlockVector3, String world)
      - Creates a BlockLocation from the passed in vector and world.

**Methods**

Supported operators for the BlockLocation type:

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - BlockLocation **set**\(String block)
      - Change the block at that location to *block*.

    * - Location **asLocation**\()
      - Converts to a Location type.
    * - Vector2 **asVector2**\() 
      - Converts to a Vector2 type.
    * - Vector3 **asVector3**\().
      - Converts to a Vector3 type.
    * - Region[] BlockLocation **getRegions()**
      - Get all regions that intersect the BlockLocation.

.. _appendix_position:

Position
------------

The Position type is mostly the same as Location, except it also has ``Float yaw``, ``Float pitch``.

**Constructors**


Supported constructors for the BlockLocation type:

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - Position(Double x, Double y, Double z, Float yaw, Float pitch, String world)
      - Creates a position with the given coordinates, yaw, pitch, and world.

    * - Position(Location location, Float yaw, Float pitch)
      - Creates a position with the given Location object, yaw, and pitch.

**Methods**

Supported operators for the BlockLocation type:

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - **getYaw**\()
      - Returns the yaw.

    * - **getPitch**\()
      - Returns the pitch.

    * - Location **asLocation**\()
      - Converts to a Location type.

.. _appendix_vectors:

Vector3, BlockVector3, Vector2 and BlockVector2
-------------------------------------------------

Vector3 and BlockVector3 are intended represent abstract locations in space (in the XYZ field). Vector2 and BlockVector2 are intended to represent abstract locations on the XZ plane (useful if you don't care about the y-value of something). They're also just wrappers for some vector types I found in a library somewhere. You can use them to represent other things if you wish.

Like Location vs BlockLocation, BlockVector3 and BlockVector2 are aligned to the block grid while Vector3 and Vector2 are not. Note none of the vectors care about the world.

**Constructors**

Supported constructors for the Vectors:

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - Vector3(Double x, Double y, Double z)
      - Constructor for Vector3
    * - BlockVector3(Int x, Int y, Int z)
      - Constructor for BlockVector3
    * - Vector2(Double x, Double z)
      - Constructor for Vector2
    * - BlockVector2(Int x, Int y, Int z)
      - Constructor for BlockVector2

**Methods**

Supported operators for the BlockLocation type:

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - **length**\()
      - Returns the length of the vector

    * - **distance**\(Vector otherVector)
      - Returns the distance between two vectors. Note 
      
        the vectors must be of the same type.

    * - **containedWithin**\(Vector min, Vector max)
      - Returns whether a vector is within the bounding box create by two other vectors. 
       
        Note the vectors must be of the same type.

Vectors also stringify into "x y z" or "x y" (BlockVector3(4, 12, 17) -> "4 12 17", Vector2(8, 1) -> "8.0 1.0"). This allows you to do stuff like @bypass tp {{vec}}. However as mentioned previously, you can also do Player.teleport(Position) or Entity.teleport(Position).

You can convert them into other types as well. Note you can't go Vector3 <-> BlockVector2 or Vector2 <-> BlockVector3.

.. _appendix_region:

Region
----------------

The region type serves as a wrapper for WorldGuard regions. You can get Regions to represent existing regions in the world, or create your own on the fly.

There's two ways to obtain a Region. You can do ``Region(String id, String world)`` to look up an existing region, and create a wrapper around that (returning null if it doesn't exist). Alternatively, you can construct a Region by giving it some points and a world. If you give it two sets of coordinates (whether it be through integers or BlocKVectors), you'll get a cuboid region. If you give it a list of BlockVector2s, you'll get a polygonal region.

You also have the option when construction a region to give it an id - if you don't, it will be considered an "anonymous region" and be given a random id (please don't rely on what the id is). Note that all regions constructed through scripts are transient and not accessible by WorldGuard, the server, any other part of Minr, or any other plugin. They only exist within the confines of scripts. This means you won't see them if you use the spider eye or /region info, nor will any flags or restrictions applied to them be enforced. Note you can't obtain a transient region with ``Region(String id, String world)``, even if you give it an id.

You can check if a region contains a Player, BlockVector2, BlockVector3, BlockLocation, a coordinate (Int x, Int y, Int z, String world) or any BlockVector2 in a list. The first one is the most important, since we now finally have a native way to check if a player is in a region for @prompt scripts.

You can check if a region contains a player with region.containsPlayer(). You can use regions constructed on the fly with Region(min, max, world).containsPlayer(player) (where min and max are BlockVector3s), or Region(minX, minY, minZ, maxX, maxY, maxZ, world).containsPlayer(player). You could also use an existing region.

**Methods**

Supported operators for the Region type:

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - Boolean **containsPlayer**\()
      - Check if a region contains a player
    * - Player[] **getPlayersInside**\()
      - Returns all players currently inside a region
    * - BlockLocation **getMinimumPoint**\() 
      - Returns the minimum point of a region.
    * - BlockLocation **getMaximumPoint**\()
      - Returns the maximum point of a region.
    * - Player[] **getMemberPlayers**\()
      - Returns members of a region.
    * - String[] **getMemberGroups**\()
      - Returns the member groups of a region.
    * - Player[] **getOwningPlayers**\()
      - Returns the owners of the region.
    * - String[] **getOwningGroups**\()
      - Returns the owner groups of a region.

Finally, all Area scripts now have an additional parameter - Region region. This will be a Region type representing the region that the script is tied to. This allows a script to figure out where it is being called from.
