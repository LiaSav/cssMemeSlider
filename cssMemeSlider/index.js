const images = document.querySelectorAll('.slider__image');
const imageActiveClassName = 'slider__image_active';

const texts = document.querySelectorAll('.slider__text');
const size = images.length;

let currentSlide = 0;
let activeDotNum = 0;

const dots = document.querySelector('.slider__dots');
const dotWrapperClassName = 'slider__dot-wrapper';
const dotClassName = 'slider__dot';
const dotActiveClassName = 'slider__dot_active';

console.log(images);
console.log(size);



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

    changeCurrentSlide();

    dots.removeEventListener('click', (e) => clickDot(e));
    dots.removeEventListener('touchstart', (e) => clickDot(e));
}

function changeCurrentSlide() {
    images.forEach(item => {
        if (item.classList.contains(imageActiveClassName, 'fade-in')) {
            item.classList.remove(imageActiveClassName, 'fade-in');
            // item.classList.add('fade-out');
        }
    });

    texts.forEach(item => {
        if (item.classList.contains('slider__text_active', 'fade-in')) {
            item.classList.remove('slider__text_active', 'fade-in');
            // item.classList.add('fade-out');
        }
    });

    images[currentSlide].classList.add(imageActiveClassName, 'fade-in');
    texts[currentSlide].classList.add('slider__text_active', 'fade-in');

    sliderDot[activeDotNum].classList.remove(dotActiveClassName);
    sliderDot[currentSlide].classList.add(dotActiveClassName);

    activeDotNum = currentSlide;
}

dots.addEventListener('click', (e) => clickDot(e));
dots.addEventListener('touchstart', (e) => clickDot(e));