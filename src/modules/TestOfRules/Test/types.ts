interface ITestCaseCommonProps {
  question: string;
  options: { value: string; name: string }[];
}

export interface ITestCaseWithMultipleAnswersProps extends ITestCaseCommonProps {
  values?: string[];
  setValues?: (values: string[]) => void;
}

export interface ITestCaseWithOneAnswer extends ITestCaseCommonProps {
  value?: string;
  setValue?: (value: string) => void;
}

export interface ITestCaseProps extends ITestCaseWithMultipleAnswersProps {
  answersAmount: 'one' | 'multiple';
}
