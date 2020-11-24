(function($) {
  
  /* ==================================================
    Drawer Menu
  ================================================== */

  $(function(){
    const openBtn = $("#menuicon");
    const openBtnActive = ".active";
    const closeBtn = $("#close");
    const overlay = $("#overlay");
    const panel = $("#hamburgerwrap");
    function panelOpen() {
      overlay.fadeIn('fast');
      panel.addClass('open');
      openBtn.addClass('active');
    }
    function panelClose() {
      overlay.fadeOut('fast');
      panel.removeClass('open');
      openBtn.removeClass('active');
    }
    openBtn.on('click',function(){
      if($(".active").length) {
        panelClose();
      } else {
        panelOpen();
      }
    });
    closeBtn.on('click',function(){
      panelClose();
    });
    overlay.on('click',function(){
      panelClose();
    });
    $(window).on('resize',function(){
      panelClose();
    });
  });

})(jQuery);

/* ==================================================
  メインビジュアルの高さ指定
================================================== */
const mainVisualWrap = document.getElementById("js-main-visual");
const headerWrapHeight = document.getElementById("header").clientHeight;

if(mainVisualWrap) {
  mainVisualWrap.style.height = `calc(100vh - ${headerWrapHeight}px)`;
}
