const slides = Array.from(document.querySelectorAll(".slide"));
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const slideCounter = document.getElementById("slideCounter");
const slideTitle = document.getElementById("slideTitle");

let currentIndex = 0;

function clampIndex(index) {
  return Math.max(0, Math.min(index, slides.length - 1));
}

function updateSlide(index, options = {}) {
  currentIndex = clampIndex(index);

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  const activeSlide = slides[currentIndex];
  slideCounter.textContent = `${currentIndex + 1} / ${slides.length}`;
  slideTitle.textContent = activeSlide.dataset.title || `Slide ${currentIndex + 1}`;
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;

  if (!options.skipHash) {
    history.replaceState(null, "", `#${activeSlide.id}`);
  }
}

function step(direction) {
  updateSlide(currentIndex + direction);
}

function getIndexFromHash() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) {
    return 0;
  }

  const hashIndex = slides.findIndex((slide) => slide.id === hash);
  return hashIndex >= 0 ? hashIndex : 0;
}

prevButton.addEventListener("click", () => step(-1));
nextButton.addEventListener("click", () => step(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    step(1);
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    step(-1);
  }

  if (event.key === "Home") {
    updateSlide(0);
  }

  if (event.key === "End") {
    updateSlide(slides.length - 1);
  }
});

document.getElementById("deck").addEventListener("click", (event) => {
  if (window.matchMedia("(max-width: 980px)").matches) {
    return;
  }

  if (event.target.closest("button, a")) {
    return;
  }

  const clickPastMidpoint = event.clientX > window.innerWidth / 2;
  step(clickPastMidpoint ? 1 : -1);
});

window.addEventListener("hashchange", () => {
  updateSlide(getIndexFromHash(), { skipHash: true });
});

updateSlide(getIndexFromHash(), { skipHash: true });
