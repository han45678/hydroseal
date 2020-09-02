$(function () {
    new WOW().init();

    $('#goTop').click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 800);
    });

    $(".imgLiquidCT").imgLiquid({
        fill: true,
        horizontalAlign: "center",
        verticalAlign: "30%"
    });

    $(".imgLiquidCC").imgLiquid({
        fill: true,
        horizontalAlign: "center",
        verticalAlign: "center"
    });

    $(".imgLiquidCCF").imgLiquid({
        fill: false,
        horizontalAlign: "center",
        verticalAlign: "center"
    });

    $('#banner').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }, ]
    });

    $('#classic .slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,

        responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('#works .slick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
    });

    $('#news .slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
    });

    $('#service_slick .slick').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        variableWidth: true,
        arrows: true,
    });

    $('#baytecPmB-content-slick .slick').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $("#project .item").click(function () {
        $("#project .item").removeClass("active");
        $(this).addClass("active");
        var i = $(this).index();
        $("#project_content .content_item").removeClass("active");
        $("#project_content .content_item").eq(i).addClass("active");
    });

    if ($(window).width() <= 768) {
        $("#project .item:nth-child(1),#project .item:nth-child(2)").click(function () {
            $("#project_content").removeClass("order5");
        });
        $("#project .item:nth-child(3),#project .item:nth-child(4)").click(function () {
            $("#project_content").addClass("order5");
        });
        $('#material .slick').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            fade: true,
        });
        $("#product_menu ul").fadeOut();

        $("#product_menu #open_menu").click(function () {
            $("#product_menu ul").fadeToggle();;
        });

        $("main#service #product_details .wrapper .item").fadeOut();
        $("#p1").fadeIn();

        $("#product_menu li:nth-child(1)").click(function () {
            $("main#service #product_details .wrapper .item").fadeOut();
            $("#p1").fadeIn();
            $('#open_menu').html($("#product_menu li:nth-child(1)").html());
        });

        $("#product_menu li:nth-child(2)").click(function () {
            $("main#service #product_details .wrapper .item").fadeOut();
            $("#p2").fadeIn();
            $('#open_menu').html($("#product_menu li:nth-child(2)").html());
        });

        $("#product_menu li:nth-child(3)").click(function () {
            $("main#service #product_details .wrapper .item").fadeOut();
            $("#p3").fadeIn();
            $('#open_menu').html($("#product_menu li:nth-child(4)").html());
        });

        $("#product_menu li:nth-child(4)").click(function () {
            $("main#service #product_details .wrapper .item").fadeOut();
            $("#p4").fadeIn();
            $('#open_menu').html($("#product_menu li:nth-child(4)").html());
        });
        $("#product_menu li:nth-child(5)").click(function () {
            $("main#service #product_details .wrapper .item").fadeOut();
            $("#p5").fadeIn();
            $('#open_menu').html($("#product_menu li:nth-child(4)").html());
        });

        $('#related_products .content').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        });


    } else {
        $('#product_menu li:nth-child(1)').click(function () {
            $('html,body').animate({
                scrollTop: $('#p1').offset().top
            }, 800);
        });
        $('#product_menu li:nth-child(2)').click(function () {
            $('html,body').animate({
                scrollTop: $('#p2').offset().top
            }, 800);
        });
        $('#product_menu li:nth-child(3)').click(function () {
            $('html,body').animate({
                scrollTop: $('#p3').offset().top
            }, 800);
        });
        $('#product_menu li:nth-child(4)').click(function () {
            $('html,body').animate({
                scrollTop: $('#p4').offset().top
            }, 800);
        });
    }

    $("#project_content .off").click(function () {
        $("#project .item").removeClass("active");
        $("#project_content .content_item").removeClass("active");
    });

    $("#mobile_menu_button").click(function () {
        $('#mobile_menu_button').toggleClass('active');
        $('#menu').toggleClass('active');
    });

    $(".main_menu").click(function () {
        $(this).toggleClass('active');
    });
    $(".main_content_manu").click(function () {
        $(this).toggleClass('active');
    });

    $("#mobile_search_button,#search_input,.search").click(function () {
        $("#search").toggleClass('active');
    });

    $('.service_menu,.achievement_menu').click(function () {
        $(".service_menu,.achievement_menu").toggleClass('active');
    });

    $('#owner_menu').click(function () {
        $("#owner_menu").toggleClass('active');
    });

    if ($("main").hasClass("planning")) {
        $('.service_menu ul li').removeClass('active')
        $('.service_menu ul .planning').addClass('active')
        $('.service_menu ul .active').attr('src', 'javascript:void(0)');
        $('.achievement_menu ul li').removeClass('active')
        $('.achievement_menu ul .planning').addClass('active')
        $('.achievement_menu ul .active').attr('src', 'javascript:void(0)');
    } else if ($("main").hasClass("baytecPmB")) {
        $('.service_menu ul li').removeClass('active')
        $('.service_menu ul .baytecPmB').addClass('active')
        $('.service_menu ul .active').attr('src', 'javascript:void(0)');
        $('.achievement_menu ul li').removeClass('active')
        $('.achievement_menu ul .baytecPmB').addClass('active')
        $('.achievement_menu ul .active').attr('src', 'javascript:void(0)');
    } else if ($("main").hasClass("bridge")) {
        $('.service_menu ul li').removeClass('active')
        $('.service_menu ul .bridge').addClass('active')
        $('.service_menu ul .active').attr('src', 'javascript:void(0)');
        $('.achievement_menu li').removeClass('active')
        $('.achievement_menu ul .bridge').addClass('active')
        $('.achievement_menu ul .active').attr('src', 'javascript:void(0)');
    } else if ($("main").hasClass("soundproof")) {
        $('.service_menu ul li').removeClass('active')
        $('.service_menu ul .soundproof').addClass('active')
        $('.service_menu ul .active').attr('src', 'javascript:void(0)');
        $('.achievement_menu ul li').removeClass('active')
        $('.achievement_menu ul .soundproof').addClass('active')
        $('.achievement_menu ul .active').attr('src', 'javascript:void(0)');
    } else if ($("main").hasClass("concrete")) {
        $('.service_menu ul li').removeClass('active')
        $('.service_menu ul .concrete').addClass('active')
        $('.service_menu ul .active').attr('src', 'javascript:void(0)');
        $('.achievement_menu ul li').removeClass('active')
        $('.achievement_menu ul .concrete').addClass('active')
        $('.achievement_menu ul .active').attr('src', 'javascript:void(0)');
    } else if ($("main").hasClass("leakproof")) {
        $('.service_menu ul li').removeClass('active')
        $('.service_menu ul .leakproof').addClass('active')
        $('.service_menu ul .active').attr('src', 'javascript:void(0)');
        $('.achievement_menu ul li').removeClass('active')
        $('.achievement_menu ul .leakproof').addClass('active')
        $('.achievement_menu ul .active').attr('src', 'javascript:void(0)');
    } else if ($("main").hasClass("structure")) {
        $('.service_menu ul li').removeClass('active')
        $('.service_menu ul .structure').addClass('active')
        $('.service_menu ul .active').attr('src', 'javascript:void(0)');
        $('.achievement_menu ul li').removeClass('active')
        $('.achievement_menu ul .structure').addClass('active')
        $('.achievement_menu ul .active').attr('src', 'javascript:void(0)');
    } else if ($("main").hasClass("anti-corrosion")) {
        $('.service_menu ul li').removeClass('active')
        $('.service_menu ul .anti-corrosion').addClass('active')
        $('.service_menu ul .active').attr('src', 'javascript:void(0)');
        $('.achievement_menu ul li').removeClass('active')
        $('.achievement_menu ul .anti-corrosion').addClass('active')
        $('.achievement_menu ul .active').attr('src', 'javascript:void(0)');
    } else if ($("main").hasClass("reservation")) {
        $('.owner_menu ul li').removeClass('active')
        $('.owner_menu ul .reservation').addClass('active')
        $('.owner_menu ul .active').attr('src', 'javascript:void(0)');
        $('.achievement_menu ul li').removeClass('active')
        $('.achievement_menu ul .reservation').addClass('active')
        $('.achievement_menu ul .active').attr('src', 'javascript:void(0)');
    }

    $("#product_details #p1 .open").click(function () {
        $('#product_details #p1').toggleClass('active');
    });
    $("#product_details #p2 .open").click(function () {
        $('#product_details #p2').toggleClass('active');
    });
    $("#product_details #p3 .open").click(function () {
        $('#product_details #p3').toggleClass('active');
    });
    $("#product_details #p4 .open").click(function () {
        $('#product_details #p4').toggleClass('active');
    });

    $("#reservation #application .before").click(function () {
        $('#application').addClass('active');
    });
    $("#reservation #application .off").click(function () {
        $('#application').removeClass('active');
    });
    $("#reservation #assessment .before").click(function () {
        $('#assessment').addClass('active');
    });
    $("#reservation #assessment .off").click(function () {
        $('#assessment').removeClass('active');
    });
    $("#reservation #offer .before").click(function () {
        $('#offer').addClass('active');
    });
    $("#reservation #offer .off").click(function () {
        $('#offer').removeClass('active');
    });
    $(".owner_drop_down .title").click(function () {
        $(".owner_drop_down ul").fadeToggle();
    });
    $(".video").click(function () {
        $(this).toggleClass('play');
    });

    $("#productList #sidebar .list").click(function () {
        $(this).toggleClass('active');
    });

    $("#productList_main .item .btn").click(function () {
        $(this).toggleClass('active');
    });

    $('#introduction .main_photo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#introduction .thumbnail .slick'
    });
    $('#introduction .thumbnail .slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#introduction .main_photo',
        dots: false,
        focusOnSelect: true,
        vertical: true,
        arrows: true,
        nextArrow: '#introduction .thumbnail .arrow_down',
        responsive: [{
            breakpoint: 768,
            settings: {
                vertical: false,
                arrows: false,
            }
        }, ]
    });
    $("#description").click(function () {
        $(this).addClass('active');
        $('#description_content').addClass('active');
        $("#achievement").removeClass('active');
        $('#achievement_content').removeClass('active');
    });

    $("#achievement").click(function () {
        $(this).addClass('active');
        $('#achievement_content').addClass('active');
        $("#description").removeClass('active');
        $('#description_content').removeClass('active');
    });

    $("#connection .con-left .title").click(function () {
        $(this).toggleClass('active');
        $('#connection .con-left .content').toggleClass('active');
    });

    $("#menu_button").click(function () {
        $("#achievement .title .wrapper ul").fadeToggle();
    });

    $(".menu_button").click(function () {
        $("#achievement .title .wrapper ul.menu_content").fadeToggle();
    });

    $(".sub_menu_button").click(function () {
        $("#achievement .title .wrapper ul.sub_menu_content").fadeToggle();
    });

    $('#baytecPmB-content-photo .slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '#baytecPmB-content-photo .slick_thumbnail'
    });
    $('#baytecPmB-content-photo .slick_thumbnail').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '#baytecPmB-content-photo .slick',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true
    });


    $("#map .item").click(function () {
        $(this).toggleClass('active');
    });

    $("#baytecPmB-content-manu #use").click(function () {
        $('#use').addClass('active');
        $('#introduction').removeClass('active');
        if ($("#baytecPmB-content-manu #use").hasClass('active')) {
            $('#baytecPmB-content').fadeIn();
            $('#use-content').fadeOut();
        }
    });

    $("#baytecPmB-content-manu #introduction").click(function () {
        $('#introduction').addClass('active');
        $('#use').removeClass('active');
        if ($("#baytecPmB-content-manu #introduction").hasClass('active')) {
            $('#baytecPmB-content').fadeOut();
            $('#use-content').fadeIn();
        }
    });

    $('.down .down_animation').click(function () {
        $('html,body').animate({
            scrollTop: $('#proxy_menu').offset().top
        }, 800);
    });
    $('#go_secret').click(function () {
        $('html,body').animate({
            scrollTop: $('.secret_title').offset().top
        }, 800);
    });

    $('#go_agent').click(function () {
        $('html,body').animate({
            scrollTop: $('.agent_title').offset().top
        }, 800);
    });

    $('#go_process').click(function () {
        $('html,body').animate({
            scrollTop: $('.process_title').offset().top
        }, 800);
    });

    $('#go_customer_profile').click(function () {
        $('html,body').animate({
            scrollTop: $('#customer_profile').offset().top
        }, 800);
    });

    $('#recording').click(function () {
        $('html,body').animate({
            scrollTop: $('#planning').offset().top
        }, 800);
    });

    $("#news .content .classification .title").click(function () {
        $(this).toggleClass('active');
        $('#news .content .classification ul').toggleClass('active');
    });

    // $(window).scroll(function () {
    //     if ($("#certification").scrollTop() > 80) {
    //         $("#mainNav").addClass("navbar-shrink");
    //     } else {
    //         $("#mainNav").removeClass("navbar-shrink");
    //     }
    //     //$(window).scrollTop()
    // });

    $(".photo_zoom img").click(function () {
        var img = $(this).attr('src');
        $("#img_zoom_back,#img_zoom").addClass('active')
        $('#img_zoom img').attr('src',img);
    });
    $("#img_zoom .off").click(function () {
        $("#img_zoom_back,#img_zoom").removeClass('active')
    });
    
});