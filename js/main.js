const rowContainer = document.getElementById("row-container");
let boxText;
let colorCard;

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    boxText = "FizzBuzz";
    colorCard = "bg-success";
  } else if (i % 5 == 0) {
    boxText = "Buzz";
    colorCard = "bg-danger";
  } else if (i % 3 == 0) {
    boxText = "Fizz";
    colorCard = "bg-warning";
  } else {
    boxText = i;
    colorCard = "bg-primary";
  }
  rowContainer.innerHTML += `
          <div class="box m-2 ${colorCard} ">
            <h4 class="text-center text-white">${boxText}</h4>
          </div>
  `;
  console.log(boxText);
}
