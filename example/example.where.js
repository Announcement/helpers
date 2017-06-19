import where from './where'

var engines

engines = [
  {engine: 'v8', size: '5.7L'},
  {engine: 'v8', size: '6.2L'},
  {engine: 'H4', size: '2.0L'}
]

engines.filter(
  where({engine: 'v8'})
)
