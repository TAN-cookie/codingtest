const router = require('express').Router()

/**
 * open API list
 * --------------------------------------------------------------------------------
 */

const reportCtrl = require('./report/report.controller')
router.use('/report', reportCtrl)

const str_beginerCtrl = require('./str_beginer/str_beginer.controller')
router.use('/str_beginer', str_beginerCtrl)

module.exports = router;