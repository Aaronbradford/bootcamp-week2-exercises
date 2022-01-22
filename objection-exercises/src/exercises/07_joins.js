const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
// const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersnpets = await User.query().withGraphFetched('pets')
  console.log(usersnpets)

  // Get all users, their pets, AND their children
  const petsnkids = await User.query().withGraphFetched('[pets, children]')
  console.log(petsnkids)

  // Get all users, their parents, and their grandparents
  const parents = await User.query().withGraphFetched('[parents.[parents]]')
  console.log(parents)

  // Get all users, their pets, their chilren, and their childrens' pets
  const generationpets = await User.query().withGraphJoined('[pets, children.[pets]]')
  console.log(generationpets)

  // -----
  cleanup()
}

run()
