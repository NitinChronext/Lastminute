import { View, Text, Image, Platform } from 'react-native';
import styled from 'styled-components/native';
import { ThemeInterface } from '../../themes/theme';

export const ViewWrapper = styled(View)`
  padding-top: ${Platform.OS === 'ios' ? 40 : 30}px;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => {
    const typedTheme = props.theme as ThemeInterface;
    return typedTheme.colors.background.brand;
  }};
`;

export const Heading = styled(Text)`
  text-align: center;
  font-size: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.size.xlarge;
  }};
  font-weight: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.weight.xbold;
  }};
`;

export const ProfileImage = styled(Image)`
  height: 200px;
  width: 200px;
  margin-top: 20px;
`;

export const DetailSectionWrapper = styled(View)`
  margin-top: 20px;
  width: 100%;
  height: 50px;
`;

export const ImageSliderWrapper = styled(View)`
  height: 300px;
  width: 100%;
`;
