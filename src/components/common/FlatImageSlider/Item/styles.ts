import styled from 'styled-components/native';
export const ImageComponent = styled.Image`
  width: ${({ width }) => {
    return (width as number) - 20;
  }}px;
  height: 260px;
`;

export const ImageComponentWrapper = styled.View`
  height: 300px;
  margin: -1px 0px 0px 10px;
  shadow-color: '#F8F0E3';
  shadow-radius: 5px;
  //border-radius: 0px 0px 0px 10px;
  shadow-opacity: 0.5;
  shadow-offset: 0px 5px;
  overflow: 'hidden';
`;
