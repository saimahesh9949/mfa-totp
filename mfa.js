const speakeasy = require('speakeasy');
const https = require('https');

function generateSecret() {
    try {
        return speakeasy.generateSecret({ length: 20 });
    } catch (error) {
        console.error('Error generating secret:', error);
        throw error;
    }
}

function generateTOTP(secret) {
    try {
        if (!secret || !secret.base32) {
            throw new Error('Invalid secret');
        }

        return speakeasy.totp({
            secret: secret.base32,
            encoding: 'base32',
        });
    } catch (error) {
        console.error('Error generating TOTP:', error);
        throw error;
    }
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
            console.error('Error verifying TOTP:', error);
            reject(error);
        }
    });
}

function makeGetRequest(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (error) => {
            console.error('Error making GET request:', error);
            reject(error);
        });
    });
}

module.exports = { generateSecret, generateTOTP, verifyTOTP, makeGetRequest };
