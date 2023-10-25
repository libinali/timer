const alarmTime = process.argv.slice(2);
alarmTime.sort((a, b) => (a - b));

if (alarmTime.length === 0) {
  return;
}

for (let timer of alarmTime) {
  timer = parseFloat(timer);

  if (timer <= 0 || isNaN(timer)) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\u0007');
  }, timer * 1000);
}
