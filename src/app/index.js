const router = require('express').Router()

/**
 * open API list
 * --------------------------------------------------------------------------------
 */

const reportCtrl = require('./report/report.controller')
router.use('/report', reportCtrl)

const str_beginerCtrl = require('./str_beginer/str_beginer.controller')
router.use('/str_beginer', str_beginerCtrl)

const missing_numbersCtrl = require('./missing_numbers/missing_numbers.controller')
router.use('/missing_numbers', missing_numbersCtrl)

module.exports = router;