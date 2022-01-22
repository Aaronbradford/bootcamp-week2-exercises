const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const firstfiveUsers = await User.query().orderBy('lastName').limit(5)
  console.log(firstfiveUsers)

  // Get the second 5 users, ordered by lastName
  const nextfiveUsers = await User.query().orderBy('lastName').limit(5).offset(5)
  console.log(nextfiveUsers)
  // -----
  cleanup()
}

run()
