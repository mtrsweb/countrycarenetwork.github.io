!function(t){"use strict";t(window).on("load",(function(){t(".preloader").fadeOut(700)})),t("#searchOpen").on("click",(function(){t(".search-form").addClass("open")})),t("#searchClose").on("click",(function(){t(".search-form").removeClass("open")})),t(".hero-slider").slick({autoplay:!0,infinite:!0,arrows:!0,prevArrow:"<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",nextArrow:"<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>",dots:!0,autoplaySpeed:7e3,pauseOnFocus:!1,pauseOnHover:!1,customPaging:function(e,o){return'<a><i class="'+t(e.$slides[o]).data("icon")+'"></i><span>'+t(e.$slides[o]).data("text")+"</span></a>"},responsive:[{breakpoint:576,settings:{arrows:!1}}]}),t(".hero-slider").slickAnimation(),t(".hero-slider-2").slick({autoplay:!0,infinite:!0,arrows:!1,autoplaySpeed:7e3,pauseOnFocus:!1,pauseOnHover:!1,dots:!1}),t(".hero-slider-2").slickAnimation(),t(".work-slider").slick({dots:!0,infinite:!0,speed:300,slidesToShow:4,slidesToScroll:4,arrows:!1,autoplay:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:401,settings:{slidesToShow:1,slidesToScroll:1}}]}),t(".about-slider").slick({arrows:!0,autoplay:!0,prevArrow:"<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",nextArrow:"<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"}),t(".post-slider").slick({arrows:!0,autoplay:!0,prevArrow:"<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",nextArrow:"<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"}),t(".collapse").on("shown.bs.collapse",(function(){t(this).parent().find(".ti-plus").removeClass("ti-plus").addClass("ti-minus")})).on("hidden.bs.collapse",(function(){t(this).parent().find(".ti-minus").removeClass("ti-minus").addClass("ti-plus")})),t(".testimonial-slider").slick({infinite:!1,dots:!1,arrows:!0,autoplay:!0,prevArrow:"<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",nextArrow:"<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"}),t(".client-logo-slider").slick({infinite:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,dots:!1,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:400,settings:{slidesToShow:1,slidesToScroll:1}}]}),t(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-zoom-in",removalDelay:160,preloader:!1,fixedContentPos:!0}),t(".popup-image").magnificPopup({type:"image",removalDelay:160,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}},closeOnContentClick:!0,midClick:!0,fixedContentPos:!0,fixedBgPos:!0}),t(document).ready((function(){document.querySelector(".filtr-container")&&t(".filtr-container").filterizr({}),t(".fltr-controls").on("click",(function(){t(".fltr-controls").removeClass("active"),t(this).addClass("active")}))}));var e=t("html, body");t("nav a, .page-scroll").on("click",(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var o=t(this.hash);if((o=o.length?o:t("[name="+this.hash.slice(1)+"]")).length)return e.animate({scrollTop:o.offset().top-90},1500,"easeInOutExpo"),!1}})),jQuery.extend(jQuery.easing,{easeInOutExpo:function(t,e,o,s,i){return 0===e?o:e===i?o+s:(e/=i/2)<1?s/2*Math.pow(2,10*(e-1))+o:s/2*(2-Math.pow(2,-10*--e))+o}}),t(".back-to-top").on("click",(function(e){e.preventDefault(),t("html,body").animate({scrollTop:0},1500,"easeInOutExpo")})),t(window).on("scroll",(function(){var e;0!==t(".count").length&&(e=t(".count").offset().top-window.innerHeight),t(window).scrollTop()>e&&t(".count").each((function(){var e=t(this),o=e.attr("data-count");t({countNum:e.text()}).animate({countNum:o},{duration:1e3,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})}))})),t("#simple-timer").syotimer({year:2019,month:1,day:31,hour:0,minute:0}),AOS.init(),t(".slide-bg-image").each((function(e){t(this).attr("data-background")&&t(this).css("background-image","url("+t(this).data("background")+")")}));var o=[];jQuery(".swiper-slide").each((function(t){o.push(jQuery(this).find(".slide-inner").attr("data-text"))}));new Swiper(".swiper-container",{loop:!0,speed:1e3,parallax:!0,autoplay:{delay:6500,disableOnInteraction:!1},watchSlidesProgress:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{progress:function(){for(var t=this,e=0;e<t.slides.length;e++){var o=t.slides[e].progress*(.5*t.width);t.slides[e].querySelector(".slide-inner").style.transform="translate3d("+o+"px, 0, 0)"}},setTransition:function(t){for(var e=this,o=0;o<e.slides.length;o++)e.slides[o].style.transition=t+"ms",e.slides[o].querySelector(".slide-inner").style.transition=t+"ms"}}})}(jQuery);