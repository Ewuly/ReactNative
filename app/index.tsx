import { Text, View } from "react-native";
import { Image, StyleSheet, Platform, ScrollView } from 'react-native';
import React, { useState } from "react";


export default function Index() {
  const [people, setPeople] = useState([
    { name: 'ewan1', key: '1'},
    { name: 'ewan2', key: '2'},
    { name: 'ewan3', key: '3'},
    { name: 'ewan4', key: '4'},
    { name: 'ewan5', key: '5'},
    { name: 'ewan6', key: '6'},
    { name: 'ewan7', key: '7'},
    { name: 'ewan8', key: '8'},
  ])


  return (
    <View style={styles.container}>
      
      <ScrollView>
        { people.map((item) => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 30,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },

})