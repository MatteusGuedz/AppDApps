import styled from 'styled-components';

export const InfoUser = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
 

`;
export const ImageUser = styled.img`
width:150px
`;
export const NameUser = styled.h1`
@media(max-width:900px){
     font-size:20px;
  }

`;
export const Link = styled.a`
  text-decoration:none;
  color:#000;
`;
export const ReposUser = styled.ul`
width:500px;
  display:flex;
  align-items:center;
  justify-content:space-around;
  padding:0;
  @media(max-width:900px){
    display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:space-around;
  }
  `;

export const Info = styled.li`
list-style:none;
font-size:14px;

`;


export const Bold = styled.p`
  font-weight:700;
font-size:14px;
  text-align:center;
`;