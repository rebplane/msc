.. _script_paste:

Paste.minr.org
--------------

Minecraft has a pretty terrible way of inputting scripts. There’s the option through chat,
but that gets unreadable fast, and does not support multiple lines. We could use books,
but they have limited horizontal space, which means most lines would wrap. Signs are
no option either. There must be a better way to type scripts, right?

MSC 2 supports `paste.minr.org <https://paste.minr.org/>`_, which is an online coding pastebin based on Hastebin. You can write text, press
save, and a link will be generated that you can share with everyone. MSC 2.0 takes this
raw text line by line, and converts it to a script.

Script can be imported from paste.minr.org using:

.. code-block:: console

    /script import ... <id>

and exported using

.. code-block:: console

    /script export ...

When you save your piece of text on paste.minr.org, your URL will be appended by an identifier
(a few random characters). You should use this identifier as the id when importing.

Exporting will upload the current script to paste.minr.org, after which you can clone and edit
the script, and import the edited script.

Paste.minr.org uses automatically detected programming languages, resulting in MSC lines
being picked up as some programming language. Paste.minr.org will automatically include
the programming language’s extension. Whether you include the extension, or even the
entire URL, or not, it will work regardless.


Example

.. image:: ../images/paste-1.PNG

Figure 5.1: Write a script in paste.minr.org

.. image:: ../images/hastebin2.PNG

Figure 5.2: Save the script.

.. image:: ../images/paste-3.PNG
    
Figure 5.3: Find the identifier.

.. code-block:: console

    /script import interact fomomokumo

Figure 5.4: Run the import command, and press the block. That’s it!

Exporting a script is as easy as running

.. code-block:: console

    /script export interact

and clicking the block, after which a link to the paste.minr.org will be generated. To edit this
script, you can press the edit button:

.. image:: ../images/hastebin4.PNG

Figure 5.5: Click the edit button, and start editing. Then follow the instructions above
to import the script again.
