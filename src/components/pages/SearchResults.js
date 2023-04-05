import { StyleSheet, View, TouchableOpacity, FlatList, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchResults = ({ storeData }) => {
  const navigation = useNavigation();

  const persons = [
    { id: "1", name: "Earnest Green" },
    { id: "2", name: "Winston Orn" },
    { id: "3", name: "Carlton Collins" },
    { id: "4", name: "Malcolm Labadie" },
    { id: "5",name: "Michelle Dare" },
  ];

  const Item = ({ name, storeId }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Store Page', { id: storeId})}>
      <Text style={styles.itemText}>{name}</Text>
    </TouchableOpacity>
  );

  const ItemSeparatorView = () => {
    return (
      <View
        style={styles.itemSeperator}
      />
    );
  };

  const styles = StyleSheet.create({
    listContainer: {
      marginTop: 15,
      backgroundColor: 'white'
    },
    item: {
      padding: 10
    },
    itemText: {
      fontSize: 24
    },
    itemSeperator: { 
      height: 0.5, 
      width: '100%', 
      backgroundColor: '#C8C8C8' 
    }
  })

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList
        data={storeData}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({ item }) =>(
          <Item name={item.store} storeId={item.id} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default SearchResults;