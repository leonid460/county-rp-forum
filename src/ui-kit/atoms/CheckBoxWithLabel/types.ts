export interface ICheckBoxWithLabelProps {
  label: string;
  value?: boolean;
  setValue?: (value: boolean) => void;
  className?: string;
}
