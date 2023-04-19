import { GitHubAPI } from './api/fetchRepo.js';

const project = document.querySelector('.projects');

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

window.addEventListener('load', async () => {
  try {
    const token = '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';
    const username = 'a-pinchuk';
    const gitHubAPI = new GitHubAPI(token, username);
    const repos = await gitHubAPI.getRepos();
    const markup = repos
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
  } catch (error) {
    console.error(error);
  }
});
