export interface IDateTime {
  formatString(dateFormat: string): string;
  isGreaterThan(date: Date): boolean;
  isLowerThan(date: Date): boolean;
}
