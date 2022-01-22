const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  first_name: casual.first_name,
  last_name: casual.last_name,
  password_hash: casual.password,
  dob: casual.date(format = 'YYYY-MM-DD'),
  user_bio: casual.description,
  // created_at: casual.moment,
  // updated_at: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
