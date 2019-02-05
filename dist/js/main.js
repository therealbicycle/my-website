// Smooth scroll to About me
$('#about-me').on('click', function () {
    const about = $('#about').position().top;

    $('html, body').animate({
        scrollTop: about
    },
        'slow'
    );
});

// Smooth scroll to portfolio
$('#view-portfolio').on('click', function () {
    const portfolio = $('#portfolio').position().top;

    $('html, body').animate({
        scrollTop: portfolio
    },
        'slow'
    );
});

// Smooth scroll to contact info
//$('#contact-me').on('click', function() {
//    const footer = $('#footer').position().top;
//
//    $('html, body').animate( {
//            scrollTop: footer
//            scrollTop: $(document).height()
//        },
//        'slow'
//   );
//});

$('#contact').click(function () {
    $('html, body').animate({
        scrollTop: $(document).height()
    },
        'slow')
});