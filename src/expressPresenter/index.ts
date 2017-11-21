import { Router } from 'express';
import commonExpressPresenter from 'jscommons/dist/expressPresenter';
import Config from './Config';
import deleteProfile from './deleteProfile';
import getProfiles from './getProfiles';
import postProfile from './postProfile';
import putProfile from './putProfile';

export default (config: Config): Router => {
  const router = commonExpressPresenter(config);
  router.delete('', deleteProfile(config));
  router.get('', getProfiles(config));
  router.put('', putProfile(config));
  router.post('', postProfile(config));
  return router;
};
