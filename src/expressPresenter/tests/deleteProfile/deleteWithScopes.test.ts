import { xapiHeaderVersion } from '../../../utils/constants';
import { TEST_ACTIVITY_ID, TEST_PROFILE_ID } from '../../../utils/testValues';
import {
  FORBIDDEN_403_HTTP_CODE,
  NO_CONTENT_204_HTTP_CODE,
} from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.deleteProfile with scopes', () => {
  const { supertest } = setup();

  it('should throw forbidden error when using invalid scope', async () => {
    await supertest
      .delete('/xAPI/activities/profile')
      .set('Authorization', 'invalid_scope_client')
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(FORBIDDEN_403_HTTP_CODE);
  });

  it('should throw no model error when using valid scopes', async () => {
    await supertest
      .delete('/xAPI/activities/profile')
      .set('Authorization', 'valid_scope_client')
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(NO_CONTENT_204_HTTP_CODE);
  });
});
