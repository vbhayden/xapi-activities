import { NO_CONTENT_204_HTTP_CODE } from '../../../utils/httpCodes';
import deleteProfile from './deleteProfile';

export default async () => {
  await deleteProfile().expect(NO_CONTENT_204_HTTP_CODE);
};
