import { TEST_ACTIVITY_ID, TEST_PROFILE_ID } from '../../../utils/testValues';
import {
  FORBIDDEN_403_HTTP_CODE,
  NOT_FOUND_404_HTTP_CODE,
} from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.getProfile with scopes', () => {
  const { supertest } = setup();

  it('should throw forbidden error when using invalid scope', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .set('Authorization', 'invalid_scope_client')
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(FORBIDDEN_403_HTTP_CODE);
  });

  it('should throw no model error when using valid scopes', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .set('Authorization', 'valid_scope_client')
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(NOT_FOUND_404_HTTP_CODE);
  });
});
