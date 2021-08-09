import styled from 'styled-components';
import Avatar from '@atlaskit/avatar';

interface TypeIconProps {
  classtype: string;
}

interface IconColorProps {
  color: string | any;
}

export const PokemonAvatar = styled(Avatar)`
  padding: 16px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 128px;
  text-transform: capitalize;
  font-size: small;
  vertical-align: middle;
  padding: 8px;
  width: 272px;
`;

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
  flex-direction: column;
  padding: 0 16px;
`;

export const NameContainer = styled.div`
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 16px;
  letter-spacing: 0px;
  word-spacing: 0px;
  color: white;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-transform: capitalize;
  width: 100%;
`;

export const IdContainer = styled.div`
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 16px;
  letter-spacing: 0px;
  word-spacing: 0px;
  color: white;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-transform: capitalize;
  width: 100%;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 0;
`;

export const TypeIcon = styled.i<TypeIconProps>`
  class: ${props => props.classtype} 
`;