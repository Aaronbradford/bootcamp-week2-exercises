const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)
  const allage = await User.query()

  // console.log(allage)

  for (i =0; i < allage.length; ++i) {
    if (allage[i].age <= 18) {
      await User.query().patch({
        age: '18'
      }).where('id', allage[i].id)
    }
    // await console.log(allage[i].id)
  }
  // -----
  cleanup()
}

run()
