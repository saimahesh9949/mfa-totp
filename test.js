const mfa = require('./mfa');

// Generate a secret
const secret = mfa.generateSecret();

// Display the secret and QR code (for scanning into an authenticator app)
console.log('Secret:', secret.base32);
console.log('QR Code:', secret.otpauth_url);

// Generate a TOTP token
const token = mfa.generateTOTP(secret);

// Verify the token
const isValid = mfa.verifyTOTP(secret, token);
console.log('Token is valid:', isValid);
