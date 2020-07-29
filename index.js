// function buttonGetStart() {
//   let name = document.getElementById("NamePlaceholder").value;
//   let email = document.getElementById("emailPlaceholder").value;
//   let HelloField = document.getElementsByClassName("formWrapper");
//   HelloField[0].setAttribute(
//     "style",
//     "font-size: 26px; outline: none; margin: 5px;font-family: 'Notable', sans-serif; color: rgb(255, 255, 255); height: 7vh;"
//   );
//   HelloField[0].innerHTML = `Hello ${name}. Ready for more?`;
// }
// document
//   .querySelector(".header-button")
//   .addEventListener("click", buttonGetStart);

// function productRender() {

//   document.querySelector('mac').innerHTML = `
//     <div class='buyForm'>
// <div class='formInputs'>
// <input type='text' placeholder='First name'  class='buyFormInput'/>
// <input type='text' placeholder='Last name'  class='buyFormInput'/>
// <input type='email' placeholder='email'  class='buyFormInput'/>
// <select class='buyFormSelector'>
//   <option>1</option>
//   <option>2</option>
//   <option>3</option>
// </select>
// </div>
// <input type='submit'  class='buyFormInput'/>
//     </div>`;
// }
// let arr = document.querySelectorAll(".macbtn");
// console.log(arr);
// arr.forEach((element) => {
//   element.addEventListener("click", productRender);
// });

const bgImg = document.getElementsByClassName("header");
let counter = 1;
setInterval(() => {
  bgImg[0].setAttribute(
    "style",
    `background: url('./img/bg-img${counter}.jpg') 50% 50% ;background-size: cover; background-repeat: no-repeat; transition: 700ms;`
  );
  counter++;
  if (counter == 5) {
    counter = 1;
  }
}, 10000);

document.getElementsByTagName("body")[0].addEventListener("click", clickFun);

