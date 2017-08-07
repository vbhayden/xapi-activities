import * as stringToStream from 'string-to-stream';
import service from '../../../utils/testService';
import {
  TEST_CLIENT,
  TEST_CONTENT,
  TEST_IMMUTABLE_ACTIVITY_ID,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';

export default async () => {
  await service.overwriteProfile({
    activityId: TEST_IMMUTABLE_ACTIVITY_ID,
    client: TEST_CLIENT,
    content: stringToStream(TEST_CONTENT),
    contentType: TEXT_CONTENT_TYPE,
    profileId: TEST_PROFILE_ID,
  });
};
