import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 46px;
  height: 100%;

  ul {
    position: fixed;
    height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    list-style: none;
    background-color: #f9f9f9;
  }

  li {
    padding: 11px;
    width: 46px;
    height: 48px;
    position: relative;
  }

  .active {
    background: #622ee5;
    color: white;

    &::before {
      content: '';
      position: absolute;
      height: 4px;
      width: 46px;
      top: 0;
      left: 0;
      background: #f9f9f9;
      border-radius: 0 0 5px 0;
    }
    &::after {
      content: '';
      position: absolute;
      width: 46px;
      height: 4px;
      left: 0;
      bottom: 0;
      background: red;
      border-radius: 0 5px 0 0;
      background: #f9f9f9;
    }
  }

  li:hover:not(.active) {
    background: linear-gradient(95.85deg, #f9f9f9 0%, #e5e4e2 100%);
  }
`;
