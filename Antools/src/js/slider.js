const arrowLeft = $('.arrow-left');
const arrowRight = $('.arrow-right');
const sliderItems = document.querySelector('.slider-line');
const sliderPoints = $('.point');
let offset = 0;
let pointActive = 0;

function leftSlide() {
	sliderPoints[pointActive].classList.remove('point-active');
	if (pointActive === 0) {
		pointActive = sliderPoints.length - 1;
	} else {
		pointActive -= 1;
	}
	sliderPoints[pointActive].classList.add('point-active');
	offset -= 1200;
	if (offset < 0) {
		offset = 2400;
	}
	sliderItems.style.left = `${-offset}px`;
}

function rightSlide() {
	sliderPoints[pointActive].classList.remove('point-active');
	if (pointActive === sliderPoints.length - 1) {
		pointActive = 0;
	} else {
		pointActive += 1;
	}
	sliderPoints[pointActive].classList.add('point-active');
	offset += 1200;
	if (offset > 2400) {
		offset = 0;
	}
	sliderItems.style.left = `${-offset}px`;
}

arrowLeft.click(leftSlide);

arrowRight.click(rightSlide);

$('.point').click(e => {
	for (i = 0; i < sliderPoints.length; i++) {
		if (sliderPoints[i] === e.target) {
			sliderPoints[pointActive].classList.remove('point-active');
			if (pointActive > i) {
				offset -= 1200 * (pointActive - i);
				if (offset < 0) {
					offset = 2400;
				}
				sliderItems.style.left = `${-offset}px`;
			} else {
				offset += 1200 * (i - pointActive);
				if (offset > 2400) {
					offset = 0;
				}
				sliderItems.style.left = `${-offset}px`;
			}
			pointActive = i;
			sliderPoints[pointActive].classList.add('point-active');
		}
	}
});
