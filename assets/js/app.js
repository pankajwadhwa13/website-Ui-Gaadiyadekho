const swiper = new Swiper('.swiper-head', {
  direction: 'horizontal',
  loop: true,
effect:'fade',
fadeEffect: {
    crossFade: true
  },
  speed:1300,
  autoplay:{
    delay: 1000,
  },

  // If you want pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});
const swiper_ev = new Swiper('.swiper-ev', {
  direction: 'horizontal',
  slidesPerView:1.25,
  spaceBetween:15,
  loop: true,
  speed:1300,
  autoplay:{
    delay: 1500,
  },
  // If you want pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    400: {
      slidesPerView:2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
const swiper_perfect= new Swiper('.swiper-perfect', {
  direction: 'horizontal',
  slidesPerView:2,
  spaceBetween:15,
  loop: true,
  speed:1300,
  autoplay:{
    delay: 1500,
  },
  // If you want pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    400: {
      slidesPerView:2.25,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
// New Vehicle Cards
const vehicleCards = document.querySelectorAll('.new-vehicle-card');
function removeActiveClass() {
    vehicleCards.forEach(card => card.classList.remove('active-hover'));
}
vehicleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        removeActiveClass();
        card.classList.add('active-hover');
    });
});
// =============================================Gallery=================================//
var swiper_gallery = new Swiper('.swiper-container', {
  slidesPerView: 1.5, // Adjust the number of slides visible at once
  spaceBetween: 0,
  loop: true,
  speed: 3000,
  autoplay: {
      delay: 1000, // Make the slides move continuously
      disableOnInteraction: true,
  },
  breakpoints: {
    400: {
      slidesPerView:2,
    },
    768:{
slidesPerView:2.5,
    },
    992: {
      slidesPerView: 3,
    }
  }
});
var mySwiper = new Swiper(".swiper-2w", {
  spaceBetween: 10,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  
  // Add pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  // Add navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Pause autoplay on hover
const swiperContainer = document.querySelector('.swiper-container');
swiperContainer.addEventListener('mouseover', () => {
  swiper_gallery.autoplay.stop(); // Corrected swiper to swiper_gallery
});

swiperContainer.addEventListener('mouseout', () => {
  swiper_gallery.autoplay.start(); 
});

// =================================================popular-cards ================================//
const swiper_popular = new Swiper('.mySwiper', {
  slidesPerView: 1.20,
  spaceBetween: 10,
  autoplay:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    450: {
      slidesPerView:2,
      spaceBetween: 10
    },
    576: {
      slidesPerView:2,
      spaceBetween: 10
    },
    768: {
      slidesPerView:3,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});
// ================================================= CV gallery ====================================//
var swiper_cv = new Swiper('.cv-swiper', {
  slidesPerView: 1.5, // Adjust the number of slides visible at once
  spaceBetween: 10,
  loop: true,
  speed: 3000,
  autoplay: {
      delay: 0, // Make the slides move continuously
      disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView:2,
      spaceBetween: 10
    },
    576: {
      slidesPerView:2,
      spaceBetween: 10
    },
    768: {
      slidesPerView:3,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});
var swiper_new = new Swiper('.swiper-new', {
  fadeEffect: {
    crossFade: true
  },
  autoplay:true,
  autoplay:{
    delay:1000,
  },
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
});
// ==================================================== Comparision=========================================//
const swiper_compare = new Swiper('.compare-Swiper', {
  slidesPerView: 1,
  spaceBetween: 15,
  // autoplay:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView:1.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView:2.5,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
// ==================================================== Social media icons ==================================//
document.querySelector('.arrow').addEventListener('click', function() {
  const hiddenIcons = document.querySelector('.hidden-icons');
  hiddenIcons.style.display = hiddenIcons.style.display === 'block' ? 'none' : 'block';
});
// ======================================================Responsive NavBar==============================//
let mobileView = document.querySelector(".mobile-view")
let layerNav =  document.querySelector(".layer-nav")
function View() {
  mobileView.classList.toggle("left-view");
layerNav.classList.toggle("d-block")
}
