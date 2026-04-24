const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZAIDI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUE3Q3loRjJ5NmJ3b1ZVekl2enVJdEo2cFZ3SVpDckVISzlQRXI2Nm9YRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01NMmF5SHFkSFBvZlJNM2QrTVdoU2psUW5KNk0vQkNEWDVXN1E1dUExZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUFg4OG9aZzJEWTNldTRNN3dNdE1XSGZQeG5oOVlzaFJ1a0prbEQ0OVhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRHpPSS9DekpQb1B3aGNGNlZaYWoxN1JXU0ZGTk5GVG1qMEFUL3ExNm5VPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1EWm5KN3Z2dlpxazN3Q29aaWpWOEJGb3QxMGxpckhmVnc5cTk5YmFCRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFkdER6eTdTdWdwT21mNWdUakp3SVVZL2tGOEdOaTRxeEdJWUxIN1JGMjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1VOW9jS2x1alF6dEVwbmpPZ094bWZkU3RhOGhkdlBlZU92YThkczhYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFNSZlE2NWRJY2RXcENnNGR1Uzk3VnVNS011UHRKaG5tTUloejgzUlpoVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml1SFY2bjNoMXFyYlFyNHNna3BzQ1VzMWloYXZnby95Yk00em1JQU03cnB6WnpzeUxvaVdwZlM0YWRSMDV5UG9XR0l0aHdCNFRuTUVSeEpsaDZKZUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJXVDhheGRoeVU0eTdBVHkzSEY5Z1NyWVVXVGI5QVBBSWxXOGtERmlpSWlnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik1GNUxYQVlaIiwibWUiOnsiaWQiOiI5MjMzMDgxNDcxMDQ6MjBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5NjQxNDExMzc3OTg3NToyMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01mZjRlRUJFTWZGcE04R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVYejJKalZvRTVzNGU1V1pBVmY3U0RwYUtOQkdTT1dTaWNRVmhpRldybDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZvZXQ5SGNmUkorMGJDYlZSSmJhNjZ1NGNzcHJhZEpabWNQUWJSNERjWWdUaGd2VjluaUU3THBmdDB1TkI2K2JYbUZXS1pzMFpvdU1VMmt6ckl3M0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNb1hiaHUzYkFEZXd4RURUOFBtYzlMdllseHJCZXJneWxTQ0cweXR6OEFqaTluQ2VQeWU5a3VhamtVUmRXbUZidU9qSnU0SkE5Mm9rVWwwTDVXUWVEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk2NDE0MTEzNzc5ODc1OjIwQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYbDg5aVkxYUJPYk9IdVZtUUZYKzBnNldpalFSa2psa29uRUZZWWhWcTVlIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXNJQ0FnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzY4ODY1MDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTS85In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝚂𝙴𝙴𝙽 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 𝙱𝚈 ᴢᴀɪᴅɪ-ᴛᴇxᴛ 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ba1k10.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ZAIDI-TEXK",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ZAIDI-TEXK",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923315462969",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𓆩𝐙𝐀𝐈𝐃𝐈-𝐌𝐃𓆪",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀɪᴅɪ-ɴᴅ ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/ba1k10.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝚉𝙸𝙽𝙳𝙰 𝙷𝚄𝙽 𝚈𝙰𝚁 🤖",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923315462969",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
