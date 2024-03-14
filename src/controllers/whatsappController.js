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
    const messages = messageObject[0]

    const text = GetTextUser(messages)

    myConsole.log(messageObject)

    res.send('EVENT_RECEIVED')
  } catch (error) {
    myConsole.log(error)
    res.send('EVENT_RECEIVED')
  }
}

function GetTextUser(messages) {
  let text = ''
  const typeMessage = messages.type

  if (typeMessage === 'text') {
    text = messages['text'].body
  } else if (typeMessage === 'interactive') {
    const interactiveObject = messages['interactive']
    const typeInteractive = messages['type']
    myConsole.log(interactiveObject)

    if (typeInteractive === 'button_reply') {
      text = interactiveObject['button_reply']['title']
    } else if (typeInteractive === 'list_reply') {
      text = interactiveObject['list_reply']['title']
    } else {
      console.log('sin mensaje')
    }
  } else {
    console.log('sin mensaje')
  }
}

module.exports = {
  VerifyToken,
  ReceivedMessages
}
