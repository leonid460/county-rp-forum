import React, { useState } from 'react';
import { PrimaryButton } from '@/ui-kit/atoms/Buttons/PrimaryButton';
import * as Styled from './styled';

export const LoginModalContent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRemember, setShouldRemember] = useState(false);

  const handleLogin = () => {
    alert('hooray');
  };

  return (
    <Styled.Container>
      <Styled.Title>Войти</Styled.Title>
      <Styled.Input
        placeholder="Имя пользователя"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Styled.Input
        placeholder="Пароль"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Styled.CheckBoxWithLabel
        label="Запомнить меня"
        value={shouldRemember}
        setValue={setShouldRemember}
      />
      <PrimaryButton onClick={handleLogin}>Войти</PrimaryButton>
    </Styled.Container>
  );
};
