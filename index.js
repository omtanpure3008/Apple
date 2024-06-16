let uddhav = new Swiper(".mySwiper", {
    slidesPerView: 8,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    keyboard: {
        enabled: true,
    },
    // mousewheel: true,
    breakpoints: {
        320: {
            slidesPerView: 3,
        },
        375: {
            slidesPerView: 3,
        },
        425: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 8,
        }
    }
})


let kiran = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 20,
    // loop: true,
    // mousewheel: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        }
    }
})

