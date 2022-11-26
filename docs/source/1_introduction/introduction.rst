Introduction
================

A short introduction on the document and structure, including notation and practices
maintained within the document.

.. _intro_paragraph:

Introduction
-------------------

Previous versions of the scripting language (Scriptblock, MSC 1) have shown that scripts
are extremely powerful and often simpler than command blocks. However, these versions
also had shortcomings. Scriptblock ended up being outdated, causing all interact scripts
to be fired twice upon interact, and some operators such as @delay and @cooldown could
break by a player logging out. To circumvent this, we developed a Minr-specific version,
Minr Scripts (MSC), which initially aimed to solve these issues. Since the codebase was
ours, we were able to add additional operators, features and more, which made scripting
even more powerful.

With this expansion of features the correct usage, functionality, shortcomings, bugs, and
dangers with implementing became obscured, causing unwanted behaviour in scripts and
confusion among scripters.

Additionally, variables were all globally stored, dynamically typed, and rather verbose
to manipulate (each operation takes one line). Scripts were unable to be reused, nor was
it easy to mass-edit a script, requiring third-party mods.

MSC 2 attempts to solve these shortcomings in variables and scripts by the addition
of typed variables, namespaces, functions, hastebin-based import and export of scripts,
and the addition of expressions in scripts, allowing for easier manipulation of variables.

This document attempts to clarify the features, shortcomings and dangers of MSC 2,
combined with good practice and examples of use cases.

.. _intro_structure:

Structure
-------------------
MSC 2 contains a lot of new features. Additionally, to remain compatible with major
features and standards from MSC 1, many features of MSC 1 have been leveraged,
which means that the core concept of creating and editing scripts remains the same.

Each feature will be extensively handled in its own chapter, with the chapters slowly
building up the required knowledge.

For your first read it may be best to read from the top to bottom, because the document
is structured keeping this in mind. For future reference, the :ref:`Appendix <appendix>` can be used,
which contains a summary of all tables, commands, functions, script operators, types,
and more features present in the current implementation of MSC 2. If you are unsure
how a specific element works, you can always refer back to the table of contents and
search it in the main document.

.. _notation:

Notation
-----------------

In examples and command definitions, arguments contain brackets or less than and
greater than signs. Arguments in brackets ([ ]) can be optionally defined. Arguments
between the less than and greater than signs (<>) are required.

For example:

.. code-block:: console

    /variable define <namespace> [qualifier [...]] <Type> <name> [= expression]

Requires the *namespace*, *Type* and *name* arguments, and optionally provides the *qualifier*
and = *expression* arguments. Any amount of qualifiers can be passed, indicated by the
[...].

Scripts are represented as:

.. code-block:: python
    
    @player Hello
    @bypass /rocket
    @if true
        @player True
    @else
        @player False

The result of a script is represented as:

.. code-block:: console

    Hello
    True
