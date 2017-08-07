import * as stringToStream from 'string-to-stream';
import ClientModel from '../../../models/ClientModel';
import service from '../../../utils/testService';
import {
  TEST_ACTIVITY_ID,
  TEST_CONTENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';

export default async (client: ClientModel) => {
  await service.overwriteProfile({
    activityId: TEST_ACTIVITY_ID,
    client,
    content: stringToStream(TEST_CONTENT),
    contentType: TEXT_CONTENT_TYPE,
    profileId: TEST_PROFILE_ID,
  });
};
