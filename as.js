const wowUtils = require('./lib');
const robot = require("robotjs");

async function run() {
  wowUtils.activityWow();
  await wowUtils.awaitXSecondP(1);

  for (let i = 0; i < 10000000000000; i++) {
	  await atte();
	  await pick();
	  drinkWather();
	  await wowUtils.awaitXSecondP(5);
	  wowUtils.sendKeyboardEvent(' ')
  }
}

function genWater() {
  wowUtils.sendKeyboardEvent('1')
}

function drinkWather() {
  wowUtils.sendKeyboardEvent('2')
}

async function atte() {
	for (let j = 0; j < 3; j++) {
		genWater();
		robot.mouseClick('right');
		await wowUtils.awaitXSecondP(1.5);
	}
}

async function pick() {
	for (let j = 0; j < 4; j++) {
		robot.mouseClick('right');
		await wowUtils.awaitXSecondP(1.1);
	}
}

//(async function () {
//  await wowUtils.awaitXSecondP(3);
//  const currPos = robot.getMousePos();
//  robot.mouseToggle("down", "right");
//  robot.dragMouse(currPos.x + 50, currPos.y);
//  robot.mouseToggle("up", "right");
//})();

run();
