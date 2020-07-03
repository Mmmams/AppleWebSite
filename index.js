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

function productRender() {
  let field = document.getElementsByClassName('mac');
  field.target.setAttribute("style", "background-color: rgb(0,0,0);");
}


