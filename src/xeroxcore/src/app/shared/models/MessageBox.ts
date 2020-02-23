import { IMessageBox } from './interface/IMessageBox';

export class Messagebox implements IMessageBox {
  title: string;
  text: string;
  subMessage: string;
  multiOption: boolean;
  optionTitle: string;
  action: any;
}
