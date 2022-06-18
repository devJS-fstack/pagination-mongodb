const express = require('express');
const router = express.Router();

//import controller
const {
    insertComments,
    insertManyComments,
    listHacknews,
    insertEvent,
    atomicInsert,
    list,
    listPageUsingBucket,
    insertBucket,
} = require('../controllers/paging.controller')

const {
    getMethods,
    getStatics,
    createUser,
    regisUser,
    validOtp
} = require('../controllers/user.controller')

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})
router.post('/v1/api/bucket-comments', insertBucket)
router.post('/v1/api/comments', insertComments)
router.post('/v1/api/events', insertEvent)
router.post('/v1/api/atom-events', atomicInsert)
router.post('/v1/api/atom-events', atomicInsert)
router.post('/v1/api/commentMany', insertManyComments)
router.get('/v1/api/comments', list)
router.get('/v1/api/comments-hacknew', listHacknews)
router.get('/v1/api/bucket-comments', listPageUsingBucket)

// services user
router.get('/v1/services/getMethods', getMethods)
router.get('/v1/services/getStatics', getStatics)
router.post('/v1/services/createUser', regisUser)
router.post('/v1/services/valid-otp', validOtp)

module.exports = router;