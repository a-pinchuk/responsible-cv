document.addEventListener('DOMContentLoaded', function () {
  const resumeImage = document.querySelector('.resume_image img');

  resumeImage.addEventListener('click', function () {
    this.classList.toggle('enlarged');
  });
});

document.addEventListener('keydown', function (event) {
  const key = event.key.toUpperCase();
  const sectionTitle = document.querySelector(`.resume_title__letter[data-letter="${key}"]`);

  if (sectionTitle) {
    sectionTitle.scrollIntoView({ behavior: 'smooth' });
  }
});
