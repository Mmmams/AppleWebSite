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

class Order {
  static toOrder(value) {
    return fetch("https://applewebsite-b8de1.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }
}

async function clickFun() {
  //  обработчик кнопки sing in
  if (event.target.classList.contains("header-button")) {
    if (
      document.getElementById("NamePlaceholder").value != "" &&
      document.getElementById("passPlaceholder").value != ""
    ) {
      let name = document.getElementById("NamePlaceholder").value;
      let password = document.getElementById("passPlaceholder").value;
      let HelloField = document.querySelector(".formWrapper");
      HelloField.innerHTML = ``;
      HelloField.setAttribute("style", "height: 7vh;");
      document
        .querySelector(".header-button")
        .setAttribute("style", "visibility:hidden");
      document.querySelector(".accName").innerHTML = `acc: ${name}`;
      document.querySelector(
        ".exit"
      ).innerHTML = `<button class='exitBtn'>Exit</button>`;
    } else {
      alert("The name field or the email field are empty.");
    }
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
          .setAttribute("style", "display:flex; opacity: 70%;");
      }, 40);
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
        .setAttribute("style", "display:flex; opacity: 70%;");
    }, 40);
    setTimeout(() => {
      document
        .querySelector(".macBuyForm")
        .setAttribute("style", "display:flex; opacity: 100%;");
    }, 70);
    document.querySelector(".macBuyForm").innerHTML = `
  <div class='buyForm'>
<div class='formInputs'>
<div class="mactitle commonMacTitle">MacBook <span class='pro'>Pro</span></div>
<input type='text' placeholder='First name'  class='buyFormInput' id='commonMacFname'/>
<input type='text' placeholder='Last name'  class='buyFormInput' id='commonMacLname'/>
<input type='email' placeholder='email'  class='buyFormInput' id='commonMacEmail'/>
<select class='buyFormInput commonMacSelect'>
<option>BLACK</option>
<option>WHITE</option>
<option>RED</option>
</select>
<input type='submit'  class='buyFormInput commonMacSubmit submit' value='To order'/>
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
    <div class="mactitle airMacTitle">MacBook Air</div>
    <input type='text' placeholder='First name' class='buyFormInput' id='airMacFname'/>
    <input type='text' placeholder='Last name' class='buyFormInput' id='airMacLname'/>
    <input type='email' placeholder='email' class='buyFormInput' id='airMacEmail'/>
    <select class='buyFormInput airMacSelect'>
    <option>BLACK</option>
    <option>RED</option>
    <option>WHITE</option>
    </select>
    <input type='submit' class='buyFormInput airMacSubmit submit' value='To order'/>
    </div>
    </div>`;
    setTimeout(() => {
      document
        .querySelector(".airMacBuyForm")
        .setAttribute("style", "display:flex; opacity: 70%;");
    }, 40);
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
          .setAttribute("style", "display:flex; opacity: 70%;");
      }, 40);
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
      <div class='iphoneContainer'>
      <div class='formInputs'>
      <div class="mactitle iseTitle">iPhone se</div>
      <input type='text' placeholder='First name'  class='buyFormInput' id='iseFname'/>
      <input type='text' placeholder='Last name'  class='buyFormInput'  id='iseLname'/>
      <input type='email' placeholder='email'  class='buyFormInput' id='iseEmail'/>
      <input type='submit'  class='buyFormInput iseSubmit submit' value='To order'/>
      </div>
      <img class='backimg iseBackBtn' src="./img/backimg.png"/>
      </div>`;
    });
  } else if (event.target.classList.contains("i11Btn")) {
    document
      .querySelector(".i11Img")
      .setAttribute("style", "transform: translate(37vw,0);");
    document
      .querySelector(".i11Text")
      .setAttribute("style", "transform: translate(-37vw,0);");
    document.querySelector(".i11Text").innerHTML = `
    <div class='iphoneContainer'>
    <img class='backimg i11BackBtn' src="./img/backimRev.png"/>
      <div class='formInputs'>
      <div class="mactitle i11Title">iPhone 11</div>
      <input type='text' placeholder='First name'  class='buyFormInput' id='i11Fname'/>
      <input type='text' placeholder='Last name'  class='buyFormInput' id='i11Lname'/>
      <input type='email' placeholder='email'  class='buyFormInput' id='i11Email'/>
      <input type='submit'  class='buyFormInput i11Submit submit' value='To order'/>
      </div>
      </div>`;
  } else if (event.target.classList.contains("iProBtn")) {
    document
      .querySelector(".iProImg")
      .setAttribute("style", "transform: translate(-37vw,0);");
    document
      .querySelector(".iProText")
      .setAttribute("style", "transform: translate(37vw,0);");
    document.querySelector(".iProText").innerHTML = `
    <div class='iphoneContainer'>
      <div class='formInputs'>
      <div class="mactitle iProTitle">iPhone 11 <span class='pro'>Pro</span></div>
      <input type='text' placeholder='First name'  class='buyFormInput' id='iProFname'/>
      <input type='text' placeholder='Last name'  class='buyFormInput' id='iProLname'/>
      <input type='email' placeholder='email'  class='buyFormInput' id='iProEmail'/>
      <input type='submit'  class='buyFormInput iProSubmit submit' value='To order'/>
      </div>
      <img class='backimg iProBackBtn' src="./img/backimg.png"/>
      </div>`;
  }
  //копка назад в поле айфонов
  else if (event.target.classList.contains("iseBackBtn")) {
    document
      .querySelector(".iseImg")
      .setAttribute("style", "transform: translate(0,0);");
    document
      .querySelector(".iseText")
      .setAttribute("style", "transform: translate(0,0);");
    document.querySelector(
      ".iseText"
    ).innerHTML = `<div class="macnew">New</div>
  <div class="mactitle">iPhone se</div>
  <div class="macsubtitle">Lots to love. Less to spend.</div>
  <div class="price">Starting at $399.</div>
  <div class="subprice">From $9.54/mo. or $229 with trade-in.</div>
  <button class="macbtn iseBtn">Buy</button>
