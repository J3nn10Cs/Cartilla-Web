let btn = document.querySelector("#btn");
let slidebar = document.querySelector(".slider-barra");
let overlay = document.querySelector(".overlay");
let isMenuActive = false;

btn.onclick = function () {
    slidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    isMenuActive = !isMenuActive;
}

overlay.onclick = function () {
    if (isMenuActive) {
        slidebar.classList.remove("active");
        overlay.classList.remove("active");
        isMenuActive = false;
    }
}

searchbtn.onclick = function () {
     slidebar.classList.toggle("active");
     overlay.classList.toggle("active");
     isMenuActive = !isMenuActive;
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
