console.log("hello");

window.onscroll = function() {myFunction()};

// Get the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    $("header").addClass("nav-head")
    

  } else {
    $("header").removeClass("nav-head")
  }
}
















var obj = {
  count : 10,
  doSomethingLater : function(){
      // The traditional function binds "this" to the "obj" context.
      setTimeout( () => {
          // Since the arrow function doesn't have its own binding and
          // setTimeout (as a function call) doesn't create a binding
          // itself, the "obj" context of the traditional function will
          // be used within.
          this.count++;
          console.log(this.count);
      }, 300);
  }
}

obj.doSomethingLater();




setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);





$('.owl-testimonial').owlCarousel({
  nav:true,
  dots:false,
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
 })

 $('.owl-carousel').owlCarousel({
  nav:false,
  items: 5,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
 })


$(function(){
  $(document).on('mouseenter','#fagallery',function(){
    // $('#gallery').attr("data-aos","fade-up");
    console.log("nooh");
  })
})