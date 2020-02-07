module.exports = {
  "_locale": {
    "disable": true,
    "id": "en-in",
    "name": "India",
    "label": "Welcome",
    "flag": "in.svg"
  },
  "_global": require('./_global.json'),
  "_countries": require('./_countries.json'),
  "_sectors": require('./_sectors.json'),
  "_project-categories": require('./_project-categories.json'),
  "about": Object.assign({}, require('./_global.json'), require('./about.json')),
  "ibcol": Object.assign({}, require('./_global.json'), require('./ibcol.json')),
  "how": Object.assign({}, require('./_global.json'), require('./how.json')),
  "contact": Object.assign({}, require('./_global.json'), require('./contact.json')),
  "sponsors": Object.assign({}, require('./_global.json'), require('./sponsors.json')),
  "home": Object.assign({}, require('./_global.json'), require('./home.json')),
  "schedule": Object.assign({}, require('./_global.json'), require('./schedule.json')),
  "ambassadors": Object.assign({}, require('./_global.json'), require('./ambassadors.json')),
  "registration": Object.assign({}, require('./_global.json'), require('./registration.json')),
  "admin": Object.assign({}, require('./_global.json'), require('./admin.json')),
  "dashboard": Object.assign({}, require('./_global.json'), require('./dashboard.json')),
  "program": Object.assign({}, require('./_global.json'), require('./program.json')),
  "rules": Object.assign({}, require('./_global.json'), require('./rules.json')),
  "supporters": Object.assign({}, require('./_global.json'), require('./supporters.json'))
}