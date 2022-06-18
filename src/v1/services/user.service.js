'use strict';

// Models
const _User = require('../models/user.model')
const _Otp = require('../models/otp.model')
// Service

const { insertOtp, validOtp } = require('../services/otp.service')

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
    },

    regisUser: async ({
        email
    }) => {
        const user = await _User.findOne({ email })
        if (user) {
            return {
                code: 400,
                message: 'This email is already in use'
            }
        }

        const otp = _User.createOtp()
        console.log(otp)
        return {
            code: 200,
            otp,
            elements: await insertOtp({
                otp,
                email
            })
        }
    },

    verifyOtp: async ({
        email,
        otp
    }) => {
        try {
            const otpHolder = await _Otp.find({ email })
            if (!otpHolder.length) {
                return {
                    code: 404,
                    message: 'Expired OTP!'
                }
            }


            //  get last Otp

            const lastOtp = otpHolder[otpHolder.length - 1]

            const isValid = await validOtp({
                otp,
                hashOtp: lastOtp.otp
            })

            if (!isValid) {
                return {
                    code: 401,
                    message: 'Invalid OTP'
                }
            }

            if (isValid && email === lastOtp.email) {
                const user = await _User.create({
                    username: 'Dev Nguyen',
                    email,
                    userId: 1
                })

                if (user) {
                    await _Otp.deleteMany({
                        email
                    })
                }

                return {
                    code: 201,
                    elements: user
                }
            }



        } catch (err) {
            console.log(err)
        }
    }
}