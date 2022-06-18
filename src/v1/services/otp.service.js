'use strict';

const bcrypt = require('bcrypt');

const _Otp = require('../models/otp.model')

var that = module.exports = {
    insertOtp: async ({
        otp,
        email
    }) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashOtp = await bcrypt.hash(otp, salt);
            const Otp = await _Otp.create({
                email,
                otp: hashOtp,
            })

            return Otp ? 'success' : 'failed'

        } catch (error) {
            console.error(error)
        }
    },

    validOtp: async ({
        otp, // otp of user
        hashOtp
    }) => {
        console.log(otp, hashOtp)
        return await bcrypt.compare(otp.toString(), hashOtp);
    }
}