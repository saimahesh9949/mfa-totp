# MFA TOTP

A Node.js package for multi-factor authentication using TOTP.

## Installation


```bash
npm install mfa-totp


## Usage

const { generateSecret, generateTOTP, verifyTOTP, makeGetRequest } = require('your-module-name');

// Generate a secret
const secret = generateSecret();

// Generate a TOTP
const token = generateTOTP(secret);

// Verify the TOTP
const isValid = await verifyTOTP(secret, token);

// Make an HTTP GET request
const url = 'https://jsonplaceholder.typicode.com/posts/1';
try {
    const response = await makeGetRequest(url);
    console.log('HTTP GET request response:', response);
} 
catch (error) {
    console.error('Error making HTTP GET request:', error);
}

API
generateSecret()
Generates a secret for use in TOTP generation.

generateTOTP(secret)
Generates a TOTP using the provided secret.

verifyTOTP(secret, token)
Verifies a TOTP token using the provided secret.

makeGetRequest(url)
Makes an HTTP GET request to the specified URL and returns a promise that resolves with the response data.
