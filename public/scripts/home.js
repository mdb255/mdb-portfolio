/**
 * Created by Mike on 7/31/2016.
 */

var Home = (function() {
  "use strict";

  return {
    "scrollToPortfolio": scrollToPortfolio,
    "scrollToAboutMe": scrollToAboutMe,
    "scrollToContact": scrollToContact
  };

  function scrollToPortfolio() {
    Util.scrollToElemAnimated('#portfolio', 900);
  }

  function scrollToAboutMe() {
    Util.scrollToElemAnimated('#aboutme', 1300);
  }

  function scrollToContact() {
    Util.scrollToElemAnimated('#contact', 1400);
  }
})();