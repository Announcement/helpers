# Contributing

> this is not effective, just a draft.

This document uses common [key words](https://tools.ietf.org/html/rfc2119) to specify requirement levels

## Source

### Requirements

1. companion scripts
2. integration
3. convenience

### Companion Scripts

- Source files __MUST__ have accompanying *documentation* and *tests*

### Integration

New code __SHOULD__ be integrated *deep* into the rest of the repository.

All changes effect *current*, *existing* and *future*  solutions.

### Convenience

All code __SHOULD__ follow the [jsdocs](http://usejsdoc.org/) specifications.

Dependencies __SHOULD__ be noted, as such.
Dependents additionally __MAY__ be referenced.

## Quality Control

Use [Semantic Versioning](http://semver.org/)

If you know of a *better* way to do something, please provide the solution.

Quick and dirty tasks are welcome, as long as thorough documentation is provided, so that it can be later understood and enhanced.

Lint __MUST__ succeed; feel free to change lint rules as long as they are reasonable and there are no errors.

Tests __MUST__ pass; *fix* the code, not the tests.

## Documentation

Each documentation file...

__MUST__ have a description which __MAY__ be brief
__MUST__ have at least one example
__SHOULD__ have an explanations
__MAY__ link to theory or additional information thus so desired.

## Test Scripts

__MUST__ assert every point of entry
__SHOULD__ verify reasonable input/output
__MUST NOT__
