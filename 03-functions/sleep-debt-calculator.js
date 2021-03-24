const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 10;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 6;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

console.log(getSleepHours("monday"));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " more hours of sleep!"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You should get some rest as you slept " +
        (idealSleepHours - actualSleepHours) +
        " hours less than you should have"
    );
  } else {
    console.log("error something went wrong, check code");
  }
};

calculateSleepDebt();
