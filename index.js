'use strict'

import autocannon from 'autocannon'

const instance = autocannon({
  url: 'http://asciiart.artillery.io:8080',
  connections: 10, //default
  pipelining: 1, // default
  duration: 10 // default
})

autocannon.track(instance)

