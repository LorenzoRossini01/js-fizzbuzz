const rowContainer = document.getElementById("row-container");
let boxText;

for (let i = 1; i <= 30; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    boxText = "FizzBuzz";
  } else if (i % 5 == 0) {
    boxText = "Buzz";
  } else if (i % 3 == 0) {
    boxText = "Fizz";
  } else {
    boxText = i;
  }
  console.log(boxText);
}
