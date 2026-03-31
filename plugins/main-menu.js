const config = require('../config');
const { cmd, commands } = require('../command');
const path = require('path');
const os = require("os");
const fs = require('fs');
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu2",
    alias: ["allmenu", "fullmenu"],
    use: '.menu2',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if commands object exists and is valid
        const totalCommands = commands ? Object.keys(commands).length : 0;
        
        // Get uptime safely
        let uptime = "0h 0m 0s";
        try {
            uptime = runtime(process.uptime());
        } catch (err) {
            console.log("Uptime error:", err);
        }
        
        // Get memory usage safely
        let ramUsed = "0";
        let totalRam = "0";
        try {
            ramUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
            totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
        } catch (err) {
            console.log("Memory error:", err);
        }
        
        const platform = os.platform();
        const currentTime = new Date().toLocaleTimeString();
        const currentDate = new Date().toLocaleDateString();
        
        // Custom values
        const botName = "ZAIDI TEXK-MD";
        const ownerName = "ZAIDI TEXK";
        const prefix = config.PREFIX || ".";
        const mode = config.MODE || "public";
        const description = config.DESCRIPTION || "Welcome to ZAIDI TEXK-MD Bot!";
        const menuImageUrl = "https://files.catbox.moe/tguf7z.jpg";
        
        // Define the menu sections with proper structure
        const sections = {
            download: ["facebook", "mediafire", "tiktok", "twitter", "insta", "apk", "img", "tt2", "pins", "apk2", "fb2", "pinterest", "spotify", "play", "play2", "audio", "video", "video2", "ytmp3", "ytmp4", "song", "drama", "gdrive", "ssweb", "aiart", "tiks", "splay", "spotifyplay"],
            group: ["grouplink", "kickall", "kickall2", "kickall3", "add", "remove", "kick", "promote", "demote", "dismiss", "revoke", "setgoodbye", "setwelcome", "delete", "getpic", "ginfo", "disappear on", "disappear off", "disappear 7d,24h", "allreq", "updategname", "updategdesc", "joinrequests", "senddm", "nikal", "mute", "unmute", "lockgc", "unlockgc", "invite", "tag", "hidetag", "tagall", "tagadmins", "autoapprove"],
            reactions: ["bully @tag", "cuddle @tag", "cry @tag", "hug @tag", "awoo @tag", "kiss @tag", "lick @tag", "pat @tag", "smug @tag", "bonk @tag", "yeet @tag", "blush @tag", "smile @tag", "wave @tag", "highfive @tag", "handhold @tag", "nom @tag", "bite @tag", "glom @tag", "slap @tag", "kill @tag", "happy @tag", "wink @tag", "poke @tag", "dance @tag", "cringe @tag"],
            logo: ["neonlight", "profilecard", "blackpink", "dragonball", "3dcomic", "america", "naruto", "sadgirl", "clouds", "futuristic", "3dpaper", "eraser", "sunset", "leaf", "galaxy", "sans", "boom", "hacker", "devilwings", "nigeria", "bulb", "angelwings", "zodiac", "luxury", "paint", "frozen", "castle", "tattoo", "valorant", "bear", "typography", "birthday"],
            owner: ["owner", "menu", "menu2", "vv", "bio", "listcmd", "allmenu", "repo", "block", "unblock", "fullpp", "setpp", "restart", "shutdown", "updatecmd", "alive", "ping", "gjid", "jid", "currency", "country", "fakechat", "iphonechat", "welcomeimg", "ytcomment"],
            fun: ["shapar", "rate", "insult", "hack", "ship", "character", "pickup", "joke", "hrt", "hpy", "syd", "anger", "shy", "kiss", "mon", "confused", "setpp", "hand", "nikal", "hold", "hug", "hifi", "poke", "roseday"],
            convert: ["sticker", "sticker2", "emojimix", "fancy", "take", "tomp3", "tts", "trt", "base64", "unbase64", "binary", "dbinary", "tinyurl", "urldecode", "urlencode", "url", "repeat", "ask", "readmore", "colorize"],
            ai: ["ai", "gpt3", "gpt2", "gptmini", "gpt", "meta", "blackbox", "luma", "dj", "deepseek", "erfan", "gpt4", "bing", "imagine", "imagine2", "copilot", "bard", "felo", "gita"],
            main: ["ping", "ping2", "speed", "live", "alive", "runtime", "uptime", "repo", "owner", "menu", "menu2", "restart"],
            anime: ["fack", "truth", "dare", "dog", "awoo", "garl", "waifu", "neko", "megnumin", "maid", "loli", "animegirl", "animegirl1", "animegirl2", "animegirl3", "animegirl4", "animegirl5", "anime1", "anime2", "anime3", "anime4", "anime5", "animenews", "foxgirl", "naruto"],
            other: ["timenow", "date", "count", "calculate", "countx", "flip", "coinflip", "rcolor", "roll", "fact", "cpp", "rw", "pair", "pair2", "pair3", "fancy", "logo [text]", "define", "news", "movie", "weather", "srepo", "insult", "save", "wikipedia", "gpass", "githubstalk", "yts", "ytv", "watermark", "forward", "forwardall", "forwardgroup", "save"]
        };
        
        // Build the menu string with proper formatting
        let dec = `╔══════════════════╗
║  ${botName}
║  ᴜʟᴛɪᴍᴀᴛᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ
╚══════════════════╝

╔══❰ 🤖 ʙᴏᴛ ɪɴғᴏ ❱════╗
║ 👑 ᴏᴡɴᴇʀ: ${ownerName}
║ 📛 ʙᴏᴛ: ${botName}
║ 🔣 ᴘʀᴇғɪx: [ ${prefix} ]
║ 📳 ᴍᴏᴅᴇ: ${mode}
║ ⏱️ ᴜᴘᴛɪᴍᴇ: ${uptime}
║ 📚 ᴄᴏᴍᴍᴀɴᴅs: ${totalCommands}
╚══════════════════╝

╔════❰ 💻 sʏsᴛᴇᴍ ❱═══╗
║ 🧠 ʀᴀᴍ: ${ramUsed}ᴍʙ / ${totalRam}ɢʙ
║ 🖥️ ᴘʟᴀᴛғᴏʀᴍ: ${platform}
║ 📅 ᴅᴀᴛᴇ: ${currentDate}
║ 🕐 ᴛɪᴍᴇ: ${currentTime}
╚══════════════════╝

╔══❰📥ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ❱══╗
║
${sections.download.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔══❰ 👥 ɢʀᴏᴜᴘ ᴍᴇɴᴜ ❱══╗
║
${sections.group.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔══❰💞ʀᴇᴀᴄᴛɪᴏɴs ᴍᴇɴᴜ❱══╗
║
${sections.reactions.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔══❰ 🎨 ʟᴏɢᴏ ᴍᴇɴᴜ ❱═══╗
║
${sections.logo.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔══❰ 👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ ❱══╗
║
${sections.owner.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔═══❰ 😄 ғᴜɴ ᴍᴇɴᴜ ❱═══╗
║
${sections.fun.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔══❰ 🔄 ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ❱══╗
║
${sections.convert.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔════❰ 🤖 ᴀɪ ᴍᴇɴᴜ ❱═══╗
║
${sections.ai.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔═══❰ 🏠 ᴍᴀɪɴ ᴍᴇɴᴜ❱═══╗
║
${sections.main.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔══❰ 🎎 ᴀɴɪᴍᴇ ᴍᴇɴᴜ ❱══╗
║
${sections.anime.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔══❰ 📌 ᴏᴛʜᴇʀ ᴍᴇɴᴜ ❱══╗
║
${sections.other.map(cmd => `║ ─ ${cmd}`).join('\n')}
║
╚══════════════════╝

╔══❰ ⌨️ ᴢᴀɪᴅɪ ᴛᴇxᴋ-ᴍᴅ❱══╗
║
║ ᴛʏᴘᴇ .ᴍᴇɴᴜ ғᴏʀ ɪɴᴛᴇʀᴀᴄᴛɪᴠᴇ ᴍᴇɴᴜ
║
╚══════════════════╝

> ${description}`;

        // Send the message
        await conn.sendMessage(
            from,
            {
                image: { url: menuImageUrl },
                caption: dec,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363423196146172@newsletter',
                        newsletterName: '𓆩ZAIDI-MD𓆪',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
    } catch (e) {
        console.error('Menu2 Error:', e);
        reply(`❌ Error: ${e.message || e}`);
    }
});