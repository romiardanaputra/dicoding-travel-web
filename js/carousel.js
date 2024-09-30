const slides = Array.from(document.querySelectorAll(".myslide"));

console.log(slides);
const dots = Array.from(document.querySelectorAll(".dot"));
let counter = 1;

const showSlide = (n) => {
  const safeCounter = n > slides.length ? 1 : n < 1 ? slides.length : n;

  return {
    activeSlide: safeCounter,
    slidesState: slides.map((_, index) =>
      index + 1 === safeCounter ? "block" : "none"
    ),
    dotsState: dots.map((_, index) =>
      index + 1 === safeCounter ? "active" : ""
    ),
  };
};

const updateUI = ({ slidesState, dotsState, activeSlide }) => {
  slides.forEach((slide, index) => (slide.style.display = slidesState[index]));
  dots.forEach((dot, index) =>
    dot.classList.toggle("active", dotsState[index] === "active")
  );
  counter = activeSlide;
};

const changeSlide = (n) => {
  const newSlideState = showSlide(n);
  updateUI(newSlideState);
};

const autoSlide = () => changeSlide(counter + 1);

const resetTimer = (timer) => {
  clearInterval(timer);
  return setInterval(autoSlide, 5000);
};

const plusSlides = (n) => {
  changeSlide(counter + n);
  timer = resetTimer(timer);
};

const currentSlide = (n) => {
  changeSlide(n);
  timer = resetTimer(timer);
};

let timer = resetTimer(null);
changeSlide(counter);
