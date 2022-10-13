const sliderItems = document.querySelectorAll(".slider-items");
let i = 0;

const nextSlide = () => {
  sliderItems[i].classList.remove("active");
  i >= sliderItems.length - 1 ? (i = 0) : (i = i + 1);
  sliderItems[i].classList.add("active");
};

const prevSlide = () => {
  sliderItems[i].classList.remove("active");
  i <= 0 ? (i = sliderItems.length - 1) : (i = i - 1);
  sliderItems[i].classList.add("active");
};
