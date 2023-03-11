import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

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

        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 30,
        borderRadius: 40,
        backgroundColor: '#fff'
    },
    placeholderText: {
        color: 'gray'
    }
});

const Search = ({storeSearch, onStoreSearchChange}) => {
    
    return (
        <View>
            <Text style={styles.title}>
                Choose the {<Text style={[styles.title, styles.bold]}>Food you love</Text>}
            </Text>
            <View style={styles.searchBackground}>
                <TextInput
                    style={styles.placeholderText}
                    placeholder="Search for a food item"
                    value={storeSearch}
                    onChangeText={newStoreSearch => onStoreSearchChange(newStoreSearch)}
                    onEndEditing={() => console.log('TODO: Submit a request to API')}
                >
                </TextInput>
            </View>
        </View>
    )
};

export default Search;