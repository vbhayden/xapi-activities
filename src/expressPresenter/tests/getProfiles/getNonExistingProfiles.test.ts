import {
  TEST_ACTIVITY_ID,
  TEST_INVALID_ACTIVITY_ID,
  TEST_INVALID_TIMESTAMP,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import supertest from '../utils/supertest';

describe('expressPresenter.getProfiles with non-existing agent', () => {
  setup();

  it('should return no profile ids when getting a non-existing activity id', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        activityId: TEST_ACTIVITY_ID,
      })
      .expect(OK_200_HTTP_CODE, []);
  });

  it('should throw warnings when using an invalid activity id', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        activityId: TEST_INVALID_ACTIVITY_ID,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when using an invalid since', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        activityId: TEST_INVALID_ACTIVITY_ID,
        since: TEST_INVALID_TIMESTAMP,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
