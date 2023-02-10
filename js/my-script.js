$(".toggle_menu").click(function(){
    $(".header_items").addClass("menu_show");
    });
    $(".clode_menu").click(function(){
    $(".header_items").removeClass("menu_show");
    });
// 
    $(".iwt_right .site-btn_icon, .iwt_left").click(function(){
    $(".project_modal").fadeIn();
    });
    $(".close_project").click(function(){
    $(".project_modal").fadeOut();
    });
    // 
    $(".mediapost_block .mp_img").click(function(){
    $('.invest_modals').fadeIn();
    });
    $(".close_projectInvest").click(function(){
    $(".invest_modals").fadeOut();
    });
    
$('.testimonial_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true
});
$('.blog_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
        }
        },
        
        {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        }
        }
    ]
    });
    // 
    $('.artical_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        }
        }
    ]
    });



    // 


    $(".book-call").click(function(){
        $(".call_modal-main").show();
      });
      
      $(".call_modalOverly").click(function(){
        $(".call_modal-main").hide();
      });
      $(".formbtn1").click(function(){
        $(".call_modal-content1").hide();
        $(".call_modal-content2").addClass("call_content-show");
      });
      $(".book-call").click(function(){
        $(".header_items").removeClass("menu_show");
        $("body").addClass("over_flowHidden")
        });
