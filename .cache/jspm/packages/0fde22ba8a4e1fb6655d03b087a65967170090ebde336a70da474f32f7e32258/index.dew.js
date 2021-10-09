import { dew as _indexDewDew } from "gh-got/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const ghGot = _indexDewDew();

  function searchCommits(email, token) {
    return ghGot('search/commits', {
      token,
      query: {
        q: `author-email:${email}`,
        sort: 'author-date',
        // eslint-disable-next-line camelcase
        per_page: 1
      },
      headers: {
        accept: 'application/vnd.github.cloak-preview',
        'user-agent': 'https://github.com/sindresorhus/github-username'
      }
    }).then(result => {
      const data = result.body;

      if (data.total_count === 0) {
        throw new Error(`Couldn't find username for \`${email}\``);
      }

      return data.items[0].author.login;
    });
  }

  exports = (email, token) => {
    if (!(typeof email === 'string' && email.includes('@'))) {
      return Promise.reject(new Error('Email required'));
    }

    return ghGot('search/users', {
      token,
      query: {
        q: `${email} in:email`
      },
      headers: {
        'user-agent': 'https://github.com/sindresorhus/github-username'
      }
    }).then(result => {
      const data = result.body;

      if (data.total_count === 0) {
        return searchCommits(email, token);
      }

      return data.items[0].login;
    });
  };

  return exports;
}