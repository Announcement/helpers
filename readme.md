# Helpers


## Commands

**install** developer tools `npm install`

verify code **coverage** `npm run-script coverage`

**test** the code/api `npm run-script test`

code **quality** control `npm run-script report`

generate api **documentation** `npm run-script docs`

## __is__ *(a collection of comparators)*

> [element](docs/is.md) - detects if input is of type `Element`
>
> [equal](docs/equals.md) - detects if objects are deeply *equal*
>
> [existent](docs/exists.md) - object is not `null` or `undefined`
>
> [fragment](docs/is.md) - detects if input is a `DocumentFragment`
>
> [inside](docs/inside.md) - detects if item is *inside* of object.
>
> [text](docs/is.md) - detects if input is of type `Text`

## __as__ *(a collection of mutations)*

> [array](docs/array.md) - lazy mutation to `Array`
>
> [attempt](docs/attempt.md) - mutate *if* possible
>
> [decomposed](docs/decompose.md) - mutation pipeline
>
> [flatten](docs/flatten.md) - Array *flatten* method
>
> [method](docs/curry.md) - prepares a function for a **curry**
>
> [pair](docs/pair.md) - mutates an object to a list of {key, value} *pairs*

## __query__ *(a collection of selectors)*

> [select](docs/select.md)
>
> [unique](docs/unique.md)
>
> [where](docs/where.md)
