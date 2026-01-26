.. _appendix_operators:

Operator Reference
==================

This page documents which type combinations are valid for each operator and what type the result will be. For a conceptual overview of operators, see :ref:`Expressions <expressions>`.

.. contents::
   :local:
   :depth: 2

Arithmetic Operators
--------------------

Addition (+)
^^^^^^^^^^^^

.. list-table::
   :widths: 20 16 16 16 16 16
   :header-rows: 1
   :stub-columns: 1

   * - Left \\ Right
     - Int
     - Long
     - Float
     - Double
     - String
   * - Int
     - Int
     - Long
     - Float
     - Double
     - String
   * - Long
     - Long
     - Long
     - Float
     - Double
     - String
   * - Float
     - Float
     - Float
     - Float
     - Double
     - String
   * - Double
     - Double
     - Double
     - Double
     - Double
     - String
   * - String
     - String
     - String
     - String
     - String
     - String
   * - Boolean
     - --
     - --
     - --
     - --
     - String
   * - Player
     - --
     - --
     - --
     - --
     - String
   * - Entity
     - --
     - --
     - --
     - --
     - String
   * - Block
     - --
     - --
     - --
     - --
     - String
   * - Item
     - --
     - --
     - --
     - --
     - String

**String concatenation:** When either operand is a String, the result is String concatenation. The non-String operand is converted to its textual representation.

.. code-block:: msc

   @player {{"Score: " + 42}}      # "Score: 42"
   @player {{2 + "2"}}             # "22"
   @player {{true + " story"}}     # "true story"

Subtraction (-)
^^^^^^^^^^^^^^^

.. list-table::
   :widths: 25 18 18 18 18
   :header-rows: 1
   :stub-columns: 1

   * - Left \\ Right
     - Int
     - Long
     - Float
     - Double
   * - Int
     - Int
     - Long
     - Float
     - Double
   * - Long
     - Long
     - Long
     - Float
     - Double
   * - Float
     - Float
     - Float
     - Float
     - Double
   * - Double
     - Double
     - Double
     - Double
     - Double

Only numeric types support subtraction.

Multiplication (*)
^^^^^^^^^^^^^^^^^^

.. list-table::
   :widths: 25 18 18 18 18
   :header-rows: 1
   :stub-columns: 1

   * - Left \\ Right
     - Int
     - Long
     - Float
     - Double
   * - Int
     - Int
     - Long
     - Float
     - Double
   * - Long
     - Long
     - Long
     - Float
     - Double
   * - Float
     - Float
     - Float
     - Float
     - Double
   * - Double
     - Double
     - Double
     - Double
     - Double

Only numeric types support multiplication.

Division (/)
^^^^^^^^^^^^

.. list-table::
   :widths: 25 18 18 18 18
   :header-rows: 1
   :stub-columns: 1

   * - Left \\ Right
     - Int
     - Long
     - Float
     - Double
   * - Int
     - Int
     - Long
     - Float
     - Double
   * - Long
     - Long
     - Long
     - Float
     - Double
   * - Float
     - Float
     - Float
     - Float
     - Double
   * - Double
     - Double
     - Double
     - Double
     - Double

.. warning::

   **Integer division:** When both operands are Int or Long, division truncates toward zero:

   .. code-block:: msc

      @player {{5 / 2}}      # 2 (not 2.5!)
      @player {{5 / 2.0}}    # 2.5
      @player {{5 / 2D}}     # 2.5

   To get decimal division, ensure at least one operand is Float or Double.

Modulo (%)
^^^^^^^^^^

Returns the remainder after division.

.. list-table::
   :widths: 25 18 18 18 18
   :header-rows: 1
   :stub-columns: 1

   * - Left \\ Right
     - Int
     - Long
     - Float
     - Double
   * - Int
     - Int
     - Long
     - Float
     - Double
   * - Long
     - Long
     - Long
     - Float
     - Double
   * - Float
     - Float
     - Float
     - Float
     - Double
   * - Double
     - Double
     - Double
     - Double
     - Double

.. code-block:: msc

   @player {{5 % 2}}       # 1
   @player {{0.5 % 0.2}}   # 0.1

Note that modulo with floating-point types can produce imprecise results due to how floating-point arithmetic works.

