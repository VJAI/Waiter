(function (W, D) {
  
  var Qy = D.querySelector.bind(D), manual = D.body.getAttribute('data-manual');
  
  D.body.classList.add('no-scroll');
  D.write('<div class="waiter waiter--anime"><div class="waiter__logo"></div><div class="waiter__progressbar"><div class="waiter__progress waiter__progress--anime0"></div></div></div>');
  
  var waitOver = function () {
    var waiter = Qy('.waiter'), progress = Qy('.waiter__progress'), t = 500;
    
    setTimeout(function () {
      var progressWidth = W.getComputedStyle(progress, null).getPropertyValue('width');
      progress.classList.remove('waiter__progress--anime0');
      progress.style.width = progressWidth;
      progress.classList.add('waiter__progress--anime1');
      
      setTimeout(function () {
        waiter.addEventListener('transitionend', function () {
          D.body.classList.remove('no-scroll');
        }, false);
        
        waiter.classList.add('waiter--anime-trigger');
      }, t);
    }, t);
  };
  
  manual === 'true' ? (W.waitOver = waitOver) : W.addEventListener('load', waitOver, false);
  
})(window, document);