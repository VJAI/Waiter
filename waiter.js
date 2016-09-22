const doc = document, qy = doc.querySelector.bind(doc), spit = doc.write.bind(doc);

function Waiter(options) {

	if(qy('.waiter').length) return;

	spit(`<div class="waiter">
			  <img src="" />
				<div class="waiter-progress-bar">
				<div class="waiter-progress-bar-progress"></div>
			  </div>
			</div>`);

	if (!options.manual === true) {
		window.addEventListener('load', _go);
	}
}

Waiter.go = function () {
	const waiter = query('.waiter');

	if(!waiter) return;

	const progress = document.querySelector('.waiter-progress-bar-progress');

	waiter.style.animation = 'TODO';
	progress.style.animation = 'none';
	progress.style.width = '100%';
};