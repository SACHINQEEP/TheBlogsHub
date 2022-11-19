const jwt = require("jsonwebtoken")
const CONFIG = require("../config/config")
const argon = require("argon2");

// signup login token
async function JWTToken(id) {
    const token = jwt.sign({ id }, CONFIG.Secrat_key, {
        expiresIn: "24h"
    })

    return token
}

// To hash password
async function hashPassword(password) {
    return await argon.hash(password)

}

// to verify hash password with plane passoword
async function verifyPassword(password, bodyPassword) {
    return await argon.verify(password, bodyPassword)
}

// For EandomOTP
function randomOTP() {
    let otp = Math.floor(1000 + Math.random() * 9999);

    return otp
}

function readingTime(totalWords) {
    let WPM = 225;
    let words = totalWords.length;
    let readingTime = words / WPM;
    return (readingTime).toFixed(2)
}

module.exports = {
    JWTToken, randomOTP, hashPassword, verifyPassword, readingTime
}