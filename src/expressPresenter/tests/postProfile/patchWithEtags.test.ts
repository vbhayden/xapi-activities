import createObjectProfile from '../../../utils/createObjectProfile';
import getTestProfile from '../../../utils/getTestProfile';
import {
  CLIENT_ERROR_400_HTTP_CODE,
  NO_CONTENT_204_HTTP_CODE,
  PRECONDITION_FAILED_412_HTTP_CODE,
} from '../../utils/httpCodes';
import setup from '../utils/setup';
import patchProfile from './utils/patchProfile';

describe('expressPresenter.postProfile with etags', () => {
  setup();

  it('should allow patches when using a correct etag', async () => {
    await createObjectProfile();
    const getProfileResult = await getTestProfile();
    await patchProfile()
      .set('If-Match', getProfileResult.etag)
      .expect(NO_CONTENT_204_HTTP_CODE);
  });

  it('should throw precondition error when using an incorrect ifMatch', async () => {
    await createObjectProfile();
    await patchProfile()
      .set('If-Match', 'incorrect_etag')
      .expect(PRECONDITION_FAILED_412_HTTP_CODE);
  });

  it('should throw precondition error when using an incorrect ifNoneMatch', async () => {
    await createObjectProfile();
    await patchProfile()
      .set('If-None-Match', '*')
      .expect(PRECONDITION_FAILED_412_HTTP_CODE);
  });

  it('should allow patch when not using an ifMatch or ifNoneMatch', async () => {
    await createObjectProfile();
    await patchProfile().expect(NO_CONTENT_204_HTTP_CODE);
  });

  it('should throw max etag error when using ifMatch and ifNoneMatch', async () => {
    await createObjectProfile();
    await patchProfile()
      .set('If-Match', 'incorrect_etag')
      .set('If-None-Match', '*')
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
