export function dew () {
  return exports;
}
var exports = {"name":"sauce-connect-launcher","description":"A library to download and launch Sauce Connect.","version":"1.3.2","homepage":"https://github.com/bermi/sauce-connect-launcher","author":"Bermi Ferrer <bermi@bermilabs.com>","main":"lib/sauce-connect-launcher","license":"MIT","keywords":["selenium","sauce connect","sauce labs","testing","local tunnel"],"repository":{"type":"git","url":"https://github.com/bermi/sauce-connect-launcher"},"scripts":{"postinstall":"node scripts/install.js || nodejs scripts/install.js","test":"npm run test:jest && make test","test:jest":"jest --testPathPattern=__tests__  --forceExit","version":"git add README.md","lint":"make lint"},"dependencies":{"adm-zip":"~0.4.3","async":"^2.1.2","https-proxy-agent":"^5.0.0","lodash":"^4.16.6","rimraf":"^2.5.4"},"devDependencies":{"colors":"~1.1.2","eslint-plugin-mocha":"^4.8.0","expect.js":"^0.3.1","grunt":"~0.4.1","grunt-cli":"~0.1.9","grunt-contrib-watch":"~0.6.1","grunt-eslint":"^19.0.0","grunt-notify":"~0.4.0","grunt-release":"^0.14.0","grunt-simple-mocha":"~0.4.0","jest":"^24.8.0","mocha":"^3.1.2"},"engines":{"node":">= 4"},"sauceConnectLauncher":{"scVersion":"latest"},"peerDependencies":{"@jspm/core":"npm:jspm/core@^1.0.0"}};
