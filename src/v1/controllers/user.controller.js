'use strict';

const {
    getMethods,
    getStatics,
    createUser
} = require('../services/user.service')

var that = module.exports = {
    getMethods: async (req, res, next) => {
        try {
            res.json({
                message: await getMethods()
            })
        } catch (err) {
            console.log(err)
        }
    },
    getStatics: async (req, res, next) => {
        try {
            res.json({
                message: await getStatics()
            })
        } catch (err) {
            console.log(err)
        }
    },
    createUser: async (req, res, next) => {
        try {
            const {
                email, username, userId
            } = req.body
            res.json({
                message: await createUser({
                    email, username, userId
                })
            })
        } catch (err) {
            console.log(err)
        }
    },
}