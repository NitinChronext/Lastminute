import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTheme } from 'styled-components';
import { TabStackNavigatorProps } from '../../../AppStack/appstacktypes';
import { Hotel } from '../../../hooks/useFetchHotels';
import { ThemeInterface } from '../../../themes/theme';
import { Icon } from '../../common/icon';
import {
  PressableWrapper,
  ViewWrapper,
  HotelDetailWrapper,
  Name,
  Address,
  UserProfileImage,
  ActionWrapper,
  InfoIconWrapper,
  Overlay,
} from './styles';

import NoImage from '../../../assets/images/NoImage.png';
import HotelRatings from '../../common/HotelRatings';

export type HotelsScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<TabStackNavigatorProps, 'profile'>,
  BottomTabNavigationProp<TabStackNavigatorProps, 'Hotels'>
>;

const HotelTile = ({ hotel }: { hotel: Hotel }) => {
  const navigation = useNavigation<HotelsScreenNavigationProp>();
  const openProfile = () => {
    navigation.navigate('profile', { hotel: hotel });
  };

  const theme = useTheme();
  const typedTheme = theme as ThemeInterface;
  const imgSrc =
    hotel.gallery?.[0]?.length > 0 ? { uri: hotel.gallery?.[0] } : NoImage;
  return (
    <PressableWrapper>
      <ViewWrapper>
        <UserProfileImage source={imgSrc} />
        <HotelDetailWrapper>
          <Name>{hotel?.name}</Name>
          <Address>{Object.values(hotel?.location).toString()}</Address>
          <HotelRatings
            rating={hotel?.userRating}
            showRating={false}
            imageSize={15}
          ></HotelRatings>
        </HotelDetailWrapper>

        <ActionWrapper>
          <InfoIconWrapper>
            <Icon
              icon='chevron-right'
              isActive={true}
              color={typedTheme?.colors.font.medium}
              size={14}
            ></Icon>
          </InfoIconWrapper>
        </ActionWrapper>
      </ViewWrapper>
      <Overlay onPress={openProfile} />
    </PressableWrapper>
  );
};

export default HotelTile;
