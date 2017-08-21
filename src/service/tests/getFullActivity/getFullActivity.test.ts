import * as assert from 'assert';
import assertError from 'jscommons/dist/tests/utils/assertError';
import { Warnings } from 'rulr';
import GetFullActivityResult from '../../../serviceFactory/results/GetFullActivityResult';
import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_INVALID_ACTIVITY_ID,
} from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getFullAgent with existing model', () => {
  const service = setup();

  const assertUnnamedFullActivity = async () => {
    const fullActivity = await service.getFullActivity({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
    });
    const expectedResult: GetFullActivityResult = {
      definition: { name: {} },
      id: TEST_ACTIVITY_ID,
      objectType: 'Activity',
    };
    assert.deepEqual(fullActivity, expectedResult);
  };

  it('should return the activity id when using a valid activity id', async () => {
    await assertUnnamedFullActivity();
  });

  it('should throw warnings when using an invalid activity id', async () => {
    const promise = service.getFullActivity({
      activityId: TEST_INVALID_ACTIVITY_ID,
      client: TEST_CLIENT,
    });
    await assertError(Warnings, promise);
  });
});
