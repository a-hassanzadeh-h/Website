import { FetchDataService } from './fetch-data.service';
import { ServiceTestClass } from 'src/app/models/serviceTestClass';

const service = new ServiceTestClass(FetchDataService);
service.runtTest('FetchDataService');
