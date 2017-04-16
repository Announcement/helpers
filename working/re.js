// var chalk = require('chalk')
//
// var logs = []
// function highlight(string, index) {
//   var colormap = []
//   var result = []
//   var i = 0
//
//   string = string
//   .split('')
//   .map(text => {
//     return {
//       color: 'white',
//       text
//     }
//   })
//
//   string[index].color = 'blue'
//
//   string = string
//   .reduce((previous, current) => {
//
//     if (previous.constructor !== Array) {
//       previous = [previous]
//     }
//
//     var lastIndex = previous.length - 1
//
//     if (previous[lastIndex].color === current.color) {
//       previous[lastIndex].text += current.text
//     } else {
//       previous.push(current)
//     }
//
//     return previous
//   })
//   .reduce((previous, current) => {
//     if (typeof previous !== 'string')
//       previous = chalk[previous.color](previous.text)
//
//     return previous += chalk[current.color](current.text)
//   })
//
//   return string
// }
//
// class re {
//   constructor(expression) {
//     var tokens
//     var ast
//
//     tokens = re.tokenize(expression)
//     ast = re.parse(tokens)
//
//     this.expression = expression
//     this.tokens = tokens
//     this.ast = ast
//   }
//
//   static tokenize(expression) {
//     return expression
//       .split('')
//       .map((it, key) => {
//         if (
//           it === '(' ||
//           it === ')' ||
//           it === '[' ||
//           it === ']' ||
//           it === '{' ||
//           it === '}' ||
//           it === '|' ||
//           it === '+' ||
//           it === '*' ||
//           it === '?' ||
//           it === '^' ||
//           it === '$' ||
//           it === '-' ||
//           it === '\\' ||
//           it === '.' ||
//           it === '!' ||
//           it === ',' ||
//           it === ':')  {
//           return {input: it, output: 'Operator', index: key}
//         } else {
//           return {input: it, output: 'Literal'}
//         }
//       })
//   }
//
//   static parse(tokens) {
//     var ast
//     var cache
//
//     ast = []
//     cache = []
//
//     while (tokens.length) {
//       var it
//
//       it = tokens.shift()
//       cache.push(it)
//
//       if (it === '(') {
//         ast.push()
//       }
//
//     }
//
//     return ast
//   }
// }
//
// function match(expression, input) {
//   function regular(index) {
//     var matches = input[index] == expression[index]
//     var hasMore = input.length - 1 > index && expression.length - 1 > index
//
//     logs.push(highlight(input, index))
//
//     if (matches)
//       if (hasMore)
//         return regular(index + 1)
//       else
//         return true
//     return false
//   }
//
//   return regular(0)
// }

// var fs = require('fs')

// class Scanner {
//
// }
//
// class Evaluator {
//
// }
//
// class Tokenizer {
//
// }
//
// class Compiler {
//
// }

function isCapitalLetter (character) {
  let identity = character.charCodeAt(0)
  return identity >= 65 && identity <= 90
}

function isSmallLetter (character) {
  let identity = character.charCodeAt(0)
  return identity >= 97 && identity <= 122
}

function isLetter (character) {
  return isCapitalLetter(character) || isSmallLetter(character)
}

function isNumber (character) {
  let identity = character.charCodeAt(0)
  return identity >= 48 && identity <= 57
}

function isAlphanumeric (character) {
  return isNumber(character) || isLetter(character)
}

function isWordCharacter (character) {
  return isAlphanumeric(character) || character === '_'
}

function isSpace (character) {
  let identity = character.charCodeAt(0)
  return (
    identity === 32 ||
    identity === 9 ||
    identity === 13 ||
    identity === 10
  )
}

class Language {
  static compile (tokens) {}
  static tokenize (source) {}
}

class re extends Language {
  static compile (tokens) {

  }

  static tokenize (source) {
    // var scanned = re.scan(source)
    // var evaluated = re.evaluate(scanned)
  }

  static scan (input) {
    var cache = []
    for (var i = 0; i < input.length; i++) {
      var item = {}
      var character = input[i]
      var length = cache.length

      item.start = i
      item.stop = i
      item.length = 1

      if (isWordCharacter(character)) {
        item.type = 'Word'
      }

      if (!isWordCharacter(character) && !isSpace(character)) {
        item.type = 'Symbol'
      }

      if (isSpace(character)) {
        item.type = 'Space'
      }

      item.text = character

      if (length === 0) {
        cache.push(item)
      } else if (cache[length - 1].type === item.type) {
        cache[length - 1].text += item.text
        cache[length - 1].stop = item.stop
        cache[length - 1].length += item.length
      } else {
        cache.push(item)
      }
    }
  }
  static evaluate (input) {

  }
}

export default re

//
// function f(x) {
//   // console.log(x)
//   var buffer = []
//   var depth
//
//   depth = 0
//
//   for (var i = 0; i < x.length; i++) {
//     var current = x[i]
//
//     if (current === '(') depth++
//
//     buffer.push({
//       content: current,
//       depth: depth
//     })
//
//     if (current === ')') depth--
//   }
//
//   var brackets = (previous, current) => {
//     if (previous.constructor !== Array)
//       previous = [previous]
//
//     var item = previous.length - 1
//
//     if (previous[item].depth == 1 && current.depth >= 1) {
//       previous[item].content += current.content
//     } else if(previous[item].depth === 0 && current.depth === 0) {
//       previous[item].content += current.content
//     } else {
//       previous.push(current
//     }
//
//     return previous
//   }
//
//   var depth = (it) => {
//     if (it.depth === 1)
//       it.content = f(it.content.substring(1, it.content.length - 1))
//     return it
//   }
//
//   var content = (it) => {
//     return it.content
//   }
//
//   return buffer.reduce(brackets).map(depth).map(content)
// }
//
// fs.readFile('src/inject.js', {encoding: 'utf-8'}, function(error, data) {
//   console.log(f(data))
// })
//
// console.log(f('hello ((noun) world), how are (you (person)) today?'))
//
// //
// // {
// //   var input = 'aabbba'
// //   var pattern = 'abbba'
// //
// //   var result = match(pattern, input)
// //
// //   logs.push(result ? 'yes' : 'no')
// //
// //   function output() {
// //     if (logs.length <= 0)
// //       return false
// //
// //     var current = logs.shift()
// //
// //     process.stdout.clearLine()
// //     process.stdout.cursorTo(0)
// //     process.stdout.write(current)
// //
// //     setTimeout(output, 1000)
// //   }
// //
// //   output()
// // }
