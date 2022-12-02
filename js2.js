document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.load_anim');

    const scrollAnimation = () => {
        scrollItems.forEach(el => {
            el.classList.add('animation-class');
        });
    };

    window.addEventListener('load', () => {
        scrollAnimation();
    });
});
jQuery(document).ready(function ($) {
    function tran() {
        $(".cand_empl_btn").addClass('tran');
    }

    setTimeout(tran, 1000);
    $('*[data-menu="open"]').on('click', function () {
        $('body').toggleClass("show-menu");
    });
    $('*[data-menu="close"]').on('click', function () {
        $('body').removeClass("show-menu");
    });

    $widget = $("#widget-container");
    $(".tab-1-btn").on('click', function () {
        $widget.removeClass();
        $widget.addClass('active-tab-2');
    });

    $(".tab-2-btn").on('click', function () {
        $widget.removeClass();
        $widget.addClass('active-tab-3');
    });

    $(".tab-3-btn").on('click', function () {
        $widget.removeClass();
        $widget.addClass('active-tab-4');
    });

    // show/hide Candidates/Vacancies
    $("#candidate_btn").click(function () {
        $('.vacancy_slider').slick({
            autoplay: false,
            autoplaySpeed: 4000,
            dots: true,
            speed: 1000,
            cssEase: 'ease-out',
            arrows: false,
            slidesToShow: 3,

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // Testemonials Candidates
        $('.testimon_candidates_slider').slick({
            autoplay: true,
            // autoplay: true,
            autoplaySpeed: 9000,
            dots: false,
            speed: 1000,
            cssEase: 'ease-out',
            arrows: false,
            slidesToShow: 3,

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
        $(".home_wrapper").slideUp("slow");
        $("#vacancy").slideDown("slow");
    });

    // Vacansy
    $("#employer_btn").click(function () {
        $('.slick_slider').slick({
            autoplay: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            speed: 1000,
            cssEase: 'ease-out',
            arrows: false,
            slidesToShow: 4,

            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.testimon_clients_slider').slick({
            autoplay: true,
            // autoplay: true,
            autoplaySpeed: 9000,
            dots: false,
            speed: 1000,
            cssEase: 'ease-out',
            arrows: false,
            slidesToShow: 3,

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
        $(".home_wrapper").slideUp("slow");
        $("#candidates").slideDown("slow");
    });
    $('.brand_slider').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        dots: false,
        speed: 1000,
        cssEase: 'ease-out',
        arrows: false,
        slidesToShow: 6,
        adaptiveHeight: true,
        // centerMode: true,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    autoplay: true,
                    slidesToShow: 4,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    slidesToShow: 3,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 350,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
// =============== home page ==============================
$(`<span class="dashicons dashicons-saved i1"></span>`).prependTo(".main_info p");
    $("#show_vac").click(function () {
        $("#serv_pg").slideUp("slow");
        $("#open_vacanc").slideDown("slow").css("display", "grid");
        $(".single_item").slideUp("slow");
    });

//show - hide format
    $('.qa_wrapper').each(function () {
        $('.qa_wrapper .togleShow').addClass('active');
        $('.qa_wrapper .togleShow .answ').css("display", "block");
        $(this).children('.q_a').children('.accordion-title').click(function () {
            var current_tab = $(this).parent();
            let format1 = '';
            let format2 = '';
            let format3 = '';
            let format4 = '';

            if ($('#i1').is(':checked')) {
                format1 = $('#i1').val();
                $(".boxForChosenFormat").prepend(`
                <p class="chosenVal1">${format1}</p>`);
            }
            if ($('#i2').is(':checked')) {
                format2 = $('#i2').val();
                $(".boxForChosenFormat").prepend(`
                <p class="chosenVal1">${format2}</p>`);
            }
            if ($('#i3').is(':checked')) {
                format3 = $('#i3').val();
                $(".boxForChosenFormat").prepend(`
                <p class="chosenVal1">${format3}</p>`);
            }
            if ($('#i4').is(':checked')) {
                format4 = $('#i4').val();
                $(".boxForChosenFormat").prepend(`
                <p class="chosenVal1">${format4}</p>`);
            }
            if (current_tab.hasClass('active')) {
                $(this).siblings('.answ').slideUp(function () {
                    current_tab.removeClass('active');
                });
            } else {
                $('.fh .chosenVal1').remove();
                $(this).siblings('.answ').slideDown(function () {
                    current_tab.addClass('active');
                });

            }
            current_tab.siblings().children('.answ').slideUp(function () {
                $(this).parent().removeClass('active');
            });
        });
    });
    $('.fr_wrapp').each(function () {
        $('.fr_wrapp .togleShow').addClass('active');
        $('.fr_wrapp .togleShow .answ').css("display", "block");
        $('.popup_form .fr_wrapp .togleShow').removeClass('active');
        $('.popup_form .fr_wrapp .togleShow .answ').css("display", "none");
        $(this).children('.q_a').children('.accordion-title, .tran').click(function () {
            var current_tab = $(this).parent();
            let format1 = '';
            let format2 = '';
            let format3 = '';
            let format4 = '';

            if ($('#ir1').is(':checked')) {
                format1 = $('#ir1').val();
                $(".rr").prepend(`
                <p class="cVal">${format1}</p>`);
            }
            if ($('#ir2').is(':checked')) {
                format2 = $('#ir2').val();
                $(".rr").prepend(`
                <p class="cVal">${format2}</p>`);
            }
            if ($('#ir3').is(':checked')) {
                format3 = $('#ir3').val();
                $(".rr").prepend(`
                <p class="cVal">${format3}</p>`);
            }
            if ($('#ir4').is(':checked')) {
                format4 = $('#ir4').val();
                $(".rr").prepend(`
                <p class="cVal">${format4}</p>`);
            }
            if (current_tab.hasClass('active')) {
                $(this).siblings('.answ').slideUp(function () {
                    current_tab.removeClass('active');
                });
            } else {
                $('.fh .cVal').remove();
                $(this).siblings('.answ').slideDown(function () {
                    current_tab.addClass('active');
                });

            }
            current_tab.siblings().children('.answ').slideUp(function () {
                $(this).parent().removeClass('active');
            });
        });
    });
    // ============================================================================
    $('.reg_wrap').each(function () {
        $('.reg_wrap .togleShow').addClass('active');
        $('.reg_wrap .togleShow .answ').css("display", "block");
        $(this).children('.q_a').children('.accordion-title').click(function () {
            var current_tab = $(this).parent();
            if (current_tab.hasClass('active')) {
                let notechVal = $('#regSelect').val();
                if (!notechVal) {
                    $(".boxRegion").prepend(`
                <p class="chosenVal3">Все регионы</p>`);
                } else {
                    $(".boxRegion").prepend(`
                <p class="chosenVal3">${notechVal}</p>`);
                }

                $(this).siblings('.answ').slideUp(function () {
                    current_tab.removeClass('active');
                });
            } else {
                $('.fh .chosenVal3').remove();
                $(this).siblings('.answ').slideDown(function () {
                    current_tab.addClass('active');
                });

            }
            current_tab.siblings().children('.answ').slideUp(function () {
                $(this).parent().removeClass('active');
            });
        });
    });
    $('.city_wrapper').each(function () {
        $('.city_wrapper .togleShow').addClass('active');
        $('.city_wrapper .togleShow .answ').css("display", "block");
        $(this).children('.q_a').children('.accordion-title').click(function () {
            var current_tab = $(this).parent();
            if (current_tab.hasClass('active')) {
                let cityVal = $('#citySelect').val();
                if (!cityVal) {
                    $(".boxForChosenCity").prepend(`
                <p class="chosenVal2">Все города</p>`);
                } else {
                    $(".boxForChosenCity").prepend(`
                <p class="chosenVal2">${cityVal}</p>`);
                }

                $(this).siblings('.answ').slideUp(function () {
                    current_tab.removeClass('active');
                });
            } else {
                $('.fh .chosenVal2').remove();
                $(this).siblings('.answ').slideDown(function () {
                    current_tab.addClass('active');
                });

            }
            current_tab.siblings().children('.answ').slideUp(function () {
                $(this).parent().removeClass('active');
            });
        });
    });
    $('.notech_wrapper').each(function () {
        $('.notech_wrapper .togleShow').addClass('active');
        $('.notech_wrapper .togleShow .answ').css("display", "block");
        $(this).children('.q_a').children('.accordion-title').click(function () {
            var current_tab = $(this).parent();
            if (current_tab.hasClass('active')) {
                let notechVal = $('#vac_notech').val();
                if (!notechVal) {
                    $(".boxForChosenNoTech").prepend(`
                <p class="chosenVal3">Все Нетехнические</p>`);
                } else {
                   $(".boxForChosenNoTech").prepend(`<p class="chosenVal5">${notechVal}</p>`);
                }

                $(this).siblings('.answ').slideUp(function () {
                    current_tab.removeClass('active');
                });
            } else {
                $('.fh .chosenVal3').remove();
                $(this).siblings('.answ').slideDown(function () {
                    current_tab.addClass('active');
                });

            }
            current_tab.siblings().children('.answ').slideUp(function () {
                $(this).parent().removeClass('active');
            });
        });
    });
    $('.tech_wrapper').each(function () {
        $('.tech_wrapper .togleShow').addClass('active');
        $('.tech_wrapper .togleShow .answ').css("display", "block");
        $(this).children('.q_a').children('.accordion-title').click(function () {
            var current_tab = $(this).parent();
            if (current_tab.hasClass('active')) {
                let notechVal = $('#vac_framework').val();
                if (!notechVal) {
                    $(".boxForChosenTech").prepend(`
                <p class="chosenVal4">Все Tехнические</p>`);
                } else {
                    $(".boxForChosenTech").prepend(`<p class="chosenVal5">${notechVal}</p>`);
                }

                $(this).siblings('.answ').slideUp(function () {
                    current_tab.removeClass('active');
                });
            } else {
                $('.fh .chosenVal4').remove();
                $(this).siblings('.answ').slideDown(function () {
                    current_tab.addClass('active');
                });

            }
            current_tab.siblings().children('.answ').slideUp(function () {
                $(this).parent().removeClass('active');
            });
        });
    });
    $('.spec_wrapper').each(function () {
        $('.spec_wrapper .togleShow').addClass('active');
        $('.spec_wrapper .togleShow .answ').css("display", "block");
        $(this).children('.q_a').children('.accordion-title').click(function () {
            var current_tab = $(this).parent();
            if (current_tab.hasClass('active')) {
                let notechVal = $('#vac_speciality').val();
                if (!notechVal) {
                    $(".boxForChosenSpec").prepend(`
                <p class="chosenVal5">Все Специализация</p>`);
                } else {                    
                    $(".boxForChosenSpec").prepend(`<p class="chosenVal5">${notechVal}</p>`);                   
                }

                $(this).siblings('.answ').slideUp(function () {
                    current_tab.removeClass('active');
                });
            } else {
                $('.fh .chosenVal5').remove();
                $(this).siblings('.answ').slideDown(function () {
                    current_tab.addClass('active');
                });

            }
            current_tab.siblings().children('.answ').slideUp(function () {
                $(this).parent().removeClass('active');
            });
        });
    });
    $('.company_wrap').each(function () {
        $('.company_wrap .togleShow').addClass('active');
        $('.company_wrap .togleShow .answ').css("display", "block");
        $(this).children('.q_a').children('.accordion-title').click(function () {
            var current_tab = $(this).parent();
            if (current_tab.hasClass('active')) {
                let notechVal = $('#vac_comp').val();
                if (!notechVal) {
                    $(".boxForChosenComp").prepend(`
                <p class="chosenVal8">Все компании</p>`);
                } else {
                    $(".boxForChosenComp").prepend(`<p class="chosenVal8">${notechVal}</p>`);                   
                }

                $(this).siblings('.answ').slideUp(function () {
                    current_tab.removeClass('active');
                });
            } else {
                $('.fh .chosenVal8').remove();
                $(this).siblings('.answ').slideDown(function () {
                    current_tab.addClass('active');
                });

            }
            current_tab.siblings().children('.answ').slideUp(function () {
                $(this).parent().removeClass('active');
            });
        });
    });
    function d1() {
    }
    setTimeout(d1, 100);
    $(".about_map").click(function () {
        $(".about_map").toggleClass('fullSize');
        $(".about2").toggleClass('about_click');
        $(".about2 .about1_descr").css('display', 'none');
        if (!$(".about_map").hasClass("fullSize")) {
            function explode() {
                $(".about2 .about1_descr").css('display', 'block');
            }

            setTimeout(explode, 600);
        }
    });

    $(".about1 p").prepend('<span class="dashicons dashicons-saved"></span>');
    $(".about2 p").prepend('<span class="dashicons dashicons-arrow-right-alt"></span>');
    $(".month_goals p").prepend('<span class="dashicons dashicons-arrow-right-alt ar"> </span>');

    // Prize slider
    $('.prize_slider').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        dots: true,
        speed: 1000,
        cssEase: 'ease-out',
        arrows: false,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    autoplay: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
jQuery(document).ready(function ($) {
    const search_input = $('.search-form__input');
    const search_results = $('.ajax-search');

    search_input.keyup(function () {
        let search_value = $(this).val();

        if (search_value.length > 2) { // кол-во символов
            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                type: 'POST',
                data: {
                    'action': 'ajax_search', // functions.php
                    'term': search_value
                },
                success: function (results) {
                    search_results.fadeIn(200).html(results);
                }
            });
        } else {
            search_results.fadeOut(200);
        }
    });

    // Закрытие поиска при клике вне его
    $(document).mouseup(function (e) {
        if (
            (search_input.has(e.target).length === 0) &&
            (search_results.has(e.target).length === 0)
        ) {
            search_results.fadeOut(200);
        }
        ;
    });

    //popup
    let countCand = $('.sv_chose_cand .starWr[data-exist =yes]').length;
    $('.acf-field[data-name="c_num"] input').val(countCand);
    // console.log(countCand);
    $('*[data-popup="open"]').on('click', function () {
        $('body').addClass("show_popup");
    });
    $('*[data-popup="close"]').on('click', function () {
        $('body').removeClass("show_popup");
    });
    $('*[data-popup3="open3"]').on('click', function () {
        $('body').addClass("show_popup");
    });
    $('*[data-popup3="close3"]').on('click', function () {
        $('body').removeClass("show_popup");
    });
    $(".rek_from_db").on("click", ".rd", delRekWrap);

    function delRekWrap(e) {

        var thisR = $(e.target).parents("section");
        let postId = thisR.data('id');
        let delDataRek = {
            'postId': thisR.data('id')
        }
        function delRek(postId) {
            $.ajax({
                url: devportData.root_url + '/wp-json/dp/v1/rekom/',
                type: 'DELETE',
                data: delDataRek,
                success: (response) => {
                    thisR.slideUp();
                    // console.log("Congrat!!");
                    // console.log(response);
                },
                error: (response) => {
                     console.log("Sory((");
                     console.log(response);
                }
            });
        }
        delRek(postId);
    }

    $(".rek_from_db").on("click", ".re", edRek.bind(this));

    function edRek(e) {
        var thisR = $(e.target).parents("section");
        if (thisR.data("state") == "editable") {
            makeRekomReadOnly(thisR);
        } else {
            makeRekomEditible(thisR);
        }
    }

    function makeRekomEditible(thisR) {
        thisR.find(".re").html('<span class="dashicons dashicons-no"></span> Cancel');
        thisR.find(".rt, .r1, .r2, .r3, .r4, .r5, .r6").removeAttr("readonly").addClass("rek_active_field");
        thisR.find(".rSave").slideDown("fast");
        thisR.data("state", "editable");
    }

    function makeRekomReadOnly(thisR) {
        thisR.find(".re").html('<span class="dashicons dashicons-edit"></span> Edit');
        thisR.find(".rt, .r1, .r2, .r3, .r4, .r5, .r6").attr("readonly", "readonly").removeClass("rek_active_field");
        thisR.find(".rSave").slideUp("fast");
        thisR.data("state", "cancel");
    }

    $(".rek_from_db").on("click", ".rSave", updRekWrapper.bind(this));
function updRekWrapper(e) {
    let thisR = $(e.target).parents("section");
    let postId = thisR.data('id');
    let updatedRek = {
        'postId': thisR.data('id'),
        'title': thisR.find(".rt").val(),
        // 'content': thisR.find(".r1").val(),
        'email_r': thisR.find(".r2").val(),
        'tel_r': thisR.find(".r5").val(),
        'resume_r': thisR.find(".r3").val(),
        'spec1': thisR.find(".r4").val(),
        'zarplata': thisR.find(".r6").val()
    }
    function updRek(postId) {
        $.ajax({
            url: devportData.root_url + '/wp-json/dp/v1/rekom/',
            type: 'PUT',
            data: updatedRek,
            success: (response) => {
                makeRekomReadOnly(thisR);
                // thisR.slideUp();
                // console.log("Congrat!!");
                console.log(response);
            },
            error: (response) => {
                makeRekomReadOnly(thisR);
            }
        });
        console.log(updatedRek);
    }
    updRek(postId);
}

    

    $(".submitNewRek").on("click", createRek);

    function createRek(e) {
        var formData = new FormData();
        let fileData = $(".nr3")[0];

        let tval = $(".nrt").val().length;
        let ev = $(".nr2").val().length;
        let cu = $(".cuID").val();

        console.log(cu);
        if (tval > 1 && ev > 5) {
            let newRek = {
                'title': $(".nrt").val(),
                'email_r': $(".nr2").val(),
                'tel_r': $(".nr5").val(),
                // 'resume_r': $(".nr3").val(),
                'resume_r': $(".t2a").val(),
                'spec1': $(".nr4").val(),
                'zarplata': $(".nr6").val(),
                'user_r': $(".cuID").val(),
                // 'resume_r': files,"
                'status': 'publish'
            }
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
                },
                // url: devportData.root_url + '/wp-json/wp/v2/rekomend/',
                url: devportData.root_url + '/wp-json/dp/v1/rekom/',
                type: 'POST',
                processData : false,
                data: newRek,
                success: (response) => {
                    $('body').removeClass("show_popup");
                    $(`
                     <div class="myCandW mcd" data-id="${response.id}">
                        <div class="mcName">
                            <input readonly type="text" value="${newRek.title}">
                            <input readonly type="text" value="${newRek.email_r}">
                        </div>
                        <div class="mcd1">            
                             <input readonly type="text" value="${newRek.spec1}">
                             <input readonly type="text" class="vdatewr" value="${newRek.zarplata}$">
                        </div>
                        <div class="mcd">
                            <p class="stNew">Личный</p>
                        </div> 
                    </div>
                       `).prependTo(".allmr").hide().slideDown();
                    $(".nrt, .nr2, .nr3, .nr4, .nr5, .nr6, .addC, .exp_r, .engl_r").val('');
                    $('.cVal').remove();
                    console.log(response);
                },
                error: (response) => {
                    // console.log("Sory((");
                    console.log(response);
                }
            });
        } else {e.preventDefault(); e.stopPropagation();}
    }
    
    // ======================================================================
    $('.left_vac').each(function () {
        $(this).children('.q_a').children('.accordion-title').click(function () {
            var current_tab = $(this).parent();
            if (current_tab.hasClass('active')) {
                $(this).siblings('.answ').slideUp(function () {
                    current_tab.removeClass('active');
                });
            } else {
                $(this).siblings('.answ').slideDown(function () {
                    current_tab.addClass('active');
                });

            }
            current_tab.siblings().children('.answ').slideUp(function () {
                $(this).parent().removeClass('active');
            });
        });
    });

    $('.let_candidat').click(function () {
        $('.vcform').slideDown('fast');

    });
    $('.vcf_submit').click(function () {
        $('.vcform').slideUp('fast');

    });
// open select
    var $window = $(window);
    var $pane = $('#pane1');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 600) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            let countCities = $('.countCities').val();
            $('#citySelect').attr('size', countCities );
            let countFramew = $('.countFamework').val();
            $('#vac_framework').attr('size', countFramew );
            let countComp = $('.countComp').val();
            $('#vac_comp').attr('size', countComp );
            let countLang = $('.countLang').val();
            $('#vac_speciality').attr('size', countLang );
            let countNotech = $('.countNoTech').val();
            $('#vac_notech').attr('size', countNotech );
        } else {
            $('#citySelect').attr('size', 1 );
            $('#vac_framework').attr('size', 1 );
            $('#vac_speciality').attr('size', 1 );
            $('#vac_comp').attr('size', 1 );
            $('#vac_notech').attr('size', 1 );
        }
    }
    
	
    checkWidth();
    $(window).resize(checkWidth);

// end open select
    

function rekrTabs(){
    $('.myProfile').on('click', function () {
        $(".myVac, .mcr, .mmr, .myOffers, .myAnalit, .pipel2, .tasksData, .faqData").slideUp("slow");
        $(".mpr").slideDown("slow");
        $('.myProfile h4').addClass('left_menu_act');
        $('.myV h4, .myO h4, .myC h4, .myM h4, .myA h4, .pipeline h4, .myTasks h4, .myFAQ h4').removeClass('left_menu_act');
        $('.fimg input[type=submit], .fimg [data-name=frfile], .fimg .acf-icon.dark').slideDown("slow");
        $('.fimg a[data-name=edit]').slideUp();
    })

    $('.myV').on('click', function () {
        $(".mpr, .mcr, .mmr, .myOffers, .myAnalit, .pipel2, .tasksData, .faqData").slideUp("slow");
        $(".myVac").slideDown("slow");
        $('.myV h4').addClass('left_menu_act');
        $('.myProfile h4, .myC h4, .myO h4, .myM h4, .myA h4, .pipeline h4, .myTasks h4, .myFAQ h4').removeClass('left_menu_act');
        $('.fimg input[type=submit], .fimg [data-name=frfile], .fimg .acf-icon.dark').slideUp("slow");
    })
    $('.myO').on('click', function () {
        $(".mpr, .mcr, .mmr, .myVac, .myAnalit, .pipel2, .tasksData, .faqData").slideUp("slow");
        $(".myOffers").slideDown("slow");
        $('.myO h4').addClass('left_menu_act');
        $('.myV h4, .myProfile h4, .myC h4, .myM h4, .myA h4, .pipeline h4, .myTasks h4, .myFAQ h4').removeClass('left_menu_act');
        $('.fimg input[type=submit], .fimg [data-name=frfile], .fimg .acf-icon.dark').slideUp("slow");
    })
    $('.myA').on('click', function () {
        $(".mpr, .mcr, .mmr, .myVac, .myOffers, .pipel2, .tasksData, .faqData").slideUp("slow");
        $(".myAnalit").slideDown("slow");
        $('.myA h4').addClass('left_menu_act');
        $('.myV h4, .myProfile h4, .myC h4, .myO h4, .myM h4, .pipeline h4, .myTasks h4, .myFAQ h4').removeClass('left_menu_act');
        $('.fimg input[type=submit], .fimg [data-name=frfile], .fimg .acf-icon.dark').slideUp("slow");
    })
    $('.myC').on('click', function () {
        $(".myVac, .mpr, .mmr, .myOffers, .myAnalit, .pipel2, .tasksData, .faqData").slideUp("slow");
        $(".mcr").slideDown("slow");
        $('.myC h4').addClass('left_menu_act');
        $('.myV h4, .myO h4, .myProfile h4, .myM h4, .myA h4, .pipeline h4, .myTasks h4, .myFAQ h4').removeClass('left_menu_act');
        $('.fimg input[type=submit], .fimg [data-name=frfile], .fimg .acf-icon.dark').slideUp("slow");
    })
    $('.myTasks').on('click', function () {
        $(".mcr, .myVac, .mpr, .mmr, .myOffers, .myAnalit, .pipel2, .faqData").slideUp("slow");
        $(".tasksData").slideDown("slow");
        $('.myTasks h4').addClass('left_menu_act');
        $('.myC h4, .myV h4, .myO h4, .myProfile h4, .myM h4, .myA h4, .pipeline h4, .myFAQ h4').removeClass('left_menu_act');
        $('.fimg input[type=submit], .fimg [data-name=frfile], .fimg .acf-icon.dark').slideUp("slow");
    });
    $('.myFAQ').on('click', function () {
        $(".mcr, .myVac, .mpr, .mmr, .myOffers, .myAnalit, .pipel2, .tasksData").slideUp("slow");
        $(".faqData").slideDown("slow");
        $('.myFAQ h4').addClass('left_menu_act');
        $('.myC h4, .myV h4, .myO h4, .myProfile h4, .myM h4, .myA h4, .pipeline h4, .myTasks h4').removeClass('left_menu_act');
        $('.fimg input[type=submit], .fimg [data-name=frfile], .fimg .acf-icon.dark').slideUp("slow");
    });
    $('.myM').on('click',  addKanban.bind(this));
    function addKanban() {
        let lastDate = $('#loadRes .lastDate1').html();
        $('.myM').attr('data-ld', lastDate);
        let currLD = $(".myM");
        if (currLD.attr("data-exist") == 'yes') {
            dellLD(currLD);
        }
        else {
            creLD(currLD);
        }
        if (currLD.attr("data-exist2") == 'yes') {
            updHot();
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
                },
                url: devportData.root_url + '/wp-json/ht/v2/manageHot2',
                data: {
                    'postId': $('.myM').data('hot'),
                    'hd': currTime,
                    'uid': $(".myM").data('uid')
                },
                type: 'PUT',
                success: (response) => {
                    let currLD = $(".myM");
                    console.log(response);
                },
                error: (response) => {
                    console.log(response);
                }
            });
        }
        else {
            creHot(currLD);
           console.log('cre1');
        }
        function reloadDelay() { 
            window.location.reload();
            }
            setTimeout(reloadDelay, 200);
    }
}
let openNt = $('.openNotif0').text();
    openNt=parseInt(openNt, 10);
