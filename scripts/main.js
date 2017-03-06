$(document).ready(function() {
  $(function() {
      setTimeout(function() {
          $(".loader").fadeOut(500)
      }, 1500);
  });
// MENU SHIT
  $('.menuVert').hide();

  $('.menu').click(function(){
    $('.menu').toggleClass('open');
    $(".menuVert").toggle("slide", {direction: "right"}, 'fast');
  });

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
        return;
      }
    }
  })
};
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

});
