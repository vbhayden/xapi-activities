import * as stringToStream from 'string-to-stream';
import service from '../../../../utils/testService';
import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_PROFILE_ID,
} from '../../../../utils/testValues';

export default async (content: string, contentType: string) => {
  await service.patchProfile({
    activityId: TEST_ACTIVITY_ID,
    client: TEST_CLIENT,
    content: stringToStream(content),
    contentType,
    profileId: TEST_PROFILE_ID,
  });
};
