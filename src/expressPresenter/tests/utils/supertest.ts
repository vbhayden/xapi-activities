import * as express from 'express';
import * as supertest from 'supertest';
import config from '../../../config';
import logger from '../../../logger';
import translatorFactory from '../../../translatorFactory';
import presenterFacade from '../../index';
import service from './service';

const app = express();
const translator = translatorFactory();
const presenter = presenterFacade({
  bodyParserLimit: config.express.bodyParserLimit,
  customRoute: config.express.customRoute,
  customRouteText: config.express.customRouteText,
  logger,
  morganDirectory: config.express.morganDirectory,
  service,
  translator,
});

app.use(presenter);

export default supertest(app);
