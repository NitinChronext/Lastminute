import styled from 'styled-components/native';
import { ThemeInterface } from '../../../themes/theme';

export const FlatListWrapper = styled.View`
  width: 100%;
`;
export const Separator = styled.View`
  height: 0.1px;
  margin-left: 9px;
  margin-right: 9px;
  background-color: ${({ theme }) => {
    const typedTheme = theme as ThemeInterface;
    return typedTheme.colors.background.brand;
  }};
`;
