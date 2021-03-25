const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');

const toggleButton = document.querySelector('.toggle-button');

const mobileNav = document.querySelector('.mobile-nav');

const closeModal = () => {
	//   modal.style.display = "none";
	//   backdrop.style.display = "none";
	if (modal) {
		modal.classList.remove('open');
	}
	backdrop.classList.remove('open');
	setTimeout(() => {
		backdrop.style.display = 'none';
	}, 300);
};

for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener('click', () => {
		// modal.style.display = "block";
		// backdrop.style.display = "block";
		modal.classList.add('open');

		backdrop.style.display = 'block';
		setTimeout(() => {
			backdrop.classList.add('open');
		}, 10);
	});
}

backdrop.addEventListener('click', () => {
	// mobileNav.style.display = "none";
	mobileNav.classList.remove('open');
	closeModal();
});

if (modalNoButton) {
	modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
	// mobileNav.style.display = "block";
	// backdrop.style.display = "block";

	mobileNav.classList.add('open');

	backdrop.style.display = 'block';
	setTimeout(() => {
		backdrop.classList.add('open');
	}, 10);
});
