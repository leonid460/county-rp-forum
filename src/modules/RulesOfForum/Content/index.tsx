import React from 'react';
import * as Styled from './styled';
import { useRouter } from 'next/router';
import { testOfRules } from '@/routes';

export const Content = () => {
  const router = useRouter();

  const handleContinue = () => router.push(testOfRules);

  return (
    <>
      <Styled.Header>Правила форума</Styled.Header>
      <Styled.ContainerWithPadding>
        <Styled.H1>Lorem ipsum dolor sit amet</Styled.H1>
        <Styled.H2>Consectetur adipiscing elit</Styled.H2>
        <Styled.H3>Sed do eiusmod tempor</Styled.H3>
        <Styled.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus eu arcu at
          finibus. Proin efficitur nisi sit amet magna commodo, sit amet imperdiet est efficitur.
          Duis sit amet gravida quam. Cras lobortis aliquam molestie. Nullam laoreet, urna a ornare
          congue, felis erat tincidunt dui, id rhoncus risus erat in diam. Morbi at turpis a libero
          vulputate posuere. Maecenas imperdiet velit ut sagittis interdum. Nunc ultrices tellus eu
          nisi posuere ultrices. Curabitur ultrices, orci a dignissim posuere, dolor lacus tempus
          mi, eget feugiat metus nunc sit amet eros. Proin et nunc sapien. Donec blandit quis nisi
          vitae malesuada. Donec scelerisque convallis porttitor. Aliquam nec magna vitae turpis
          porta consectetur.
        </Styled.Text>

        <Styled.H3>Nulla et tellus facilisis, mollis felis bibendum, congue libero</Styled.H3>
        <Styled.Text>
          Nulla et tellus facilisis, mollis felis bibendum, congue libero. Curabitur sapien dolor,
          mollis vel ligula id, aliquet congue dui. Fusce porta, enim sed semper tempus, lectus est
          varius ipsum, sed ullamcorper nisl massa ac ipsum. Vestibulum nec cursus turpis, sed
          euismod ante. Phasellus blandit euismod mauris sit amet rhoncus. Aliquam nec laoreet dui.
          Mauris dictum purus rutrum, finibus velit eu, ullamcorper ligula. Nulla ultricies
          tincidunt nibh, in efficitur est porta sed. Curabitur rutrum venenatis elit id hendrerit.
          Duis sed massa ipsum.
        </Styled.Text>

        <Styled.H2>Consectetur adipiscing elit</Styled.H2>
        <Styled.Text>
          Integer vitae tellus urna. Nullam nec aliquam erat, nec egestas metus. Suspendisse
          volutpat pulvinar dui id efficitur. Duis et mauris eu turpis lacinia rutrum. Pellentesque
          sit amet arcu et tellus accumsan sollicitudin. Nunc quis neque accumsan, suscipit nisl
          vel, semper nisi. Maecenas et massa sit amet libero consequat blandit. Proin eleifend eros
          at diam interdum, quis lacinia magna faucibus. Pellentesque sit amet tortor sed mi euismod
          aliquet. Pellentesque tincidunt blandit velit ut lobortis. Aliquam erat volutpat. In
          libero nisl, feugiat eu facilisis non, fringilla ut leo. Fusce ut facilisis nisl. Fusce a
          nisi lorem. Integer quis nunc erat. Pellentesque imperdiet lobortis lacus, a ultricies
          metus auctor sit amet. Quisque consequat augue sit amet turpis vestibulum facilisis. Fusce
          non ligula commodo, volutpat sapien quis, ullamcorper justo. Fusce rutrum massa libero, et
          sollicitudin erat pretium in. Mauris auctor sapien a lorem pretium ultrices. Fusce eu urna
          et velit dictum lobortis quis in tellus. Phasellus elementum sed quam a porta. Aenean
          consequat tincidunt massa, ut tempus libero consequat ac. Mauris fermentum risus eget leo
          condimentum, ac consectetur neque sollicitudin. Aliquam in velit et est euismod egestas eu
          sed arcu. Curabitur auctor, dolor vitae ornare consectetur, ipsum libero consectetur ante,
          eget luctus lectus nibh et lorem.
        </Styled.Text>
      </Styled.ContainerWithPadding>
      <Styled.ContainerWithPadding>
        <Styled.ContinueButton onClick={handleContinue}>Продолжить</Styled.ContinueButton>
      </Styled.ContainerWithPadding>
    </>
  );
};
