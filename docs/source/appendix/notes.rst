.. _appendix_notes:

General Notes
=============

Useful reference information for MSC scripting.

.. contents::
   :local:
   :depth: 2

Time Syntax
-----------

Many operators and functions accept time parameters using this format:

.. list-table::
   :widths: 15 25 30
   :header-rows: 1

   * - Suffix
     - Unit
     - Example
   * - (none)
     - Ticks (1/20 second)
     - ``10`` = 10 ticks = 0.5 seconds
   * - ``t``
     - Ticks
     - ``10t`` = 10 ticks = 0.5 seconds
   * - ``s``
     - Seconds
     - ``5s`` = 5 seconds = 100 ticks
   * - ``m``
     - Minutes
     - ``2m`` = 2 minutes
   * - ``h``
     - Hours
     - ``1h`` = 1 hour
   * - ``d``
     - Days
     - ``1d`` = 1 day
   * - ``w``
     - Weeks
     - ``1w`` = 1 week

Used with: ``@delay``, ``@cooldown``, ``@global_cooldown``, ``@prompt``, and ``@chatscript``. See :ref:`Scripts <scripts>` for details on these operators.

Escape Sequences
----------------

Within string literals (``"..."``), use backslash to escape special characters:

.. list-table::
   :widths: 20 40 40
   :header-rows: 1

   * - Sequence
     - Result
     - Example
   * - ``\"``
     - Literal ``"``
     - ``"He said \"hello\""``
   * - ``\\``
     - Literal ``\``
     - ``"path\\to\\file"``
   * - ``\{\{``
     - Literal ``{{``
     - ``"Use \{\{ for interpolation"``
   * - ``\}\}``
     - Literal ``}}``
     - ``"End with \}\}"``

String Interpolation
--------------------

Use ``{{ }}`` inside strings to embed expressions (see :ref:`Expressions <expressions>` for more details):

.. code-block:: msc

   @player Hello, {{player.getName()}}! You have {{score}} points.

The expression result is automatically converted to a String.

Color Codes
-----------

Use ``&`` followed by a code in ``@player`` messages:

.. list-table::
   :widths: 10 20 10 20
   :header-rows: 1

   * - Code
     - Color
     - Code
     - Color
   * - ``&0``
     - Black
     - ``&8``
     - Dark Gray
   * - ``&1``
     - Dark Blue
     - ``&9``
     - Blue
   * - ``&2``
     - Dark Green
     - ``&a``
     - Green
   * - ``&3``
     - Dark Aqua
     - ``&b``
     - Aqua
   * - ``&4``
     - Dark Red
     - ``&c``
     - Red
   * - ``&5``
     - Dark Purple
     - ``&d``
     - Light Purple
   * - ``&6``
     - Gold
     - ``&e``
     - Yellow
   * - ``&7``
     - Gray
     - ``&f``
     - White

**Formatting codes:**

.. list-table::
   :widths: 10 30
   :header-rows: 1

   * - Code
     - Effect
   * - ``&#9AFFD1``
     - Specified RGB hex color
   * - ``&k``
     - Obfuscated (random characters)
   * - ``&l``
     - Bold
   * - ``&m``
     - Strikethrough
   * - ``&n``
     - Underline
   * - ``&o``
     - Italic
   * - ``&r``
     - Reset (clear all formatting)

.. code-block:: output

   &00 = Black          &88 = Dark Gray
   &11 = Dark Blue      &99 = Blue
   &22 = Dark Green     &aa = Green
   &33 = Dark Aqua      &bb = Aqua
   &44 = Dark Red       &cc = Red
   &55 = Dark Purple    &dd = Light Purple
   &66 = Gold           &ee = Yellow
   &77 = Gray           &ff = White

   Normal, &lBold&r, &nUnderline&r, &oItalic

Naming Conventions
------------------

- **Variables**: lowercase, underscores allowed (``score``, ``player_count``)
- **Types**: PascalCase, start with uppercase (``Player``, ``BlockLocation``)
- **Namespaces**: lowercase, underscores allowed (``mymap``, ``my_namespace``)
- **Functions**: camelCase or lowercase, underscores allowed (``getPlayer``, ``sqrt``)

Names can generally contain letters, numbers, and underscores (_). They must start with an uppercase letter (for types) or a lowercase letter (for anything else).

Type Literals
-------------

.. list-table::
   :widths: 15 25 30
   :header-rows: 1

   * - Type
     - Literal syntax
     - Examples
   * - Int
     - Whole number
     - ``42``, ``-7``, ``0``
   * - Long
     - Number with ``L`` suffix
     - ``42L``, ``-7L``
   * - Float
     - Decimal number
     - ``3.14``, ``-0.5``, ``1.0``
   * - Double
     - Number with ``D`` suffix
     - ``3.14D``, ``1D``
   * - Boolean
     - ``true`` or ``false``
     - ``true``, ``false``
   * - String
     - Text in quotes
     - ``"hello"``, ``"world"``
   * - List
     - ``Type[elements]``
     - ``Int[1, 2, 3]``
