import * as stringToStream from 'string-to-stream';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_JSON_CONTENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import service from './service';

export default async (activityId: string = TEST_ACTIVITY_ID) => {
  await service.overwriteProfile({
    activityId,
    client: TEST_CLIENT,
    content: stringToStream(TEST_JSON_CONTENT),
    contentType: JSON_CONTENT_TYPE,
    profileId: TEST_PROFILE_ID,
  });
};
