/**
 * Created by Mike on 7/10/2016.
 */

var Util = (function($) {
  function scrollToElemAnimated(selector, durationMs) {
    $('html, body').animate({
      'scrollTop': $(selector).offset().top
    }, durationMs);
  }

  return { "scrollToElemAnimated": scrollToElemAnimated };
})(jQuery);