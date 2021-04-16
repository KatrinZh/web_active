$(function(){
    // Fixed header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle")


    CheckScroll(scrollPos,scrollPos)

    $(window).on("scroll  resize", function(){

        scrollPos = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        CheckScroll(scrollPos,scrollPos);
    });
    

    function CheckScroll(scrollPos,scrollPos)
    {
        if(scrollPos > introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });


    // navToggle
    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");

    });

    // Reviews Slider https://kenwheeler.github.io/slick/#go-get-it

    let slider = $("#reviewsSlider");

   slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true 
    });

});