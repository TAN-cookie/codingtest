const router = require('express').Router()

/**
 * open API list
 * --------------------------------------------------------------------------------
 */

const reportCtrl = require('./report/report.controller')
router.use('/report', reportCtrl)

module.exports = router;