.. _appendix_commands:

Command Reference
=================

MSC commands are documented in the main chapters. This page provides a quick index to find the command you need.

.. contents::
   :local:
   :depth: 2

Commands by Category
--------------------

Script Commands
^^^^^^^^^^^^^^^

Manage scripts bound to blocks, entities, and regions.

**Parent command:** ``/script``

See :ref:`Scripts - Command Reference <scripts>` for full documentation.

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Command
     - Purpose
   * - ``/script create <type> ...``
     - Add lines to a script
   * - ``/script view <type>``
     - Display script contents
   * - ``/script remove <type> [line]``
     - Delete script or line
   * - ``/script import/export <type>``
     - Sync with paste.minr.org
   * - ``/script copy/paste/wipe``
     - Bulk operations in WorldEdit selection

Namespace Commands
^^^^^^^^^^^^^^^^^^

Manage namespaces that contain variables and functions.

**Parent command:** ``/namespace``

See :ref:`Namespaces - Command Reference <namespaces>` for full documentation.

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Command
     - Purpose
   * - ``/namespace define <name>``
     - Create a new namespace
   * - ``/namespace remove <name>``
     - Delete a namespace and its contents
   * - ``/namespace info <name>``
     - View namespace metadata
   * - ``/namespace variables <name>``
     - List variables in namespace
   * - ``/namespace functions <name>``
     - List functions in namespace
   * - ``/namespace types <name>``
     - List custom types in namespace

Variable Commands
^^^^^^^^^^^^^^^^^

Manage persistent variables within namespaces.

**Parent command:** ``/variable`` (alias: ``/var``)

See :ref:`Variables - Command Reference <variables>` for full documentation.

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Command
     - Purpose
   * - ``/variable define <ns> <Type> <name> [= expr]``
     - Create a persistent variable
   * - ``/variable remove <ns> <name>``
     - Delete a variable
   * - ``/variable set <ns> <name> = <expr>``
     - Set a variable's value
   * - ``/variable info <name>``
     - View variable metadata

Function Commands
^^^^^^^^^^^^^^^^^

Manage custom functions within namespaces.

**Parent command:** ``/function`` (alias: ``/func``)

See :ref:`Functions - Command Reference <functions>` for full documentation.

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Command
     - Purpose
   * - ``/function define <ns> [ReturnType] <name(params)>``
     - Create a function definition
   * - ``/function remove <ns> <name>``
     - Delete a function
   * - ``/function redefine <ns> ...``
     - Change function signature (keep script)
   * - ``/function info <name>``
     - View function metadata

Type Commands
^^^^^^^^^^^^^

Manage custom types with fields, methods, and constructors.

**Parent command:** ``/type``

See :ref:`Types - Command Reference <types>` for full documentation.

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Command
     - Purpose
   * - ``/type define <ns> <Type>``
     - Create a custom type
   * - ``/type remove <ns> <Type>``
     - Delete a type
   * - ``/type info <ns> <Type>``
     - View type metadata
   * - ``/type fields/methods/constructors <ns> <Type>``
     - List type members

**Field subcommands:** ``/type field define/remove/info``

**Method subcommands:** ``/type method define/remove/redefine/info``

**Constructor subcommands:** ``/type constructor define/remove/info``

All Commands at a Glance
------------------------

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - Parent
     - Subcommands
   * - ``/script``
     - create, view, remove, info, export, import, copy, paste, wipe, count, undo
   * - ``/namespace``
     - define, remove, info, variables, functions, types
   * - ``/variable``
     - define, remove, set, info
   * - ``/function``
     - define, remove, redefine, info
   * - ``/type``
     - define, remove, info, fields, methods, constructors
   * - ``/type field``
     - define, remove, info
   * - ``/type method``
     - define, remove, redefine, info
   * - ``/type constructor``
     - define, remove, info
