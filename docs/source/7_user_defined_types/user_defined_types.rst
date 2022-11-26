User defined Types
========================

User defined types are a way to reuse types. Common constructs can be grouped into
a type, and be used like any other type. This allows users to build abstraction layers
on top of the basic types, which should reduce overhead in scripting and greatly simplify
commonly used constructs.

.. _user_defined_types_user_defined_types:

User defined Types
------------------------

User defined types combine most previously handled concepts and allow them to be
grouped together into a reusable type. A Type is defined in a Namespace, so that
name conflicts should not occur. A Type can contain fields (*variables*) and methods
(*functions*). The difference between a Namespace and a Type however, is that a Type
can be instantiated. There can exist multiple variables of any given Type at any given
moment. The values of the fields are not shared, unlike the Namespace. A Type can
also be used as a Function argument, and can itself be used as a field-Type for a Type.

Because the explanation uses quite a bit of jargon, let us be a bit more concrete by using
an example throughout this chapter. Say we find ourselves constantly using the variables
x, y and z together, we can decide to create a Type. For the sake of this chapter, we are
creating the Type **Location**.

Types are created using the type command:

.. code-block:: console

    /type define <namespace> <Type>

For example:

.. code-block:: console

    /type define world Location

.. _user_defined_types_fields:

Fields
----------------

A Type can contain fields. These are effectively variables, but are bound to a given
instance of the Type. Since a Type is merely a *label* of what a Variable can do, the Type
defines what the Variable contains as fields.

Our example Type should contain the fields *x*, *y* and *z*, because we want to unify these
three variables into one structure: the Location Type.


We can add these fields to a Type using the type command:

.. code-block:: console

    /type variable define <namespace> <Type> <Type> <name>

For example:

.. code-block:: console

    /type field define world Location Int x

will bind the newly made field Int x to the Type Location.

Fields can be accessed in expressions using a dot. For example, after having added x, y
and z in our Location example, we can use:

.. code-block:: python

    @using world
    @define Location location = Location(5, 6, 7)
    @player {{location.x}}
    @player {{location.y}}
    @player {{location.z}}

.. code-block:: console

    5
    6
    7

The first line is a constructor, which will be handled in :ref:`Constructors <user_defined_types_constructors>`. Assuming the
constructor is defined as Location(Int x, Int y, Int z) and sets these variables respectively,
the above will be the result.

We can also set fields of a type after the initial definition, by also using the dot.

.. code-block:: python

    @define Location location = Location(5, 5, 5)
    @player {{location.x}}
    @var location.x = 10
    @player {{location.x}}

.. code-block:: console

    5
    10

This allows retroactively changing the values of the variable.

.. _user_defined_types_methods:

Methods
----------------------

As with Built-in Types, User defined Types can also contain Methods. The goal of these
methods generally has to do with the state of the Type. They are to manipulate the
instance, or give information about it.

They are defined using the /type command:

.. code-block:: console
    
    /type method define <namespace> <Type> <name>([Type name[, ...]])

For example, we can define the method getX() on the Location type as follows:

.. code-block:: console

    /type method define world Location Int getX()

To add lines to the body of this function, we use the script command:

.. code-block:: console

    /script create method world Location getX @return this.x

As with built-in types, these methods can be called on a type with the dot.

.. code-block:: python

    @define Location location = Location(5, 6, 7)
    @player {{location.x}}
    @player {{location.getX()}}

.. code-block:: console

    5
    5

They work exactly the same as any other Function described in the Functions (todo) chapter,
except that they have access to the variables’ state directly, through the *this* keyword,
and that they have to be called on an instance.

.. _user_defined_types_this:

This keyword
------------------

The **this** keyword is the handle to access the state of the current instance. Normally an
instance is constructed and acted upon as a value bound to a variable. However, as the
instance yourself, there is no way to access yourself using any other means, therefore the
this keyword exists.

In our example, if our Location Type needs a function that sets the current coordinates
to the given coordinates, the type needs to reference its own fields. This can be done
using the this keyword, so that the instance can manipulate itself.

.. _user_defined_types_constructors:

Constructors
-----------------

Constructors serve to build the initial state of an instance. For example, it would be
weird to have an uninitialized Location, since its fields would all be 0. We want to set up
a Location with the right coordinates out of the box, and not wait until it is instantiated.

We can achieve this using Constructors. As described with Built-in Types, the Player,
Entity and Block Types each have constructors to initialize the state. We can define
constructors on our built-in types as well, even allowing for multiple constructors with
different definitions (as also seen in Built-in Types).


A constructor is defined much like a Type:

.. code-block:: console

    /type constructor define <namespace> Type([Type name[, ...]])

For example, our Location constructor taking x, y and z:

.. code-block:: console

    /type constructor define world Location(Int x, Int y, Int z)

We can define an *overloaded* constructor with the same command:

.. code-block:: console

    /type constructor define world Location(Float x, Float y, Float z)

The constructors’ body can be defined with the Script command:

.. code-block:: console

    /script create constructor <namespace> <constructor signature> <script>

For example, our Location constructor:

.. code-block:: console

    /script create constructor world Location(Float, Float, Float) <script>

Clearly this is a bit verbose, so look at :ref:`Hastebin <script_hastebin>` for more information on how to simplify
definitions.

Constructors can be chained by using @return in the constructors’ body. Of course the
Constructor should return the type that is being constructed. @return can also be left
out, returning the currently constructed instance.

In constructors the **this** keyword can be used to access methods and fields of the instance.