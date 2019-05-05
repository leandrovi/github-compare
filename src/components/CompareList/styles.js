import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 90%;
  flex-wrap: wrap-reverse;
  margin-top: 40px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Remove = styled.button`
  background: #ee0511;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin: 12px 5px 12px 10px;
  width: 100%;
  border: 0;
  border-radius: 3px;

  &:hover {
    background: #ff1519;
    cursor: pointer;
  }
`;

export const Update = styled.button`
  background: #339900;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin: 12px 10px 12px 5px;
  width: 100%;
  border: 0;
  border-radius: 3px;

  &:hover {
    background: #33a519;
    cursor: pointer;
  }
`;
