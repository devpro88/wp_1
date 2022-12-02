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
            // autoplay: true,
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
            autoplay: true,
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
            let format1, format2, format3, format4 = '';

            if ($('#format1').is(':checked')) {
                format1 = $('#format1').val();
                $(".boxForChosenFormat").prepend(`
                <p class="chosenVal1">${format1}</p>`);
            }
            if ($('#format2').is(':checked')) {
                format2 = $('#format2').val();
                $(".boxForChosenFormat").prepend(`
                <p class="chosenVal1">${format2}</p>`);
            }
            if ($('#format3').is(':checked')) {
                format3 = $('#format3').val();
                $(".boxForChosenFormat").prepend(`
                <p class="chosenVal1">${format3}</p>`);
            }
            if ($('#format4').is(':checked')) {
                format4 = $('#format4').val();
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
            let format1, format2, format3, format4 = '';

            if ($('#format_freelancer1').is(':checked')) {
                format1 = $('#format_freelancer1').val();
                $(".fLabel").prepend(`
                <p class="cVal">${format1}</p>`);
            }
            if ($('#format_freelancer2').is(':checked')) {
                format2 = $('#format_freelancer1').val();
                $(".fLabel").prepend(`
                <p class="cVal">${format2}</p>`);
            }
            if ($('#format_freelancer3').is(':checked')) {
                format3 = $('#format_freelancer3').val();
                $(".fLabel").prepend(`
                <p class="cVal">${format3}</p>`);
            }
            if ($('#format_freelancer4').is(':checked')) {
                format4 = $('#format_freelancer4').val();
                $(".fLabel").prepend(`
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
                <p class="chosenVal2">Всі міста</p>`);
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
                <p class="chosenVal5">Усі Спеціалізація</p>`);
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
        // autoplay: true,
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
                'resume_r': $(".t2a").val(),
                'spec1': $(".nr4").val(),
                'zarplata': $(".nr6").val(),
                'user_r': $(".cuID").val(),
                'status': 'publish'
            }
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
                },
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
                            <p class="stNew">Особистий</p>
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
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

    function filterVacansies() {
        function filterVacTimeout() {
            $(".vac_item").hide().filter(function () {
                let rtnData = "";
                let regExName = $('#vac_speciality').val().trim().replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                let regComp = new RegExp($('#vac_comp').val().trim(), "ig");
                let regFramework = new RegExp($('#vac_framework').val().trim(), "ig");
                let regNoTech = new RegExp($('#vac_notech').val().trim(), "ig");
                let regCity = new RegExp($('.vac_city').val().trim(), "ig");
                let regCountry = new RegExp($('.vac_country').val().trim(), "ig");
                let regCountry2 = new RegExp($('#search_country_input').val().trim(), "ig");
                let regRegion = $('#regSelect').val();
                let opyt_vacans_Val = $('#opyt_vacans_input').val();
                let zarpl_from_vac = $('#vac_zarplata_from').val();
                let zarpl_to_v1 = $('#vac_zarpl_to').val();
               let vacTitle = $('.vac_title').val();
                if(regRegion==null) {
                    regRegion = '';
                }
    
                let format1, format2, format3, format4 = '';
    
                if ($('#i1').is(':checked')) {
                    format1 = $('#i1').val();
                }
                if ($('#i2').is(':checked')) {
                    format2 = $('#i2').val();
                }
                if ($('#i3').is(':checked')) {
                    format3 = $('#i3').val();
                }
                if ($('#i4').is(':checked')) {
                    format4 = $('#i4').val();
                }
    
                let engl1, engl2, engl3, engl4, engl5, engl6 = '';
                if ($('#ve1').is(':checked')) {
                    engl1 = $('#ve1').val();
                    console.log(eng1);
                }
                if ($('#ve2').is(':checked')) {
                    engl2 = $('#ve2').val();
                    console.log(engl2);
                }
                if ($('#ve3').is(':checked')) {
                    engl3 = $('#ve3').val();
                }
                if ($('#ve4').is(':checked')) {
                    engl4 = $('#ve4').val();
                }
                if ($('#ve5').is(':checked')) {
                    engl5 = $('#ve5').val();
                }
                if ($('#ve6').is(':checked')) {
                    engl6 = $('#ve6').val();
                }                
                    rtnData = (  
                        $(this).attr("data-comp").match(regComp) &&         
                        $(this).attr("data-spec").match(regExName) &&
                        $(this).attr("data-framework").match(regFramework) &&
                        $(this).attr("data-notech").match(regNoTech) &&
                        
                        $(this).attr("data-city").match(regCity) &&
                        ($(this).attr("data-city").match(regCountry2) ||
                        $(this).attr("data-country").match(regCountry2)) &&
                        $(this).attr("data-country").match(regCountry) &&
                        
                        $(this).data("opyt") >= opyt_vacans_Val &&
                        $(this).data("zarplata") >= zarpl_from_vac &&
                        // $(this).data("zarp2") <= zarpl_to_v1 &&
                        $(this).data("work_format").match(format1) &&
                        $(this).data("work_format").match(format2) &&
                        $(this).data("work_format").match(format3) &&
                        $(this).data("work_format").match(format4) &&
                        $(this).attr("data-region").match(regRegion) &&
                        $(this).data("angl").match(engl1) &&
                        $(this).data("angl").match(engl2) &&
                        $(this).data("angl").match(engl3) &&
                        $(this).data("angl").match(engl4) &&
                        $(this).data("angl").match(engl5) &&
                        $(this).data("angl").match(engl6)
                    );;
                return rtnData;
            }).fadeIn('fast');
        } setTimeout(filterVacTimeout, 300);
            let postCount = $('.right_vac .vac_item:visible').size();
            $('.dp_post_count').html('');
            $('.dp_post_count').html(`
            Найдено вакансий: ${postCount}
            `);
    
    }
// end open select
    $('#vac_filtrs').on("change keyup", function () {
        filterVacansies();
    });
    let phpCount = $('#phpCount').val();
    // console.log(phpCount);
    $('.dp_post_count').html(`
    Вакансій на сайті: ${phpCount}
    `);

    $('.sti').on("change keyup", function () {
        function filterDelay() {
        $(".vac_item").hide().filter(function () {
            let rtnData = "";
            let regExWord = new RegExp($('.i0').val().trim(), "ig");

            rtnData = (
                $(this).attr("data-title").match(regExWord) ||
                $(this).attr("data-city").match(regExWord) ||
                $(this).attr("data-angl").match(regExWord) ||
                $(this).attr("data-zarplata").match(regExWord) ||
                $(this).attr("data-work_format").match(regExWord) ||
                $(this).attr("data-status").match(regExWord) ||
                $(this).attr("data-company").match(regExWord) ||
                $(this).attr("data-data").match(regExWord) ||
                $(this).attr("data-country").match(regExWord)
            );

        return rtnData;
        }).fadeIn(1);
        let postCount = $('.right_vac .vac_item:visible').size();
        $('.dp_post_count').html('Найдено вакансий: ' + postCount);
         }
        setTimeout(filterDelay, 300);
    });
 
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
       // console.log(lastDate);
        $('.myM').attr('data-ld', lastDate);
        let currLD = $(".myM");
        if (currLD.attr("data-exist") == 'yes') {
            dellLD(currLD);
            //console.log('cre9');
        }
        else {
            creLD(currLD);
            //console.log('cre8');
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
    }
    function notifDelay() { 
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: devportData.root_url + '/wp-json/ht/v3/manageHot3',
            data: {
                'postId': $('.myM').data('hot'),
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
          console.log('hello2');
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
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
                // currStar.find(".saveVac").css('color', '#18A0FB');
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
         // console.log('hello2');
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
                // console.log(response);
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
        if (cell.textContent  == 'Офер') {
            cell.classList.add('stRelised');
        }
        if (cell.textContent  == 'Особистий') {
            cell.classList.add('stPersonal');
        }
        if (cell.textContent  == 'Новий') {
            cell.classList.add('stNew');
            
        }
        if (cell.textContent  == 'Занятий') {
            //cell.disabled = true;
            cell.classList.add('stBusy');
           if(parent1) {
            parent1.querySelector('.getToVac').disabled = true;
           }          
        }
        if (cell.textContent  == 'В роботі') {
            $('.mcd2 p:first-child').addClass('vRaboteDetails');
            cell.classList.add('stProc');
        }
        if (cell.textContent  == 'На паузі') {
            cell.classList.add('vPauza');
        }
        if (cell.textContent  == 'Горящий') {
            cell.classList.add('stHot');            
        }
        if (cell.textContent  == 'В Базі канд') {
            cell.classList.add('stVBaze');
        }
        if (cell.textContent  == '') {
            // cell.html('Новый');
            cell.classList.add('stMt');
        }
    }
    $('.stMt').html('Новий').addClass('stNew');
    $('.addVacClick').on('click', function () {
        let cDT = Math.round(new Date().getTime()/1000);
        let curID = parseInt($('.cusID').html(), 10);
        // console.log(cDT);
        $('.dateTime input').val(cDT);
        $('.curUsrId input').val(curID);
    })


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
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
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
        }
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
        }).fadeIn('fast');
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
            url: devportData.root_url + '/wp-json/rk/v1/manageRec',
            data: {'star': currStar.attr('data-star')},
            type: 'DELETE',
            success: (response) => {
                currStar.find(".saveRec").css('color', '#9E9E9E');
                currStar.attr('data-exist', 'no');
                currStar.attr('data-star', '');
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
        $('.chVac .values input:hidden').attr( "type", "text" ).prop('disabled', true);
    }
    vacAdd();
    $('.cv5').on("click", vacAdd5.bind(this));
    function vacAdd5(e) {
        let sumV = $('.cv5 input');
        let vacItms = '';
        for(let i=0;i<sumV.length;i++){
            let svi = sumV[i];
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
   
    $('.addNewCand .acf-field[data-name="_post_content"] label').text('Додатково');
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
let marker1 = $('.marker1');
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
            console.log('yessss::');
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
                currFP.attr('data-exist', 'yes');
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
                console.log(response);
            },
            error: (response) => {
                console.log(response);
            }
        });
    }
    let cu5 = $('#cf').val();
    // console.log(cu5);
    const currUsr = $('#cf').val();
    // console.log(currUsr);
    $(".mailUsr").hide().filter(function () {
        let rtnMU = "";
        rtnMU = (
            $(this).data("usr").match(currUsr)
        )
        return rtnMU;
    }).fadeIn('fast');
    // ====================Client============================================
    $('.addVac [data-name=_post_title] label, .addVac [data-name=vcompany] label').remove();
    $('.addVac [data-name=_post_title] input').attr("placeholder", "Название вакансии");
    $('.addVac [data-name=vcompany] input').attr("placeholder", "Название Вашей компании");

    $('.clientPD .myTitle span').click(function () {
        if($('.clientPD #acf-form').css('display') == 'none')
        {
            $('.clientPD #acf-form').slideDown('slow');
            $('.rpdc').slideUp('slow');
        } else {
            $('.clientPD #acf-form').slideUp('slow');
            $('.rpdc').slideDown('slow');
        }
        $('.clientPD .myTitle span').toggleClass('active');
    })

    // ==================== sotrudniki=====================
    $('.sotr1:contains("Client")').addClass('clt');
    $('.sotr1:contains("Клиент")').addClass('clt');
    $('.sotr1:contains("Редактор")').addClass('edtr');
    $('.sotr1:contains("Подписчик")').addClass('subscr');
    $('.sotr1:contains("Фрилансер")').addClass('subscr');
    $('.sotr1:contains("Администратор")').addClass('adm');


    let els = $('.vstatus');
    for (let i = 0; i < els.length; i++) {
        let cell = els[i];
        if (cell.textContent  == 'Низький') {
            cell.classList.add('stlow');
        }
        if (cell.textContent  == 'Звичайний') {
            cell.classList.add('stnorm');
        }
        if (cell.textContent  == 'Високий') {
            cell.classList.add('shight');
        }
        if (cell.textContent  == 'Гарячий') {
            cell.classList.add('sthot');
        }
    }
    const surl6 = $('#surl6').html();
    $('#loadRes').load(surl6 + "/wp-content/themes/devport/assets/js/km2.php",  {
        cu6: parseInt($('#cu6').html(), 10) });


    let timerId = setTimeout(function tick() {
        
        $('#loadRes').load(surl6 + "/wp-content/themes/devport/assets/js/km2.php",  {
            cu6: parseInt($('#cu6').html(), 10) });

        $('#loadRes2').load(surl6 + "/wp-content/themes/devport/assets/js/km3.php",  {
            cu6: parseInt($('#cu6').html(), 10) });


        let lastDate = $('#loadRes .lastDate1').val();
        // console.log(lastDate);
        let savedDate = $('#savedDate').val();
        // console.log('vv' + savedDate);
        if (savedDate == undefined) {
            savedDate = '2021-08-06 14:52:56';
        }
        // console.log(savedDate);
        let numMess = $('#loadRes .lastDate1').filter(function () {
            return $(this).val() > savedDate;
        });
        let numMess1 = numMess.length;
        //  console.log(numMess1);

        if (numMess1 > 0) {
            $('#numbMail, .numbMail').addClass('nmActive');
            $('.nmActive').html(numMess1);
        } else {
            $('#numbMail, .numbMail').removeClass('nmActive');
            $('.nmActive').html(0);
        }
        timerId = setTimeout(tick, 2000); // (*)
    }, 10);
    $('#numbMail, .numbMail').css('visibility', 'hidden');
    function showNotif() {
        $('#numbMail, .numbMail').css('visibility', 'visible');

    }
    setTimeout(showNotif, 2100);

    // ============== Analitika ========================
  $('.anFilterWr').on("change keyup", function () {
    $(".analCandItem").hide().filter(function () {
        let rtnData1 = "";
        let regRekruter = new RegExp($('.anRekruter').val().trim(), "ig");
        let regCandStatus = new RegExp($('.anStatus').val().trim(), "ig");

        rtnData1 = (
            $(this).attr("data-rekruter").match(regRekruter) &&
            $(this).attr("data-status").match(regCandStatus)
        );
        return rtnData1;
    }).fadeIn('fast');
  });
// ================= baza Kandidatov ====================bkfw
    $(".bkfOpen").click(function () {
        $(".bkfContent").toggleClass('showF');
        $('.bkfOpen .dashicons').toggleClass('rotateFarrow');
    });
    $('#bk_filtrs').on("change keyup", function () {
        $(".bkItem").hide().filter(function () {
            let rtnBK = "";
            let regSpecBK=regComp =regFramework=regNoTech=regCity= '';
            if($('#vac_speciality').val() !==null){
                regSpecBK = $('#vac_speciality').val().trim().replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            }
           if($('#vac_comp').val() !==null){
                regComp = new RegExp($('#vac_comp').val().trim(), "ig");
            }
            if($('#vac_framework').val() !==null){
                regFramework = new RegExp($('#vac_framework').val().trim(), "ig");
            }
            if($('#vac_notech').val() !==null){
                regNoTech = new RegExp($('#vac_notech').val().trim(), "ig");
            }
            if($('.vac_city').val() !==null){
                regCity = new RegExp($('.vac_city').val().trim(), "ig");
            }
            let regRegion = $('#regSelect').val();
            if(regRegion==null) {
                regRegion = '';
            }
            let format1, format2, format3, format4, format5 = '';

            let opyt_bk = $('#opyt_vacans_input').val();

            if ($('#bk1').is(':checked')) {
                format1 = $('#bk1').val();
            }
            if ($('#bk2').is(':checked')) {
                format2 = $('#bk2').val();
            }
            if ($('#bk3').is(':checked')) {
                format3 = $('#bk3').val();
            }
            if ($('#bk4').is(':checked')) {
                format4 = $('#bk4').val();
            }
            if ($('#bk5').is(':checked')) {
                format5 = $('#bk5').val();
            }

            let eng1, eng2, eng3, eng4, eng5, eng6 = '';
            if ($('#bke1').is(':checked')) {
                eng1 = $('#bke1').val();
               // console.log(eng1);
            }
            if ($('#bke2').is(':checked')) {
                eng2 = $('#bke2').val();
                console.log(eng2);
            }
            if ($('#bke3').is(':checked')) {
                eng3 = $('#bke3').val();
            }
            if ($('#bke4').is(':checked')) {
                eng4 = $('#bke4').val();
            }
            if ($('#bke5').is(':checked')) {
                eng5 = $('#bke5').val();
            }
            if ($('#bke6').is(':checked')) {
                eng6 = $('#bke6').val();
            }
            let zFrom = 0;
            let zTo = 100000;
            if($('#bk_zarplata_from').val()>0){
                zFrom = $('#bk_zarplata_from').val();
            }
            if($('#bkc_zarpl_to').val()>0){
                zTo = $('#bkc_zarpl_to').val();
            }
            console.log(zFrom);
            rtnBK = (
                $(this).data("opytbk") >= opyt_bk &&
                $(this).data("work_format").match(format1) &&
                $(this).data("work_format").match(format2) &&
                $(this).data("work_format").match(format3) &&
                $(this).data("work_format").match(format4) &&
                $(this).data("work_format").match(format5) &&
                $(this).attr("data-dolzhn").match(regSpecBK) &&
                $(this).attr("data-companies").match(regComp) &&
                $(this).attr("data-framework").match(regFramework) &&
                $(this).attr("data-notech").match(regNoTech) &&                  
                $(this).attr("data-citybk").match(regCity) &&
                $(this).attr("data-region").match(regRegion) &&
                $(this).data("zar") >= zFrom &&
                $(this).data("zar") <= zTo &&
                $(this).data("angl").match(eng1) &&
                $(this).data("angl").match(eng2) &&
                $(this).data("angl").match(eng3) &&
                $(this).data("angl").match(eng4) &&
                $(this).data("angl").match(eng5) &&
                $(this).data("angl").match(eng6)
            );
            return rtnBK;
        }).fadeIn('fast');
    });
     // =====================================================================================
     $('.bazaFind').on("change keyup", function () {
        //  alert('mm88');
        function bazaDelay() {
        $(".bkItem").hide().filter(function () {
            let rtnData = "";
            let regExWord = new RegExp($('#bk0').val().trim().toLowerCase(), "ig");

            rtnData = (
                $(this).attr("data-citybk").toLowerCase().match(regExWord) ||
                $(this).attr("data-dolzhn").toLowerCase().match(regExWord) ||
                $(this).attr("data-framework").toLowerCase().match(regExWord) ||
                $(this).attr("data-notech").toLowerCase().match(regExWord) ||
                $(this).attr("data-companies").toLowerCase().match(regExWord) ||
                $(this).attr("data-angl").toLowerCase().match(regExWord) ||
                $(this).attr("data-opytbk").toLowerCase().match(regExWord) ||
                $(this).attr("data-zar").toLowerCase().match(regExWord) ||
                $(this).attr("data-work_format").toLowerCase().match(regExWord)
            );

        return rtnData;
        }).fadeIn(1);
        $('.saveVac:not(.activ_star)').parents('.vac_item').hide();
        $('.saveVac:not(.activ_star)').parents('.vac_item').fadeOut(1);
        let postCount = $('.right_vac .kandItem1:visible').size();
        $('.dp_post_count').html('Найдено вакансий: ' + postCount);
         }
        setTimeout(bazaDelay, 300);
    });

    // ================================================================================================
   $('.cdet [data-name="_post_title"] .acf-label label').html('Название Вашей Компании <span class="acf-required">*</span>');
     $('<span class="dashicons dashicons-admin-home"></span>').appendTo('.cdet [data-name="_post_title"] .acf-input-wrap');
     $('<span class="dashicons dashicons-flag"></span>').appendTo('.cdet [data-name="osnovana"] .acf-input-wrap');
     $('<span class="dashicons dashicons-businessperson"></span>').appendTo('.cdet [data-name="com_comp"] .acf-input-wrap');
     $('<span class="dashicons dashicons-plugins-checked"></span>').appendTo('.cdet [data-name="min_size"] .acf-input-wrap');
     $('<span class="dashicons dashicons-clock"></span>').appendTo('.cdet [data-name="avg_rate"] .acf-input-wrap');
     $('<span class="dashicons dashicons-admin-site-alt3"></span>').appendTo('.cdet [data-name="site_comp"] .acf-input-wrap');
     // ---------------------------------------------------------------------------------------
     $( '.cdet [data-name="_post_title"] .acf-input-wrap' ).hover(function(){
        $('.cdet [data-name="_post_title"] .acf-label label').fadeIn();
	    }, function(){
        $('.cdet [data-name="_post_title"] .acf-label label').fadeOut();
	  });
      $( '.cdet [data-name="osnovana"] .acf-input-wrap' ).hover(function(){
        $('.cdet [data-name="osnovana"] .acf-label label').fadeIn();
	    }, function(){
        $('.cdet [data-name="osnovana"] .acf-label label').fadeOut();
	  });
      $( '.cdet [data-name="tip_comp"] .acf-input' ).hover(function(){
        $('.cdet [data-name="tip_comp"] .acf-label label').fadeIn();
	    }, function(){
        $('.cdet [data-name="tip_comp"] .acf-label label').fadeOut();
	  });
      $( '.cdet [data-name="com_comp"] .acf-input-wrap' ).hover(function(){
        $('.cdet [data-name="com_comp"] .acf-label label').fadeIn();
	    }, function(){
        $('.cdet [data-name="com_comp"] .acf-label label').fadeOut();
	  });
      $( '.cdet [data-name="min_size"] .acf-input-wrap' ).hover(function(){
        $('.cdet [data-name="min_size"] .acf-label label').fadeIn();
	    }, function(){
        $('.cdet [data-name="min_size"] .acf-label label').fadeOut();
	  });
      $( '.cdet [data-name="avg_rate"] .acf-input-wrap' ).hover(function(){
        $('.cdet [data-name="avg_rate"] .acf-label label').fadeIn();
	    }, function(){
        $('.cdet [data-name="avg_rate"] .acf-label label').fadeOut();
	  });
      $( '.cdet [data-name="site_comp"] .acf-input-wrap' ).hover(function(){
        $('.cdet [data-name="site_comp"] .acf-label label').fadeIn();
	    }, function(){
        $('.cdet [data-name="site_comp"] .acf-label label').fadeOut();
	  });
// ======================= single candidate =================================
let rat = $('.kRating').data('rating');
if(rat!=undefined){
    // console.log(rat);
let arr2 = rat.split(',');
if (arr2[0].match('Прекрасно')) {
    $('#rt1').addClass('rInnActive');
}
if (arr2[0].match('Хорошо')) {
    $('#rt2').addClass('rInnActive');
}
if (arr2[0].match('Плохо')) {
    $('#rt3').addClass('rInnActive');
}
// ..................................................
if (arr2[1].match('Прекрасно')) {
    $('#rt4').addClass('rInnActive');
}
if (arr2[1].match('Хорошо')) {
    $('#rt5').addClass('rInnActive');
}
if (arr2[1].match('Плохо')) {
    $('#rt6').addClass('rInnActive');
}
// ..................................................
if (arr2[2].match('Прекрасно')) {
    $('#rt7').addClass('rInnActive');
}
if (arr2[2].match('Хорошо')) {
    $('#rt8').addClass('rInnActive');
}
if (arr2[2].match('Плохо')) {
    $('#rt9').addClass('rInnActive');
}
// .................................................
if (arr2[3].match('Прекрасно')) {
    $('#rt10').addClass('rInnActive');
}
if (arr2[3].match('Хорошо')) {
    $('#rt11').addClass('rInnActive');
}
if (arr2[3].match('Плохо')) {
    $('#rt12').addClass('rInnActive');
}
}

$('#rhistory').on( 'click', function() {
    $('.historyW').fadeIn();
    $('#loadHist').load(surl6 + "/wp-content/themes/devport/functions/candidate/load_history.php",  {
        cu8: parseInt($('.currCand').html(), 10) });
    function hDelay2() {
       let name1 = '';
       let link1 = '';
       $( "#loadHist .vac1" ).each(function(  ) {
           let vacId = parseInt($( this ).text(), 10);
           $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
            },
            url: surl6 + '/wp-json/wp/v2/vacancy/'+vacId,
            type: 'GET',
            success: (response) => {
                name1=response.title.rendered;
                link1=response.link;
                $(this).append(`<span class="vac2">Hа вакансию: </span><a class="vac3" href="${link1}" class="vacName">${name1}</a>`);
            },
            error: (response) => {
                console.log(response);
            }
        });        
      });
      $( "#loadHist .rekr1" ).each(function(  ) {
        let rekrId = parseInt($( this ).text(), 10);
        $(this).load(surl6 + "/wp-content/themes/devport/functions/candidate/get_vac_name.php",  {
            re: rekrId});       
     });
     $( "#loadHist .frelns" ).each(function(  ) {
        let frId = parseInt($( this ).text(), 10);
        $(this).load(surl6 + "/wp-content/themes/devport/functions/candidate/get_freeln_name.php",  {
            fr: frId});       
     });
    }setTimeout(hDelay2, 200);
});
$(document).on('click',function(e){
    if(!(($(e.target).closest("#rhistory").length > 0 ) || ($(e.target).closest(".historyW").length > 0))){
        $(".historyW").fadeOut();
    }
 });
 $('#ce2').on( 'click', function() {
    $('.historyW').fadeOut();
});

    // ======================================================    
    $('#loadRes8').load(surl6 + "/wp-content/themes/devport/functions/load_countries_filter.php",  {
        cu6: parseInt($('#cu6').html(), 10) });
    $('#loadRes9').load(surl6 + "/wp-content/themes/devport/functions/loadCountriesFilter.php",  {
        cu6: parseInt($('#cu6').html(), 10) });
    $('#search_country_item').load(surl6 + "/wp-content/themes/devport/functions/load_countries_filter_2.php",  {
        cu6: parseInt($('#cu6').html(), 10) });
    $('#loadRegions').on("change keyup", function () {
         $('#loadRes8  option').prop('selected', function() {
            return this.defaultSelected;
        });
        $('.vac_city  option').prop('selected', function() {
            return this.defaultSelected;
        });
        const region = $('#loadRegions').val();
        if (region === 'Україна') {
            $('.countries_wrapper').slideUp();
            $('.city_wrapper').slideDown();
        } else {
            $('.city_wrapper').slideUp();            
            $('.countries_wrapper').slideDown();

            const region_options = $('#loadRes8  option');
            region_options.css('display', 'none');
            $("#loadRes8  option[data-region='" + region + "']").css('display', 'block');            
        }
    });
    
    // ------------------- typing search ----------------------------
    $('#search_country').on( 'click', function() {
        myFunction();
    });
    function myFunction() {
        document.getElementById("search_country_div").classList.toggle("show");
      }
      $('#search_country_input').on("change keyup", function () {
         let input, filter, ul, li, a, i;
         filter = $('#search_country_input').val().toUpperCase();
        a = $('#search_country_div p');
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
       // console.log(input);
      });

    $('#search_country_div').on("click", getCountry.bind(this));
    function getCountry(e) {
        let currCountry = $(e.target).closest(".country2").text();
        $('#search_country_input').val(currCountry);
        $('#selected_country').val(currCountry);
        $('#search_country_div').slideUp();
        console.log(currCountry);
        filterVacansies();
    };
    $('#search_country_input').on("click", function () {
        if($('#search_country_div').css('display') == 'none')
            {
                $('#search_country_div').slideDown();
            }
    });

console.log('24 hours '+Math.floor(new Date().getTime() / 1000 + 84500));
console.log('60 sec '+Math.floor(new Date().getTime() / 1000+60));
});