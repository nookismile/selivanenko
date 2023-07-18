$(document).ready(function(){
    
    
    //SLIDER DETAILS 
    
    
$('.slider-details').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: 'linear',
  touchMove: true,
  prevArrow:'<button class="slick-prev"> < </button>',
  nextArrow:'<button class="slick-next"> > </button>',
  
  //         responsive: [                        
  //             {
  //               breakpoint: 576,
  //               settings: {
  //                 centerMode: false,
  //                 variableWidth: false,
  //               }
  //             },
  //         ]
});


var imgs = $('.slider img');
imgs.each(function(){
  var item = $(this).closest('.item');
  item.css({
    'background-image': 'url(' + $(this).attr('src') + ')', 
    'background-position': 'center',            
    '-webkit-background-size': 'cover',
    'background-size': 'cover', 
  });
  $(this).hide();
});
    
    
    
    
   //TABS 

    $(".tabs > li").on('click',function() {
			var id = $(this).data("id");
			$(this).siblings().removeClass("active");
			$(this).addClass('active');
			$('.tab-inner').removeClass("active");
		    $('.tab-inner[data-id='+id+']').addClass("active");
		});  
    
    
  //TABS
    
  $('.slider-sertificate').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
}); 
    
    
    
    $('input').hover(function(){
  $(this).parents('.form-inputs').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})  
    
    
    //SELECT
    
   $('select').niceSelect(); 
    

    
 //PHONE MASK
   $("input[type=tel]").inputmask({"mask": "+7 (999) 999-99-99"});
    
    
   //LIGHTGALLERY INIT		
      $('.slider-sertificate__item').lightGallery({
			selector:'a'
      });
    
    
    //MODAL


    $(".js-modal").on("click", function(e) {
        e.preventDefault();
        var currentModal = $(this).attr("href");
        $(currentModal + ", #js-overlay").fadeIn(500);
        $("body").addClass("open-modal");

    });

    
    $(".js-modal").on("click", function(e) {
        e.preventDefault();
        var currentModal = $(this).attr("href");
        $(currentModal + ", #js-overlay").fadeIn(500);
        $("body").addClass("open-modal");

    });


    $("#js-overlay, .js-modal-close").on("click", function(e) {
        e.preventDefault();
        $(".modal, #js-overlay").fadeOut(100);
        $("body").removeClass("open-modal");
    });
    


    $("#js-overlay, .js-modal-close").on("click", function(e) {
        e.preventDefault();
        $(".modal, #js-overlay").fadeOut(100);
        $("body").removeClass("open-modal");
    });


    
    
    
    
    
});