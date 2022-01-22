const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const chosenuser = await User.query().where('firstName', 'Lola').andWhere('lastName', 'Turcotte')
  console.log(chosenuser)

  // Do the same with object notation
  const objectchosenuser = await User.query().where({ firstName: 'Lola' }).andWhere({ lastName: 'Turcotte' })
  console.log(objectchosenuser)

  // Get all DOGS and BIRDS

  const dogsnbirds = await Pet.query().where('type', 'DOG').orWhere('type', 'BIRD')
  console.log(dogsnbirds)

  // object notation
  const objectdogsnbirds = await Pet.query().where({ type: 'DOG' }).orWhere({ type: 'BIRD' })
  console.log(objectdogsnbirds)

  // -----
  cleanup()
}

run()
