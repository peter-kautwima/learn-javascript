let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnerAge = 18;
if (runnerAge > 18 && earlyReg) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyReg) {
  console.log(`Your race starts at 9:30 and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && !earlyReg) {
  console.log(`Adult ${raceNumber} your race starts at 11:00am`);
} else if (runnerAge < 18) {
  console.log(`Your race start at 12:30 pm, race number ${raceNumber}`);
} else {
  console.log("Please seek the registration desk");
}
