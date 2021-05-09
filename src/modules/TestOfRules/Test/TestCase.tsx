import React from 'react';
import * as Styled from './styled';
import { RadioGroup } from '@/ui-kit/molecules/RadioGroup';
import { CheckboxGroup } from '@/ui-kit/molecules/CheckboxGroup';
import { ITestCaseWithMultipleAnswersProps, ITestCaseWithOneAnswer, ITestCaseProps } from './types';

const TestCaseWithMultipleAnswers = ({
  question,
  options,
  values,
  setValues
}: ITestCaseWithMultipleAnswersProps) => {
  return (
    <Styled.TestCaseContainer>
      <Styled.TestCaseQuestion>{question}</Styled.TestCaseQuestion>
      <CheckboxGroup options={options} values={values} setValues={setValues} />
    </Styled.TestCaseContainer>
  );
};

const TestCaseWithOneAnswer = ({ question, options, value, setValue }: ITestCaseWithOneAnswer) => {
  return (
    <Styled.TestCaseContainer>
      <Styled.TestCaseQuestion>{question}</Styled.TestCaseQuestion>
      <RadioGroup options={options} value={value} setValue={(newValue) => setValue(newValue)} />
    </Styled.TestCaseContainer>
  );
};

export const TestCase = ({ answersAmount, values, setValues, ...props }: ITestCaseProps) => {
  switch (answersAmount) {
    case 'one':
      return (
        <TestCaseWithOneAnswer
          {...props}
          value={values ? values[0] : undefined}
          setValue={(key) => setValues && setValues([key])}
        />
      );
    case 'multiple':
      return <TestCaseWithMultipleAnswers {...props} values={values} setValues={setValues} />;
  }
};
