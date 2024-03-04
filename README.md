# MFA TOTP

A Node.js package for multi-factor authentication using TOTP.

## Installation

```bash
npm install mfa-totp

## Usage
const mfa = require('mfa-totp');

// Generate a secret key
const secret = mfa.generateSecret();
console.log('Generated Secret:', secret.base32);

// Generate a TOTP token
const token = mfa.generateTOTP(secret);
console.log('Generated Token:', token);

// Verify the token
mfa.verifyTOTP(secret, token)
    .then(isValid => {
        console.log('Token is valid:', isValid);

        // Make a GET request using the http module through the makeGetRequest function
        return mfa.makeGetRequest('http://jsonplaceholder.typicode.com/posts/1');
    })
    .then(data => console.log('HTTP GET response:', data))
    .catch(error => console.error('Error:', error));

