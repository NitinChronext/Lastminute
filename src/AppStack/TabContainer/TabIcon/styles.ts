import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { ThemeInterface } from '../../../themes/theme';

export const TabIconContainer = styled(Animated.View)`
  align-items: center;
`;
export const TabLabel = styled(Animated.Text)`
  font-size: 12px;
  color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors.font.brand;
  }};
`;
