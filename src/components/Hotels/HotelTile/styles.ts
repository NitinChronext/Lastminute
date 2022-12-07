import styled from 'styled-components';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { ThemeInterface } from '../../../themes/theme';

export const PressableWrapper = styled(View)`
  width: 100%;
  height: 166px;
  background-color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors.background.off;
  }};
`;

export const ViewWrapper = styled(View)`
  flex-direction: row;
  height: 156px;
  width: 100%;
  background-color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors.background.brand;
  }};
  //border-top-width: 0.5px;
  //border-bottom-width: 0.5px;
  border-color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors.border.light;
  }};
  align-items: center;
`;

export const HotelDetailWrapper = styled(TouchableOpacity)`
  height: 110px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
`;

export const Name = styled(Text)`
  font-size: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.size.large;
  }};
  line-height: 30px;
  font-weight: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.weight.semi_light;
  }};
  color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors.font.brand;
  }};
  text-align: left;
  width: 100%;
`;

export const Address = styled(Text)`
  font-size: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.size.medium;
  }};
  line-height: 20px;
  font-weight: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.weight.semi_light;
  }};
  color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors.font.selected;
  }};
  text-align: left;
  width: 100%;
`;
export const UserProfileImage = styled(Image)`
  width: 110px;
  height: 120px;
  margin-left: 10px;
`;

export const ActionWrapper = styled(View)`
  flex-direction: row;
  margin-right: 16px;
`;

export const InfoIconWrapper = styled(TouchableOpacity)`
  width: 24px;
  width: 24px;
`;

export const Overlay = styled(TouchableOpacity)`
  width: 100%;
  position: absolute;
  height: 100%;
  opacity: 0;
`;
