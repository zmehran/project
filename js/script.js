$(document).ready(function (e) {
   /* $(document).ready(function() {*/
        $(".animsition-link").animsition({
            inClass: 'fade-in-right-sm',
            outClass: 'fade-out-right-sm',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            loadingInner: '', // e.g '<img src="loading.svg" />'
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            //overlay : false,
            //overlayClass : 'animsition-overlay-slide',
            //overlayParentElement : 'body',
            //transition: function(url){ window.location.href = url; }
        });


    let formLogin = $('.row-input-login')
    let username = formLogin.find('input[id="username"]')
    let icon = formLogin.find('i')
    let password = formLogin.find('input[id=password]')
    let usernameValue = username.val()
    let passwordValue = password.val()


   /* $('.btn-green').click(function () {

        if(usernameValue.length == 0)
        {
            username.addClass('errorInput')
            username.addClass('colorPlace')
            //username.attr('placeholder' , 'نام کاربری وارد شده اشتباه است')
            //username.attr('نام کاربری وارد شده اشتباه است','placeholder')
            icon.addClass('colorIcon')
        }


    })*/


    $('#frm input.user-pass-input').blur(function(){
        if(!$(this).val()){
            $(this).addClass('errorInput')
            $(this).addClass('colorPlace')
            $(this).next('i.bi').addClass('colorIcon')
        } else{
            $(this).removeClass('errorInput')
            $(this).removeClass('colorPlace')
            $(this).next('i.bi').removeClass('colorIcon')
        }
    });



})