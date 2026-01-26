Introduction
================

A short introduction on the document and structure, including notation and practices maintained within the document.

.. _intro_paragraph:

History
-------------------

Previous scripting languages (Scriptblock, MSC 1) demonstrated the power and simplicity of scripts compared to command blocks. However, these versions also had shortcomings. Scriptblock became outdated, causing all interact scripts to be fired twice upon interact, and some operators such as ``@delay`` and ``@cooldown`` could break by a player logging out. To circumvent this, we developed a Minr-specific version, Minr Script Code (MSC), which initially aimed to solve these issues. Since the codebase was ours, we were able to add additional operators, features and more, which made scripting even more powerful.

With this expansion of features the correct usage, functionality, shortcomings, bugs, and dangers with implementing became obscured, causing unwanted behaviour in scripts and confusion among scripters.

Additionally, variables were all globally stored, dynamically typed, and rather verbose to manipulate (each operation takes one line). Scripts could not be reused, and mass-editing scripts required third-party mods.

MSC 2 attempts to solve these shortcomings via the addition of typed variables, namespaces, functions, hastebin-based importing and exporting, and the addition of expressions in scripts to allow for easier manipulation of variables. Additionally, to remain compatible with major features and standards from MSC 1, the core concept of creating and editing scripts remains the same.

This document attempts to clarify the features, shortcomings and dangers of MSC 2, combined with good practice and examples of use cases.

.. _intro_structure:

Structure
-------------------

Each feature will be handled in its own chapter, with chapters slowly building up the required knowledge.

For your first read, it may be best to read from the top to bottom, as the document is structured with this intent. The main chapters cover :ref:`Namespaces <namespaces>`, :ref:`Variables <variables>`, :ref:`Expressions <expressions>`, :ref:`Lists <lists>`, :ref:`Scripts <scripts>`, :ref:`Functions <functions>`, and :ref:`Types <types>`. However, there is sometimes no sensible ordering of two different topics, as each requires some knowledge of the other.

For future reference, the :ref:`Appendix <appendix>` can be used, which contains a summary of all tables, commands, functions, script operators, types, and more features present in the current implementation of MSC 2. If you are unsure how a specific element works, you can always refer back to the table of contents and search it in the main document.

Signposted Sections
^^^^^^^^^^^^^^^^^^^

Some sections cover behavior that is useful to understand but rarely encountered in practice. These sections are marked with one of two boxes at the top:

.. admonition:: Beginner Note
   :class: beginner-note

   Green boxes appear in difficult or technical sections and describe a particular situation in which you might encounter weird behavior. If the situation doesn't sound like what you're doing, then feel free to skip ahead to the next section.

.. admonition:: Technical Detail
   :class: technical-detail

   Red boxes appear in verbose sections with lots of detail or explanation. They provide standard programming terminology and a concise summary. If you're an experienced programmer, the corresponding section can probably be skimmed or skipped.

In both cases, the full explanation follows for those who want it, or for future reference when you encounter the behavior in the wild.

.. _notation:

Notation
-----------------

In examples and command definitions, arguments in ``[square brackets]`` are optional, while those in ``<angle brackets>`` are required. For example:

.. code-block:: console

    /variable define <namespace> [qualifier [...]] <Type> <name> [= expression]

This command requires the *namespace*, *Type* and *name* arguments, and optionally takes the *qualifier* and = *expression* arguments. Any number of qualifiers can be passed, indicated by the ``[...]``.

Scripts are represented as:

.. code-block:: msc
    
    @player Hello there!
    @bypass /give @s minecraft:diamond 1
    @if true
        @player &aTrue
    @else
        @player &cFalse
    @fi

The result of a script is represented as:

.. code-block:: output

    Hello there!
    &aTrue
