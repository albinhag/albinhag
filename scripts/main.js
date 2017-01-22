$(document).ready(function() {
  $('#fullpage').fullpage({
    resetSliders: true,
    verticalCentered: false,
    scrollBar: true,
    anchors:['first', 'second', 'third'],
  });

//SMOOTH SCROLLING
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
//SCROLL TO ANIMATE
    var $animation_elements = $('#albColor');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                // $element.addClass('in-view');
                $('#theiNtro').addClass('in-view');
                $('#theiContent').addClass('in-view');
                $('h2').addClass('.black');
            } else {
                // $element.removeClass('in-view');
                $('#theiNtro').removeClass('in-view');
                $('#theiContent').removeClass('in-view');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
// END
//SCROLL REVEAL
    window.sr = ScrollReveal({
        reset: true,
    });
    sr.reveal('.revealMe', {
        duration: 2000,
    });
//CHARTIST
  // new Chartist.Bar('.ct-chart', {
  //   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  //   series: [
  //     [5, 4, 3, 7, 5, 10, 3],
  //     [3, 2, 9, 5, 4, 5, 4]
  //   ]
  // }, {
  //   seriesBarDistance: 10,
  //   reverseData: true,
  //   horizontalBars: true,
  //   axisY: {
  //     offset: 70
  //   }
  // });

//CHARTJS
    var ctx = document.getElementById("mySkillChart");
    var mySkillChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["css", "javascript", "photoshop", "illustrator", "google analytics", "hotjar", "logic pro X", "final cut", "inDesign", "SEO", "social media experience"],
            datasets: [{
                label: "skill",
                fill: false,
                backgroundColor: "rgba(114,103,156,0.4)",
                borderColor: "rgba(114,103,156,1)",
                borderCapStyle: 'round',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(114,103,156,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(114,103,156,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [9, 9, 8, 8, 9, 9, 9, 9, 9, 9, 9],
                spanGaps: true,
            }, {
                label: "ambition",
                fill: false,
                backgroundColor: "rgba(196,122,149,0.4)",
                borderColor: "rgba(196,122,149,1)",
                borderCapStyle: 'round',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(196,122,149,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(196,122,149,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                spanGaps: false,

            }]

        },

        options: {
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(37, 111, 79)',
                    fontSize: 16,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true

                    }

                }]
            }
        }
    });
    // /* Every time the window is scrolled ... */
    //    $(window).scroll( function(){
    //
    //        /* Check the location of each desired element */
    //        $('.hideme').each( function(i){
    //
    //            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //            var bottom_of_window = $(window).scrollTop() + $(window).height();
    //
    //            /* If the object is completely visible in the window, fade it it */
    //            if( bottom_of_window > bottom_of_object ){
    //
    //                $(this).animate({'opacity':'1'},1000);
    //
    //            }
    //
    //        });
    //
    //    });

    //DRAW WITH SCROLLING
    // // Get the id of the <path> element and the length of <path>
    // var triangle = document.getElementById("glassass");
    // var length = triangle.getTotalLength();
    //
    // // The start position of the drawing
    // triangle.style.strokeDasharray = 100 + length;
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
