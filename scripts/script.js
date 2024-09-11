'use strict';

$(document).ready(function () {
    $('.schedule-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
    });

    $('.photos-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    $('.photos-slider-second').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
    });

    new WOW(
        {
            animateClass: 'animate__'
        }
    ).init();

    let openCallPopup = $('.open-popup-call');

    openCallPopup.magnificPopup({
        type: 'inline'
    })

    openCallPopup.click(() => {
        $('.phone-popup').css('display', 'flex');
    })

    $('.open-photo').magnificPopup({
        type: 'image'
    })

    let readMoreLinks = $('.read-more');

    readMoreLinks.magnificPopup({
        type: 'inline'
    })

    readMoreLinks.click((event) => {
        $('#read-more-popup').css('display', 'block');
        $('#read-more-popup p').text($(event.target).parent().prev().text());
    });

    // $('.scroll-to-program').click(() => {
    //     $('#scrolled-to-program')[0].scrollIntoView({'block': 'start', 'behavior': 'smooth'});
    // })

    // $('.scroll-to-schedule').click(() => {
    //     $('#scrolled-to-schedule')[0].scrollIntoView({'block': 'start', 'behavior': 'smooth'});
    // })

    // $('.scroll-to-photos').click(() => {
    //     $('#scrolled-to-photos')[0].scrollIntoView({'block': 'start', 'behavior': 'smooth'});
    // })

    // $('.scroll-to-reviews').click(() => {
    //     $('#scrolled-to-reviews')[0].scrollIntoView({'block': 'start', 'behavior': 'smooth'});
    // })

    $(".scroll-to-program").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#scrolled-to-program").offset().top
        }, 1000);
    });

    $(".scroll-to-schedule").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#scrolled-to-schedule").offset().top
        }, 1000);
    });

    $(".scroll-to-photos").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#scrolled-to-photos").offset().top
        }, 1000);
    });

    $(".scroll-to-reviews").click(function() {
        $('html, body').animate({
            scrollTop: $("#scrolled-to-reviews").offset().top
        }, 1000);
    });

    function ajaxForm() {
        if (!hasError) {
            $.ajax({
                url: 'https://testologia.ru/checkout',
                method: 'post',
                data: {name: nameInputForm.val(), phone: phoneInputForm.val()},
            }).done(function(e) {
                if (e.hasOwnProperty('success') && e.success === 1) {
                    $('.form').css('display', 'none');
                    $('.form-been-sent').css('display', 'flex');
                } else {
                    alert('Введены неправильные данные');
                }
            });
        }
    }

    function ajaxPopup() {
        if (!hasError) {
            $.ajax({
                url: 'https://testologia.ru/checkout',
                method: 'post',
                data: {name: nameInputPopup.val(), phone: phoneInputPopup.val()},
            }).done(function (e) {
                if (e.hasOwnProperty('success') && e.success === 1) {
                    $('.popup').css('display', 'none');
                    $('.popup-been-sent').css('display', 'block');
                    $('.phone-popup').css({
                        'display': 'flex',
                        'justify-content': 'center',
                        'align-items': 'center'
                    })
                } else {
                    alert('Введены неправильные данные');
                }
            });
        }
    }

    let nameInputForm = $('#form-input-name');
    let phoneInputForm = $('#form-input-phone');
    let hasError;

    $.mask.definitions['h'] = "[0|1|2|3|4|5|6|7|9]";
    phoneInputForm.mask("+7 (h99) 999-99-99");

    $('#form-button').click(() => {
        hasError = false;

        nameInputForm.css('border-color', 'black').next().hide();
        phoneInputForm.css('border-color', 'black').next().hide();

        if (!nameInputForm.val()) {
            nameInputForm.css('border-color', 'red').next().show();
            hasError = true;
        }
        if (!phoneInputForm.val()) {
            phoneInputForm.css('border-color', 'red').next().show();
            hasError = true;
        }

        ajaxForm();
    });

    let nameInputPopup = $('#popup-input-name');
    let phoneInputPopup = $('#popup-input-phone');

    $('#popup-button').click(() => {
        hasError = false;

        nameInputPopup.css('border-color', 'black').next().hide();
        phoneInputPopup.css('border-color', 'black').next().hide();

        if (!nameInputPopup.val()) {
            nameInputPopup.css('border-color', 'red');
            nameInputPopup.next().show();
            hasError = true;
        }
        if (!phoneInputPopup.val()) {
            phoneInputPopup.css('border-color', 'red');
            phoneInputPopup.next().show();
            hasError = true;
        }

        ajaxPopup();
    });

    phoneInputPopup.mask("+7 (h99) 999-99-99");

    let emailInput = $('#email-input');

    emailInput.inputmask("email");

    $('.email-circle').click(() => {
        emailInput.css('border-color', '#FFA03EFF');
        emailInput.parent().next().css('display', 'none');

        if (!emailInput.val()) {
            emailInput.css('border-color', 'red');
            emailInput.parent().next().css('display', 'block');
        }
    })

    const sidebar = document.querySelector('#sidebar');
    const sidebarToggler = document.querySelector('.sidebar_toggler');


// Toggling the Sidebar
    sidebarToggler.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });


// Closing the Sidebar on clicking Outside and on the Sidebar-Links
    window.addEventListener('click', (e) => {
        if (e.target.id !== 'sidebar' && e.target.className !== 'sidebar_toggler') {
            sidebar.classList.remove('show');
        }
    });
});