import { NOT_FOUND_404_HTTP_CODE } from '../../../utils/httpCodes';
import deleteProfile from './deleteProfile';

export default async () => {
  await deleteProfile().expect(NOT_FOUND_404_HTTP_CODE);
};
