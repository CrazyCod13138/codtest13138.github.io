$(document).ready(function () {
    scrollTop();

    var swiper = new Swiper('.main-baner__container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    function scrollTop() {
        let btnTop = document.querySelector('.g-btnTop');
        addEventListener('scroll',function () {

            let winScroll = window.pageYOffset;


            if (winScroll >= 300) {
                btnTop.classList.add('active');

            } else {
                btnTop.classList.remove('active');
            }

        })

        btnTop.addEventListener("click", function () {

            $('html, body').animate({scrollTop: 0}, 500);

            return false;

        })



    }





    const burggerBtn = document.getElementById('burgger-btn');

    burggerBtn.addEventListener('click', toggleSVGBurger);

    let menuWrap = document.querySelector('.header__wrap');
    let menuElementNav = document.querySelector('.header__nav');
    let menuElementPhone = document.querySelector('.header__phone');

    function toggleSVGBurger(e) {

        const {
            target, currentTarget,
            currentTarget: { parentNode }
        } = e;
        const svgEls = document.querySelectorAll(".svgEl");

        svgEls.forEach(el => {
            el.classList.toggle("line")
            el.classList.toggle("transitionDelay")
        });

        parentNode.classList.toggle("toggleMenuList");
        menuWrap.classList.toggle('active');
        let menuHeight = menuElementNav.clientHeight + menuElementPhone.clientHeight;

        if (menuWrap.clientHeight != 0) {
            menuWrap.style.maxHeight = "0px";

            console.log(menuHeight);
        } else {
            menuWrap.style.maxHeight = menuHeight + "px";
            console.log(menuHeight);
        }
    }

});