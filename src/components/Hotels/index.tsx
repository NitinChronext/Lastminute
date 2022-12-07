import { Text } from 'react-native';
import { ViewWrapper } from './styles';
import HotelList from './HotelList';
import useFetchHotels from '../../hooks/useFetchHotels';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';

const Hotels = () => {
  const { data, isError, error } = useFetchHotels();
  const navigation = useNavigation();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'Hotels' });

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

  if (isError) {
    return <Text>Data Error, Please try again</Text>;
  }

  return (
    <ViewWrapper testID='HotelList'>
      <HotelList Hotels={data} />
    </ViewWrapper>
  );
};

export default Hotels;
