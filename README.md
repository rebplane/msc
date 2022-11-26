## Documentation for MSC 2.0

The documentation was written by rickyboy320 and converted to restructuredText by rebplane.

You can access the readthedocs site here: https://msc-documentation.readthedocs.io/en/latest/index.html

## Generating the documentation locally

You probably want to create a virtual environment and start it up first. (https://docs.python.org/3/library/venv.html)

Install `sphinx` and `sphinx-rtd-theme`:

```
pip install sphinx sphinx-rtd-theme
```

`cd` into the `docs/` directory and run make to create your index.html in the `build/` folder

```
make html
```
