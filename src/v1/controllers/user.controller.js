'use strict';

const {
    // getMethods,
    // getStatics,
    // createUser
    regisUser,
    verifyOtp
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

    regisUser: async (req, res, next) => {
        try {
            const { email } = req.body
            const { code, message, elements } = await regisUser({
                email
            });


            return res.status(code).json({
                code,
                message,
                elements
            })
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    validOtp: async (req, res, next) => {
        try {
            const { email, otp } = req.body

            const { code, message, elements } = await verifyOtp({
                email,
                otp
            })

            return res.status(code).json({
                code,
                message,
                elements
            })

        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}