/* ==================== JS File =================== */

/* ==================== Make mobile navigation work =================== */
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");
});

/* ==================== Sticky Navigation =================== */
const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function(entries){
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
      document.body.classList.add("sticky");
    }
    if(ent.isIntersecting === true){
      document.body.classList.remove("sticky")
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

/* ==================== Scroll Reveal =================== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal('.heading-primary,.heading-secondary, .heading-tertiary, .hero__textbox, .hero__img, .btn, btn__dark, .btn__light')
sr.reveal('.count__content, .about__photo--img, .advantages__content, .style__content--item, .testimonials__content--item, .footer__item', {interval:100})
sr.reveal('.hero__textbox--flex-left-para, .hero__textbox--flex-right-para, .reliable__content--3, .form__content--input, .form__content--icon', {origin: 'left'})
sr.reveal('.reliable__content--2, .about__text, .mission__flex--right, .study__flex--text-para', {origin:'right'})

/* ==================== Smooth Scroll =================== */
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900
});