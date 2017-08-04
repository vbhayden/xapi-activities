import {
  TEST_ACTIVITY_ID,
  TEST_CONTENT,
  TEST_INVALID_SCOPE_TOKEN,
  TEST_PROFILE_ID,
  TEST_VALID_SCOPE_TOKEN,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import { FORBIDDEN_403_HTTP_CODE, NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.putProfile with scopes', () => {
  const { supertest } = setup();

  const overwriteProfileWithScopes = (token: string) => {
    return supertest
      .put('/xAPI/activities/profile')
      .set('Authorization', token)
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .send(TEST_CONTENT);
  };

  it('should throw forbidden error when using invalid scope', async () => {
    await overwriteProfileWithScopes(TEST_INVALID_SCOPE_TOKEN).expect(FORBIDDEN_403_HTTP_CODE);
  });

  it('should not throw an error when using valid scopes', async () => {
    await overwriteProfileWithScopes(TEST_VALID_SCOPE_TOKEN).expect(NO_CONTENT_204_HTTP_CODE);
  });
});
