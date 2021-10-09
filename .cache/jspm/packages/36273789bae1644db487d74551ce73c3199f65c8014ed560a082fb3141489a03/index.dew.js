import { dew as _indexDewDew } from "gh-got/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const ghGot = _indexDewDew();

  exports = (email, token) => {
    if (!(typeof email === 'string' && email.includes('@'))) {
      throw new Error('Email required');
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
        throw new Error(`Couldn't find username for \`${email}\``);
      }

      return data.items[0].login;
    });
  };

  return exports;
}