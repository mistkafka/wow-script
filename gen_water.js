const wowUtils = require('./lib');
const robot = require("robotjs");

async function run() {
  wowUtils.activityWow();
  await wowUtils.awaitXSecondP(1);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 6; j++) {
      genWater();
      await wowUtils.awaitXSecondP(3);
    }
    drinkWather();
    await wowUtils.awaitXSecondP(30);
    wowUtils.sendKeyboardEvent(' ')
    await wowUtils.awaitXSecondP(1);
  }
}

function genWater() {
  wowUtils.sendKeyboardEvent('1')
}

function drinkWather() {
  wowUtils.sendKeyboardEvent('2')
}

//(async function () {
//  await wowUtils.awaitXSecondP(3);
//  const currPos = robot.getMousePos();
//  robot.mouseToggle("down", "right");
//  robot.dragMouse(currPos.x + 50, currPos.y);
//  robot.mouseToggle("up", "right");
//})();

run();
