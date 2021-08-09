import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';

export const Container = styled.div`
  height: 10vh;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color: #282c34;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  padding: 8px;
`;

export const IconGithub = styled(GoMarkGithub)`
  color: white;
`;

export const Credits = styled.p`
  padding: 8px;
  font-size: 16px;
  color: white;
`;