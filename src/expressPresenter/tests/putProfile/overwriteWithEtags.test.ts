import createTextProfile from '../../../utils/createTextProfile';
import getTestProfile from '../../../utils/getTestProfile';
import {
  CLIENT_ERROR_400_HTTP_CODE,
  CONFLICT_409_HTTP_CODE,
  NO_CONTENT_204_HTTP_CODE,
  PRECONDITION_FAILED_412_HTTP_CODE,
} from '../../utils/httpCodes';
import setup from '../utils/setup';
import overwriteProfile from './utils/overwriteProfile';

describe('expressPresenter.putProfile with etags', () => {
  setup();

  it('should allow overwrites when using a correct etag', async () => {
    await createTextProfile();
    const getProfileResult = await getTestProfile();
    await overwriteProfile()
      .set('If-Match', getProfileResult.etag)
      .unset('If-None-Match')
      .expect(NO_CONTENT_204_HTTP_CODE);
  });

  it('should throw precondition error when using an incorrect ifMatch', async () => {
    await createTextProfile();
    await overwriteProfile()
      .set('If-Match', 'incorrect_etag')
      .unset('If-None-Match')
      .expect(PRECONDITION_FAILED_412_HTTP_CODE);
  });

  it('should throw precondition error when using an incorrect ifNoneMatch', async () => {
    await createTextProfile();
    await overwriteProfile()
      .set('If-None-Match', '*')
      .expect(PRECONDITION_FAILED_412_HTTP_CODE);
  });

  it('should throw conflict error when not using ifMatch or ifNoneMatch', async () => {
    await createTextProfile();
    await overwriteProfile()
      .unset('If-None-Match')
      .expect(CONFLICT_409_HTTP_CODE);
  });

  it('should throw max etag error when using ifMatch and ifNoneMatch', async () => {
    await createTextProfile();
    await overwriteProfile()
      .set('If-Match', 'incorrect_etag')
      .set('If-None-Match', '*')
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw missing etags error when not using ifMatch and ifNoneMatch', async () => {
    await overwriteProfile()
      .unset('If-None-Match')
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
