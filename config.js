import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.SESSION_ID = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"aNTOZaRDP+SBuPXTLg1+wpXleorJucSC2hIPgIw1j2Q="},"public":{"type":"Buffer","data":"Tm8FGBVAlP8z9dfUR+pijqjsFtaYuAi8qKXIvr3srR4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"aBTn84U2woqY6qNXDuWMer+BCdeFYsFpCW+1nMxiwVw="},"public":{"type":"Buffer","data":"/3wwZEtI7Iq6lf39nUoIhKzrmVsx8o98c4VPW/KkWAE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mOlHJ7OtCXpfCjNtV+eHVlVbgZCPwZaAqXV3LWomx0k="},"public":{"type":"Buffer","data":"eUqZMiRQCafv3haQpeobaSD87+suAgYWl92wK65dWEc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"cHmCiZ5WlGu7aKfJuoELqOWVtmsQ+3xl//RDkjDtwWU="},"public":{"type":"Buffer","data":"3OkUFbXK0RA8vADhlc0UD2NL39aQ4yxyzdHB4yGGmj4="}},"signature":{"type":"Buffer","data":"RDWbkE1gGyfP6aH2wGRcprQR+3xGqmdZS2EHpDAtmK/Q7ESvlSmflqXq2wsDc5ZVhxMyogSYn88GNOJP9GILAw=="},"keyId":1},"registrationId":248,"advSecretKey":"8jaVKGW6z6GKI/8oZTUxn5WGwJltOORt3EhcFyjYYpA=","processedHistoryMessages":[{"key":{"remoteJid":"967737659027@s.whatsapp.net","fromMe":true,"id":"55B294A5EF54325407CBD3A83E2456D0"},"messageTimestamp":1718013898},{"key":{"remoteJid":"967737659027@s.whatsapp.net","fromMe":true,"id":"5A6B5C8212838B9F73FAB7CB9D1EBAC8"},"messageTimestamp":1718013898},{"key":{"remoteJid":"967737659027@s.whatsapp.net","fromMe":true,"id":"EAE8B59E4CA8F6E29C5A4D1AAC07F01B"},"messageTimestamp":1718013907},{"key":{"remoteJid":"967737659027@s.whatsapp.net","fromMe":true,"id":"809B6238835C2C1C88EEE28CE8EC238F"},"messageTimestamp":1718013909}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"3QAKMOeyTW-LzczSfMTQbg","phoneId":"59fe899d-0f1d-40d3-b4f1-c6bb626805b3","identityId":{"type":"Buffer","data":"UD8scuw7QOASsEHkanTg1+SGW3I="},"registered":true,"backupToken":{"type":"Buffer","data":"Rjhd456QArNoPhm7opYmV9oroBg="},"registration":{},"pairingCode":"XK3FEG74","me":{"id":"967737659027:3@s.whatsapp.net","name":"."},"account":{"details":"CLHf4P4FEMWfm7MGGAggACgA","accountSignatureKey":"RLvnGpwpwbfxtVwRHtVBH+Zg0zm0EEQi0esIFCiAlQM=","accountSignature":"LzWz2/2uRT3neJ/cYlQQRF9CvkL19/3St2FOpythr7PViIFRwCWH6Bv9ZBcQ91L47k4y7wr13giLZWKAXiCKCw==","deviceSignature":"zlxCl+A0cIdDpE7dO/j9OhtFGztEeWMCiCRORfCCiNgYEGBei8dxJdJOOECsXSwXFu5ovJsDsD28dIhkNJWsAA=="},"signalIdentities":[{"identifier":{"name":"967737659027:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUS75xqcKcG38bVcER7VQR/mYNM5tBBEItHrCBQogJUD"}}],"platform":"android","lastAccountSyncTimestamp":1718013896,"myAppStateKeyId":"AAAAAEYc"}"

global.botnumber = ""
global.confirmCode = ""

global.owner = [
  ['201144480436', '👑 Mystic - Creador 👑', true],
  ['201201609786', '💫 Mystic - Collaborator 2 💫', true],
  ['201225016578']
];

global.suittag = ['201144480436'];
global.prems = ['201201609786'];

global.packname = 'Sticker';
global.author = 'The لسه مقررتشش - Bot';
global.wm = 'The لسه مقررتش - Bot';
global.titulowm = 'The Mystic - Bot';
global.titulowm2 = `The Mystic - Bot`
global.igfg = 'The Mystic - Bot';
global.wait = '*[ ⏳ ] Cargando...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./src/menu_pt.png');
global.imagen8 = fs.readFileSync('./src/menu_fr.png')
global.imagen9 = fs.readFileSync('./src/menu_en.png')
global.imagen10 = fs.readFileSync('./src/menu_ru.png')

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nThe Mystic - Bot`;
global.gt = 'The Mystic - Bot';
global.mysticbot = 'The Mystic - Bot';
global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';
global.mysticbot = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';
global.waitt = '*[ ⏳ ] Cargando...*';
global.waittt = '*[ ⏳ ] Cargando...*';
global.waitttt = '*[ ⏳ ] Cargando...*';
global.nomorown = '5219993404349';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
