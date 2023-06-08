# Tokens Builder

This is a proof-of-concept showcasing a Node.js executable to build Design Tokens to be used with the [Tokens Studio Figma plugin](https://tokens.studio/).

---

## Overview

The `build-tokens.js` script can be run using the `node` command and will take an `[input]` and an `[output]` argument.

```
> node build-tokens [input] [output]
```

- **`build-tokens`**
  - node executable to export JSON file for [Figma-Tokens plugin](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens).
- **`[input]`** = `directory/input-js-file`
  - Location and name of the JavaScript file containing the schema of how the JSON file will be created.
- **`[output]`** = `directory/output-json-file`
  - Location and name for JSON export.

## Exporting JSON

```
> node build-tokens input/schema output/uswds-tokens
```

The command above will output `uswds-tokens.json` in the `output` directory.

## Feedback

Please leave any feedback, question or suggestion on the [issues page](https://github.com/WeissCenter/poc-tokens-builder/issues/new/choose).

## Credits

- [Marcelo Paiva](https://github.com/mpaiva)

