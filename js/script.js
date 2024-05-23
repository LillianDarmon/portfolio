$(document).ready(function() { 

    progress();


    $('a[data-bs-toggle="collapse"]').click(function() {
      $( ".tips" ).text('')
      var target = $(this).attr('href');
      $('.collapse.show').not(target).collapse('hide');
    });

    $(".competence-link").on("click", function() {
        
        // Get the text content of the clicked link
        console.log('clicked');
        resetProgressBars();
     

        setTimeout(function() {
            progress();
          }, 200); 
      });



  function progress(){
    console.log("go")
  // Set the fixed amount of progression (between 0 and 100)
  var progressValue_20 = 20;
  var progressValue_40 = 40;
  var progressValue_60 = 60;
  var progressValue_80 = 80;
  var progressValue_100 = 100;

  // Calculate the width of the progress bar based on the fixed progression
  var progressBarWidth_20 = progressValue_20 + "%";
  var progressBarWidth_40 = progressValue_40 + "%";
  var progressBarWidth_60 = progressValue_60 + "%";
  var progressBarWidth_80 = progressValue_80 + "%";
  var progressBarWidth_100 = progressValue_100 + "%";

  // Set the width of the progress bar
  $(".progress-bar-20").width(progressBarWidth_20);
  $(".progress-bar-40").width(progressBarWidth_40);
  $(".progress-bar-60").width(progressBarWidth_60);
  $(".progress-bar-80").width(progressBarWidth_80);
  $(".progress-bar-100").width(progressBarWidth_100);
  }


  function resetProgressBars() {
    // Set the initial width for each progress bar
    var initialWidth = 0;
    
    // Set the width of the progress bars to their initial state
    $(".progress-bar").width(initialWidth);
  }




    $('.zoomable').magnificPopup({type:'image'});







})