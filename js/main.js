$(function(){

    $(".select_language").click(function(){
        $(this).toggleClass("show");        
    })



    $(".sub, .sub_bg").hide();
    $(".gnb_menu > li, .sub_bg").hover(function(){
        $(".sub_bg").stop().slideDown();
        $(this).find($(".sub")).stop().slideDown();
    }, function(){
        $(".sub, .sub_bg").stop().slideUp();
    })//




     // 모바일 영역

     $(".mob_nav_btn").click(function(){

        $(".mo_nav").addClass("left_move");
        $(".m_nav_bg").delay(500).fadeIn()
    })//

    $(".m_nav_bg").click(function(){
        $(".mo_nav").removeClass("left_move")
        $(".m_nav_bg").fadeOut()
    })//

    $(".m_nav_list > li").hover(function(){
        $(this).find(".m_sub").stop().slideDown();
        $(this).find("a").addClass("on")
    }, function(){
        $(this).find(".m_sub").stop().slideUp();
        $(this).find("a").removeClass("on")
    })//hover


    
    
})


$(function(){
    
    $(".visual_wrap").slick({
        autoplay:true,
        autoplaySpeed :3000,
        pauseOnHover:true,
        dots:true,
        arrows:true
    })//
    
    
    
    $(".best_list").slick({
        autoplay:true,
        autoplaySpeed :3000,
        // pauseOnHover:true,
        dots:true,
        arrows:true,
        slidesToShow:3,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    })//

    $(".review_list").slick({
        autoplay:false,
        // pauseOnHover:true,
        dots:false,
        arrows:true,
        slidesToShow:3,
        slidesToScroll:3,
        centerMode:true,
        centerPadding: '200px',
        responsive:[
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    centerPadding: '100px',
                }
            }
        ]
    })//
})