if(openNt===0){
$('.mmr, .mcr, .myVac, .myOffers, .tasksData, .faqData, .pipel2, .myAnalit').hide();
    // $('.myM h4').addClass('left_menu_act');
     $('.myProfile h4').addClass('left_menu_act');
     rekrTabs();
    }    
    if(openNt===1){
        $(".myVac, .mpr, .mcr, .myOffers, .myAnalit, .pipel2, .tasksData, .faqData").hide();
        $('.myV h4, .myO h4, .myC h4, .myProfile h4, .myA h4, .pipeline h4, .myTasks h4, .myFAQ h4').removeClass('left_menu_act');
        $('.myM h4').addClass('left_menu_act');
        rekrTabs();
        // $(".mmr").slideDown("fast");
    }
    function notifDelay() { 
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: devportData.root_url + '/wp-json/ht/v3/manageHot3',
            data: {
                'postId': $('.myM').data('hot'),
                //'hd': currTime,
                'uid': $(".myM").data('uid')
            },
            type: 'PUT',
            success: (response) => {
                let currLD = $(".myM");
                console.log(response);
            },
            error: (response) => {
                // console.log(response);
            }
        });
        $('.openNotif0').text(0);
        // $('#numbHot').css('visibility', 'visible');
         }
        setTimeout(notifDelay, 1000);
    // ------------------------------------------------    
    function creHot(currLD) {
        let currTime = Math.floor(new Date().getTime() / 1000);
       // console.log(currTime);
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: devportData.root_url + '/wp-json/ht/v1/manageHot',
            type: 'POST',
            data: {
                'hd': currTime,
                'uid': currLD.data('uid')
            },
            success: (response) => {
                // currStar.find(".saveVac").css('color', '#18A0FB');
                currLD.attr('data-exist2', 'yes');
                currLD.attr('data-hot', response);
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    let hot1 = $('.myM').data('hot');
    //console.log(hot1);
    function updHot(hot1) {
        let currTime = 554;
        let bigTimer = $('.hotC .hotOnly:first-of-type').data('timer');
        bigTimer = parseInt(bigTimer, 10);
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.xx);
            },
            url: devportData.root_url + '/wp-json/ht/v1/manageHot',
            data: {
                'postId': $('.myM').data('hot'),
                'hd': bigTimer,
                'uid': $(".myM").data('uid')
            },
            type: 'PUT',
            success: (response) => {
                let currLD = $(".myM");

                 currLD.attr('data-exist2', 'no');
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    // ---------------------------------------------------
    function creLD(currLD) {
        let ld2 = $('#loadRes p:first-child .lastDate1').val();
        // console.log(ld2);
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: devportData.root_url + '/wp-json/ld/v1/manageLD',
            type: 'POST',
            data: {
                'ld': ld2,
                'uid': currLD.data('uid')
            },
            success: (response) => {
                currLD.attr('data-exist', 'yes');
                currLD.attr('data-ld', response);
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    let updKanb = {
        'postId': $('.myM').data('ld')
    }
    let ldID = $('.myM').data('ld');
    function dellLD(ldID) {
        let ld2 = $('#loadRes p:first-child .lastDate1').val();
        console.log(ld2);
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: devportData.root_url + '/wp-json/ld/v1/manageLD',
            data: {
                'postId': $('.myM').data('ld'),
                'md': ld2,
                'uid': $(".myM").data('uid')
            },
            type: 'PUT',
            success: (response) => {
                let currLD = $(".myM");
                 currLD.attr('data-exist', 'no');
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    let kels = $('.mcs p');
    let currTime = Math.floor(new Date().getTime() / 1000);
    for (let i = 0; i < kels.length; i++) {
        let cell = kels[i];
        let parent1 = cell.closest(".kandItem1");
       // parent1.style.backgroundColor = "red";
        if (cell.textContent  == 'Офер') {
            cell.classList.add('stRelised');
        }
        if (cell.textContent  == 'Личный') {
            cell.classList.add('stPersonal');
        }
        if (cell.textContent  == 'Новый') {
            cell.classList.add('stNew');                   
        }
        if (cell.textContent  == 'Занят') {
            //cell.disabled = true;
            cell.classList.add('stBusy');
           if(parent1) {
            parent1.querySelector('.getToVac').disabled = true;
           }              
        }
        if (cell.textContent  == 'В работе') {
            $('.mcd2 p:first-child').addClass('vRaboteDetails');
            cell.classList.add('stProc');
        }
        if (cell.textContent  == 'На паузе') {
            cell.classList.add('vPauza');
        }
        if (cell.textContent  == 'Горящий') {
            cell.classList.add('stHot');
            
        }
        if (cell.textContent  == 'В Базе канд') {
            cell.classList.add('stVBaze');
        }
        if (cell.textContent  == '') {
            // cell.html('Новый');
            cell.classList.add('stMt');
            // cell.textContent('stMt');
        }
    }
    $('.stMt').html('Новый').addClass('stNew');
   
    $('.addVacClick').on('click', function () {
        let cDT = Math.round(new Date().getTime()/1000);
        // let curID = $('.cusID').val();
        let curID = parseInt($('.cusID').html(), 10);
        
        $('.dateTime input').val(cDT);
        $('.curUsrId input').val(curID);
    });


    $(".rekomend .starWrapp .saveVac, .timlid .starWrapp .saveVac").parents('.vac_item').hide();
    $(".rekomend .starWrapp[data-exist=yes] .saveVac, .timlid .starWrapp[data-exist=yes] .saveVac").parents('.vac_item').show();
    $(".starWrapp[data-exist=yes] .saveVac").css('color', '#18A0FB').addClass("activ_star");



    $('.starWrapp').on("click", addRemove.bind(this));
    function addRemove(e) {
        let currStar = $(e.target).closest(".starWrapp");
       if (currStar.attr("data-exist") == 'yes') {
           dellStar(currStar);
       } else {
           creStar(currStar);
       }
    }
    function creStar(currStar) {
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: devportData.root_url + '/wp-json/vc/v1/manageVac',
            type: 'POST',
            data: { 'starId': currStar.data('vac')},
            success: (response) => {
                currStar.find(".saveVac").css('color', '#18A0FB');
                currStar.attr('data-exist', 'yes');
                let starCount = parseInt(currStar.find(".starCount").html(), 10);
                starCount++;
                currStar.find(".starCount").html(starCount);
                currStar.attr('data-star', 'response');
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    function dellStar(currStar) {
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.xx);
            },
            url: devportData.root_url + '/wp-json/vc/v1/manageVac',
            data: {'star': currStar.attr('data-star')},
            type: 'DELETE',
            success: (response) => {
                currStar.find(".saveVac").css('color', '#9E9E9E');
                currStar.attr('data-exist', 'no');
                let starCount = parseInt(currStar.find(".starCount").html(), 10);
                starCount--;
                currStar.find(".starCount").html(starCount);
                currStar.attr('data-star', '');
                $(".rekomend .starWrapp[data-exist=no] .saveVac").parents('.vac_item').hide('fast');
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
	
    $('.addNewCand .acf-accordion-title').append('<span class="acf-required acc_title">*</span>');
    $('.addNewCand input.acf-button').prop('disabled', true);
    $('.addNewCand .acf-field.acf-accordion').on("change keyup", function () {
        let telegr = $('.acf-field[data-name=telegram] input').val().length;
        let viberr = $('.acf-field[data-name=viber_r] input').val().length;
        let skyper = $('.acf-field[data-name=skype_r] input').val().length;
        let telr = $('.acf-field[data-name=tel_r] input').val().length;
        let emailr = $('.acf-field[data-name=email_r] input').val().length;
        let drugoe = $('.acf-field[data-name=drugoe] input').val().length;
        if (telegr || viberr || skyper || telr || emailr || drugoe) {
            $('.addNewCand input.acf-button').prop('disabled', false);
        } else {
            $('.addNewCand input.acf-button').prop('disabled', true);
        }

    });
    $('.addNewCand .acf-field[data-name=familiya]').on("change keyup", function () {
        let famVal = $('.addNewCand .acf-field[data-name=familiya] .acf-input input').val();
        $('.addNewCand .acf-field[data-name=_post_title] .acf-input input').val(famVal);
    });
    $('.oh button').click(function () {
        $('.rekv_form').css('display', 'block');
    });
    $(document).on('click',function(e){
        if(!(($(e.target).closest(".rekv_form").length > 0 ) || ($(e.target).closest(".oh button").length > 0))){
            $(".rekv_form").hide();
        }.acf-field-relationship").length > 0)))){
     });
    
     let chr = $('.sc_data a').attr("href");
     const g_viewer = "https://docs.google.com/viewer?url=";
     $('.sc_data a').attr("href", g_viewer + chr);

    
     $('.mcfind').on("change keyup", function () {
        function filterD() {
        $(".kandItem").hide().filter(function () {
            let rtnData = "";
            let regMK = $('.mcfind input').val().toLowerCase().trim().replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");

            rtnData = (
                $(this).attr("data-name1").toLowerCase().match(regMK) ||
                $(this).attr("data-fam1").toLowerCase().match(regMK) ||
                $(this).attr("data-spec1").toLowerCase().match(regMK) ||
                $(this).attr("data-spec4").toLowerCase().match(regMK) ||
                $(this).attr("data-spec3").toLowerCase().match(regMK) ||
                $(this).attr("data-tip").toLowerCase().match(regMK) ||
                $(this).attr("data-engl1").toLowerCase().match(regMK) ||
                $(this).attr("data-reg1").toLowerCase().match(regMK) ||
                $(this).attr("data-cit1").toLowerCase().match(regMK) ||
                $(this).attr("data-stat1").toLowerCase().match(regMK) 
            );

        return rtnData;
         }
        setTimeout(filterD, 300);
    });
    $('.faqfind').on("change keyup", function () {
        function filterFaq() {
        $(".itemW").hide().filter(function () {
            let rtnData = "";
            let regFAQ = $('.faqfind input').val().toLowerCase().trim().replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");

            rtnData = (
                $(this).attr("data-faq1").toLowerCase().match(regFAQ) 
            );

        return rtnData;
        }).fadeIn('fast');
         }
        setTimeout(filterFaq, 300);
    });
    $('.mcfind2').on("change keyup", function () {        
        $(".kandItem").hide().filter(function () {
            let rtnData = "";
            let ayear = $('#ayear').val();
            let amonth = $('#amonth').val();
            //console.log(regMK);

            rtnData = (
        
                $(this).attr("data-stat1").match(regMK) &&
                $(this).attr("data-spec1").match(regSpec)
            );

        return rtnData;
        }).fadeIn('fast');        
    });
    $('.mcfind3').on("change keyup", function () {        
        $(".kandItem").hide().filter(function () {
            let rtnData = "";
            let findcstat = $('#findcstat').val();
            let findcspec = $('#findcspec').val().trim().replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            //console.log(regMK);

            rtnData = (
        
                $(this).attr("data-stat1").match(findcstat) &&
                $(this).attr("data-spec1").match(findcspec)
            );

        return rtnData;
        }).fadeIn('fast');        
    });
   $('.openEdit').click(function () {
        $('.rekomFormEdit').show();
        $('.scwrap').hide();
   });
   $('#ce1').click(function () {
    $('.scwrap').show();
    $('.rekomFormEdit').hide();
});
   
    // ==================================================
    let vlink = window.location.href;
$('.link_vac').click(function () {
    
    const userid = '?r'+$('#userId').text();
    navigator.clipboard.writeText(vlink+userid)
    $(".link_vac").append('<div class="pop_mess">Ссылка скопирована</div>');
    $('.pop_mess').hide().slideDown('fast')
    let hideMess = function(){
        $('.pop_mess').slideUp('fast');
    };
    setTimeout(hideMess, 3000);
});

// ===========================Save recomend ===========================
$('#currHref').text(vlink);

const d1 = new Date();

const month = d1.getMonth()+1;
const day = d1.getDate();
const hours = d1.getHours();
const min = d1.getMinutes();
const sec = d1.getSeconds();

let curdt = d1.getFullYear() +"-"+ (month<10 ? '0' : '')+ month+"-" + (day<10 ? '0' : '') + day + " " + hours+":"+min+":"+sec;

    $(".starWr[data-exist=yes] .saveRec").css('color', '#18A0FB');
    $('.starWr').on("click", addRemove1.bind(this));
    function addRemove1(e) {
        let currStar = $(e.target).closest(".starWr");
        if (currStar.attr("data-exist") == 'yes') {
            dellStar1(currStar);
        } else {
            creStar1(currStar);
        }
        var finalNum = function(){
            let countCand = $('.sv_chose_cand .starWr[data-exist =yes]').length;
            $('.acf-field[data-name="c_num"] input').val(countCand);
            console.log(countCand);
        };
        setTimeout(finalNum, 800);
    }
    function creStar1(currStar) {
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: devportData.root_url + '/wp-json/rk/v1/manageRec',
            type: 'POST',
            data: {
                'starId': currStar.data('rec'),
                'vac_id': parseInt($('.vacId1').html(), 10),
                'rek_id': parseInt($('.recId1').html(), 10)
            },
            success: (response) => {
                currStar.find(".saveRec").css('color', '#18A0FB');
                currStar.attr('data-exist', 'yes');
                // let starCount = parseInt(currStar.find(".starCount").html(), 10);
                // starCount++;
                // currStar.find(".starCount").html(starCount);
                currStar.attr('data-star', 'response');
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    function dellStar1(currStar) {
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            // url: devportData.root_url + '/wp-json/dp/v1/rekom/',
            url: devportData.root_url + '/wp-json/rk/v1/manageRec',
            data: {'star': currStar.attr('data-star')},
            type: 'DELETE',
            success: (response) => {
                // $(".rekomend .starWrapp .saveVac").parents('.vac_item').hide();
                currStar.find(".saveRec").css('color', '#9E9E9E');
                currStar.attr('data-exist', 'no');
                // let starCount = parseInt(currStar.find(".starCount").html(), 10);
                // starCount--;
                // currStar.find(".starCount").html(starCount);
                currStar.attr('data-star', '');
                // $(".mcd .starWr[data-exist=no] .saveRec").parents('.vac_item').hide('fast');
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    $('.obranyCand .mcd').hide();
    $(".obranyCand .starWr[data-exist=yes] .saveRec").parents('.mcd').show();
    
    $('.offer1').hide();
    $('.offer1[data-ofers="Офер"]').show();

    let numCandidatesForVac = $('.candForVac');
    for (let i = 0; i < numCandidatesForVac.length; i++) {
        let curNunber = numCandidatesForVac[i];
        if (curNunber.textContent  == '') {
            curNunber.innerHTML += '0';
            curNunber.classList.add('numZero');
        }
        if (curNunber.textContent  == '0') {
            curNunber.classList.add('numZero');
        } else {
            curNunber.classList.remove('numZero');
        }
    }

    $('.chVac').on("click", vacAdd.bind(this));
    function vacAdd(e) {
    }
    vacAdd();
    $('.cv5').on("click", vacAdd5.bind(this));
    function vacAdd5(e) {
        let sumV = $('.cv5 input');
        let vacItms = '';
        for(let i=0;i<sumV.length;i++){
            let svi = sumV[i];
            // console.log(svi);
            if (svi.checked)
            vacItms += svi.value+'; ';
            }
         console.log(vacItms);
         $('.chVac textarea').html(vacItms);
    }
$('.addVacToCand').click(function () {
    if($('.cv5w').css('display') == 'none')
    {
        $('.cv5w').slideDown('slow');
    } else {
        $('.cv5w').slideUp('slow');
    }
})
    let crRecomFrId = $('.addNewCand .cuID1').html();
  
   $('.addc1').on( 'click', function() {
   
    let sec1 = new Date().getTime() / 1000;
    sec1 = sec1 + 86400;
    sec1 = Math.floor(sec1);
    console.log('vv22 ' + Math.floor(sec1));
    $('.addNewCand .acf-field[data-name=dataStart2] input').val(sec1);
    $('.addNewCand .acf-field[data-name=dataStart0] input').val(sec1);
   });
   
    $('.addNewCand .acf-field[data-name="user_r"] input').val(parseInt($(".addNewCand .cuID1").html(), 10));
   
    // $('.addNewCand .acf-field[data-name="dataStart2"] input').val($(".addNewCand #cutime").val());
    $('.addNewCand .acf-field[data-name="_post_content"] label').text('Дополнительно');
    $('.addNewCand .idNew input').val(1);
    let rekrID = vlink.split('?r')[1];
    if(rekrID!== undefined){
        rekrID = parseInt(rekrID, 10);
        $('.addNewCand .idRek input').val(rekrID);
    }
    let frelID = $('#frelId').text();
    if(frelID!==''){
        frelID = parseInt(frelID, 10);
        $('.addNewCand .idFreeln input').val(frelID);
    }
    let vacId = $('#vacId').text();
    if(vacId!==''){
        vacId = parseInt(vacId, 10);
        $('.addNewCand .idVac input').val(vacId);
    }
    $('.addNewCand .idDateTime input').val(curdt); 
    $('.addVac .acf-field[data-name="_post_content"] label').html('Описание проекта');
    $('.avalible_c').css('color', 'red')
    $('.all_c5').click(function () {
        $('.all_c5').css('color', 'red')
        $('.avalible_c').css('color', '#2C2C2C')
        $('.sv_chose_cand').slideUp('slow');
        $('.sv_all_c').slideDown('slow');
    })
    $('.avalible_c').click(function () {
        $('.avalible_c').css('color', 'red')
        $('.all_c5').css('color', '#2C2C2C')
        $('.sv_all_c').slideUp('slow');
        $('.sv_chose_cand').slideDown('slow');
    })
// ========================== создание ивента ===========================
if(marker1.length){
    //console.log(marker1.length);
    const surl7 = $('#surl7').html();
    let evc = parseInt($(".eventc").text(), 10);
    let evr = parseInt($(".eventr").text(), 10);
    let evf = parseInt($(".eventf").text(), 10);
    let evv = parseInt($(".eventv").text(), 10);
    let evd2 = parseInt($(".evd2").text(), 10);
    let evd = $(".eventd").text();
    
    $(".markWrap .marker1:last-of-type .eventc").css('color', 'red');
    $("#evExist p:last-of-type").css('color', 'blue');
     $('#evExist').load(surl7 + "/wp-content/themes/devport/functions/cre1Exist.php", {
       er: evr, ef: evf, ev: evv, ec: evc, edt: evd, ed2: evd2
    });
    let edelay = function(){
        let newCand = parseInt($(".markWrap .marker1:last-of-type .eventc").text(), 10);
        let exist1 = parseInt($("#evExist p:last-of-type").text(), 10);
        console.log(newCand);
        console.log(exist1);
        if(newCand!==exist1) {
            $('#eventBox').load(surl7 + "/wp-content/themes/devport/functions/create1_kevent.php", {
                er: evr, ef: evf, ev: evv, ec: evc, edt: evd, ed2: evd2
            });
        }
    };
    setTimeout(edelay, 300);
}
// ==========================frncr personal data =======================
    $('.fpsubmit').on("click", addFPD.bind(this));
    function addFPD(e) {
        let currFP = $(e.target).closest(".fpsubmit");
        if (currFP.attr("data-exist") == 'yes') {
            updFD(currFP);
        } else {
            creFP(currFP);
        }
    }
    function creFP(currFP) {
        let newFD = {
           'f_id': parseInt($(".cuID").html(), 10),
            'title': $(".fn").val(),
            'f_email': $(".fe").val(),
            'f_telef': $(".ftelef").val(),
            'f_rekviz': $(".fr").val(),
            'status': 'publish'
        }
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: devportData.root_url + '/wp-json/fd/v1/persData',
            type: 'POST',
            data: newFD,
            success: (response) => {
                // currStar.find(".saveVac").css('color', '#18A0FB');
                currFP.attr('data-exist', 'yes');
                // let starCount = parseInt(currStar.find(".starCount").html(), 10);
                // starCount++;
                // currStar.find(".starCount").html(starCount);
                currFP.attr('data-star', 'response');
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    if ($('.pd1').val() !== '') {
        $('.mpd .fn').val($('.pd1').val());
        $('.mpd .fe').val($('.pd2').val());
        $('.mpd .ftelef').val($('.pd3').val());
        $('.mpd .fr').val($('.pd4').val());
        $('.fpsubmit').html('Обновить');
    } else {
        $('.fpsubmit').html('Создать');
    }
    let postID = $('.pd5').val();
    // console.log(postID);
    function updFD(postID) {
        let updFD = {
            'postId': $('.pd5').val(),
            'f_id': parseInt($(".cuID").html(), 10),
            'title': $(".fn").val(),
            'f_email': $(".fe").val(),
            'f_telef': $(".ftelef").val(),
            'f_rekviz': $(".fr").val(),
            'status': 'publish'
        }
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: devportData.root_url + '/wp-json/fd/v1/persData',
            type: 'PUT',
            data: updFD,
            success: (response) => {
                 currStar.find(".saveVac").css('color', '#18A0FB');
                 currFP.attr('data-exist', 'yes');
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    let cu5 = $('#cf').val();
    const currUsr = $('#cf').val();
    $(".mailUsr").hide().filter(function () {
        let rtnMU = "";
        rtnMU = (
            $(this).data("usr").match(currUsr)
        )
        return rtnMU;
    }).fadeIn('fast');
   