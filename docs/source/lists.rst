.. _lists:

Lists
=====

Lists are ordered sequences of elements of the same type. They allow you to store and manipulate collections of values. In MSC, list indices are zero-based, meaning the first element is at index 0, the second at index 1, and so on.

.. contents:: Contents
   :local:

Creating Lists
--------------

Lists are defined using ``T[]``, where ``T`` is the element type. For example, ``Int[]`` is a list of integers and ``String[]`` is a list of strings.

To create a list with initial values, use the syntax ``T[value1, value2, ...]``:

.. code-block:: msc

    @define Int[] numbers = Int[5, 10, 15]
    @define String[] names = String["Alice", "Bob", "Charlie"]
    @define Boolean[] flags = Boolean[true, false, true]
    @player {{numbers}}
    @player {{names}}

.. code-block:: output

    [5, 10, 15]
    [Alice, Bob, Charlie]

To create an empty list, use ``T[]`` with no values:

.. code-block:: msc

    @define Int[] empty = Int[]
    @player {{empty}}
    @player Length: {{empty.length()}}

.. code-block:: output

    []
    Length: 0

Accessing Elements
------------------

Use square brackets with an index to access elements. Remember that indices start at 0:

.. code-block:: msc

    @define String[] names = String["Alice", "Bob", "Charlie"]
    @player First: {{names[0]}}
    @player Second: {{names[1]}}
    @player Last: {{names[2]}}

.. code-block:: output

    First: Alice
    Second: Bob
    Last: Charlie

You can also modify elements by assigning to an index:

.. code-block:: msc

    @define Int[] numbers = Int[5, 10, 15]
    @var numbers[1] = 99
    @player {{numbers}}

.. code-block:: output

    [5, 99, 15]

Note that trying to access an index outside the list bounds causes an error.

List Methods
------------

.. admonition:: Beginner Note
   :class: beginner-note

   The following section might be confusing if you're new to programming. It lists various things you can do with lists, such as adding items or finding their length. If you don't need these features right now, feel free to skip ahead.

A list of type ``T[]`` will have the following methods:

.. list-table::
    :widths: 40 60
    :header-rows: 1

    * - Method
      - Description
    * - ``Int length()``
      - Returns the number of elements in the list.
    * - ``append(T value)``
      - Adds a value to the end of the list.
    * - ``remove(Int index)``
      - Removes the element at the specified index.
    * - ``clear()``
      - Removes all elements from the list.
    * - ``T pop()``
      - Removes and returns the last element.
    * - ``reverse()``
      - Reverses the order of elements in place.
    * - ``shuffle()``
      - Randomizes the order of elements in place.
    * - ``Boolean contains(T value)``
      - Returns true if the list contains the value, false otherwise.
    * - ``Int find(T value)``
      - Returns the index of the first occurrence of value, or -1 if not found.

Example using these methods:

.. code-block:: msc

    @define Int[] nums = Int[1, 2, 3]
    @var nums.append(4)
    @player After append: {{nums}}
    @var nums.reverse()
    @player After reverse: {{nums}}
    @player Contains 2? {{nums.contains(2)}}
    @define Int last = nums.pop()
    @player Popped: {{last}}, remaining: {{nums}}

.. code-block:: output

    After append: [1, 2, 3, 4]
    After reverse: [4, 3, 2, 1]
    Contains 2? true
    Popped: 1, remaining: [4, 3, 2]

Numeric lists (``Int[]``, ``Long[]``, ``Float[]``, ``Double[]``) have additional methods:

.. list-table::
    :widths: 40 60
    :header-rows: 1

    * - Method
      - Description
    * - ``sum()``
      - Returns the sum of all elements.
    * - ``avg()``
      - Returns the average of all elements.

.. code-block:: msc

    @define Int[] scores = Int[85, 90, 78, 92]
    @player Total: {{scores.sum()}}
    @player Average: {{scores.avg()}}

.. code-block:: output

    Total: 345
    Average: 86.25

String lists (``String[]``) have methods for joining:

.. list-table::
    :widths: 40 60
    :header-rows: 1

    * - Method
      - Description
    * - ``concat()``
      - Concatenates all strings together.
    * - ``join(delimiter)``
      - Joins all strings with a delimiter between them.

.. code-block:: msc

    @define String[] words = String["hello", "world"]
    @player {{words.concat()}}
    @player {{words.join(" ")}}
    @player {{words.join(", ")}}

.. code-block:: output

    helloworld
    hello world
    hello, world

The inverse operation is ``String.split()``, which splits a string into a list:

.. code-block:: msc

    @define String[] parts = "one,two,three".split(",")
    @player {{parts}}

.. code-block:: output

    [one, two, three]

For Loops
---------

.. admonition:: Beginner Note
   :class: beginner-note

   This section explains how to repeat an action for each item in a list. If you're new to programming, this might seem complex, but it's a powerful way to work with collections of data. Feel free to skip this section if you're not ready yet.

The ``@for`` loop iterates over lists (see :ref:`Scripts <scripts>` for all script operators). The syntax is ``@for <Type> <variable> in <list>`` and the loop ends with ``@done``:

.. code-block:: msc

    @for String name in String["Alice", "Bob", "Charlie"]
        @player Hello, {{name}}!
    @done

.. code-block:: output

    Hello, Alice!
    Hello, Bob!
    Hello, Charlie!

The ``list`` namespace (see :ref:`Built-in Namespaces <appendix_namespaces>`) provides the ``range()`` function, which generates a list of consecutive integers:

.. code-block:: msc

    @player {{list::range(0, 5)}}
    @player {{list::range(3, 7)}}

.. code-block:: output

    [0, 1, 2, 3, 4]
    [3, 4, 5, 6]

The first argument is inclusive (included in the result) and the second is exclusive (not included). This is useful for generating index sequences. To iterate with an index, use ``list::range()`` with the list's length:

.. code-block:: msc

    @define String[] items = String["sword", "shield", "potion"]
    @for Int i in list::range(0, items.length())
        @player {{i}}: {{items[i]}}
    @done

.. code-block:: output

    0: sword
    1: shield
    2: potion

You can also use this to repeat something a specific number of times:

.. code-block:: msc

    @for Int i in list::range(0, 3)
        @player This is repetition number &a{{i + 1}}&r.
    @done

.. code-block:: output

    This is repetition number &a1&r.
    This is repetition number &a2&r.
    This is repetition number &a3&r.
