import TabStackNavigator from '../TabStackNavigator';
import TabIcon from '../TabIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../../../components/Settings';
import { useTheme } from 'styled-components';
import { useIntl } from 'react-intl';
import { BottomTabNavigatorParamList } from '../../appstacktypes';
import { ThemeInterface } from '../../../themes/theme';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const TabNavigator = () => {
  const theme = useTheme();
  const intl = useIntl();
  const HotelsTabLabel = intl.formatMessage({ id: 'Hotels' });
  const settingsTabLabel = intl.formatMessage({ id: 'settings' });
  const typedTheme = theme as ThemeInterface;
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='HotelList'
        component={TabStackNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon
                isActive={focused}
                icon={'hotel'}
                color={focused ? typedTheme.colors.tint : color}
                label={HotelsTabLabel}
              ></TabIcon>
            );
          },
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon
                isActive={focused}
                icon={'gears'}
                color={focused ? typedTheme.colors.tint : color}
                label={settingsTabLabel}
              ></TabIcon>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
