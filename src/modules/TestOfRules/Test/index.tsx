import React, { useState } from 'react';
import { TestCase } from './TestCase';
import { ContainerWithBorderAndPadding } from './styled';
import { ContinueButton } from '@/modules/RulesOfForum/Content/styled';
import { useRouter } from 'next/router';
import { root } from '@/routes';

export const Test = () => {
  const [firstAnswers, setFirstAnswers] = useState<string[]>([]);
  const [secondAnswers, setSecondAnswers] = useState<string[]>([]);

  const router = useRouter();

  const handleFinish = () => {
    return router.push(root);
  };

  return (
    <>
      <ContainerWithBorderAndPadding>
        <TestCase
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          options={[
            { value: 'var-1', name: 'Duis posuere semper ultrices' },
            { value: 'var-2', name: 'Integer dictum libero sapien' },
            { value: 'var-3', name: 'Morbi non scelerisque mauris' },
            { value: 'var-4', name: 'Morbi non metus ullamcorper' }
          ]}
          values={firstAnswers}
          setValues={setFirstAnswers}
          answersAmount="multiple"
        />

        <TestCase
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          options={[
            { value: 'var-1', name: 'Duis posuere semper ultrices' },
            { value: 'var-2', name: 'Integer dictum libero sapien' },
            { value: 'var-3', name: 'Morbi non scelerisque mauris' },
            { value: 'var-4', name: 'Morbi non metus ullamcorper' }
          ]}
          values={secondAnswers}
          setValues={setSecondAnswers}
          answersAmount="one"
        />
      </ContainerWithBorderAndPadding>
      <ContainerWithBorderAndPadding>
        <ContinueButton onClick={handleFinish}>Завершить</ContinueButton>
      </ContainerWithBorderAndPadding>
    </>
  );
};
