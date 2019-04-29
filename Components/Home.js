import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Button, Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
          
          source={{uri: 'https://i.imgur.com/84aosBy.jpg'}}
          style={{width: 400, height: 400}}
        />
        <Text style={{ color: 'red', fontSize: 25 }}>
          EDSIGCON | CONISAR 2019
        </Text>
        <Text>Co-located in Cleveland, Ohio</Text>
        <Text>Wednesday, Nov. 6 — Saturday, Nov. 9 </Text>
        <Text>Cleveland</Text>
        <Text>Renaissance Hotel</Text>
        <Button
          title="Go to FAQs"
          onPress={() => this.props.navigation.navigate('FAQs')}
        />
        <Button
          title="Go to Speakers"
          onPress={() => this.props.navigation.navigate('Speaker')}
        />
      </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);