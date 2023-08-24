const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});



function validate()
{
    var uname = document.getElementById("name").value;
    var fname = document.getElementById("order").value;
    var mobile = document.getElementById("mobile").value;
    var email=document.getElementById("email").value;



    
    if(uname == "")
    {
     alert("Please enter your name");
       uname.focus();
       return false;
       
    }

    var h=0;
    for(i=0;i<uname.length;i++){
      var u=isNaN(uname[i]);
        if(u==false){
            h=1;
            break;
        }
    }
    if(h==1){
        alert("First Name should not contain numbers");
        uname.focus();
       return false;
       
    }

    if(fname == "")
    {
     alert("Please enter your order");
       fname.focus();
       return false;
       
    }
   

  
   
      // var letters = /^[A-Za-z]+$/;
      // if(fname.value.match(letters))
      // {
      // return true;
      // }
      // else
      // {
      // alert('Input is missing or wrong');
      // return false;
      // }
    





   
     if(mobile.length!=10)
    {
        alert("Mobile must be of 10 numbers only");
        mobile.focus();
        return false;
    }



    var position_at=email.indexOf('@');
    var position_dot=email.lastIndexOf('.');
    var l=0;
   
    
    if((position_at>0)&&(position_dot>position_at+1)&&(email.length>position_dot+2)){
        l=1;
    }
    if(l==0){
        alert("Invalid Email");
    }

    if(address== "")
    {
     alert("Please enter your address");
       uname.focus();
       return false;
       
    }
  }

  function myFunction() {
    document.getElementById("nav").style.color = "red";;
  }

  function handleFormSubmit(event) {
        event.preventDefault();
    
        const data = new FormData(event.target);
    
        const formJSON = Object.fromEntries(data.entries());
    
        const results = document.querySelector('.results pre');
        results.innerText = JSON.stringify(formJSON, null, 2);
    }
    
    const form = document.querySelector('.order');
    form.addEventListener('submit', handleFormSubmit);
    
            
    