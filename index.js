// import { fetchRepo } from './api/fetchRepo';

const project = document.querySelector('.projects');
console.log('🚀 ~ project:', project);

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

const BASE_URL = 'https://api.github.com/users/a-pinchuk/repos';

export const fetchRepo = async () => {
  try {
    console.log('tyt');
    const responce = await fetch(BASE_URL);
    if (responce.ok) {
      const data = await responce.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

fetchRepo().then(data => {
  const markup = data
    .slice(0, 10)
    .map(el => {
      return (
        '<li>' +
        '<a href=' +
        el.owner.html_url +
        '>' +
        el.full_name +
        '</a>' +
        (el.description ? '<p>' + el.description + '</p>' : '') +
        '</li>'
      );
    })
    .join('');

  project.insertAdjacentHTML('beforeend', markup);
});
