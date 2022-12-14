const selectionsButton = document.getElementsByTagName("li");
var buttonsSelects = [...selectionsButton];
const submit = document.getElementById("btnSubmit");
var cardRate = document.getElementsByClassName("container__firstState");
var cardFinal = document.getElementsByClassName("container__secondState");

let starValue = 0;

buttonsSelects.forEach((button) => {
  button.addEventListener("click", () => {
    removeActiveClasses();
    button.classList.add("active");

    starValue = button.innerHTML;
  });
});

function removeActiveClasses() {
  buttonsSelects.forEach((button) => {
    button.classList.remove("active");
  });
}

submit.addEventListener("click", (e) => {
  cardRate[0].style.display = "none";
  cardFinal[0].style.display = "flex";
  document.querySelector("#valueRate").innerHTML = starValue;
});
