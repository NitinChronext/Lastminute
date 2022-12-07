import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabContainer from './TabContainer';

const RootStackNavigator = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator initialRouteName={'tabContainer'}>
        <RootStackNavigator.Group>
          <RootStackNavigator.Screen
            name='tabContainer'
            component={TabContainer}
            options={{ headerShown: false }}
          />
        </RootStackNavigator.Group>
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};

AppStack.displayName = 'AppStack';

export default AppStack;
