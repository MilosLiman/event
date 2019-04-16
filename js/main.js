/* Section Gallery - Slick Slider */
$('.slider').slick({
  autoplay: true,
  speed: 300,
  arrows: false,
  dots: false,
  pauseOnFocus: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});