const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users

  const totalusers = await User.query().resultSize()
  console.log("There are", totalusers, "total users.")

  // Get the average age of users

  const avgage = await User.query().avg('age as avgage')
  console.log(avgage)

  // Get the total number of dogs

  const totaldogs = await Pet.query().where('type', 'DOG').resultSize()
  console.log("There are", totaldogs, "total dogs.")

  // -----
  cleanup()
}

run()
