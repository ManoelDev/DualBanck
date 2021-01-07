import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;

  margin: 0 auto;
  height: 70px;
  min-width: 1336px;
  padding: 0 13px 0;
  padding-right: 13px;

  .saldo {
    margin-left: 16px;
    color: #172765;

    span {
      font-size: 12px;
      line-height: 20px;
    }

    p {
      font-weight: bold;
      color: #69d531;
    }
  }
`;

export const Logo = styled.img``;

export const HeaderLefth = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 160px;
    height: 30px;
    padding: 0 13px 0;
    border-radius: 5px;
    border: 1px solid #778899;
    color: #172765;
    font-size: 14px;

    &::placeholder {
      color: #778899;
    }
  }
  img {
    margin-left: 16px;
  }
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #4c77bf;
  padding: 2px;
`;
