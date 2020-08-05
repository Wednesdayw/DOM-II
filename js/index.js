// Your code goes here


//1. mouseover


const navBar = document.querySelector("nav");

navBar.addEventListener("mouseover",(event) => {
    event.target.style.color = "blue";
    setTimeout(function () {
      event.target.style.color = "";
    }, 1000);
  },
  false
);


// 2. mouseenter

const introImage = document.querySelector(".intro img");

introImage.addEventListener("mouseenter", function () {
  console.log("actually an alien btw");
  introImage.style.height = "500px";
});

// 3. mouseleave


introImage.addEventListener("mouseleave", function () {
    introImage.style.height = "250px";
});


// 4. load


window.addEventListener("load", (event) => {
  console.log("The aliens have taken over this page");
});

// 5. onclick


const destinations = document.querySelectorAll(".destination");
console.log(destinations);

destinations.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.color = "yellow";
  });
});

// 6. dblclick


const headers = document.querySelectorAll("h2");

const headersArray = Array.from(headers);

headersArray.forEach((element) => {
    element.addEventListener("dblclick", () => {
        element.style.backgroundColor = "black";
        element.style.color = "green";
        console.log("get in loser, we're going to space")
    });
});

// 7. keydown
//using keyboard keycodes js 
//13 = enter

const logo = document.querySelector(".logo-heading");

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) { 
        logo.style.color = "green";
    }
});

// 8. keyup
//using keyboard keycodes js 
//8 = enter

document.addEventListener("keyup", (event) => {
    if (event.keyCode === 8) { 
        logo.style.color = "blue";
    }
});

// 9. wheel


const signUpButton = document.querySelector(".btn")

signUpButton.addEventListener("wheel", () => {
    signUpButton.style.color = "green";
});

// 10. resize


window.addEventListener("resize", () => {
    introImage.src = "https://images.unsplash.com/photo-1582236829590-f8cb7de75229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
});