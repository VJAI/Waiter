(function (W, D) {
  
  var Qy = D.querySelector.bind(D), B = D.body, manual = B.getAttribute('data-manual'), noop = function () {};
  
  B.classList.add('wait');
  D.write('<div class="waiter waiter--anime"><div class="waiter__logo"></div><div class="waiter__progressbar"><div class="waiter__progress waiter__progress--anime0"></div></div></div>');
  
  W.waitOver = function () {
    W.waitOver = noop;
    var waiter = Qy('.waiter'), progress = Qy('.waiter__progress'), t = 500;
    
    setTimeout(function () {
      var progressWidth = W.getComputedStyle(progress, null).getPropertyValue('width');
      progress.classList.remove('waiter__progress--anime0');
      progress.style.width = progressWidth;
      progress.classList.add('waiter__progress--anime1');
      
      setTimeout(function () {
        waiter.addEventListener('transitionend', function () {
          B.classList.remove('wait');
        }, false);
        
        waiter.classList.add('waiter--anime-trigger');
      }, t);
    }, t);
  };
  
  if (manual === 'true') return;
  W.addEventListener('load', waitOver, false);
})(window, document);