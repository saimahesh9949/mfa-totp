const speakeasy = require('speakeasy');
const http = require('http');

function generateSecret() {
    return speakeasy.generateSecret({ length: 20 });
}

function generateTOTP(secret) {
    if (!secret || !secret.base32) {
        throw new Error('Invalid secret');
    }

    return speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32',
    });
}

function verifyTOTP(secret, token) {
    return new Promise((resolve, reject) => {
        try {
            if (!secret || !secret.base32 || !token) {
                throw new Error('Invalid parameters');
            }

            const isValid = speakeasy.totp.verify({
                secret: secret.base32,
                encoding: 'base32',
                token: token,
                window: 1,
            });

            resolve(isValid);
        } catch (error) {
            reject(error);
        }
    });
}


function makeGetRequest(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

module.exports = { generateSecret, generateTOTP, verifyTOTP, makeGetRequest };
