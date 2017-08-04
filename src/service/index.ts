import commonService from 'jscommons/dist/service';
import Service from '../serviceFactory/Service';
import Config from './Config';
import deleteProfile from './deleteProfile';
import getClient from './getClient';
import getFullActivity from './getFullActivity';
import getProfile from './getProfile';
import getProfiles from './getProfiles';
import overwriteProfile from './overwriteProfile';
import patchProfile from './patchProfile';

export default (config: Config): Service => {
  return {
    deleteProfile: deleteProfile(config),
    getClient: getClient(config),
    getFullActivity: getFullActivity(config),
    getProfile: getProfile(config),
    getProfiles: getProfiles(config),
    overwriteProfile: overwriteProfile(config),
    patchProfile: patchProfile(config),

    ...commonService(config),
  };
};
