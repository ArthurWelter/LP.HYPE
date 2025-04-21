const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: .9,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time) {
    lenis.raf(time)
     requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)



const resData = document.getElementById('text-data')
let date = new Date();
let fullDate = String(date).slice(0,15)
let dia = fullDate.slice(8,10)
let ano = fullDate.slice(11,15)
let mes = String(date.getMonth() + 1);
if(mes.length === 1){
  mes = "0" + mes
}

if(dia <= 3){
  dia = dia
} else {
  dia = dia - 2
}

resData.innerText += ` ${dia}/${mes}/${ano}`

function ativarFaq(identidade){
  let faqAtual = document.getElementById(identidade)
  faqAtual.classList.toggle("faq-ativado")
}

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });