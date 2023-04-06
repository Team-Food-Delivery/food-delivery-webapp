import { StyleSheet, View, Image, TouchableOpacity, FlatList, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import storePlaceholder from '../../img/placeholder-store.png'

const SearchResults = ({ storeData }) => {
  console.log(storeData)
  const navigation = useNavigation();

  const Item = ({ name, storeId }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Store Page', { id: storeId })}>
      <Image style={styles.image} resizeMode="cover" source={storePlaceholder} />
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
    image: {
      width: 45,
      height:45,
      borderRadius: 50
    },
    item: {
      flexDirection:"row",
      padding: 5
    },
    itemText: {
      fontSize: 20,
      marginTop: 10,
      paddingLeft: 10
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