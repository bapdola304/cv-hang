function changeCss() {

    if (this.scrollY >= document.querySelector("#header").clientHeight - 60) {
      $('#menu').css('background-color', '#000');
      $('#menu').css('margin-top', '0px');
      $('#menu .nav-link').css('color', '#fff');
    }
    else {
      $('#menu').css('background-color', 'transparent');
      $('#menu').css('margin-top', '25px');
      $('#menu .nav-link').css('color', '#fff');
    }
  }
  window.addEventListener("scroll", changeCss, false);

  var myVar = setInterval(function () { myTimer(85, "pts") }, 4);
  var myVar = setInterval(function () { myTimer(65, "android") }, 4);
  var myVar = setInterval(function () { myTimer(50, "iot") }, 4);
  var myVar = setInterval(function () { myTimer(30, "linux") }, 10);
  var myVar = setInterval(function () { myTimer(30, "graphic") }, 10);
  var myVar = setInterval(function () { myTimer(30, "wp") }, 10);
  var myVar = setInterval(function () { myTimer(40, "lol") }, 4);
  var myVar = setInterval(function () { myTimer(60, "java") }, 10);
  var count = 0;
  function myTimer(countd, id) {
    if (count < countd) {
      count += 0.06;
      document.getElementById(id).innerHTML = Math.round(count) + "%";
    }

  }

  $(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html,body").animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash - 1500;
        });
      }  // End if
    });

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
$("#myBtn").click(()=>{
   $("html,body").animate({
          scrollTop: 0
        }, 1000);

});




  });

