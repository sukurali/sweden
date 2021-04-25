

/*progress bar JS*/
window.onload=function(){
	$('.circleGraphic1').circleGraphic();
	$('.circleGraphic2').circleGraphic({'color':'#fff'});
	$('.circleGraphic3').circleGraphic({'color':'#fff'});

	$('.circleGraphic4').circleGraphic({'color':'#fff'});

}
/*masonry JS*/
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
})

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

/*blog JS*/
$('.blog-content').isotope({
  itemSelector: '.blog-single',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.blog-sizer'
  }
})
/*parallaxie JS*/
$('.parallaxie').parallaxie();


/*toggle JS*/
$(".button-repley1").click(function(){
	$(".media-post-gellery1").slideToggle(1000);
})

$(".button-repley2").click(function(){
	$(".media-post-gellery2").slideToggle(1000);
})

$(".button-repley3").click(function(){
	$(".media-post-gellery3").slideToggle(1000);
})
// loadmore js//

 $(".media-hidden").slice(0, 3).show();   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".media-hidden:hidden").slice(0, 1).slideDown();
      if ($(".media-hidden:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
	
// one page scroling nav//

function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);
  
  
  // bg-color-change js//
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 170) {
	    $(".navbar").css({"background-color": "yellow", "transition": ".7s"});
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
	  
	  if (scroll > 480) {
	    $(".navi-sigaret").css({"background-color": "yellow", "transition": ".7s"});
	  }

	  else{
		  $(".navi-sigaret").css("background" , "transparent");  	
	  }
  })














