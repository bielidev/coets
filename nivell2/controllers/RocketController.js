"use strict";
var rockets = [];
function addRockets(event) {
    rockets.push(new Rocket('32WESSDS', [10, 30, 80]));
    rockets.push(new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]));
    event.target.disabled = true;
    activateRocket('rocket1', 'Rocket1');
    activateRocket('rocket2', 'Rocket2');
}
function activateRocket(classname, id) {
    var rocket1Buttons = document.getElementsByClassName(classname);
    for (var i = 0; i < rocket1Buttons.length; i++) {
        rocket1Buttons[i].removeAttribute('disabled');
    }
    var rocket = document.getElementById(id);
    rocket === null || rocket === void 0 ? void 0 : rocket.removeAttribute('hidden');
    rocket === null || rocket === void 0 ? void 0 : rocket.classList.add('goDown');
}
function printRocket(rocket) {
    var root = document.getElementById('rockets');
    if (root) {
        var child = document.createElement('div');
        var content = document.createTextNode(rocket.getPrintData());
        child.appendChild(content);
        root.appendChild(child);
    }
}
function throttleRocket(index) {
    if (index >= 0 && index < rockets.length) {
        var rocketImp = rockets[index];
        rocketImp.throttle();
        calculateAnimation(index, rocketImp);
    }
}
function brakeRocket(index) {
    if (index >= 0 && index < rockets.length) {
        var rocketImp = rockets[index];
        rocketImp.brake();
        calculateAnimation(index, rocketImp);
    }
}
function calculateAnimation(index, rocketImp) {
    var rocket = document.getElementById("Rocket" + (index + 1));
    rocket === null || rocket === void 0 ? void 0 : rocket.classList.remove('goDown');
    rocket === null || rocket === void 0 ? void 0 : rocket.classList.remove('goUp');
    if (rocketImp.currentPower > 0) {
        rocket === null || rocket === void 0 ? void 0 : rocket.classList.add('goUp');
    }
    else {
        rocket === null || rocket === void 0 ? void 0 : rocket.classList.add('goDown');
    }
}
function printRocketInfo(index) {
    if (index !== undefined) {
        if (index >= 0 && index < rockets.length) {
            printRocket(rockets[index]);
        }
    }
    else {
        rockets.forEach(function (rocket) { return printRocket(rocket); });
    }
}
