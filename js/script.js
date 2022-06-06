$(document).ready(function (e) {

/*change icon in page layout*/
    $('.iconChange').on('mouseenter',function () {
        $(this).children('img:nth-child(1)').css('display','none')
        $(this).children('img:nth-child(2)').css('display','block')
    }).on('mouseleave',function(){
        $(this).children(':nth-child(2)').css('display','none')
        $(this).children(':nth-child(1)').css('display','block')

    })
/*dropdown online menu sidebar*/
    var dropdownOnlineMenuSidebar = $('.dropdown.online')

    dropdownOnlineMenuSidebar.click(function () {

        $(this).find('.onlineMenu').css('display','none')
    })
    dropdownOnlineMenuSidebar.on('mouseenter',function () {

        $(this).find('.onlineMenu').fadeIn('show')
    }).on('mouseleave' , function () {
        $(this).find('.onlineMenu').fadeOut('show')
    })
    //$('.sidebar-menu .iconChange').mouseenter
    /*document.setTimeout(function () {
        $('button.btn-green-sendSMS').addClass('btn-green-test')
    },5000)*/

    window.setTimeout(function() {
        $('button.btn-green-sendSMS').addClass('btn-green-test')
        $('button.btn-cancle').addClass('fade-in-image')
        //$('button.btn-cancle').removeClass('display-none-btn').addClass('fade-in-image')
    }, 1000);
   /* window.setTimeout(function() {
        //$('button.btn-green-sendSMS').addClass('btn-green-test')
        $('button.btn-cancle').removeClass('display-none-btn').addClass('fade-in-image')
    }, 2000);*/
/*    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
            this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)))
            /!**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             *!/
            // As soon the loading is finished and the old page is faded out, let's fade the new page
            //Promise
                //.all([this.newContainerLoading, this.fadeOut()])
                //.then(this.fadeIn.bind(this));
        },
        fadeInNewcontent : function(nc){

            nc.hide();
            var _this = this;
            $(this.oldContainer).fadeOut(1000).promise().done(() =>{
                nc.css('visibility' ,'visible');
                nc.fadeIn(1000 , function () {

                    _this.done();
                })
            })
        },
       /!* fadeOut: function() {
            /!**
             * this.oldContainer is the HTMLElement of the old Container
             *!/
            return $(this.oldContainer).animate({ opacity: 0 }).promise();
        },
        fadeIn: function() {
            /!**
             * this.newContainer is the HTMLElement of the new Container
             * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
             * Please note, newContainer is available just after newContainerLoading is resolved!
             *!/
            var _this = this;
            var $el = $(this.newContainer);
            $(this.oldContainer).hide();
            $el.css({
                visibility : 'visible',
                opacity : 0
            });
            $el.animate({ opacity: 1 }, 400, function() {
                /!**
                 * Do not forget to call .done() as soon your transition is finished!
                 * .done() will automatically remove from the DOM the old Container
                 *!/
                _this.done();
            });
        }*!/
    });*/
    /**
     * Next step, you have to tell Barba to use the new Transition
     */
  /*  Barba.Pjax.getTransition = function() {
        /!**
         * Here you can use your own logic!
         * For example you can use different Transition based on the current page or link...
         *!/
        return FadeTransition;
    };*/

   /* Barba.Pjax.start();*/
    //Barba.Prefetch.init();
   /* $(document).ready(function() {*/
     /*   $(".animsition-link").animsition({
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
        });*/


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