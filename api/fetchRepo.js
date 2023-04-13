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
