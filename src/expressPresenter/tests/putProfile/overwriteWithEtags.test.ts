import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_CONTENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import {
  CLIENT_ERROR_400_HTTP_CODE,
  CONFLICT_409_HTTP_CODE,
  NO_CONTENT_204_HTTP_CODE,
  PRECONDITION_FAILED_412_HTTP_CODE,
} from '../../utils/httpCodes';
import createTextProfile from '../utils/createTextProfile';
import setRequestEtags from '../utils/setRequestEtags';
import setup from '../utils/setup';

interface EtagOptions {
  readonly ifMatch?: string;
  readonly ifNoneMatch?: string;
}

describe('expressPresenter.putProfile with etags', () => {
  const { service, supertest } = setup();

  const overwriteProfileWithEtag = ({ ifMatch, ifNoneMatch }: EtagOptions) => {
    const request = supertest.put('/xAPI/activities/profile');
    setRequestEtags(request, ifMatch, ifNoneMatch);
    return request
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .send(TEST_CONTENT);
  };

  it('should allow overwrites when using a correct etag', async () => {
    await createTextProfile();
    const getProfileResult = await service.getProfile({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      profileId: TEST_PROFILE_ID,
    });
    const opts = { ifMatch: getProfileResult.etag };
    await overwriteProfileWithEtag(opts).expect(NO_CONTENT_204_HTTP_CODE);
  });

  it('should throw precondition error when using an incorrect ifMatch', async () => {
    await createTextProfile();
    const opts = { ifMatch: 'incorrect_etag' };
    await overwriteProfileWithEtag(opts).expect(PRECONDITION_FAILED_412_HTTP_CODE);
  });

  it('should throw precondition error when using an incorrect ifNoneMatch', async () => {
    await createTextProfile();
    const opts = { ifNoneMatch: '*' };
    await overwriteProfileWithEtag(opts).expect(PRECONDITION_FAILED_412_HTTP_CODE);
  });

  it('should throw conflict error when not using ifMatch or ifNoneMatch', async () => {
    await createTextProfile();
    await overwriteProfileWithEtag({}).expect(CONFLICT_409_HTTP_CODE);
  });

  it('should throw max etag error when using ifMatch and ifNoneMatch', async () => {
    await createTextProfile();
    const opts = { ifMatch: 'incorrect_etag', ifNoneMatch: '*' };
    await overwriteProfileWithEtag(opts).expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
