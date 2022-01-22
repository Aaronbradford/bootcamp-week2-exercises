const userData = require('../../data/users')
const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  // const addme = await User.query().insert({
  //   email: 'malikbradford@hotmail.com',
  //   firstName: 'Aaron',
  //   lastName: 'Bradford',
  //   age: '18'
  // })

  // console.log(addme)
  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const addpet = await Pet.query().insert({
    ownerId: '60f543f2-3260-410f-acff-0dfa6c98776d',
    type: 'DOG',
    name: 'Spots',
  })

  console.log(addpet)
  // -----
  cleanup()
}

run()
