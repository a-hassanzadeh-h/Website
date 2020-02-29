import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Validation } from './validation';

export class ArrayHelper {
  public static GetPropertie(object: any): string[] {
    return Object.getOwnPropertyNames(object[0]);
  }

  public static GetArrayWithNoDublicates(list: any[]): Set<any> {
    return new Set(list);
  }

  public static getValueFromArray(list: any[], propertyIndex: number): any[] {
    const propertyList = this.GetPropertie(list);
    const newList = [];
    list.forEach(item => {
      newList.push(item[propertyList[propertyIndex]]);
    });
    return newList;
  }

  public static filterArray(list: any[], index: number, value: string): any[] {
    const properties = this.GetPropertie(list);
    const newList = [];
    list.forEach(item => {
      if (Validation.stringAreEqual(item[properties[index]], value)) {
        newList.push(item);
      }
    });
    return newList;
  }

  public static CreateSelectBoxArray(list: any[]): any[] {
    const noDublicateList = ArrayHelper.GetArrayWithNoDublicates(list);
    const newList = [];
    noDublicateList.forEach(element => {
      newList.push({ value: element, viewValue: element });
    });
    return newList;
  }

  public static GetSelectList(originalList: any[], propertiIndex: number) {
    let list = this.getValueFromArray(originalList, propertiIndex);
    list.push('all');
    list = this.CreateSelectBoxArray(list);
    return list;
  }
}
