/**
 * Created by Mike on 7/17/2016.
 */

$(document).ready(function() {
  // When hovering contact icons, fade in a description caption

  var contactCaption = $(".contact-caption");

  $(".contact-icons a").hover(
    function() {
      contactCaption.text($(this).data("description"));
      contactCaption.addClass("opaque");
    },
    function() {
      contactCaption.removeClass("opaque");
    }
  )
});