import { Text, View } from "react-native";
import { Image, StyleSheet, Platform, FlatList, ScrollView } from 'react-native';
import React, { useState } from "react";


export default function Index() {
  const [people, setPeople] = useState([
    { name: 'ewan1', id: '1'},
    { name: 'ewan2', id: '2'},
    { name: 'ewan3', id: '3'},
    { name: 'ewan4', id: '4'},
    { name: 'ewan5', id: '5'},
    { name: 'ewan6', id: '6'},
    { name: 'ewan7', id: '7'},
    { name: 'ewan8', id: '8'},
  ])


  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

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
    marginHorizontal:10,
  },

})