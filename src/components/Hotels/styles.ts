import styled from 'styled-components';
import { View } from 'react-native';
import { ThemeInterface } from '../../themes/theme';

export const ViewWrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors.background.brand;
  }};
  width: 100%;
  height: 100%;
`;
