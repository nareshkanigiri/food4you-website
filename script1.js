$(".project-detail").slick({
	slidesToShow: 1,
	arrows: false,
	asNavFor: '.project-strip',
	autoplay: true,
	autoplaySpeed: 3000
});

$(".project-strip").slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.project-detail',
	dots: false,
	infinite: true,
	centerMode: true,
	focusOnSelect: true
});

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});