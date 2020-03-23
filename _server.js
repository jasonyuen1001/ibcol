const next = require('next')
const routes = require('./routes')
const _ = require('lodash');
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const parseArgs = require('minimist')
const url = require('url');
var cors = require('cors');
// const { join } = require('path');

const routeHelpers = require('./helpers/route');

//
// ─── GET CONFIGS ────────────────────────────────────────────────────────────────
//

// const envConfigs = {
//   "common": require('./configs/common.json'),
//   "local": require('./configs/local.json'),
//   "stage": require('./configs/stage.json'),
//   "production": require('./configs/production.json')
// }

// const currentEnv = process.env.ENV || 'local';

// const configs = Object.assign({}, envConfigs.common, envConfigs[currentEnv]);
const configs = require('./configs');
console.log('configs', configs);

const translations = require('./translations');

const defaultLocale = translations['_default']._locale;

//────────────────────────────────────────────────────────────────────────────────




//
// ─── GET PORT NUMBER ────────────────────────────────────────────────────────────
//

var argv = parseArgs(process.argv.slice(2))
// console.log(argv);
const port = argv.port || argv.p || process.env.PORT || 3000;
console.log(`Listening on port ${port}...`);

//────────────────────────────────────────────────────────────────────────────────



// With express
const express = require('express');

const server = express();

server.enable('strict routing');

// Create the router using the same routing options as the server.
const router = express.Router({
  caseSensitive: server.get('case sensitive routing'),
  strict: server.get('strict routing')
});

//
// ─── REDIRECTS FOR PREVIOUS SITE ROUTES ─────────────────────────────────────────
//

// router.get('/eng/*?', (req, res) => {
//   res.redirect(301, `/en-us`);
// });

// router.get('/tch/*?', (req, res) => {
//   res.redirect(301, `/zh-hk`);
// });

// router.get('/sch/*?', (req, res) => {
//   res.redirect(301, `/zh-cn`);
// });
//────────────────────────────────────────────────────────────────────────────────



// redirect to default locale
router.get('/_/:page?/', (req, res, next) => {
  routeHelpers.routeToDefaultPath(req, res, next, '/_');
});

router.get('/', (req, res, next) => {
  routeHelpers.routeToDefaultPath(req, res, next);
});

//────────────────────────────────────────────────────────────────────────────────



//
// ─── MIDDLEWARE: ADD SLASH TO URL ────────────────────────────────────────────────
//


const addSlash = (req, res, next) => {
  const urlObject = url.parse(req.url);
  const search = _.isEmpty(urlObject.search) ? '' : urlObject.search;

  const pathTokens = urlObject.pathname.split('/');
  const status = (process.env.ENV === 'production') ? 301 : 302;

  // console.log('pathTokens', pathTokens);

  const inspectToken = pathTokens.pop();


  if (
    pathTokens[1] === '_next' ||
    inspectToken === '' ||
    inspectToken.indexOf('.') !== -1
  ) {
    next();
  } else {


    if (process.env.ENV !== 'production')
      console.log(`       >> ${status}: ${urlObject.pathname}/${search}`);

    res.redirect(status, `${urlObject.pathname}/${search}`);
  }

};

//────────────────────────────────────────────────────────────────────────────────





//
// ─── MIDDLEWARE LOG URL TO CONSOLE ──────────────────────────────────────────────
//


const logURL = (req, res, next) => {
  if (process.env.ENV !== 'production')
    console.log('URL Requested:', req.url);
  next();
}


//────────────────────────────────────────────────────────────────────────────────




//
// ─── MIDDLEWARE PRODUCTION NAKED TO WWW ──────────────────────────────────────────────
//


const toWWW = (req, res, next) => {

  if (process.env.ENV === 'production' && req.get('host') === 'ibcol.org') {
    return require('express-naked-redirect')({
      subDomain: 'www',
      https: true
    })(req, res, next);
  } else {
    next();
  }
}


//────────────────────────────────────────────────────────────────────────────────


app.prepare().then(() => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  server
    // .use(toWWW)
    .use(logURL)
    .use(cors())
    .use(addSlash)
    .use(router)
    .use(handler)
    .listen(port);
})
