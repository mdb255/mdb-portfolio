/**
 * Created by Mike on 7/6/2016.
 */

(function () {
  "use strict";
  
  var menuTransitionTween = new TimelineMax()
    .to('.menu-appear-animation', 0.01, { display: 'block' })
    .to('.clouds-disappear-animation', 0.6, { opacity: '0',  y: "-50%" })
    .to('.menu-appear-animation', 0.7, { opacity: '0.7' }, "-=0.4")
    .to('.clouds-disappear-animation', 0, { display: 'none' });


// init controller
  var controller = new ScrollMagic.Controller();

// Create the Scene and trigger when visible with ScrollMagic
  var menuTransitionScene = new ScrollMagic.Scene({
    triggerElement: '#menuTransitionTrigger',
    // triggerHook: 0.2,
    offset: 540
  });

  menuTransitionScene
  // Remove the base "floating" animation so it doesn't interfere with disappear animation
    .on('enter', function () {
      $(".clouds-disappear-animation").removeClass("floating");
    })
    .on('leave', function () {
      $(".clouds-disappear-animation").addClass("floating");
    })
    .setTween(menuTransitionTween)
    // .addIndicators({name: "cloudsDisappearTween"})
    .addTo(controller);
})();
