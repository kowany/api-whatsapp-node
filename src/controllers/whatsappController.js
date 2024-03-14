const fs = require('fs')
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'))

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
  try {
    const entry = req.body['entry'][0]
    const changes = entry['changes'][0]
    const value = changes['value']
    const messageObject = value['messages']

    myConsole.log(messageObject)

    res.send('EVENT_RECEIVED')
  } catch (error) {
    myConsole.log(error)
    res.send('EVENT_RECEIVED')
  }
}

module.exports = {
  VerifyToken,
  ReceivedMessages
}
