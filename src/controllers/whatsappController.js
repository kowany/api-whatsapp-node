const VerifyToken = (req, res) => {
  try {
    const accessToken = 'KLJ43232KLLIJK2308LJLJKJAFSDFXXVQ'
    const token = req.query['hub.verify_token']
    const challenge = req.query['hub.challenge']

    if (challenge !== null && token !== null && token == accessToken) {
      res.send(challenge)
    } else {
      res.status(404).send(error)
    }
  } catch (error) {
    res.status(404).send(error)
  }
}

const ReceivedMessages = (req, res) => {
  res.send('Received messages')
}

module.exports = {
  VerifyToken,
  ReceivedMessages
}
