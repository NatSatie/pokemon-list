import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 128px;
  text-transform: capitalize;
  font-size: small;
  vertical-align: middle;
  padding: 8px;
  width: 256px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

interface TypeIconProps {
  classtype: string;
}

export const TypeIcon = styled.i<TypeIconProps>`
  class: ${props => props.classtype} 
`;