.. _lists:

Lists
===================================

Lists are an ordered sequence of elements. In MSC, list indices are zero-based.

.. _lists_constructors:

Constructors
-------------------------

Lists are defined using X[], where X[] is a list of type X (e.g. Int[])

Lists can be initialised with x[a, b, …, z] (where a, b, …, z are zero or more instances of X.

.. code-block:: python

    @define Int[] xs = Int[5]
    @define Int[] ys = Int[]
    @define Int[] zs = Int[5, 3, 2, 1]

    @player {{xs}}
    @player {{ys}} 
    @player {{zs}}

.. code-block:: console

    [5]
    []
    [5, 3, 2, 1]

.. _list_indexing:

Indexing
--------------------
List indexing can be done with...

Retrieving a value:

.. code-block:: python

    @player {{xs[0]}}

.. code-block:: console

    5

Setting the value of an item:

.. code-block:: python

    @var xs[0] = 5

Both:

.. code-block:: python
    
    @var xs[1] = xs[0] + 1
    @player {{xs}}

.. code-block:: console

    [5, 6]

Accessing an out of bound index will throw an IndexOutOfBoundException and terminate the script.

.. _lists_method:

Methods
--------------

.. list-table:: 
    :widths: 50 50
    :stub-columns: 0

    * - **length**\() 	
      - Reports the number of items in the list.
    * - **append**\(T value) 
      - Append a value to the end of the list.
    * - **remove**\(Int index) 
      - Removes the item at the specified index from the list.
    * - **clear**\() 
      - Removes all items from the list.
    * - **reverse**\()
      - Reverses the order of the items in the list.
    * - **shuffle**\()
      - Randomises the order of the items in the list.
    * - **pop**\()
      - Removes the last element of the list and returns it.
    * - Boolean **contains**\(T value)
      - Returns whether the list contains an element that equals value.
    * - Int find(T value) 
      - Returns the first index that matches the value. Throws an 
       
        ElementNotFoundException if the value is not in the list. 
         
        (Tip: always use contains before find)
    * - String[] **split**\(String separator)
      - Splits the string based on the separator into A

        list of pieces around the separator. For example: 
        
        "hi world".split(" ") would yield: ["hi", "world"].
    * - String[] **concat**\() 
      - Concatenates a list of Strings together: 

        String["hello", "world"].concat() yields "helloworld".
    * - String **join**\(String delimiter) 
      - Joins a list of string, inserting delimiter 

        between each string: String["hello", "world"].join(" ") yields "hello world".
    * - Long[]/Float[]/Double[]/Int[] **avg**\()
      - Returns the average of the elements in the list.
    * - Long[]/Float[]/Double[]/Int[] **sum**\()
      - Returns the sum of the elements in the list.


An alternate way to append to a list, simply assign a value to an index one greater than the last item in the list:

.. code-block:: python

    @define Int[] x = Int[1, 2, 3]
    @var x[x.length()] = 4.
    @player {{x}}

.. code-block:: console
    
    [1, 2, 3, 4]

.. _lists_namespace:

Namespace:
--------------

The list namespace contains the  range() function.

``Int[] range(Int start, Int end)`` will generate a list of numbers from ``start`` (inclusive) to ``end`` (exclusive). 

This allows you to iterate through every index in a list with ``@for Int i in range(0, list.length())``.

.. _lists_for_loops:

For Loops
----------------

For loops are used to iterate over the List iterable.

Loops are defined with @for <Type> item in <Type>, and terminated with @done

.. code-block:: python

    @for Int i in Int[1, 2, 3, 4, 5]
        @player {{i}}
    @done


.. code-block:: console

    1
    2
    3
    4
    5


This can also be done with:

.. code-block:: python

    @for Int i in list::range(1, 6)
        @player {{i}}
    @done

.. code-block:: console

    1
    2
    3
    4
    5

Looping through your list can be done by setting the end to list.length().

.. code-block:: python

    @define Int[] x = Int[1, 5, 9]
    @for Int i in list::range(0, list.length())
        @player {{i}}
    @done

.. code-block:: console

    1
    5
    9

.. _list_player_indexing:

Player Indexing
----------------------

Relative variable support player indices to get the value for a specific player. Suppose we have a relative Int x = 5.

For rickyboy320, x = 3.
For CreepaShadowz, x = 7.

.. code-block:: python

    @player {{x[Player("rickyboy320")]}}

.. code-block:: console

    3

.. code-block:: python

    @player {{x[Player("CreepaShadowz")]}}

.. code-block:: console
    
    7

Note that indexing is done on Players - so getting a Player object of an offline player can only be done using UUIDS:

.. code-block:: python

    @player {{x[Player("63664a36-a4c4-4541-a337-dd5639600407")]}}

should always succeed, where the name-indexed variant can fail (like any Player lookup done in such a way). Again, if this fails, the script terminates, so be mindful of this!


If a relative variable is indexed with a player that has no value set on the variable yet, a copy of the default is returned.

Writing to an indexed relative variable is also supported:

.. code-block:: python

    @player {{x[Player("rickyboy320")]}}
    @var x[Player("rickyboy320")] = 8
    @player {{x[Player("rickyboy320")]}}

.. code-block:: console

    3
    8