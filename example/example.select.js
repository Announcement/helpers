import select from './select'

var engines

engines = [
  {
    engine: 'Apache Hemi',
    displacement: 392,
    compression: '10.9:1',
    format: 'v8',
    weight: 767
  },
  {
    engine: 'Coyote',
    displacement: 302,
    compression: '11.0:1',
    format: 'v8',
    weight: 544
  },
  {
    engine: 'LT4',
    displacement: 376,
    compression: '10.0:1',
    format: 'v8',
    weight: 529
  }
]

// 1.0.0 syntax
engines.reduce(select('format'))

// output: [
// 'v8'
// ]

// 2.0.0+ syntax
engines.reduce(select('engine', 'format'))

// 3.0.0+ syntax
engines.reduce(select(['engine', 'format']))

// output: [
// {format: 'v8', engine: 'Apache Hemi'},
// {format: 'v8', engine: 'Coyote'},
// {format: 'v8', engine: 'LT4'}
// ]
