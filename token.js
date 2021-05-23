const prompt = require('prompt');

// pattern: /^[a-zA-Z\s\-]+$/,
// message: 'Name must be only letters, spaces, or dashes',
const schema = {
    properties: {
        Username: {
            type: 'string',
            required: true,
        },
        Password: {
            hidden: true,
            required: true,
        },
    },
};

prompt.message = '';
prompt.delimiter = ' :';

prompt.start();

console.log('Enter username and password:');

prompt.get(schema, (err, result) => {
    // console.log('Username:', result.Username);
    // console.log('Password:', result.Password);
    let base64 = Buffer.from(`${result.Username}:${result.Password}`).toString(
        'base64',
    );
    console.log(base64);
});
