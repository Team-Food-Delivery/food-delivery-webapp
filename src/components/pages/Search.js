import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
    title: {
        alignSelf:'center',
        fontSize: 18,
        fontFamily: 'Arial',
        color: 'gray',
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold'
    },
    searchBackground: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 30,
        borderRadius: 40,
        backgroundColor: '#fff'
    },
    searchBar: {
        flexDirection:"row"
    },
    textInput: {
        color: 'gray',
        width: "90%",
        padding: 5
    }
});

const Search = ({ storeSearch, onStoreSearchChange }) => {
    
    return (
        <View>
            <Text style={styles.title}>
                Choose the {<Text style={[styles.title, styles.bold]}>Food you love</Text>}
            </Text>
            <View style={styles.searchBackground}>
                <View style={styles.searchBar}>
                    <Feather
                        name="search"
                        size={25}
                        color="black"
                        style={{ marginLeft: 1, marginRight: 5 }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search for a food item"
                        value={storeSearch}
                        onChangeText={newStoreSearch => onStoreSearchChange(newStoreSearch)}
                        onEndEditing={() => console.log('TODO: Submit a request to API')}
                    />
                    {onStoreSearchChange && (
                        <Entypo 
                            name="cross" 
                            size={25} 
                            color="black" 
                            style={{ padding: 1 }} 
                            onPress={() => setStoreSearch("")}
                        />
                    )}
                </View>
            </View>
        </View>
    )
};

export default Search;