$( function() {
    $( "#accordion" ).accordion({
        collapsible: true
    });
    $('.quote-carousel').slick({
        appendArrows: $('.quote-arrows'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>',
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
    });
    $('.reviews-carousel').slick({
        appendArrows: $('.reviews-arrows'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>',
    });
} );