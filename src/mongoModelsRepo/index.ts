import commonMongoRepo from 'jscommons/dist/mongoRepo';
import ModelsRepo from '../repoFactory/ModelsRepo';
import Config from './Config';
import deleteProfile from './deleteProfile';
import getProfile from './getProfile';
import getProfiles from './getProfiles';
import overwriteProfile from './overwriteProfile';
import patchProfile from './patchProfile';

export default (config: Config): ModelsRepo => {
  return {
    deleteProfile: deleteProfile(config),
    getProfile: getProfile(config),
    getProfiles: getProfiles(config),
    overwriteProfile: overwriteProfile(config),
    patchProfile: patchProfile(config),
    ...commonMongoRepo(config),
  };
};
