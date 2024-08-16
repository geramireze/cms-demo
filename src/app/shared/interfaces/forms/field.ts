export interface Field {
  label: string;
  placeholder: string;
  type: string;
  item: string;
  name: string;
  required: true;
  options?: Options[];
}

export interface Options {
  label: string;
  value: string;
}
