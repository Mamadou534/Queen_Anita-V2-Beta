//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/BgEnsOb";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "221761551591";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/r1t7ikB";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhjTHozc2xmS0l1KzhEbkZpUUpHR3VJUUxqNzlqSHZObFBURlpNVDlVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGpTQVVzdTRwcjhhMEd0Q29vMDdQY1g4SkZSQWVqNG5Fb09SRUt2a2VRTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTEUrbm9LakZQcGFXL0RNR1J6bUdrd3dMTWIwVW1wMlN4UXZEcm1mMFdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3OGtMYmUrSkN2YlRwSG5WZTFFUm5uWGFyYXlNK2ZQem1CSFo3RnpMWFQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIa0RsNEsrRE45YmJsdllsYVBEdnJWNVlrbEFvR2UrSElHN1hiMWJ6VzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldRRnZCT1pyUEEvTndGNjM2bUdCZHVJYUI1N1R5bFF1SHY4THF2cVlyd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU41VnkzTGNXbVlxY2pCSkVFdzdWZkc4c21aV0FuNVpJb25Lc2Y3dEJVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDBsM25YMWtuOHdMTVY1cTY3S1I1eWFVNjh3RjRWUVVDMm8vNDgzbzBrOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYwKzgzMURoMGpqWElLSWVlV1gwd0NDOXN2NG5yMTh2cnBoamJiQVJrZ3RpMlp0aXNOL2dPWWlES3JFcmZtQ0hWRDQrY2ZBTzZ4QWpuVklnRkpRZkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJyQVVURThLWlVzMy82MEZQTlhhVk83bkJmbVBDN2VZMVIybUVtNmVUeC84PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIWGVXM251dlN6T29vbVFGTF9uYm9nIiwicGhvbmVJZCI6IjkyYTc5NGExLWJkNzMtNGYyNy04YjU0LWI1YzgzNjEyMjk0ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVWdUUlY5eWVqc0JIKzE1SXVuY3R6ZmVoNnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2FxVGtXYVk2UnQya0JHb04xbGJBQ05Zd3NBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpMOFFYU0E0IiwibWUiOnsiaWQiOiIyMjE3NjE1NTE1OTE6ODVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QjPCdkJrwnZCm8J2QmvCdkJ3wnZCo8J2QriJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkhuNmRnSUVKbVptTGtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR1habWVBemtvM1R6dEdmM0xPWG9rVWU2aDU0RHJWOU56L2N0V3BOZHRGZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWFY3bHo0ZEVkTnJiRisxckZVWklQNVNaNG81MVBTcXREWGY5b0EvUSs4c2diZzd4MytCbVVQd3A2SDVQUWNxSFFVcFlvYkd3NDd4S2lPSVVWSUJhQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlArckNNWTdCVUIrVnJyQU5rN2J5QVlOYy94dHdORmFKdjhKdXk1bjZjNDR0RUR1MXZFKys5U1hxa0FTUEY2R0pDVTlMSGNjaVF5OVNNNkIxQnRRREFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzYxNTUxNTkxOjg1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJsMlpuZ001S04wODdSbjl5emw2SkZIdW9lZUE2MWZUYy8zTFZxVFhiUlkifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDU0Njg1NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMcG8ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "KANEKI_KEN",
  ownername: process.env.OWNER_NAME || "MAMADOU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
