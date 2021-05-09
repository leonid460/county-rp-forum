export interface IRadioGroupProps {
  value?: string;
  setValue?: (newValue: string) => void;
  options: { name: string; value: string }[];
}
