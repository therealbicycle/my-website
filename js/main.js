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
<<<<<<< HEAD
=======
    },
        'slow'
    );
});

// Smooth scroll to projects section
$('#view-projects').on('click', function () {
    const projects = $('#projects-section').position().top;

    $('html, body').animate({
        scrollTop: projects
>>>>>>> 376211b93d616f8a52a540d5f0b8a371bc845875
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

// Smooth scroll to projects section
$('#view-projects').on('click', function () {
    const projects = $('#projects-section').position().top;

    $('html, body').animate({
        scrollTop: projects
    },
        'slow'
    );
});

$('#contact').click(function () {
    $('html, body').animate({
        scrollTop: $(document).height()
    },
        'slow')
});