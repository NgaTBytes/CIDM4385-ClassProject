import React from 'react';
import {Button, AppRegistry, SectionList, StyleSheet, Text, View, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Lists from './Component/Lists';
import Notification from './Component/Notification';
import Maps from './Component/Map';
import Lost_Found from './Component/Lost_Found';
import FAQs from './Component/FAQs';
import Home from './Component/Home';


class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const NoteIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `md-home${focused ? '' : '-outline'}`;
  } else if (routeName === 'FAQs') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  } else if (routeName === 'Notification') {
    iconName = `md-notifications${focused ? '' : '-outline'}`;
    IconComponent = NoteIconWithBadge;
  }
   if (routeName === 'Lost_Found') {
    iconName = `md-glasses${focused ? '' : '-outline'}`;
  } if (routeName === 'Maps') {
    iconName = `map-pin${focused ? '' : '-outline'}`;
  } if (routeName === 'Lists') {
    iconName = `megaphone${focused ? '' : '-outline'}`;
  }
  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Home',
        },
      },
      Notification: {
        screen: Notification,
        navigationOptions: {
          tabBarLabel: 'Notify',
        },
      },
      Lists: {
        screen: Lists,
        navigationOptions: {
          tabBarLabel: 'Speakers',
        },
      },
      Maps: {
        screen: Maps,
        navigationOptions: {
          tabBarLabel: 'Maps',
        },
      },
      FAQs: {
        screen: FAQs,
        navigationOptions: {
          tabBarLabel: 'FAQs',
        },
      },
      Lost_Found: {
        screen: Lost_Found,
        navigationOptions: {
          tabBarLabel: '_',
        },
      },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  )
);

