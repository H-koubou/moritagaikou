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


/* ==================================================
  ローディングアニメーション
================================================== */
const loadingWrap = document.getElementById('js-loading-wrap');
const loadingBox = document.getElementById('js-loading-box');
const loadingImageLeft = document.getElementById('js-loading-image-left');
const loadingImageCenter = document.getElementById('js-loading-image-center');
const loadingImageRight = document.getElementById('js-loading-image-right');

loadingImageLeft.classList.add('visible');
loadingImageLeft.addEventListener('transitionend', (evet) => {
  loadingImageCenter.classList.add('visible');
});
loadingImageCenter.addEventListener('transitionend', (evet) => {
  loadingImageRight.classList.add('visible');
});

loadingImageRight.addEventListener('transitionend', (evet) => {
  loadingBox.classList.add('transform');
});

loadingImageRight.addEventListener('transitionend', (evet) => {
  setTimeout(function(){
    loadingWrap.classList.add('hidden');
  }, 800);
});



