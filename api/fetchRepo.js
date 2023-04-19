export class GitHubAPI {
  constructor(token, username) {
    this.token = token;
    this.username = username;
    this.baseURL = 'https://api.github.com';
  }

  async getRepos() {
    const url = `${this.baseURL}/users/${this.username}/repos`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `token ${this.token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  }
}
