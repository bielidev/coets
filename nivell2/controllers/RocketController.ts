let rockets: Rocket[] = [];

function addRockets(event: any): void {
  rockets.push(new Rocket('32WESSDS', [10, 30, 80]));
  rockets.push(new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]));

  event.target.disabled = true;

  activateRocket('rocket1', 'Rocket1');
  activateRocket('rocket2', 'Rocket2');
}

function activateRocket(classname: string, id: string) {
  const rocket1Buttons = document.getElementsByClassName(classname);

  for (let i = 0; i < rocket1Buttons.length; i++) {
    rocket1Buttons[i].removeAttribute('disabled');
  }

  const rocket = document.getElementById(id);

  rocket?.removeAttribute('hidden');
  rocket?.classList.add('goDown');
}

function printRocket(rocket: Rocket): void {
  const root = document.getElementById('rockets');
  if (root) {
    const child = document.createElement('div');
    const content = document.createTextNode(rocket.getPrintData());
    child.appendChild(content);
    root.appendChild(child);
  }
}

function throttleRocket(index: number) {
  if (index >= 0 && index < rockets.length) {
    const rocketImp = rockets[index];
    rocketImp.throttle();

    calculateAnimation(index, rocketImp);
  }
}

function brakeRocket(index: number) {
  if (index >= 0 && index < rockets.length) {
    const rocketImp = rockets[index];
    rocketImp.brake();

    calculateAnimation(index, rocketImp);
  }
}

function calculateAnimation(index: number, rocketImp: Rocket) {
  const rocket = document.getElementById(`Rocket${index + 1}`);
  rocket?.classList.remove('goDown');
  rocket?.classList.remove('goUp');

  if (rocketImp.currentPower > 0) {
    rocket?.classList.add('goUp');
  } else {
    rocket?.classList.add('goDown');
  }
}

function printRocketInfo(index?: number): void {
  if (index !== undefined) {
    if (index >= 0 && index < rockets.length) {
      printRocket(rockets[index]);
    }
  } else {
    rockets.forEach((rocket) => printRocket(rocket));
  }
}
