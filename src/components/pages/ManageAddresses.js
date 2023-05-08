import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import ItemSeperator from '../elements/ItemSeperator';
import SearchBar from '../elements/SearchBar';
import { Entypo } from '@expo/vector-icons'
import { ADDRESS_SEARCH_API } from '@env'
import { useFetchAddress } from '../../services/APIService';
import ItemSeparator from '../elements/ItemSeperator';
import { pageColor } from '../../styles/globals';

const ManageAddresses = ({ navigation }) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchAddress, setSearchAddress] = useState("");

  const { data, loading, error } = useFetchAddress(`https://autocomplete.search.hereapi.com/v1/autocomplete?q=${searchAddress}&apiKey=${ADDRESS_SEARCH_API}&countryCode=USA&limit=7`, searchClicked)

  function addAddress() {
    console.log(navigation);
  }

  const styles = StyleSheet.create({
    textContainer: {
      flex: 1,
      flexDirection: 'column'
    },
    itemContainer: {
      flexDirection:"row",
      justifyContent: 'flex-start',
      padding: 10
    },
    itemText: {
      fontSize: 18,
      marginTop: 10,
      paddingLeft: 10
    },
    itemSubtitle: {
      fontSize: 14,
      color: '#707070',
      paddingLeft: 10,
      fontWeight: 500
    },
    chevronIcon: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    savedAddresses: {
      flex: 1,
      flexDirection: 'row',
    },
    savedAddressesText: {
      marginLeft: 16,
      fontWeight: "500",
      fontSize: 16
    }
  })

  const Item = ({ number, street, city, zip, state }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate("EditAddress", {
        number, 
        street, 
        city, 
        zip, 
        state
      })}
    >
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{number} {street}.,</Text>
        <Text style={styles.itemSubtitle}>{city}, {state} {zip}</Text>
      </View>
      <View style={styles.chevronIcon}>
        <Entypo name="chevron-right" size={25}/>
      </View>
    </TouchableOpacity>
  );

  return (
    // onPress={() => navigation.navigate('EditAddresss')}
    <SafeAreaView style={pageColor.backgroundContainer}>
      <View>
        <SearchBar 
          clicked={searchClicked}
          setClicked={setSearchClicked}
          searchPhrase={searchAddress}
          setSearchPhrase={setSearchAddress}
        />
      </View>
      {!loading && searchAddress !== "" && (
        <FlatList 
          data={data}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <Item 
              city={item.city} 
              zip={item.postalCode} 
              state={item.stateCode} 
              street={item.street} 
              number={item.houseNumber}
            />
          )}
        />
      )}
        
      {searchAddress === "" && (
        <View style={styles.savedAddresses}>
          <Text style={styles.savedAddressesText}>Saved Addresses</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default ManageAddresses;