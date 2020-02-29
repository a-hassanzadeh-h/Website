export class Validation {
  private static toLowerCase(text: string): string {
    return text.toLocaleLowerCase();
  }

  public static stringAreEqual(text1: string, text2: string): boolean {
    return this.toLowerCase(text1) === this.toLowerCase(text2);
  }

  public static valueIsNullOrUndefined(object: any): boolean {
    return object === null || object === 'undefined';
  }

  public static ArrayIsEmpty(array: any[]) {
    return array.length === 0;
  }
}
