import React from 'react';
import { useWindowDimensions } from 'react-native';
import { View } from '../../../../../components/Themed';
import { ImageComponent, ImageComponentWrapper } from './styles';

export type ItemProps = {
  item: string;
  index: number;
};

const Item = ({ item }: ItemProps) => {
  const dimension = useWindowDimensions();
  console.log('item', item);
  return (
    <ImageComponentWrapper>
      <ImageComponent
        source={{ uri: item }}
        width={dimension.width - 20}
      ></ImageComponent>
    </ImageComponentWrapper>
  );
};

export default React.memo(Item);
