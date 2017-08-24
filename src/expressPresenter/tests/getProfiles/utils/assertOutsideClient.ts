import { OK_200_HTTP_CODE } from '../../../utils/httpCodes';
import getProfiles from './getProfiles';

export default async () => {
  await getProfiles().expect(OK_200_HTTP_CODE, []);
};
