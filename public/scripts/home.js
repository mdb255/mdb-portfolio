/**
 * Created by Mike on 7/31/2016.
 */

var Home = (function() {
  "use strict";

  return {
    "scrollToPortfolio": scrollToPortfolio,
    "scrollToAboutMe": scrollToAboutMe,
    "scrollToContact": scrollToContact,
    "showResumeDialog": showResumeDialog
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

  function showResumeDialog() {
    bootbox.alert("I am happy to provide a copy of my résumé upon request. <br> Please email me at mdbaldwin1@gmail.com.");
  }
})();