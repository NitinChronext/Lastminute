import Item, { ItemProps } from './Item';
import { SliderWrapper } from './styles';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';

const contentInset = 10;

export type FlatSliderProps = {
  images: string[];
};

const keyExtractor = ({ index, item }: ItemProps) => {
  return `${item} + ${index}`;
};

const FlatImageSlider = ({ images }: FlatSliderProps) => {
  const renderItem = ({ index, item }: ListRenderItemInfo<ItemProps>) => {
    console.log('item', item);
    return <Item item={item} index={index}></Item>;
  };

  return (
    <SliderWrapper
      horizontal
      scrollEventThrottle={10}
      showsHorizontalScrollIndicator={false}
      snapToAlignment='center'
      contentInset={{
        top: 0,
        left: contentInset,
        bottom: 0,
        right: contentInset,
      }}
      data={images}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.3}
      initialNumToRender={6}
      windowSize={20}
      decelerationRate={1.0}
      bounces={true}
    />
  );
};

export default FlatImageSlider;
