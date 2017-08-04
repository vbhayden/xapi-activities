import * as stringToStream from 'string-to-stream';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_OBJECT_CONTENT,
  TEST_PROFILE_ID,
} from '../../../../utils/testValues';
import service from '../../utils/service';

export default async () => {
  await service.overwriteProfile({
    activityId: TEST_ACTIVITY_ID,
    client: TEST_CLIENT,
    content: stringToStream(TEST_OBJECT_CONTENT),
    contentType: JSON_CONTENT_TYPE,
    profileId: TEST_PROFILE_ID,
  });
};
