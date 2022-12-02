jQuery(document).ready(function ($) {
    console.log('24 hours '+Math.floor(new Date().getTime() / 1000 + 84500));
    
     console.log('60 sec '+Math.floor(new Date().getTime() / 1000+60));
    $('#pipe_filtrs').on("change keyup", function () {
        
        let phpCount = $('#phpCount').val();
    $('.dp_post_count2').html(`
    Кандидатов на сайте: ${phpCount}
    `);
        $(".kandItem1").hide().filter(function () {
            let rtnData = "";
            let regExName = $('#vac_speciality').val().trim().replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            let framework1 = new RegExp($('#vac_framework').val().trim(), "ig");
            let noTech = new RegExp($('#vac_notech').val().trim(), "ig");
            let regComp = new RegExp($('#vac_comp').val().trim(), "ig");
            let regNoTech = new RegExp($('#vac_notech').val().trim(), "ig");
            let regCity = new RegExp($('#citySelect').val().trim(), "ig");
            let regRegion = $('#regSelect').val();
            let oput = $('#opyt_vacans_input').val();
            let zarpl = $('#zarpl').val();
            let zarpl_to = $('#zarpl_to').val();
            let rek_comp = $('#vac_comp').val();             
            let zarpl_to_v1 = $('#vac_zarpl_to').val();
           let vacTitle = $('.vac_title').val();
            if(regRegion==null) {
                regRegion = '';
            }
            if(zarpl_to=='') {
                zarpl_to = 51000;
            }

            let format1 = '';
            let format2 = '';
            let format3 = '';
            let format4 = '';

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

            let engl1 = '';
            let engl2 = '';
            let engl3 = '';
            let engl4 = '';
            let engl5 = '';
            let engl6 = '';
            if ($('#ve1').is(':checked')) {
                engl1 = $('#ve1').val();
            }
            if ($('#ve2').is(':checked')) {
                engl2 = $('#ve2').val();
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
            
           let oputattr = $(this).data("oput");
           if (oputattr==''){oputattr=0;}
            rtnData = (
                $(this).attr("data-spec1").match(regExName) &&
                $(this).attr("data-spec4").match(framework1) &&
                $(this).attr("data-spec3").match(noTech) &&
                $(this).data("zar") >= zarpl &&
                $(this).data("zar") <= zarpl_to &&
                $(this).data("work_format").match(format1) &&
                $(this).data("work_format").match(format2) &&
                $(this).data("work_format").match(format3) &&
                $(this).data("work_format").match(format4) &&
                $(this).data("reg1").match(regRegion) &&
                $(this).attr("data-cit1").match(regCity) &&
                oputattr >= oput &&
                $(this).data("compn").match(rek_comp) &&
                $(this).data("angl").match(engl1) &&
                $(this).data("angl").match(engl2) &&
                $(this).data("angl").match(engl3) &&
                $(this).data("angl").match(engl4) &&
                $(this).data("angl").match(engl5) &&
                $(this).data("angl").match(engl6)            
            );           
            return rtnData;
        }).fadeIn('fast');
        function filterDelay2() {
            let postCount = $('.right_vac .kandItem1:visible').size();
        // $('.dp_post_count').html(postCount);
        $('.dp_post_count2').html('');
        $('.dp_post_count2').html(`
        Найдено кандидатов: ${postCount}
        `);
        }setTimeout(filterDelay2, 100);
        

    });
    let phpCount = $('#phpCount').val();
    // console.log(phpCount);
    $('.dp_post_count2').html(`
    Кандидатов на сайте: ${phpCount}
    `);

    // =====================================================================================
    $('.pipef').on("change keyup", function () {
        function filterDelay() {
        $(".kandItem1").hide().filter(function () {
            let rtnData = "";
            let regExWord = new RegExp($('#pipe0').val().trim().toLowerCase(), "ig");

            rtnData = (
                $(this).attr("data-fam1").toLowerCase().match(regExWord) ||
                $(this).attr("data-cit1").toLowerCase().match(regExWord) ||
                $(this).attr("data-reg1").toLowerCase().match(regExWord) ||
                $(this).attr("data-spec1").toLowerCase().match(regExWord) ||
                $(this).attr("data-spec4").toLowerCase().match(regExWord) ||
                $(this).attr("data-spec3").toLowerCase().match(regExWord) ||
                $(this).attr("data-angl").toLowerCase().match(regExWord) ||
                $(this).attr("data-work_format").toLowerCase().match(regExWord) ||
                $(this).attr("data-stat1").toLowerCase().match(regExWord) ||
                $(this).attr("data-compn").toLowerCase().match(regExWord)
            );

        return rtnData;
        }).fadeIn(1);
       
        $('.saveVac:not(.activ_star)').parents('.vac_item').hide();
        $('.saveVac:not(.activ_star)').parents('.vac_item').fadeOut(1);
        let postCount = $('.right_vac .kandItem1:visible').size();
        $('.dp_post_count2').html('Найдено кандидатов: ' + postCount);
         }
        setTimeout(filterDelay, 300);
    });

    // ================================================================================================
    
     $('.faq_bgr').on('click', function () {
        $('body').removeClass("show_answ");
        $('.faqItem').removeClass("show2");
    });

    $(".faq1").on("click", ".faqOpen", updRekWrapper.bind(this));
    function updRekWrapper(e) {
        $('body').addClass("show_answ");
        let thisR = $(e.target).parents(".itemW");
        thisR.find(".faqItem").addClass("show2");
    }
    $('.faqClose').on('click', function () {
        $('body').removeClass("show_answ");
        $('.faqItem').removeClass("show2");
    });

    // ================================== Мои задачи ========================================
    const surl6 = $('#surl6').html();
    $('#loadCalend').load(surl6 + "/wp-content/themes/devport/functions/loadRekrKalendar.php",  {
        cu6: parseInt($('#cu6').html(), 10), cu7: parseInt($('#cutask').html(), 10) });

   

// ============================================================================================
     let cur_time = new Date().getTime() / 1000;     
     cur_time = parseInt(cur_time);
     $('#cur_time').html(cur_time);
     let currItem2 = '';
     let idCand2 = 0;
    for (let i = 0; i < cur_item_2.length; i++) {
        let cell = cur_item_2[i];
        let kicl= 'cl' + [i];
        
        cell.classList.add(kicl);
         let tdbval = cell.dataset.timedb;
         let pipeVal = cell.dataset.pipe;
    // ---------------------------------------------------------------------------------------
        let timeInSecs;
        let ticker;
        
        function startTimer(secs) {
            timeInSecs = parseInt(secs);
            ticker = setInterval(tick9, 1000); 
        }
        
        let executed = 0;
        
        function tick9( ) {
            $('.timlid .getToVac').prop("disabled", false);
            let secs = timeInSecs;
            if (secs > 0) {
            timeInSecs--;
            }
            else {
                $('.'+kicl+' .timer2').html(); 
                $('.'+kicl+' .timer2').addClass('dnone');                
                
                if(executed!==1) {
                    executed = 1;
                    console.log('timer stopped');
                    currItem2 = cell.dataset.id;

                    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                    if(pipeVal=="own") {
                        const newTime = Math.floor(new Date().getTime() / 1000+86400);
                        const timer1 = {
                            'postId': currItem2,
                            'timer': newTime,
                            'status': 'Новый'
                        }
                        $.ajax({
                            beforeSend: (xhr) => {
                                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
                            },
                            url: devportData.root_url + '/wp-json/dp/v5/timerR/',
                            type: 'PUT',
                            data: timer1,
                            success: (response) => {
                                 cell.querySelector('.stat4').html('Горячий').addClass('stHot');
                                 makeRekomReadOnly(thisR);
                                
                            },
                            error: (response) => {
                                 makeRekomReadOnly(thisR);
                            }
                        });
                        cell.classList.add('dnone');                 
                      
                    }
                    const newTime2 = Math.floor(new Date().getTime() / 1000);
                        const timer2 = {
                            'postId': currItem2,
                            'timer': newTime2,
                            'status': 'Горящий'
                        }
                    if(pipeVal=="public") {
                        console.log(timer2);
                        $.ajax({
                            beforeSend: (xhr) => {
                                xhr.setRequestHeader('X-WP-Nonce', devportData.cb);
                            },
                            url: devportData.root_url + '/wp-json/dp/v5/timerR/',
                            type: 'PUT',
                            data: timer2,
                            success: (response) => {
                                 cell.querySelector('.stat4').html('Горячий').addClass('stHot');
                                 makeRekomReadOnly(thisR);
                               
                            },
                            error: (response) => {
                                // makeRekomReadOnly(thisR);
                            }
                        });
                       let cellStatus = cell.querySelector('.stat4');
                       cellStatus.classList.add('stHot');
                       cellStatus.textContent = "Горящий";
                    }
                   // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                   
               
                }
                let cellBtn = cell.querySelector('.getToVac');
                   cellBtn.removeAttribute('disabled');             
            }
            
            let hours= Math.floor(secs/3600);
            secs %= 3600;
            let mins = Math.floor(secs/60);
            secs %= 60;            
        let pretty = ( (hours < 10 ) ? "0" : "" ) + hours + ":" + ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
            $('.'+kicl+' .timer2').html(pretty).css('border', '1px dashed #000');
            }
            if(tdbval>0 && tdbval - rr>0){
                startTimer(tdbval - rr);  // 24 hours in seconds
            }        
               
    }

    // ============================= Забрать на Вакансию ============================   
    let currItem1 = '';
    let name1 = '';
    let fam1 = '';
    let idCand = 0;
    $('.getToVac').on("click", function (e) {
        $('#moveToRekr').fadeIn();
        currItem1 = $(e.target).closest(".kandItem1");
        idCand = currItem1.data("id");
        name1 = currItem1.data("name1");
        fam1 = currItem1.data("fam1");

        $('#cName').text(name1+' '+fam1);

        $(".vacOption").hide();
        $(".vacOption[data-exist=yes]").show();
    });
    
    $('#saveMove').on("click", function () {
        const surl7 = $('#surl7').html();      
        
// .............................................................
        
        let sec1 = new Date().getTime() / 1000;
        sec1 = sec1 + 86400;
        sec1 = Math.floor(sec1);
        
        const move1 = {
            'postId': idCand,
            'rekr': $('#moveToRekr h2').data("rekr"),
            'vac': $('#mVac').val(),
            'status': 'Занят',
            'date0': sec1
        }
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', devportData.xx);
            },
            url: devportData.root_url + '/wp-json/dp/v4/moveR/',
            type: 'PUT',
            data: move1,
            success: (response) => {
            },
            error: (response) => {
            }
        });
        
        // .................... create id event when reassign rekruter ...................................
        const d1 = new Date();
        const month = d1.getMonth()+1;
        const day = d1.getDate();
        const hours = d1.getHours();
        const min = d1.getMinutes();
        const sec = d1.getSeconds();
        const curdt = d1.getFullYear() + (month<10 ? '0' : '')+"-"+ month+"-" + (day<10 ? '0' : '') + day + " " + hours+":"+min+":"+sec;
        
        let evc = idCand;
        let evr = $('#moveToRekr h2').data("rekr");
        let evf = 0;
       
        let evv = $('#mVac').val();
        let evd2 = sec1;
        let evd = curdt;
        $('#eventBox').load(surl7 + "/wp-content/themes/devport/functions/create1_kevent.php", {
            er: evr, ef: evf, ev: evv, ec: evc, edt: evd, ed2: evd2
        });
       
        $('#moveToRekr').fadeOut();
        window.location.reload();
      
    });    
    // ----------------------------------------------------------------------------
    $('.close1').on("click", function () {
        $('#moveToRekr').fadeOut();
    });

    // ===================== calendar ===================
    $(function(){
        $("#date5").datepicker({
            changeYear: true,
        onSelect: function(dateText){
            $('#start5').html(dateText);
        }
        });
        $("#date5").datepicker("option", "showAnim", 'drop');
        $("#date5").datepicker("option", "monthNames", [ "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December" ]);
        $("#date6").datepicker({
            dateFormat: 'yy-mm-dd',
            changeYear: true,
            onSelect: function(dateText){
                $('#end5').html(dateText);
            }
        });
        $("#date6").datepicker("option", "showAnim", 'clip');
    });

    // ================================= Личный Pipeline ===========================================
    let pipeState = 1;
    $('.ownPipe').on("click", function () {
        if(pipeState===1){
            $('.ownPipe').css('transition', 'all .3s ease 0s').text('Мои кандидаты');
            pipeState=0;
            $(".pipe1").slideUp("slow");
            $(".pipe2").slideDown("slow");
        }else{
            $('.ownPipe').text('Личный Pipeline');
            pipeState=1;
            $(".pipe2").slideUp("slow");
            $(".pipe1").slideDown("slow");
        }
    });

    // ========================= Рассылка уведомлений рекрутёрам об горящих кандидатах =====================
    let lastVisit = $('.hotTime').text();
    lastVisit = parseInt(lastVisit, 10);
    let changedVal = 0;
    let timerId = setTimeout(function tick() {
        $('.loadRes3').load(surl6 + "/wp-content/themes/devport/functions/candidate/send_notif.php",  {            
            cu6: parseInt($('#cu6').html(), 10) });
            function dunDelay() { 
                let dNumbr=$('.loadRes3 div').length;               
                let dElem=$('.hotC>div').length;
                if(dNumbr !== dElem){               
                    $('#numbHot').remove();
                    
                    const nHot = dNumbr-dElem;
                    if(nHot>0){
                        $('#numbHot5').css('display', 'block');
                        $('#numbHot5').text(nHot);
                        $('#numbHot').css('visibility', 'visible');
                    }
                    
                    
                    window.location.reload();
                }
                 }
                setTimeout(dunDelay, 3000);

                let numHot = $('.hotOnly .hot5').filter(function () {
                    return $(this).val() > lastVisit;
                });
                let numHot1 = numHot.length;
                
        if (numHot1 > 0) {
            $('#numbHot').addClass('hotActive');
            $('.hotActive').text(numHot1);
        } else {
            $('#numbHot').removeClass('hotActive');
            $('.hotActive').text(0);
        }
        timerId = setTimeout(tick, 2000); // (*)
    }, 10);
      $('#numbHot').css('visibility', 'hidden');
     function showNotif() {
         $('#numbHot').css('visibility', 'visible');

     }
    setTimeout(showNotif, 2100);

    // ---------------------------- open notification tab ----------------------------------
$('.openNotif').on('click', function () {
    $.ajax({
        beforeSend: (xhr) => {
            xhr.setRequestHeader('X-WP-Nonce', devportData.xxx);
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
});
});