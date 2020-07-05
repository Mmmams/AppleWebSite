const bgImg = document.getElementsByClassName("header");
let counter = 1;
setInterval(() => {
  console.log(bgImg);
  bgImg[0].setAttribute(
    "style",
    `background: url('./img/bg-img${counter}.jpg') 50% 50% ;background-size: cover; background-repeat: no-repeat; transition: 700ms;`
  );
  counter++;
  if (counter == 5) {
    counter = 1;
  }
}, 10000);

function buttonGetStart() {
  let name = document.getElementById("NamePlaceholder").value;
  let email = document.getElementById("emailPlaceholder").value;
  let HelloField = document.getElementsByClassName("formWrapper");
  HelloField[0].setAttribute(
    "style",
    "font-size: 26px; outline: none; margin: 5px;font-family: 'Notable', sans-serif; color: rgb(255, 255, 255); height: 7vh;"
  );
  HelloField[0].innerHTML = `Hello ${name}. Ready for more?`;
}
document
  .querySelector(".header-button")
  .addEventListener("click", buttonGetStart);

function productRender() {
  this.innerHTML = `
    <div class='buyForm'>
<div class='formInputs'>
<input type='text' placeholder='First name'  class='buyFormInput'/>
<input type='text' placeholder='Last name'  class='buyFormInput'/>
<input type='email' placeholder='email'  class='buyFormInput'/>
<select class='buyFormSelector'>
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>
</div>
<input type='submit'  class='buyFormInput'/>
    </div>`;
}
let arr = document.querySelectorAll(".mac");
console.log(arr);
arr.forEach((element) => {
  element.addEventListener("click", productRender);
});
