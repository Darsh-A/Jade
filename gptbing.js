import { BingAIClient } from '@waylaidwanderer/chatgpt-api';
async function bingResponse(prompt) {
    const options = {
        // Necessary for some people in different countries, e.g. China (https://cn.bing.com)
        host: '',
        // "_U" cookie from bing.com
        userToken: "",
        // If the above doesn't work, provide all your cookies as a string instead
        cookies: '',
        // A proxy string like "http://<ip>:<port>"
        proxy: '',
        // (Optional) Set to true to enable `console.debug()` logging
        debug: false,
    };

    let bingAIClient = new BingAIClient(options);

    let response = await bingAIClient.sendMessage(prompt, {
        // (Optional) Set a conversation style for this message (default: 'balanced')
        toneStyle: 'balanced', // or creative, precise, fast
        // onProgress: (token) => {
        //     process.stdout.write(token);
        // },
    });
    console.log(response.details.text);
    return response.details.text;
}

// Check if a prompt argument is provided
if (process.argv.length < 3) {
    console.error('Usage: node bing_response.js <prompt>');
    process.exit(1);
}

const myPrompt = process.argv.slice(2).join(' ');

// Call the async function to execute the script
bingResponse(myPrompt)
    .then(() => {
    })
    .catch((error) => {
        console.error('Error:', error);
    });


// // Get the command line arguments and parse it to json
// var data = JSON.parse(process.argv[2]);

// // Get the required field form the data.
// promptR = data['prompt'];

// // Calculate the result.
// var res = await bingResponse(promptR);

// // Print the data in stringified json format so that we can easily parse it in Python
// const newData = { res }
// console.log(JSON.stringify(newData));