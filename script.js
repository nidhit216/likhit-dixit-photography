const video = document.querySelector('.video-container');
const header = document.querySelector('.header');
const heroText = document.querySelector('.hero-content');



document.fonts.ready.then(() => {
  console.log("✅ Fonts fully loaded");
});


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroHeight = window.innerHeight;

  // 👇 start immediately, finish at 20%
  let progress = scrollY / (heroHeight * 0.1);

  // clamp
  if (progress > 1) progress = 1;
  if (progress < 0) progress = 0;

  // parallax (optional)
  video.style.transform = `translateY(${scrollY * 0.3}px)`;

  // fade
  header.style.opacity = progress;
  heroText.style.opacity = 1 - progress;

  // slight slide
  header.style.transform = `translateY(${(-20 + progress * 20)}px)`;
});


document.querySelector('.logo').addEventListener('click', (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});