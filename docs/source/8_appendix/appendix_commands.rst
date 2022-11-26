 Commands
 ---------------

.. _appendix_commmands_namespace:

Namespace
-------------------

The parent command is /namespace. All subcommands in the table below will start
with this parent command.


Table 9.27: Namespace Commands

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - define<name> 
      - Define a new namespace with label/name *name*.

    * - remove<name> 
      - Delete a namespace and all variables and functions attached to it.

    * - info<name> 
      - View metadata about a namespace.

    * - variables <name>
      - View the definitions and current values of variables in this

        namespace.

    * - functions <name>
      - View the definitions of the functions in this namespace.

    * - types<name> 
      - View the types defined in this namespace

.. _appendix_commands_variable:

Variable
-----------------

The parent command is /variable. Possible aliases: /var. All subcommands in the table
below will start with this parent command.

Table 9.28: Variable Commands

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - define<namespace> [qualifiers [...]] <Type> <name> [=expression]
      - Define a new variable with optional qualifiers, a given
        
        name and Type and a possible initial value, supplied by
        
        the expression. The expression should resolve to the Type
        
        parameter.

    * - remove <namespace> <name>
      - Delete a variable definition.

    * - set<namespace> <name> <= expression>
      - Set a variable to the result of an expression. The
        
        expression should resolve to the Type of the variable, or
        
        null.

    * - info<name> 
      - View metadata about a variable.

.. _appendix_commands_function:

Function
-------------

The parent command is /function. Aliases: /func. All subcommands in the table below
will start with this parent command.



Table 9.29: Function Commands

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - define<namespace> [ReturnType] <functionName([Type name[, ...]])>
      - Define a function in *namespace* returning a value of the
        
        typeReturnType(Void if empty). The function has the
        
        name *functionName* and takes any amount of
        
        parameters, defined in sets ofType name. Type defines
        
        the type of the parameter and name defines the name on
        
        which the variable can be addressed. Fails when a
        
        function with functionName already exists in the
        
        namespace.

    * - remove<namespace> <functionName>
      - Delete a function definition in a given namespace. This
        
        removes the attached scripts.

    * - redefine<namespace> [ReturnType] <functionName([Type name[, ...]])>
      - Redefine a function. This keeps the associated script, but
        
        allows changing the calling parameters or the return type.
        
        Will fail when functionName has not been defined yet.

    * - info <name> 
      - View metadata about a function.


.. _appendix_commands_user_types:

User Types
-------------------

The parent command is /type. All subcommands in the table below start with this
parent command. The method and field subcommands have their own tables.

Table 9.30: Type Commands

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - define <namespace> <Type>
      - Define a new Type in the *namespace*. Should start with an
        
        uppercase character, contain no spaces and only alphanumeric
        
        characters.

    * - remove <namespace> <Type>
      - Deletes a Type, with its associated fields and methods.

    * - info <namespace> <Type>
      - View metadata about a type.

    * - fields <namespace> <Type>
      - Display a list of all fields in this Type.

    * - methods <namespace> <Type>
      - Displays a list of all methods in this Type. Since built-in types
        
        are part of every namespace, a built-in type can be inspected
        
        too.

    * - constructors <namespace> <Type>
      - Displays a list of all constructors in this Type. Since built-in
        
        types are part of every namespace, a built-in type can be
        
        inspected too.


.. _appendix_commands_fields:

Fields
--------------------

The parent command is /type field. All subcommands in this table start with this parent
command.

Table 9.31: Field Commands

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - define<namespace> <Type> <Type> <name>
      - Define a field forType. The field has the given Type and
        
        name. Fails when a field with the same name already exists
        
        in the type.

    * - remove<namespace> <Type> <name>
      - Delete a field in Type with the given name.

    * - info<namespace> <Type> <name>
      - View metadata about a field.

.. _appendix_commands_methods:

Methods
-------------------

The parent command is /type method. All subcommands in this table start with this
parent command.

Table 9.32: Method Commands

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0

    * - define<namespace> <Type> <ReturnType> methodName([Type name[, ...]])>
      - Define a method in *Type* returning a value of the type
        
        ReturnType. The method has the name *methodName*
        
        and takes the specified amount of parameters, defined
        
        in sets ofType name. Type defines the type of the
        
        parameter and name defines the name on which the
        
        variable can be addressed. Fails when a function with
        
        methodName already exists in the type.

    * - remove<namespace> <Type> <methodName>
      - Delete a method definition in a given Type. This
        
        removes the attached scripts.

    * - redefine<namespace> <Type>[ReturnType] <methodName([Type name[, ...]])>
      - Redefine a method. This keeps the associated script,
        
        but allows to change the calling parameters or the
        
        return type. Will fail when methodName has not been
        
        defined yet.

    * - info<name> 
      - View metadata about a method.

.. _appendix_commands_constructors:

Constructors
-----------------

The parent command is /type constructor. All subcommands in this table start with
this parent command.

Table 9.33: Constructor Commands

.. list-table:: 
    :widths: 10 50
    :stub-columns: 0
    
    * - define <namespace> Type([Type name[, ...]])
      - Define a constructor forType. The constructor takes the
        
        specified amount of parameters, defined in sets ofType name.
        
        Type defines the type of the parameter and name defines the
        
        name on which the variable can be addressed. Fails when a
        
        constructor with the same parameter signature already exists in
        
        the type.
    
    * - remove <namespace> Type([Type name[, ...]])
      - Delete the constructor with the given parameter signature in the
        
        associated Type. This removes the attached scripts.
    
    * - info <namespace> Type([Type name[, ...]])
      - View metadata about a constructor.

.. _appendix_commands_script:

Script
-------------

The script command has the following syntax:

.. code-block:: console

    /script <action> <type> [typeparameters] [actionparameters]

*action* and[*actionparameters*] are defined in :ref:`Supported actions for script commands <scripts_action>`. 
*type* and[*typeparameters*] are defined in :ref:`Supported Script Types <scripts_script_types>`. Script operators that
can be used in script lines are defined in :ref:`Script Operators <script_operators>`.