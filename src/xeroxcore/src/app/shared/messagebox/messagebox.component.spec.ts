import { MessageboxComponent } from './messagebox.component';
import { TestClass } from 'src/app/models/testClass';

const messageBoxTest = new TestClass(MessageboxComponent);
messageBoxTest.runTest('MessageboxComponent');
