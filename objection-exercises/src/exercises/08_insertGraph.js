const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../lib/cleanup')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const addperson = await User.query().insert({
    ownerId: '60f543f2-3260-410f-acff-0dfa6c98776d',
    type: 'DOG',
    name: 'Spots',
  })
  // -----
  cleanup()
}

run()
