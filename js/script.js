// Wait for DOM to be ready
$(document).ready(function() {

    // Initialize Slick Slider
    $('.projects-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        fade: false,
        cssEase: 'ease-in-out'
    });

    // Desktop Previous Arrow
    $('.prev-arrow').on('click', function() {
        $('.projects-slider').slick('slickPrev');
    });

    // Desktop Next Arrow
    $('.next-arrow').on('click', function() {
        $('.projects-slider').slick('slickNext');
    });

    // Mobile Previous Arrow
    $('.prev-arrow-mobile').on('click', function() {
        $('.projects-slider').slick('slickPrev');
    });

    // Mobile Next Arrow
    $('.next-arrow-mobile').on('click', function() {
        $('.projects-slider').slick('slickNext');
    });

    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // Mobile menu toggle
    $('.mobile-menu-icon').on('click', function() {
        alert('Mobile menu - You can implement a slide-out menu here!');
    });

});

// Keyboard navigation for slider
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        $('.projects-slider').slick('slickPrev');
    } else if (e.key === 'ArrowRight') {
        $('.projects-slider').slick('slickNext');
    }
});