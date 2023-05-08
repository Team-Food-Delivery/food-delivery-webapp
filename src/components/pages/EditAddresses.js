import React, { useState } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { pageColor, elements } from '../../styles/globals';
import ItemSeparator from '../elements/ItemSeperator';

const styles = StyleSheet.create({
  streetText: {
    fontSize: 18,
    fontWeight: '400'
  },
  substreetText: {
    color: '#2A2A2A'
  },
  scrollContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  addressContainer: {
    paddingTop: 10, 
    paddingBottom: 10, 
    textAlign: 'center' 
  },
  itemSeparator: {
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textInputFirstLine: {
    flexDirection: 'row',
    marginTop: 20
  },
  textInputContainer: {
    
  },
  textTitle: {
    paddingBottom: 10,
    fontWeight: "500"
  },
  textInput: {
    backgroundColor: "#e7e7e7",
    width: "90%",
    height: 30,
    borderRadius: 10,
    padding: 10
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#e7e7e7',
    width: "100%",
  },
  footerContent: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const EditAddresses = ({ route }) => {
  const { number, street, city, zip, state } = route.params;

  return (
    <SafeAreaView style={pageColor.backgroundContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.streetText}>{number} {street}.,</Text>
          <Text style={[styles.streetText, styles.substreetText]}>{city}, {state} {zip}</Text>
        </View>

        <ItemSeparator styles={styles.itemSeparator}/>

        <View style={styles.textInputFirstLine}>
          <View style={styles.textInputContainer}>
            <Text style={styles.textTitle}>Apt/Suite</Text>
            <TextInput style={styles.textInput}/>
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textTitle}>Entry Code</Text>
            <TextInput style={styles.textInput}/>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <TouchableOpacity style={elements.buttonContainer}>
            <Text style={elements.button}>Save Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EditAddresses;