import styled from 'styled-components';

export const Container = styled.div`
  height: calc(150vh - 52px);
  padding: 0 16px;
  background-attachment: fixed;
 
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  max-width: 600px;

    @media screen and (min-width: 768px) {
     padding-top: 50px;
      margin-left: 30px;
  }
`;
export const Title = styled.h1`
  color: #12adf5;
  font-size: 40px;
 

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`;


export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
 
    @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;
