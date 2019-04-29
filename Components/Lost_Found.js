import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>
          Lost & Found
        </Text>
        </View>
        <SectionList
          sections={[
            { title: 'Lost:', data: ['Gray Nike jacket'] },
            { title: 'Found:', data: ['Rayband Sunglasses'] },
            { title: 'Found:', data: ['Child'] },
            { title: 'Lost:', data: ['Grandmas teeth'] },
            { title: 'Found:', data: ['Gross teeth'] },
            { title: 'Found:', data: ['Skateboard'] },
            { title: 'Lost:', data: ['Wooden leg'] },
            { title: 'Lost:', data: ['Hair extentions'] },
            { title: 'Lost:', data: ['Silver iPhone 6s - screensaver: picture of lady and 122', ' cats'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 10,
  },
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 5,
    fontSize: 14,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);