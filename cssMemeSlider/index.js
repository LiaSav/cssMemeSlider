const images = document.querySelectorAll('.slider__image');
const imageActiveClassName = 'slider__image_active';

const size = images.length;

const texts = document.querySelectorAll('.slider__text');
const textActiveClassName = 'slider__text_active';

const dots = document.querySelector('.slider__dots');
const dotWrapperClassName = 'slider__dot-wrapper';
const dotClassName = 'slider__dot';
const dotActiveClassName = 'slider__dot_active';

const fadeIn = 'fade-in';

let currentSlide = 0;
let activeDotNum = 0;

dots.innerHTML = Array.from(Array(size).keys()).map(key => (
    `<div class="${dotWrapperClassName}" data-num="${key}">
        <div class="${dotClassName} ${key === currentSlide ? dotActiveClassName : ''}"></div>
    </div>`
)).join('');

const sliderDot = document.querySelectorAll('.slider__dot');


function clickDot(e) {
    const dot = e.target.closest('.slider__dot-wrapper');
    if (!dot) return;

    const dotNumber = dot.dataset.num;
    if (dotNumber === currentSlide) return;
    currentSlide = dotNumber;

    dots.removeEventListener('click', (e) => clickDot(e));
    dots.removeEventListener('touchstart', (e) => clickDot(e));

    changeCurrentSlide();
}

function changeCurrentSlide() {
    images.forEach(item => {
        if (item.classList.contains(imageActiveClassName, fadeIn)) {
            item.classList.remove(imageActiveClassName, fadeIn);
        }
    });

    texts.forEach(item => {
        if (item.classList.contains(textActiveClassName, fadeIn)) {
            item.classList.remove(textActiveClassName, fadeIn);
        }
    });

    images[currentSlide].classList.add(imageActiveClassName, fadeIn);
    texts[currentSlide].classList.add(textActiveClassName, fadeIn);

    sliderDot[activeDotNum].classList.remove(dotActiveClassName);
    sliderDot[currentSlide].classList.add(dotActiveClassName);

    activeDotNum = currentSlide;
}

dots.addEventListener('click', (e) => clickDot(e));
dots.addEventListener('touchstart', (e) => clickDot(e));