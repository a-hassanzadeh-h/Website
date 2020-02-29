import { MessageboxService } from './messagebox.service';
import { ServiceTestClass } from 'src/app/models/serviceTestClass';

const service = new ServiceTestClass(MessageboxService);
service.runtTest('MessageboxService');
