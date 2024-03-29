import React, { useState} from 'react';
import { TextInput, View, Keyboard, StyleSheet } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons'

const SearchBar = ({ clicked, setClicked, searchPhrase, setSearchPhrase }) => {
  // const [clicked, setClicked] = useState(false);
  // const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={styles.searchBar__unclicked
        }
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
              setSearchPhrase("")
          }}/>
        )}
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});