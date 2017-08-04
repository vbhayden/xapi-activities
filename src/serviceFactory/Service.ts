import CommonService from 'jscommons/dist/serviceFactory/Service';
import DeleteProfileOptions from './options/DeleteProfileOptions';
import GetClientOptions from './options/GetClientOptions';
import GetFullActivityOptions from './options/GetFullActivityOptions';
import GetProfileOptions from './options/GetProfileOptions';
import GetProfilesOptions from './options/GetProfilesOptions';
import OverwriteProfileOptions from './options/OverwriteProfileOptions';
import PatchProfileOptions from './options/PatchProfileOptions';
import GetClientResult from './results/GetClientResult';
import GetFullActivityResult from './results/GetFullActivityResult';
import GetProfileResult from './results/GetProfileResult';
import GetProfilesResult from './results/GetProfilesResult';

interface Service extends CommonService {
  readonly deleteProfile: (opts: DeleteProfileOptions) => Promise<void>;
  readonly getClient: (opts: GetClientOptions) => Promise<GetClientResult>;
  readonly getFullActivity: (opts: GetFullActivityOptions) => Promise<GetFullActivityResult>;
  readonly getProfile: (opts: GetProfileOptions) => Promise<GetProfileResult>;
  readonly getProfiles: (opts: GetProfilesOptions) => Promise<GetProfilesResult>;
  readonly overwriteProfile: (opts: OverwriteProfileOptions) => Promise<void>;
  readonly patchProfile: (opts: PatchProfileOptions) => Promise<void>;
}

export default Service;
