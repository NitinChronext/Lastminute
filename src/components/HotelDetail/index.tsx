import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

import { useIntl } from 'react-intl';
import { Platform } from 'react-native';
import { TabStackNavigatorProps } from '../../AppStack/appstacktypes';
import DetailSection from '../common/DetailSection';
import FlatImageSlider from '../common/FlatImageSlider';
import HotelRatings from '../common/HotelRatings';
import {
  ViewWrapper,
  Heading,
  ProfileImage,
  ImageSliderWrapper,
  DetailSectionWrapper,
} from './styles';

export type HotelDetailScreenNavigationProp = RouteProp<
  TabStackNavigatorProps,
  'profile'
>;

const headerShown = Platform.OS !== 'ios' ? false : true;
const HotelDetail = () => {
  const route = useRoute<HotelDetailScreenNavigationProp>();
  const intl = useIntl();
  const nameLabel = intl.formatMessage({ id: 'name' });
  const addressLabel = intl.formatMessage({ id: 'address' });
  const title = intl.formatMessage({ id: 'hotelProfile' });
  const { hotel } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: headerShown, title: title });
  }, []);
  return (
    <ViewWrapper>
      <Heading>{hotel?.name}</Heading>
      {/* <ProfileImage source={{ uri: hotel?.gallery?.[0] }} /> */}
      <ImageSliderWrapper>
        <FlatImageSlider images={hotel?.gallery}></FlatImageSlider>
      </ImageSliderWrapper>
      <HotelRatings
        rating={hotel?.userRating}
        showRating={true}
        imageSize={30}
      ></HotelRatings>
      <DetailSectionWrapper>
        <DetailSection value={hotel?.name} label={nameLabel}></DetailSection>
        <DetailSection
          value={Object.values(hotel?.location).toString()}
          label={addressLabel}
        ></DetailSection>
      </DetailSectionWrapper>
    </ViewWrapper>
  );
};

export default HotelDetail;