async function clickFun() {
  //  обработчик кнопки гетстарт
  if (event.target.classList.contains("header-button")) {
    let name = document.getElementById("NamePlaceholder").value;
    let email = document.getElementById("emailPlaceholder").value;
    let HelloField = document.getElementsByClassName("formWrapper");
    HelloField[0].setAttribute(
      "style",
      "font-size: 26px; outline: none; margin: 5px;font-family: 'Notable', sans-serif; color: rgb(255, 255, 255); height: 7vh;"
    );
    HelloField[0].innerHTML = `Hello ${name}. Ready for more?`;
    document
      .querySelector(".header-button")
      .setAttribute("style", "display:none");
  }
  // обработчики кнопок товаров
  else if (event.target.classList.contains("commonMacbtn")) {
    document.querySelector(".commonMac").setAttribute("style", "display:none;");
    document.querySelector(".commonMac").classList.add("toOpacity");
    document
      .querySelector(".airMacBuyForm")
      .setAttribute("style", "display:none;");
    if (document.querySelector(".airMac").classList.contains("toOpacity")) {
      document
        .querySelector(".airMac")
        .setAttribute("style", "display:flex; opacity: 30%;");
      setTimeout(() => {
        document
          .querySelector(".airMac")
          .setAttribute("style", "display:flex; opacity: 100%;");
      }, 70);
    }
    document
      .querySelector(".macBuyForm")
      .setAttribute("style", "display:flex; opacity: 30%;");
    setTimeout(() => {
      document
        .querySelector(".macBuyForm")
        .setAttribute("style", "display:flex; opacity: 100%;");
    }, 70);
    document.querySelector(".macBuyForm").innerHTML = `
  <div class='buyForm'>
<div class='formInputs'>
<input type='text' placeholder='First name'  class='buyFormInput'/>
<input type='text' placeholder='Last name'  class='buyFormInput'/>
<input type='email' placeholder='email'  class='buyFormInput'/>
<select class='buyFormInput commonMacSelect'>
<option>BLACK</option>
<option>WHITE</option>
<option>RED</option>
</select>
<input type='submit'  class='buyFormInput'/>
</div>
<div class='commonMacBuyImg'></div>
  </div>`;
  } else if (event.target.classList.contains("airMacbtn")) {
    document.querySelector(".airMac").setAttribute("style", "display:none;");
    document.querySelector(".airMac").classList.add("toOpacity");
    document
      .querySelector(".airMacBuyForm")
      .setAttribute("style", "display:flex; opacity: 30%;");
    document
      .querySelector(".macBuyForm")
      .setAttribute("style", "display:none;");
    document.querySelector(".airMacBuyForm").innerHTML = `
    <div class='buyForm'>
    <div class='airMacBuyImg'></div>
    <div class='formInputs'>
    <input type='text' placeholder='First name' class='buyFormInput'/>
    <input type='text' placeholder='Last name' class='buyFormInput'/>
    <input type='email' placeholder='email' class='buyFormInput'/>
    <select class='buyFormInput airMacSelect'>
    <option>BLACK</option>
    <option>RED</option>
    <option>WHITE</option>
    </select>
    <input type='submit' class='buyFormInput'/>
    </div>
    </div>`;
    setTimeout(() => {
      document
        .querySelector(".airMacBuyForm")
        .setAttribute("style", "display:flex; opacity: 100%;");
    }, 70);
    if (document.querySelector(".commonMac").classList.contains("toOpacity")) {
      document
        .querySelector(".commonMac")
        .setAttribute("style", "display:flex; opacity: 30%;");
      setTimeout(() => {
        document
          .querySelector(".commonMac")
          .setAttribute("style", "display:flex; opacity: 100%;");
      }, 70);
    }
    // обработчик кнопок айфона
  } else if (event.target.classList.contains("iseBtn")) {
    let prom = new Promise((resolve, reject) => {
      let selector = document.querySelector(".iseImg");
      resolve(selector.setAttribute("style", "transform: translate(-37vw,0);"));
      let atherSlector = document.querySelector(".iseText");
      atherSlector.setAttribute("style", "transform: translate(37vw,0);");
    });
    prom.then(() => {
      document.querySelector(".iseText").innerHTML = `
      <div class='formInputs'>
      <input type='text' placeholder='First name'  class='buyFormInput'/>
      <input type='text' placeholder='Last name'  class='buyFormInput'/>
      <input type='email' placeholder='email'  class='buyFormInput'/>
      <input type='submit'  class='buyFormInput'/>`;
    });
  } else if (event.target.classList.contains("i11Btn")) {
    document
      .querySelector(".i11Img")
      .setAttribute("style", "transform: translate(37vw,0);");
    document
      .querySelector(".i11Text")
      .setAttribute("style", "transform: translate(-37vw,0);");
    document.querySelector(".i11Text").innerHTML = `
      <div class='formInputs'>
      <input type='text' placeholder='First name'  class='buyFormInput'/>
      <input type='text' placeholder='Last name'  class='buyFormInput'/>
      <input type='email' placeholder='email'  class='buyFormInput'/>
      <input type='submit'  class='buyFormInput'/>`;
  } else if (event.target.classList.contains("iProBtn")) {
    document
      .querySelector(".iProImg")
      .setAttribute("style", "transform: translate(-37vw,0);");
    document
      .querySelector(".iProText")
      .setAttribute("style", "transform: translate(37vw,0);");
    document.querySelector(".iProText").innerHTML = `
      <div class='formInputs'>
      <input type='text' placeholder='First name'  class='buyFormInput'/>
      <input type='text' placeholder='Last name'  class='buyFormInput'/>
      <input type='email' placeholder='email'  class='buyFormInput'/>
      <input type='submit'  class='buyFormInput'/>`;
  }

  // обработчик селектора цвета товара мак
  else if (event.target.classList.contains("commonMacSelect")) {
    if (document.querySelector(".commonMacSelect").value == "BLACK") {
      document
        .querySelector(".commonMacBuyImg")
        .setAttribute(
          "style",
          'background: url("./colorImg/blackCommonMac.jpg") 50% 50%;  background-size: cover; background-repeat: no-repeat;'
        );
    }
    if (document.querySelector(".commonMacSelect").value == "WHITE") {
      document
        .querySelector(".commonMacBuyImg")
        .setAttribute(
          "style",
          'background: url("./colorImg/whiteCommonMac.jpg") 50% 50%; background-size: cover; background-repeat: no-repeat;'
        );
    }
    if (document.querySelector(".commonMacSelect").value == "RED") {
      document
        .querySelector(".commonMacBuyImg")
        .setAttribute(
          "style",
          'background: url("./colorImg/redCommonMac.jpg") 50% 50%; background-size: cover; background-repeat: no-repeat;'
        );
    }
    // обработчик цвета аирмак
  } else if (event.target.classList.contains("airMacSelect")) {
    if (document.querySelector(".airMacSelect").value == "BLACK") {
      document
        .querySelector(".airMacBuyImg")
        .setAttribute(
          "style",
          'background: url("./colorImg/blackAirMac.jpg") 50% 50%; background-size: cover; background-repeat: no-repeat;'
        );
    }
    if (document.querySelector(".airMacSelect").value == "WHITE") {
      document
        .querySelector(".airMacBuyImg")
        .setAttribute(
          "style",
          'background: url("./colorImg/whiteAirMac.jpg") 50% 50%; background-size: cover; background-repeat: no-repeat;'
        );
    }
    if (document.querySelector(".airMacSelect").value == "RED") {
      document
        .querySelector(".airMacBuyImg")
        .setAttribute(
          "style",
          'background: url("./colorImg/redAirMac.jpg") 50% 50%; background-size: cover; background-repeat: no-repeat;'
        );
    }
  }
}