</div>`;
  } else if (event.target.classList.contains("i11BackBtn")) {
    document
      .querySelector(".i11Img")
      .setAttribute("style", "transform: translate(0,0);");
    document
      .querySelector(".i11Text")
      .setAttribute("style", "transform: translate(0,0);");
    document.querySelector(".i11Text").innerHTML = `
    <div class="mactitle">iPhone 11</div>
          <div class="macsubtitle">Just the right amount of everything.</div>
          <div class="subprice">From $18.70/mo. or $449 with trade-in.</div>
          <button class="macbtn i11Btn">Buy</button>`;
  } else if (event.target.classList.contains("iProBackBtn")) {
    document
      .querySelector(".iProImg")
      .setAttribute("style", "transform: translate(0,0);");
    document
      .querySelector(".iProText")
      .setAttribute("style", "transform: translate(0,0);");
    document.querySelector(".iProText").innerHTML = `
    <div class="mactitle">iPhone 11 Pro</div>
    <div class="macsubtitle">
      Pro cameras. Pro display. Pro performance.
    </div>
    <div class="subprice">From $28.29/mo. or $679 with trade-in.</div>
    <button class="macbtn iProBtn">Buy</button>`;
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

  //асинхронные запросы на покупку товаров
  else if (event.target.classList.contains("commonMacSubmit")) {
    document.querySelector(".commonMacSubmit").disabled = true;
    fname = document.querySelector("#commonMacFname");
    lname = document.querySelector("#commonMacLname");
    email = document.querySelector("#commonMacEmail");
    color = document.querySelector(".commonMacSelect");
    product = document.querySelector(".mactitle");
    document.querySelector(".commonMacSubmit").disabled = false;
    if (fname.value == "" || lname.value == "" || email.value == "") {
      alert("Fill in all the fields.");
      console.log(fname.value, lname.value, email.value);
    } else {
      const value = {
        product: product.value,
        first_name: fname.value,
        last_name: lname.value,
        product_color: color.value,
        email: email.value,
        date: new Date().toJSON(),
      };
      Order.toOrder(value)
        .then(
          () => (document.querySelector(".commonMacSubmit").disabled = false)
        )
        .then(() => console.log(value));
    }
  } else if (event.target.classList.contains("airMacSubmit")) {
    document.querySelector(".airMacSubmit").disabled = true;
    fname = document.querySelector("#airMacFname");
    lname = document.querySelector("#airMacLname");
    email = document.querySelector("#airMacEmail");
    color = document.querySelector(".airMacSelect");
    product = document.querySelector(".airMacTitle");
    document.querySelector(".airMacSubmit").disabled = false;
    if (fname.value == "" || lname.value == "" || email.value == "") {
      alert("Fill in all the fields.");
      console.log(fname.value, lname.value, email.value);
    } else {
      const value = {
        product: product.value,
        first_name: fname.value,
        last_name: lname.value,
        email: email.value,
        product_color: color.value,
        date: new Date().toJSON(),
      };
      Order.toOrder(value)
        .then(() => (document.querySelector(".airMacSubmit").disabled = false))
        .then(() => console.log(value));
    }
  } else if (event.target.classList.contains("iseSubmit")) {
    document.querySelector(".iseSubmit").disabled = true;
    fname = document.querySelector("#iseFname");
    lname = document.querySelector("#iseLname");
    email = document.querySelector("#iseEmail");
    // color = document.querySelector(".iseSelect");
    product = document.querySelector(".iseTitle");
    document.querySelector(".iseSubmit").disabled = false;
    if (fname.value == "" || lname.value == "" || email.value == "") {
      alert("Fill in all the fields.");
      console.log(fname.value, lname.value, email.value);
    } else {
      const value = {
        product: product.value,
        first_name: fname.value,
        last_name: lname.value,
        email: email.value,
        // color: color.value,
        date: new Date().toJSON(),
      };
      Order.toOrder(value)
        .then(() => (document.querySelector(".iseSubmit").disabled = false))
        .then(() => console.log(value));
    }
  } else if (event.target.classList.contains("i11Submit")) {
    document.querySelector(".i11Submit").disabled = true;
    fname = document.querySelector("#i11Fname");
    lname = document.querySelector("#i11Lname");
    email = document.querySelector("#i11Email");
    // color = document.querySelector(".i11Select");
    product = document.querySelector(".i11Title");
    document.querySelector(".i11Submit").disabled = false;
    if (fname.value == "" || lname.value == "" || email.value == "") {
      alert("Fill in all the fields.");
      console.log(fname.value, lname.value, email.value);
    } else {
      const value = {
        product: product.value,
        first_name: fname.value,
        last_name: lname.value,
        email: email.value,
        // color: color.value,
        date: new Date().toJSON(),
      };
      Order.toOrder(value)
        .then(() => (document.querySelector(".i11Submit").disabled = false))
        .then(() => console.log(value));
    }
  } else if (event.target.classList.contains("iProSubmit")) {
    document.querySelector(".iProSubmit").disabled = true;
    fname = document.querySelector("#iProFname");
    lname = document.querySelector("#iProLname");
    email = document.querySelector("#iProEmail");
    // color = document.querySelector(".iProSelect");
    product = document.querySelector(".iProTitle");
    document.querySelector(".iProSubmit").disabled = false;
    if (fname.value == "" || lname.value == "" || email.value == "") {
      alert("Fill in all the fields.");
      console.log(fname.value, lname.value, email.value);
    } else {
      const value = {
        product: product.value,
        first_name: fname.value,
        last_name: lname.value,
        email: email.value,
        // color: color.value,
        date: new Date().toJSON(),
      };
      Order.toOrder(value)
        .then(() => (document.querySelector(".iProSubmit").disabled = false))
        .then(() => console.log(value));
    }
  }
}
