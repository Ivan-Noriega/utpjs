const preloader = document.querySelector(".preloader");
const preloader2 = document.querySelector(".animation");
const preloader3 = document.querySelector(".animation2");

window.addEventListener("load", () =>{
    //setTimeout(carga, 2000);
    carga();
    function carga(){
        preloader.classList.add("animate__animated", "animate__backOutUp");
        
    }     
})


preloader.addEventListener('animationend', () => {
    preloader2.classList.add("animate__animated", "animate__pulse");
    preloader3.classList.add("animate__animated", "animate__pulse");
  });
