const { Schema, model } = require('mongoose')
const OtpGenerator = require('otp-generator')

const UserSchema = new Schema({
    userId: { type: Number, required: true },
    email: String,
    username: String,
}, {
    collection: 'users',
    timestamps: true,
})

UserSchema.statics.getStatics = () => {
    return 'get statics'
}

UserSchema.methods.getMethods = function () {
    return `get methods with ${this.getTime}`
}

UserSchema.statics.createOtp = () => {
    return OtpGenerator.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    })
}



// UserSchema.virtual('getTime').get(() => {
//     return Date.now();
// })

// UserSchema.pre('save', function (next) {
//     this.username = "Tinh Nguyen";
//     next();
// })

module.exports = model('users', UserSchema)