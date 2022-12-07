import React from 'react';
import { Icon, IconProps } from '../../../components/common/icon';
import { TabIconContainer, TabLabel } from './styles';

export type TabIconProps = {
  label: string;
} & IconProps;

const TabIcon = (props: TabIconProps) => {
  const capitalizeFirstLetter = (label: string) => {
    return label.charAt(0).toUpperCase() + label.slice(1);
  };

  return (
    <TabIconContainer>
      <Icon {...props} />
      <TabLabel>{capitalizeFirstLetter(props?.label)}</TabLabel>
    </TabIconContainer>
  );
};

export default React.memo(TabIcon);
