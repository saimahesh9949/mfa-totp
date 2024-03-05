const { generateSecret, generateTOTP, verifyTOTP, makeGetRequest } = require('./mfa');

async function test() {
    // Generate a secret
    const secret = generateSecret();

    console.log('Generated secret:', secret);

    // Generate a TOTP
    const token = generateTOTP(secret);

    console.log('Generated token:', token);

    // Verify the TOTP
    const isValid = await verifyTOTP(secret, token);

    console.log('Token verification result:', isValid);

    // Make an HTTP GET request
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
        const response = await makeGetRequest(url);
        console.log('HTTP GET request response:', response);
    } catch (error) {
        console.error('Error making HTTP GET request:', error);
    }
}

test();
