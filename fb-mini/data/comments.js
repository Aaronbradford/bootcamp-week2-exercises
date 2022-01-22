const casual = require('casual')
const postData = require('./posts')

const userData = require('./users')

casual.define('comment', ({commentorid, postid}) => ({
    id: casual.uuid,
    commentor_id: commentorid,
    post_id: postid,
    created_at: casual.moment,
    message: casual.description,
}))

const commentData = []

for (let i = 0; i < 20; ++i) {
    const commentorid = casual.random_element(userData).id
    const postid = casual.random_element(postData).id
    commentData.push(casual.comment({commentorid, postid}))
}

module.exports = commentData