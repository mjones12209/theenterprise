
  var slideIndex = 0;
  showSlides();

  function showSlides(num) {
    
    var i;
    var slides = document.getElementsByClassName("mySlides");
      
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      
      if (!num) {

        slideIndex++
              
        slides[slideIndex-1].style.display = "block";

      } else {

        slideIndex = num;

        slides[slideIndex-1].style.display = "block";        

      }

    }




