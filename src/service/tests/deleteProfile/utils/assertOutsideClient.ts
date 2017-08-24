import NoModel from 'jscommons/dist/errors/NoModel';
import assertError from 'jscommons/dist/tests/utils/assertError';
import deleteProfile from './deleteProfile';

export default async () => {
  const promise = deleteProfile();
  await assertError(NoModel, promise);
};
