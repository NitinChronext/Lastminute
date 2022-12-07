import { createStackNavigator } from '@react-navigation/stack';
import HotelDetail from '../../../components/HotelDetail';
import Hotels from '../../../components/Hotels';
import { TabStackNavigatorProps } from '../../appstacktypes';

const TabStack = createStackNavigator<TabStackNavigatorProps>();

const TabStackNavigator = () => {
  return (
    <TabStack.Navigator initialRouteName='Hotels'>
      <TabStack.Screen name='Hotels' component={Hotels} />
      <TabStack.Screen name='profile' component={HotelDetail} />
    </TabStack.Navigator>
  );
};

export default TabStackNavigator;
