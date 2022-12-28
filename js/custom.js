$(function() {
    $('body').addClass('js');
  
    var $hamburger = $('.hamburger'),
        $nav = $('#site-nav'),
        $masthead = $('#masthead');
  
    $hamburger.click(function() {
      $(this).toggleClass('is-active');
      $nav.toggleClass('is-active');
      $masthead.toggleClass('is-active');
      return false; 
    })
});


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

signUpButton.addEventListener('click',function(){
  const container = document.getElementById('form_div');
  container.classList.add('right-panel-active');
  document.getElementById('close').style.color='#ef8b59';
});
signInButton.addEventListener('click',function(){
  const container = document.getElementById('form_div');
  container.classList.remove('right-panel-active')
  document.getElementById('close').style.color='white';
});



$('.slider-items').slick({
  autoplay:true,
prevArrow:'.prev',
nextArrow:'.next',
slidesToShow:1,
fade: true,
centerMode: true,
centerPadding: '1px',
cssEase: 'linear',
responsive: [
{
    breakpoint: 680,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
}

]
});


// Initialise.
$('.slick_product_slider').slick({
  slidesToShow: 4,
  dots: true,
  //centerMode: true,
  autoplay:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
})

