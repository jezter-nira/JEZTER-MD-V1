const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
};
ALIVE_IMG: process.env.ALIVE_IMG || "https://pin.it/1rVorQgLF",
ALIVE_MS: process.env.ALIVE_MSG || "Hello I'm Alive Now jezter xmd bot Alive now make by jezter",

