// Smooth scroll to About me
$('#about-me').on('click', function () {
    const about = $('#about-section').position().top;

    $('html, body').animate({
        scrollTop: about
    },
        'slow'
    );
});

// Smooth scroll to showreel
$('#view-showreel').on('click', function () {
    const showreel = $('#showreel-section').position().top;

    $('html, body').animate({
        scrollTop: showreel
    },
        'slow'
    );
});

// Smooth scroll to projects section
$('#view-projects').on('click', function () {
    const projects = $('#projects-section').position().top;

    $('html, body').animate({
        scrollTop: projects
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