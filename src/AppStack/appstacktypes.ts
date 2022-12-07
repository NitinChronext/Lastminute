import { Hotel } from '../hooks/useFetchHotels';

export type TabStackNavigatorProps = {
  Hotels: undefined;
  profile: { hotel: Hotel };
};

export type BottomTabNavigatorParamList = {
  HotelList: TabStackNavigatorProps;
  Settings: undefined;
};
