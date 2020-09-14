// services

$(document).ready(function(){
    new WOW().init();
});

// Work popup

$(document).ready(function(){
    $("#popup-image").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        }
          
    });
});

// Owl Carousel

$(document).ready(function(){
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

$(document).ready(function(){
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});