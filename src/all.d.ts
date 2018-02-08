declare module 'jasmine-data_driven_tests/src/all' {
  export function all(description: string, dataset: any[], assertion: (...args: any[]) => void): void;
  export function xall(description: string, dataset: any[], assertion: (...args: any[]) => void): void;
  export function using(description: string, dataset: any[], assertion: (...args: any[]) => void): void;
  export function xusing(description: string, dataset: any[], assertion: (...args: any[]) => void): void;
}
