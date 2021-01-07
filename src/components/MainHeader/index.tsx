import React from 'react';

import { Container, BtnWith } from './styles';

import component3Img from '../../assets/icons/Component 3.svg';
import plusCicleImg from '../../assets/icons/PlusCircle.svg';

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
          <div className="items">
            <div>P</div>
            <span>Principal</span>
            <p>R$10.000,00</p>
          </div>
        </li>
        <li />
      </ul>
    </Container>
  );
};

export default MainHeader;
