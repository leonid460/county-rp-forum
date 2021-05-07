import React, { FormEvent, useState } from 'react';
import { InputWithLabelAndHints } from '@/ui-kit/molecules/InputWithLabelAndHints';
import * as Styled from './styled';
import { useRouter } from 'next/router';
import { rulesOfForum } from '@/routes';

export const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    return router.push(rulesOfForum);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Styled.Container>
        <InputWithLabelAndHints
          label="имя пользователя"
          placeholder="Введите имя пользователя"
          isRequired
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <InputWithLabelAndHints
          label="email"
          placeholder="Введите email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputWithLabelAndHints
          label="пароль"
          placeholder="Введите пароль"
          isRequired
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <InputWithLabelAndHints
          label="подтвердить пароль"
          isRequired
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        />
      </Styled.Container>
      <Styled.ContinueButton>Продолжить</Styled.ContinueButton>
    </form>
  );
};
