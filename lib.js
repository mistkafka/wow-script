const utils = require('zhenguo-js-lib');

function awaitXSecondP(x) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, x * 1000)
  });
}

const wowKey2Code = {
  "0": 29,
  "1": 18,
  "2": 19,
  "3": 20,
  "4": 21,
  "5": 23,
  "6": 22,
  "7": 26,
  "8": 28,
  "9": 25,
  "S": 1,
  "D": 2,
  "F": 3,
  "H": 4,
  "G": 5,
  "Z": 6,
  "X": 7,
  "C": 8,
  "V": 9,
  "§": 10,
  "B": 11,
  "Q": 12,
  "W": 13,
  "E": 14,
  "R": 15,
  "Y": 16,
  "T": 17,
  "=": 24,
  "-": 27,
  "]": 30,
  "O": 31,
  "U": 32,
  "[": 33,
  "I": 34,
  "P": 35,
  " ": 49,
}


function runAppleScript(script) {
  utils.writeContentToFile('/tmp/wow.scpt', script, { encoding: 'utf8' });
  utils.simpleExec('osascript /tmp/wow.scpt')
}

function activityWow() {
  const script = 'tell application "World of Warcraft Classic" to activate';
  runAppleScript(script)
}

function sendKeyboardEvent(key) {
  const keyCode = wowKey2Code[key];
  if (!keyCode) {
    throw new Error(`Dont know key: '${key}'`)
  }
  const script = `
tell application "System Events"
	key code ${keyCode}
end tell
  `
  runAppleScript(script)
}

async function pressKeyXSecond(key, second=1) {
  const keyCode = wowKey2Code[key];
  if (!keyCode) {
    throw new Error(`Dont know key: '${key}'`)
  }
  const downScript = `
tell application "System Events"
	key down ${keyCode}
end tell
  `
  const upScript = `
tell application "System Events"
	key up ${keyCode}
end tell
  `
  runAppleScript(downScript);
  await awaitXSecondP(second);
  runAppleScript(upScript);
}


module.exports = {
  activityWow,
  sendKeyboardEvent,
  awaitXSecondP,
  pressKeyXSecond,
  runAppleScript,
}