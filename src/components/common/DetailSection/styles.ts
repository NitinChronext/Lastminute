import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { ThemeInterface } from '../../../themes/theme';

export const ViewWrapper = styled(View)`
  margin-top: 20px;
  width: 100%;
  height: 50px;
`;

export const Label = styled(Text)`
  font-size: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.size.large;
  }};
  font-weight: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.weight.bold;
  }};
  color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors.font.dark;
  }};
  text-align: center;
  line-height: 25px;
`;

type DetailProps = {
  isEmail: boolean;
};

export const Detail = styled(Text)<DetailProps>`
  font-size: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.size.large;
  }};
  font-weight: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.fonts.weight.medium;
  }};
  color: ${props => {
    const typedTheme = props.theme as ThemeInterface;
    return props.isEmail
      ? typedTheme.colors.font.selected
      : typedTheme.colors.font.brand;
  }};
  font-style: normal;
  text-align: center;
  line-height: 25px;
`;
