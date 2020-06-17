import styled from 'styled-components';


export const Corpo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #000;
`;




export const BoxContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 300px;
  height: 70%;
  align-items:center;
  justify-content: space-around;
  border: solid 1px #fff;

  padding-top: 20px;
  padding-bottom: 20px;
`;


export const BoxItem = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    background: #fff;
    width: 150px;
    height: 50px;

    margin-bottom: 3px;
    margin-top: 3px;
    border-radius: 20px;

    &:hover{
      background: #99c;
      cursor: pointer;
    }
`;


export const Title = styled.h1`
    font-size: 20px;

`;
