import * as stringToStream from 'string-to-stream';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_OBJECT_CONTENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import {
  CLIENT_ERROR_400_HTTP_CODE,
  NO_CONTENT_204_HTTP_CODE,
  PRECONDITION_FAILED_412_HTTP_CODE,
} from '../../utils/httpCodes';
import setRequestEtags from '../utils/setRequestEtags';
import setup from '../utils/setup';

interface EtagOptions {
  readonly ifMatch?: string;
  readonly ifNoneMatch?: string;
}

describe('expressPresenter.postProfile with etags', () => {
  const { service, supertest } = setup();

  const createProfile = async () => {
    await service.overwriteProfile({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      content: stringToStream(TEST_OBJECT_CONTENT),
      contentType: JSON_CONTENT_TYPE,
      profileId: TEST_PROFILE_ID,
    });
  };

  const patchProfileWithEtag = ({ ifMatch, ifNoneMatch }: EtagOptions) => {
    const request = supertest.post('/xAPI/activities/profile');
    setRequestEtags(request, ifMatch, ifNoneMatch);
    return request
      .set('Content-Type', JSON_CONTENT_TYPE)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .send(TEST_OBJECT_CONTENT);
  };

  it('should allow patches when using a correct etag', async () => {
    await createProfile();
    const getProfileResult = await service.getProfile({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      profileId: TEST_PROFILE_ID,
    });
    const opts = { ifMatch: getProfileResult.etag };
    await patchProfileWithEtag(opts).expect(NO_CONTENT_204_HTTP_CODE);
  });

  it('should throw precondition error when using an incorrect ifMatch', async () => {
    await createProfile();
    const opts = { ifMatch: 'incorrect_etag' };
    await patchProfileWithEtag(opts).expect(PRECONDITION_FAILED_412_HTTP_CODE);
  });

  it('should throw precondition error when using an incorrect ifNoneMatch', async () => {
    await createProfile();
    const opts = { ifNoneMatch: '*' };
    await patchProfileWithEtag(opts).expect(PRECONDITION_FAILED_412_HTTP_CODE);
  });

  it('should allow patch when not using an ifMatch or ifNoneMatch', async () => {
    await createProfile();
    await patchProfileWithEtag({}).expect(NO_CONTENT_204_HTTP_CODE);
  });

  it('should throw max etag error when using ifMatch and ifNoneMatch', async () => {
    await createProfile();
    const opts = { ifMatch: 'incorrect_etag', ifNoneMatch: '*' };
    await patchProfileWithEtag(opts).expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
