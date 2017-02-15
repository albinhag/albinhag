$(document).ready(function() {
// MENU SHIT
  $('.menuVert').hide();

  $('.menu').click(function(){
    $('.menu').toggleClass('open');
    $(".menuVert").toggle("slide", {direction: "right"}, 'fast');
  });
//SCREENFIX
  // var fullH = $(".fullpage");
  //
  // function resizeBackground() {
  //     fullH.height($(window).outerHeight(true));
  // }
  //
  // $(window).resize(resizeBackground);
  // resizeBackground();
//END
  var $win = $(window),
      $winH = $win.height();

setTimeout(checkThis, 100);

function checkThis() {
  $win.scroll(function() {

    var scrTp = $(this).scrollTop();

    if (scrTp > $winH) {
      $('.menu, .menuVert').css('position', 'fixed');

      return;
    } else if (scrTp < ($winH / 2) ) {
      $('.menuVert').slideUp('medium');
      $('.menu').removeClass('open');
      return;
    } else {
      if (scrTp < $winH) {
        $('.menu, .menuVert').css('position', 'absolute');
        // $('#albinJobs').fadeIn('slow');
        return;
      }
    }
    // console.log($winH);

  })
};

//OVERLAYTXT
  var $noBo = document.getElementById('#noBo');
  var $coty = document.getElementById('#coty');

  $('.proj').click(function(){
    $('#overlayText').removeClass('hidden');
    $("body").css("overflow", "hidden")
  })
  $('.close').click(function(){
    $('#overlayText').addClass('hidden');
    $('.projCont').addClass('hidden');
    $("body").css("overflow", "auto");
    player.pause();
    player2.pause();
  })
  $('#noBo').click(function(){
    $('#noBoring').removeClass('hidden');
  })
  $('#coty').click(function(){
    $('#cotyCont').removeClass('hidden');
  })
  $('#msf').click(function(){
    $('#msfCont').removeClass('hidden');
  })
  $('#taskR').click(function(){
    $('#taskCont').removeClass('hidden');
  })
  // $('#miss').click(function(){
  //   $('#MISSING').removeClass('hidden');
  // })
  // $('#kitten').click(function(){
  //   $('#KITTENS').removeClass('hidden');
  // })

  var iframe = document.querySelector('#cotyVid');
  var iframe2 = document.querySelector('#msfVid');
  var player = new Vimeo.Player(iframe);
  var player2 = new Vimeo.Player(iframe2);
  // Execute the `play` method of the API when something with id start is clicked

  //CHECK PATH LENGTH
 //  var path = document.querySelector('#nLine');
 //  var length = path.getTotalLength();
 // console.log(length);

//SMOOTH SCROLLING
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 700);
                    return false;
                }
            }
        });
    });

//SCROLL TO ANIMATE
    var $animation_elements = $('#albColor');
    // var $window = $(window);

    function check_if_in_view() {
        var window_height = $win.height();
        var window_top_position = $win.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $('#theiNtro').addClass('in-view');
                $('#theiContent').addClass('in-view');
            } else {
                $('#theiNtro').removeClass('in-view');
                $('#theiContent').removeClass('in-view');
            }
        });
    }
    $win.on('scroll resize', check_if_in_view);
    $win.trigger('scroll');

    // if  ($(this).scrollTop() > (winH*1.5)) {
    //     // $element.addClass('in-view');
    //     $('#theiNtro').addClass('in-view');
    //     $('#theiContent').addClass('in-view');
    // } else if  ($(this).scrollTop() < (winH*1.5) ){
    //     // $element.removeClass('in-view');
    //     $('#theiNtro').removeClass('in-view');
    //     $('#theiContent').removeClass('in-view');
    // };

// END

    //DRAW WITH SCROLLING
    // // Get the id of the <path> element and the length of <path>
    // var triangle = document.getElementById("glassass");
    // var length = triangle.getTotalLength();
    //
    // // The start position of the drawing
    // triangle.style.strokeDasharray = 1000 + length;
    //
    // // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
    // triangle.style.strokeDashoffset = length;
    //
    // // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
    // window.addEventListener("scroll", myFunction);
    //
    // function myFunction() {
    //   var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    //
    //   var draw = length * scrollpercent;
    //
    //   // Reverse the drawing (when scrolling upwards)
    //   triangle.style.strokeDashoffset = length - draw;
    // }

});
