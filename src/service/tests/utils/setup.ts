import setupService from 'jscommons/dist/tests/utils/setupService';
import Service from '../../../serviceFactory/Service';
import service from './service';

const setup = setupService(service);

export default (): Service => {
  return setup();
};
