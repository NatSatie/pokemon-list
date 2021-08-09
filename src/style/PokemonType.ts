import styled from 'styled-components';
import Avatar from '@atlaskit/avatar';

interface TypeIconProps {
  classtype: string;
}

interface IconColorProps {
  color: string | any;
}

export const Img = styled.img``;

export const ImgContainer = styled.div<IconColorProps>`
  background: ${props => props.color};
  border-radius: 50%;
  justify-content: center;
  margin: auto;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  padding: 4px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 16px 0 0 ;
`;

export const TypeIcon = styled.i<TypeIconProps>`
  class: ${props => props.classtype} 
`;