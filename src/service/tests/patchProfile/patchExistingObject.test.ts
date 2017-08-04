import assertError from 'jscommons/dist/tests/utils/assertError';
import * as stringToStream from 'string-to-stream';
import NonJsonObject from '../../../errors/NonJsonObject';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_CONTENT,
  TEST_JSON_CONTENT,
  TEST_OBJECT_CONTENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import assertProfile from '../utils/assertProfile';
import setup from '../utils/setup';
import patchContent from './utils/patchContent';
import patchExistingContent from './utils/patchExistingContent';

describe('patchProfile with existing object content', () => {
  const service = setup();

  const createObjectContent = async () => {
    await service.overwriteProfile({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      content: stringToStream(TEST_OBJECT_CONTENT),
      contentType: JSON_CONTENT_TYPE,
      profileId: TEST_PROFILE_ID,
    });
  };

  it('should error when patching with text content', async () => {
    await createObjectContent();
    const promise = patchContent(TEST_CONTENT, TEXT_CONTENT_TYPE);
    await assertError(NonJsonObject, promise);
  });

  it('should error when patching with JSON content', async () => {
    await createObjectContent();
    const promise = patchContent(TEST_JSON_CONTENT, JSON_CONTENT_TYPE);
    await assertError(NonJsonObject, promise);
  });

  it('should merge when patching with object content', async () => {
    await createObjectContent();
    await patchExistingContent('{"bar": 2}', JSON_CONTENT_TYPE);
    await assertProfile('{"foo":1,"bar":2}');
  });
});
