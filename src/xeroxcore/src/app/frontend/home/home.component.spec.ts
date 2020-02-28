import { HomeComponent } from './home.component';
import { TestClass } from 'src/app/models/testClass';

const HomeComponentTest = new TestClass(HomeComponent);
HomeComponentTest.runTest('HomeComponentTest');
