import config from '../config';
var base64 = require('base-64');

export default function gitLogin() {
  const bytes = config.GITHUB_USERNAME.trim() + ':' + config.GITHUB_PASSWORD.trim();
  const encoded = base64.encode(bytes);

  return fetch(config.GITHUB_AUTH_URL_PATH, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + encoded,
        'User-Agent': 'sajus',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        'client_id': config.GITHUB_CLIENT_ID,
        'client_secret': config.GITHUB_CLIENT_SECRET,
        'scopes': ['user', 'repo'],
        'note': 'not abuse'
      })
    })
    .then((response) => {
      const isValid = response.status < 400;
      return response.json().then(function(json) {
        if (isValid) {
          return json.token;
        } else {
          return json.message;
        }
      });
    });
}
