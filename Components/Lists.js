import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: '8:00 am - Devin McDonald',
              data: ['loves pickles and jogs with cows'],
            },
            {
              title: '9:00 am - Jackson Smith',
              data: ['is from Australia and l loves dogs.'],
            },
            {
              title: '10:00 am - James Beck',
              data: ['stole an iPhone and 3 poodles.'],
            },
            {
              title: '11:00 am - Isaac Mills',
              data: [
                'works out alot and loves hamburgers and',
                'walks on the beach',
              ],
            },
            {
              title: '12:00 pm - Karen Clark',
              data: [
                'is an old lady who has a lot of cats and eats',
                'meatloaf',
              ],
            },
            {
              title: '1:00 pm - Adam Black',
              data: ['talks alot and is boring so do not go to his', 'session'],
            },
            {
              title: '2:00 pm - Mary Evens',
              data: ['eats world and sings at concerts'],
            },
            { title: '3:00 pm - Katie Green', data: ['Went to the farm'] },
            { title: '4:00 pm - Clark Kent', data: ['Saves the day'] },
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
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);