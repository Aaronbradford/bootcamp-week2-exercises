const casual = require('casual')

const userData = require('./users')

casual.define('friend', ({requester_id, requested_id}) => ({
  id: casual.uuid,
  requester_id: requester_id,
  requested_id: requested_id,
  status: casual.random_element(['accepted', 'rejected', 'pending'])
}))


const friendData = []

for (let i = 0; i < 10; ++i) {
  const requester_id = casual.random_element(userData).id
  const requested_id = casual.random_element(userData).id
  friendData.push(casual.friend({requester_id, requested_id}))
}

module.exports = friendData
