//add a correct number for month:
let date = new Date();
let monthNumber = new Date().getMonth();
let month =
  monthNumber === 0
    ? "01"
    : monthNumber === 1
      ? "02"
      : monthNumber === 2
        ? "03"
        : monthNumber === 3
          ? "04"
          : monthNumber === 4
            ? "05"
            : monthNumber === 5
              ? "06"
              : monthNumber === 6
                ? "07"
                : monthNumber === 7
                  ? "08"
                  : monthNumber === 8
                    ? "09"
                    : monthNumber === 9
                      ? "10"
                      : monthNumber === 10
                        ? "11"
                        : monthNumber === 11
                          ? "12"
                          : "Неизвестный месяц";

//add a date in comments:
let today =
  new Date().getFullYear() +
  "/" +
  month +
  "/" +
  new Date().getDay() +
  " " +
  new Date().getHours() +
  ":" +
  new Date().getMinutes();

document.querySelector("#button").addEventListener("click", () => {
  //nickname upload
  let nameData = document.querySelector("#name").value;
  let nameDataFirstLetter = nameData.slice(0, 1).toUpperCase();
  let nameDataOtherLetters = nameData.slice(1).toLowerCase();
  let fullNameData = nameDataFirstLetter + nameDataOtherLetters;
  document.querySelector("#nick").innerHTML = fullNameData;

  //message upload + date
  let message = document.querySelector("#message").value;
  document.querySelector("#chatMessage").innerHTML += "Последний комментарий:" + " " + today
    + " " + message.replace(
      /viagra/i,
      "*ups!*");

  //avatar upload 
  let picture = document.querySelector("#picture");
  document.querySelector("#avatar").src = picture.value;

  //date upload under avatar
  document.getElementById("nickMessage").innerHTML =
    "Последнее изменение аватара :" + " " + today;

});

//check-box 
const checkbox = document.getElementById('yes');
if (checkbox.checked) {
  ;
}
else {
}

// let user;
//alert(user ?? "Аноним"); // Аноним (user не существует)

