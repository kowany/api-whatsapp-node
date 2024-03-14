const VerifyToken = (req, res) => {
  res.send('Verify token')
}

const ReceivedMessages = (req, res) => {
  res.send('Received messages')
}

module.exports = {
  VerifyToken,
  ReceivedMessages
}
