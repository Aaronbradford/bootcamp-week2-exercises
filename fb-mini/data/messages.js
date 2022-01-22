const casual = require('casual')
const userData = require('./users')

casual.define('message', ({senderid, recieverid}) => ({
    id: casual.uuid,
    sender_id: senderid,
    reciever_id: recieverid,
    message: casual.description,
    time_sent: casual.moment,
    readtype: casual.random_element(['unread', 'read']),
    time_read: casual.moment,
}))

const messageData = []

for (let i = 0; i < 20; ++i) {
    const senderid = casual.random_element(userData).id
    const recieverid = casual.random_element(userData).id
    messageData.push(casual.message({senderid, recieverid}))
}

module.exports = messageData