/**
 * Created by Mike on 7/6/2016.
 */

// Create Animation for 0.5s
var tween = TweenMax.to('#animation', 0.5, {
  backgroundColor: 'rgb(255, 39, 46)',
  scale: 7,
  rotation: 360
});


// init controller
var controller = new ScrollMagic.Controller();

// Create the Scene and trigger when visible with ScrollMagic
var scene = new ScrollMagic.Scene({
  triggerElement: '#scene',
  offset: 150 /* offset the trigger 150px below #scene's top */
});

scene.setTween(tween)
  .addTo(scrollMagicController);
