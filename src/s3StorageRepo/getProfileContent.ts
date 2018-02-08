import GetProfileContentOptions from '../repoFactory/options/GetProfileContentOptions';
import GetProfileContentResult from '../repoFactory/results/GetProfileContentResult';
import getStorageDir from '../utils/getStorageDir';
import Config from './Config';

export default (config: Config) => {
  return async (opts: GetProfileContentOptions): Promise<GetProfileContentResult> => {
    const profileDir = getStorageDir({ subfolder: config.subFolder, lrs_id: opts.lrs_id });
    const filePath = `${profileDir}/${opts.key}`;
    return new Promise<GetProfileContentResult>((resolve, reject) => {
      const obj = config.client.getObject({
        Bucket: config.bucketName,
        Key: filePath,
      });
      const content = obj.createReadStream();
      obj.on('error', (err) => {
        /* istanbul ignore next */
        reject(err);
      }).on('complete', () => {
        resolve({ content });
      });
    });
  };
};
