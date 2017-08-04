import { TEST_CLIENT, TEST_PROFILE_ID } from '../../../../utils/testValues';
import service from '../../utils/service';

export default async (activityId: string) => {
  await service.deleteProfile({
    activityId,
    client: TEST_CLIENT,
    profileId: TEST_PROFILE_ID,
  });
};
