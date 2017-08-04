import * as stringToStream from 'string-to-stream';
import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_CONTENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import service from './service';

export default async (activityId: string = TEST_ACTIVITY_ID) => {
  await service.overwriteProfile({
    activityId,
    client: TEST_CLIENT,
    content: stringToStream(TEST_CONTENT),
    contentType: TEXT_CONTENT_TYPE,
    profileId: TEST_PROFILE_ID,
  });
};
