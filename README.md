# MFA TOTP

A Node.js package for multi-factor authentication using TOTP.

## Installation

```bash
npm install mfa-totp

Usage
//make sure to import it by correct path
const mfa = require('mfa-totp/mfa')

// Generate a secret
const secret = mfa.generateSecret();

// Generate a TOTP token
const token = mfa.generateTOTP(secret);

// Verify the token
const isValid = mfa.verifyTOTP(secret, token);
