const casual = require('casual')
const postData = require('./posts')
const userData = require('./users')
const commentData = require('./comments')

casual.define('like', ({likingid, postid, commentid}) => ({
    id: casual.uuid,
    liking_user_id: likingid,
    liked_post_id: postid,
    liked_comment_id: commentid,
}))

const likeData = []

for (let i = 0; i < 20; ++i) {
    const likingid = casual.random_element(userData).id
    const postid = casual.random_element(postData).id
    const commentid = casual.random_element(commentData).id
    likeData.push(casual.like({likingid, postid, commentid}))
}

module.exports = likeData