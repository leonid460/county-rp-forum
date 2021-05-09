export interface ICheckboxGroupProps {
  values?: string[];
  setValues?: (newValue: string[]) => void;
  options: { name: string; value: string }[];
}
