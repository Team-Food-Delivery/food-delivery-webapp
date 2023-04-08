import { View, Text, TextInput, SafeAreaView, StyleSheet } from "react-native";
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
		borderColor: '#d3d3d3',
		borderWidth: 1,
		backgroundColor: '#fff',
		flexDirection:"row",
	},
	searchBar: {
		width: "100%",
		flexDirection:"row",
		justifyContent: "space-between"
	},
	textInput: {
		color: 'gray',
		width: "100%",
		fontSize: 15,
		padding: 5
	},
	searchIcon: {
		marginLeft: 1, 
	}
});

const Search = ({ storeSearch, setStoreSearch }) => {
	return (
		<SafeAreaView>
			<Text style={styles.title}>
				Choose the {<Text style={[styles.title, styles.bold]}>Food you love</Text>}
			</Text>
			<View style={styles.searchBackground}>
				<View style={styles.searchBar}>    
					<Feather
						name="search"
						size={25}
						color="black"
						style={styles.searchIcon}
					/>                
					<TextInput
						style={styles.textInput}
						placeholder="Search for a food item"
						value={storeSearch}
						onChangeText={newStoreSearch => setStoreSearch(newStoreSearch)}
						onEndEditing={() => console.log('TODO: Submit a request to API')}
					/>
					{storeSearch && (
						<Entypo 
							name="cross" 
							size={25} 
							color="black" 
							onPress={() => setStoreSearch("")}
						/>
					)}  
				</View>
			</View>
		</SafeAreaView>
	)
};

export default Search;