import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  height: 44px;
  background: #f9f9f9;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 16px;
  }
  ul li {
    display: flex;
  }

  ul li .items {
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: linear-gradient(89.96deg, #622ee5 0.06%, #172765 99.94%);
      border-radius: 18px;
      color: white;
    }
  }
`;

export const BtnWith = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  margin-left: 16px;

  background: linear-gradient(135deg, #ffffff 0%, #e5e4e2 100%);
  border-radius: 18px;
`;
