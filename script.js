const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

const progressBar = document.querySelector('.scroll-progress__bar');
window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / max) * 100;
  progressBar.style.width = `${progress}%`;
});

const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

const cases = [];

const caseGrid = document.getElementById('caseGrid');
const shuffleButton = document.getElementById('shuffleButton');

const renderCases = () => {
  const sample = [...cases].sort(() => 0.5 - Math.random()).slice(0, 4);
  caseGrid.innerHTML = sample
    .map(
      item => `
        <article class="case-card" data-animate>
          <span class="case-pill">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join('');
  caseGrid.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
};

renderCases();

shuffleButton.addEventListener('click', () => {
  renderCases();
  shuffleButton.classList.add('is-active');
  setTimeout(() => shuffleButton.classList.remove('is-active'), 400);
});
