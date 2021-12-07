

$ (function() {
    $('.rev_slider').slick({
        arrows: true,
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },

        ]
        

        
      });
})






menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav');
  var y = document.getElementById('header');
  var z  = document.getElementById('logo');
  if (x.className === "topnav"
 ) {
    x.className += " responsive";
    y.className += " responsive_header";
    z.className += " responsive_logo"
  } else {
    x.className = "topnav";
    y.className = "header"
    z.className += "header_logo";
    
  }
}
