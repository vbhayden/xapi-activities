import * as stringToStream from 'string-to-stream';
import service from '../../../../utils/testService';
import { TEST_CLIENT, TEST_PROFILE_ID, TEXT_CONTENT_TYPE } from '../../../../utils/testValues';

export default async (activityId: string, content: string) => {
  await service.overwriteProfile({
    activityId,
    client: TEST_CLIENT,
    content: stringToStream(content),
    contentType: TEXT_CONTENT_TYPE,
    profileId: TEST_PROFILE_ID,
  });
};