Also, modulo with negative numbers follows the same sign rules as Java's `%` operator. This means the result has the same sign as the dividend (left operand). For example, ``(-5) % 2`` yields ``-1`` rather than ``2``.

Comparison Operators
--------------------

All comparison operators return Boolean.

Equality (==) and Inequality (!=)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :widths: 18 10 10 10 10 10 10 10 10 10
   :header-rows: 1
   :stub-columns: 1

   * -
     - Int
     - Long
     - Float
     - Double
     - Bool
     - String
     - Player
     - Entity
     - Block
   * - Int
     - yes
     - yes
     - yes
     - yes
     - --
     - --
     - --
     - --
     - --
   * - Long
     - yes
     - yes
     - yes
     - yes
     - --
     - --
     - --
     - --
     - --
   * - Float
     - yes
     - yes
     - yes
     - yes
     - --
     - --
     - --
     - --
     - --
   * - Double
     - yes
     - yes
     - yes
     - yes
     - --
     - --
     - --
     - --
     - --
   * - Boolean
     - --
     - --
     - --
     - --
     - yes
     - --
     - --
     - --
     - --
   * - String
     - --
     - --
     - --
     - --
     - --
     - yes
     - --
     - --
     - --
   * - Player
     - --
     - --
     - --
     - --
     - --
     - --
     - yes
     - --
     - --
   * - Entity
     - --
     - --
     - --
     - --
     - --
     - --
     - --
     - yes
     - --
   * - Block
     - --
     - --
     - --
     - --
     - --
     - --
     - --
     - --
     - yes

- Numeric types can be compared across types.
- String comparison is **case-sensitive**. Use ``.equalsIgnoreCase()`` for case-insensitive comparison.
- Player/Entity/Block compare by identity (same object).
- Item uses ``==`` to compare type AND amount.

Relational (<, >, <=, >=)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :widths: 25 18 18 18 18
   :header-rows: 1
   :stub-columns: 1

   * - Left \\ Right
     - Int
     - Long
     - Float
     - Double
   * - Int
     - yes
     - yes
     - yes
     - yes
   * - Long
     - yes
     - yes
     - yes
     - yes
   * - Float
     - yes
     - yes
     - yes
     - yes
   * - Double
     - yes
     - yes
     - yes
     - yes

Only numeric types support relational operators.

Logical Operators
-----------------

AND (&&)
^^^^^^^^

Returns true only if both operands are true.

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Operands
     - Return Type
   * - Boolean && Boolean
     - Boolean

.. code-block:: msc

   @player {{true && true}}    # true
   @player {{true && false}}   # false
   @player {{false && false}}  # false

**Short-circuit:** If the left operand is false, the right operand is not evaluated.

.. code-block:: msc

   # Safe null check which won't throw a NullPointerException
   @if player != null && player.isOnline()
       @player You are online!
   @fi

OR (||)
^^^^^^^

Returns true if either operand is true.

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Operands
     - Return Type
   * - Boolean || Boolean
     - Boolean

.. code-block:: msc

   @player {{true || true}}    # true
   @player {{true || false}}   # true
   @player {{false || false}}  # false

**Short-circuit:** If the left operand is true, the right operand is not evaluated.

NOT (!)
^^^^^^^

Prefix unary operator that negates a Boolean.

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Operand
     - Return Type
   * - !Boolean
     - Boolean

.. code-block:: msc

   @player {{!true}}   # false
   @player {{!false}}  # true

Assignment Operators
--------------------

These modify variables in place.

.. list-table::
   :widths: 20 40 40
   :header-rows: 1

   * - Operator
     - Equivalent
     - Description
   * - ``x = y``
     - --
     - Direct assignment.
   * - ``x += y``
     - ``x = x + y``
     - Add and assign.
   * - ``x -= y``
     - ``x = x - y``
     - Subtract and assign.
   * - ``x *= y``
     - ``x = x * y``
     - Multiply and assign.
   * - ``x /= y``
     - ``x = x / y``
     - Divide and assign.
   * - ``x %= y``
     - ``x = x % y``
     - Modulo and assign.

.. code-block:: msc

   @define Int score = 10
   @var score += 5    # score is now 15
   @var score *= 2    # score is now 30
   @var score -= 10   # score is now 20
