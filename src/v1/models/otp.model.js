const { Schema, model } = require('mongoose')

const otpSchema = new Schema({
    email: String,
    otp: String,
    time: { type: Date, default: Date.now, index: { expires: 60 } }
}, {
    collection: 'otp'
})

module.exports = model('otp', otpSchema)