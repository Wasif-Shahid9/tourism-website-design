/* !!!!!!!!==========!!!!!!!!
    Sticky Navbar
!!!!!!!!==========!!!!!!!!! */
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

/* !!!!!!!!==========!!!!!!!!
    Typed Js
!!!!!!!!==========!!!!!!!!! */
var typed = new Typed('.typo-text' , {
    strings: ["Adventures Start With the First Step"],
    typeSpeed:80,
    backSpeed: 100,
    loop: true
})
var typed = new Typed('.typo-text2' , {
    strings: ["Around the World With Us"],
    typeSpeed:80,
    backSpeed: 100,
    loop: true
})
var typed = new Typed('.typo-text3' , {
    strings: ["is an Adventure take risks"],
    typeSpeed:120,
    backSpeed: 100,
    loop: true
})

/* !!!!!!!!==========!!!!!!!!
    Counter Js
!!!!!!!!==========!!!!!!!!! */
window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#count-1").countMe(50,50);
    $("#count-2").countMe(50, 50);
    $("#count-3").countMe(50, 50);
    $("#count-4").countMe(50,25);
    $("#count-5").countMe(50,50);
    $("#count-6").countMe(50, 50);
    $("#count-7").countMe(50, 50);
    $("#count-8").countMe(50,50);
 }

/* !!!!!!!!==========!!!!!!!!
    Slick Js
!!!!!!!!==========!!!!!!!!! */
//  $(document).on('ready', function () {
//     $(".regular").slick({
//         respondTo: 'window',
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     infinite: true,
//                 }
//             },
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 2,
//                     infinite: true,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     infinite: true,
//                 }
//             },

//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 425,
//                 settings: {
//                     slidesToShow: 1,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 320,
//                 slidesToShow: 1,
//                 dots: true
//             }],
//         // arrows: true,
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000
//     });
// });

$(document).on('ready', function () {
    $(".regular").slick({
        // easing: 'linear',
        respondTo: 'window',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                }

            },
            {

                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                }

            },
            {

                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                }

            },

            {

                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }

            },
            {

                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }

            },
            {

                breakpoint: 320,
                slidesToShow: 1,
                dots: true

            }],
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });


});
