import { NOT_FOUND_404_HTTP_CODE } from '../../../utils/httpCodes';
import getProfile from './getProfile';

export default async () => {
  await getProfile().expect(NOT_FOUND_404_HTTP_CODE);
};
