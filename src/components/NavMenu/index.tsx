import React from 'react';

import { Container } from './styles';

import homeImg from '../../assets/icons/HouseLine.svg';
import chartImg from '../../assets/icons/ChartPieSlice.svg';
import chartLineUpImg from '../../assets/icons/ChartLineUp.svg';
import moneyImg from '../../assets/icons/Money.svg';
import handsImg from '../../assets/icons/Handshake.svg';
import pixImg from '../../assets/icons/Group.svg';
import credCardImg from '../../assets/icons/CreditCard.svg';
import receiptImg from '../../assets/icons/Receipt.svg';
import wrenchImg from '../../assets/icons/Wrench.svg';
import questionImg from '../../assets/icons/Question.svg';

const NavMenu: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="/">
            <img src={homeImg} alt="Bate Papo" />
          </a>
        </li>

        <li className="active">
          <a href="/">
            <img src={chartImg} alt="Bate Papo" />
          </a>
        </li>

        <li>
          <a href="/">
            <img src={chartLineUpImg} alt="Bate Papo" />
          </a>
        </li>

        <li>
          <a href="/">
            <img src={moneyImg} alt="Bate Papo" />
          </a>
        </li>

        <li>
          <a href="/">
            <img src={handsImg} alt="Bate Papo" />
          </a>
        </li>

        <li>
          <a href="/#">
            <img src={pixImg} alt="Bate Papo" height="24px" width="24px" />
          </a>
        </li>

        <li>
          <a href="/#">
            <img src={credCardImg} alt="Bate Papo" />
          </a>
        </li>

        <li>
          <a href="/">
            <img src={receiptImg} alt="Bate Papo" />
          </a>
        </li>

        <li>
          <a href="/">
            <img src={wrenchImg} alt="Bate Papo" />
          </a>
        </li>

        <li>
          <a href="/">
            <img src={questionImg} alt="Bate Papo" />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default NavMenu;
