import service from '../../../../utils/testService';
import { TEST_CLIENT, TEST_PROFILE_ID } from '../../../../utils/testValues';

export default async (activityId: string) => {
  await service.deleteProfile({
    activityId,
    client: TEST_CLIENT,
    profileId: TEST_PROFILE_ID,
  });
};
