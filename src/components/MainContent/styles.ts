import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
`;

export const ContentTop = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  span {
    font-size: 20px;
    font-weight: 600;
    color: #172765;
  }
`;
export const Button = styled.button`
  width: 80px;
  height: 40px;

  border: 1px solid #622ee5;
  box-sizing: border-box;
  border-radius: 5px;

  padding: 8px;

  background: none;
  margin-left: 8px;
`;

export const InputDateSaldo = styled.div`
  display: flex;
  width: 220px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const InputDateSaldoDesc = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 14px;
  margin-left: 8px;

  img {
    margin-left: 8px;
  }
`;

export const InputSalddoDisponivel = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;

  padding: 0px;
  margin-top: 16px;
  width: 280px;

  background: #f9f9f9;

  border: 0.5px solid #e5e4e2;
  border-bottom: 1px solid #172765;
  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;

  img {
    width: 24px;
    height: 24px;
    margin: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 8px;
  }
  span {
    font-size: 12px;
    color: #778899;
  }

  p {
    font-size: 16px;
    color: #69d531;
  }
`;

export const IconEyeOff = styled.span`
  position: relative;
  right: 0;
`;
