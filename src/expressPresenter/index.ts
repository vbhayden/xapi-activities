import { Router } from 'express';
import commonExpressPresenter from 'jscommons/dist/expressPresenter';
import Config from './Config';
import deleteProfile from './deleteProfile';
import getProfiles from './getProfiles';
import postProfile from './postProfile';
import putProfile from './putProfile';

export default (config: Config): Router => {
  const router = commonExpressPresenter(config);
  router.delete('/xAPI/activities/profile', deleteProfile(config));
  router.get('/xAPI/activities/profile', getProfiles(config));
  router.put('/xAPI/activities/profile', putProfile(config));
  router.post('/xAPI/activities/profile', postProfile(config));
  return router;
};
