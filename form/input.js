let form = document.querySelector("form");
// let height = parseInt(document.querySelector("#height").value);
// this use case gives the empty value

// form.addEventListener('click',(e)=> (e.preventDefault()))//this can also possible
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //in this case the value of the input box in the form of string
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    const br = document.createElement("br");
    result.innerHTML = `please give valid height ${height}`;
    result.prepend(br);
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    const br = document.createElement("br");
    result.innerHTML = `please give valid weight ${weight}`;
    result.prepend(br);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //to fixed is a builtin function which returns only 2 decimal value like 4.555 then it returns 4.55
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
        result.innerHTML = `<span>${bmi} - Underweight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `<span>${bmi} - Normal range</span>`;
    } else { // bmi > 24.9
        result.innerHTML = `<span>${bmi} - Overweight</span>`;
    }
 }
});
