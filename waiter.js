(function (W, D) {
  
  var Qy = D.body.querySelector.bind(D.body), manual = Qy('script').getAttribute('data-manual');
  
  D.write('<div class="waiter anime">\
							<div class="logo"></div>\
							<div class="progress-bar">\
								<div class="progress"></div>\
							</div>\
				 	 </div>');
  
  var waitOver = function () {
    var waiter = Qy('.waiter'), progress = Qy('.progress');
    
    setTimeout(function () {
      progress.style.animation = 'none';
      progress.style.width = '100%';
      
      setTimeout(function () {
        waiter.classList.add('trigger');
      }, 500);
    }, 500);
  };
  
  manual === 'true' ? (W.waitOver = waitOver) : W.addEventListener('load', waitOver, false);
  
})(window, document);