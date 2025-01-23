const F = prompt("Enter Farenhheit");
const Answer = describeTemperature(F);
alert(Answer);

function convertToCelsius(F) {
  return (F - 32) * (5 / 9);
}
function describeTemperature(F) {
  const C = convertToCelsius(F);
  let Answer = "";

  if (C < 0) {
    Answer = "very cold";
  } else if (C < 20) {
    Answer = "cold";
  } else if (C < 30) {
    Answer = "warm";
  } else if (C < 40) {
    Answer = "Hot ";
  } else if (C >= 40) {
    Answer = "very hot";
  } else {
    Answer = "You must enter Number!";
  }

  return `${F}F In ${C}C Is ${Answer}.`;
}
