const casual = require('casual')

const userData = require('./users')

casual.define('post', (userid) => ({
  id: casual.uuid,
  userid: userid,
  created_date: casual.date(format = 'YYYY-MM-DD'),
  post_text: casual.description,
}))


const postData = []

for (let i = 0; i < 10; ++i) {
  const userid = casual.random_element(userData).id
  postData.push(casual.post(userid))
}

module.exports = postData
