const express = require('express')
const router = express.Router()

const whatsappController = require('../controllers/whatsappController')

router
  .get('/', whatsappController.VerifyToken)
  .post('/', whatsappController.ReceivedMessages)

module.exports = router
