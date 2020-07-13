export class LocalStorage {
  constructor() {}

  private keyIsTEmptyOrNull(key: string) {
    if (!key) throw new Error('You have parsed an empty key');
  }

  private ValueIsTEmptyOrNull(value: string) {
    if (!value) throw new Error('the value is null or empty');
  }

  public insertData(key: string, value: string): void {
    this.keyIsTEmptyOrNull(key);
    this.ValueIsTEmptyOrNull(value);

    localStorage.setItem(key, value);
  }

  public getData(key: string): string {
    this.keyIsTEmptyOrNull(key);
    return localStorage.getItem(key);
  }

  public removeData(key: string): void {
    this.keyIsTEmptyOrNull(key);
    localStorage.removeItem(key);
  }
}
