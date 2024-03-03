# MFA TOTP

A Node.js package for multi-factor authentication using TOTP.

## Installation

```bash
npm install mfa-totp

Usage
const mfa = require('mfa-totp');

// Generate a secret
const secret = mfa.generateSecret();

// Generate a TOTP token
const token = mfa.generateTOTP(secret);

// Verify the token
const isValid = mfa.verifyTOTP(secret, token);
