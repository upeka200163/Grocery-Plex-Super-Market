let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  login.classList.toggle('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}

window.onscroll = () =>{
  login.classList.remove('active');
  navbar.classList.remove('active');
  cart.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
  spaceBetween:20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    991:{
      slidesPerView: 3,
    },
  },
});

var swiperBlog = new Swiper(".blog-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    991:{
      slidesPerView: 3,
    },
  },
});

(function() {
    const header = document.querySelector('.header');
    let menuBtn = document.querySelector('#left-menu-btn');

    
    if (menuBtn && header) {
        header.prepend(menuBtn); 
    } 
    
    else if (header) {
        menuBtn = document.createElement('div');
        menuBtn.id = 'left-menu-btn';
        menuBtn.className = 'fas fa-bars';
        header.prepend(menuBtn);
    }
})();

// --- Product Filter Logic ---
let filterButtons = document.querySelectorAll('.controls .btn');
let filterItems = document.querySelectorAll('.product .box-container .box');

filterButtons.forEach(button => {
    button.onclick = () => {
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        let dataFilter = button.getAttribute('data-filter');

        filterItems.forEach(item => {
            let itemCategory = item.getAttribute('data-category');

            if (dataFilter === 'all' || dataFilter === itemCategory) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    };
});

// --- Newsletter Form Logic ---
document.querySelector('#newsletter-form').onsubmit = (e) => {
    e.preventDefault(); 
    alert('Thank you for subscribing to our newsletter!');
    document.querySelector('#newsletter-form').reset(); 
}