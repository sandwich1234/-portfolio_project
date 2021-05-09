// JavaScript Document

(function() {
    var curImgId = 1;
    var numberOfImages = 2; // Change this to the number of background images
    window.setInterval(function() {
      $('body').fadeTo('slow', 0, function() {
        $(this).css('background-image','url(../img/inde_bg' + curImgId +'.png)').fadeTo('slow', 1);
      });
        curImgId = (curImgId + 1) % numberOfImages;
    }, 5 * 1000);
})();