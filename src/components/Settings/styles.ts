import { View } from 'react-native';
import styled from 'styled-components/native';
import { ThemeInterface } from '../../themes/theme';

export const SettingsWrapper = styled(View)`
  padding: 100px 50px 50px 50px;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors?.background.brand;
  }};
`;
