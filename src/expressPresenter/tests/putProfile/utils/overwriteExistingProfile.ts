import getTestProfile from '../../../../utils/getTestProfile';
import { TEST_CONTENT } from '../../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../../utils/httpCodes';
import overwriteProfile from './overwriteProfile';

export default async (
  activityId: string,
  content: string = TEST_CONTENT,
) => {
  const getProfileResult = await getTestProfile({ activityId });
  await overwriteProfile({ activityId }, content)
    .set('If-Match', getProfileResult.etag)
    .unset('If-None-Match')
    .expect(NO_CONTENT_204_HTTP_CODE);
};
