import {
  TEST_ACTIVITY_ID,
  TEST_INVALID_ACTIVITY_ID,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.getFullAgent', () => {
  const { supertest } = setup();

  it('should return the activity id when using a valid activity id', async () => {
    await supertest
      .get('/xAPI/activities')
      .query({
        activityId: TEST_ACTIVITY_ID,
      })
      .expect(OK_200_HTTP_CODE, {
        id: TEST_ACTIVITY_ID,
      });
  });

  it('should throw warnings when using an invalid activity id', async () => {
    await supertest
      .get('/xAPI/activities')
      .query({
        activityId: TEST_INVALID_ACTIVITY_ID,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
