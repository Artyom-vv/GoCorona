window.onload = () => {
	// burger
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	const body = document.body

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');

		if (burger.classList.contains('active')) {
			body.style.height = "100vh";
			body.style.overflowY = "hidden";
		} else {
			body.style.height = "auto";
			body.style.overflowY = "scroll";
		}
	})
}