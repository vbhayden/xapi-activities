import assertProfile from '../../../utils/assertProfile';
import {
  ALTERNATE_CONTENT_TYPE,
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import createObjectContent from './utils/createObjectContent';

describe('expressPresenter.postProfile using the alternate request syntax', () => {
  const { supertest } = setup();

  it('should merge when patching with object content ', async () => {
    await createObjectContent();
    await supertest
      .post('/xAPI/activities/profile')
      .set('Content-Type', ALTERNATE_CONTENT_TYPE)
      .query({
        method: 'POST',
      })
      .send({
        'Content-Type': JSON_CONTENT_TYPE,
        activityId: TEST_ACTIVITY_ID,
        content: '{"bar": 2}',
        profileId: TEST_PROFILE_ID,
      })
      .expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile('{"foo":1,"bar":2}');
  });
});
