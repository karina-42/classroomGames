const express = require('express')
const router = express.Router()
const lineRowController = require('../controllers/lineRow')

router.get('/', lineRowController.getQuestion)
router.get('/questions', lineRowController.getQuestions)
router.post('/createQuestion', lineRowController.createQuestion)
router.put('/editQuestion', lineRowController.editQuestion)
router.delete('/deleteQuestion', lineRowController.deleteQuestion)
router.delete('/deleteQuestions', lineRowController.deleteQuestions)

module.exports = router