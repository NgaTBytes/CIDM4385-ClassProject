import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FAQs!</Text>
        <Text>
          Peer-reviewed conferences focusing on Information Systems & Computing
          Education and Information Systems Applied Research inviting scholarly
          work including research papers, case studies, abstracts and
          workshop/panel proposals.{' '}
        </Text>
      </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);