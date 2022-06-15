'use strict';

// Models
const _User = require('../models/user.model')
// Service

var that = module.exports = {
    getStatics: () => {
        return _User.getStatics()
    },
    getMethods: () => {
        const __User = new _User();
        return __User.getMethods()
    },
    createUser: async ({
        email, username, userId
    }) => {
        const user = new _User({
            email, username, userId
        })
        return await user.save();
    }
}