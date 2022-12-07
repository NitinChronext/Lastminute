import { FlatList } from 'react-native';
import { FlatListWrapper, Separator } from './styles';
import HotelTile from '../HotelTile';
import { Hotels, Hotel } from '../../../hooks/useFetchHotels';

// const HotelListFC : React.FC<{Hotels: Hotels}> = ({Hotels}) =>
const HotelList = ({ Hotels }: { Hotels: Hotels }) => {
  const renderItem = ({ item }: { item: Hotel }) => {
    return <HotelTile hotel={item} />;
  };
  const renderSeparator = () => {
    return <Separator></Separator>;
  };
  const keyExtractor = (hotel: Hotel, index: number) =>
    `${index} + ${hotel.id}`;
  return (
    <FlatListWrapper>
      <FlatList
        data={Hotels}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
        scrollIndicatorInsets={{ right: 1 }}
        maxToRenderPerBatch={4}
      ></FlatList>
    </FlatListWrapper>
  );
};

export default HotelList;
