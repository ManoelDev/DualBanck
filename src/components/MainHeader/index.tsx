import React from 'react';

import { Container, BtnWith, ItemHeader, ItemTag, ItemTag2, ItemTag3, ItemDescription } from './styles';

import component3Img from '../../assets/icons/Component 3.svg';
import plusCicleImg from '../../assets/icons/PlusCircle.svg';
import eyeOffImg from '../../assets/icons/eye-off.svg';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <BtnWith>
        <a href="/#">
          <img src={component3Img} alt="" />
        </a>
      </BtnWith>

      <BtnWith>
        <a href="/#">
          <img src={plusCicleImg} alt="" />
        </a>
      </BtnWith>
      <ul>
        <li>
          <ItemHeader>
            <ItemTag>P</ItemTag>
            <ItemDescription>
              <span>
                Principal
                <img src={eyeOffImg} alt="Ocultar saldo" />
              </span>
              <p>R$10.000,00</p>
            </ItemDescription>
          </ItemHeader>
        </li>
        <li>
          <ItemHeader>
            <ItemTag2>A</ItemTag2>
            <ItemDescription>
              <span>
                Aluguel
                <img src={eyeOffImg} alt="Ocultar saldo" />
              </span>
              <p>R$1.600,00</p>
            </ItemDescription>
          </ItemHeader>
        </li>
        <li>
          <ItemHeader>
            <ItemTag3>A</ItemTag3>
            <ItemDescription>
              <span>
                Principal
                <img src={eyeOffImg} alt="Ocultar saldo" />
              </span>
              <p>R$450,00</p>
            </ItemDescription>
          </ItemHeader>
        </li>
        <li />
      </ul>
    </Container>
  );
};

export default MainHeader;
