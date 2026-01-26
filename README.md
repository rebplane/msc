# MSC 2.0 Documentation

Documentation for MSC (Minr Script Code), a scripting language for the Minecraft server [Zero.Minr.Org](https://forums.minr.org).

The documentation was originally written by rickyboy320 and Alphaesia, converted to reStructuredText by rebplane, and updated by AK1089.

**View online:** https://msc-documentation.readthedocs.io/en/latest/

## Building Locally

### Setup

Create and activate a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r docs/requirements.txt
```

### Build

With the virtual environment activated (run `source .venv/bin/activate` first), start the auto-rebuilding dev server:

```bash
sphinx-autobuild docs/source docs/_build/html
```

View the documentation at http://localhost:8000. The page auto-reloads when you edit source files.
