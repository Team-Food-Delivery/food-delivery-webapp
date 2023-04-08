import { 
  StyleSheet, 
  View, 
  Image, 
  TouchableOpacity, 
  FlatList, 
  Text, 
  SafeAreaView 
} from "react-native";
import { useContext } from 'react';
import { useNavigation } from "@react-navigation/native";

import storePlaceholder from '../../img/placeholder-store.png'
import { StoresContext } from "../../contexts/StoresContext";

const SearchResults = ({ storeData }) => {
  const { setIndividualStoreId } = useContext(StoresContext);
  const navigation = useNavigation();

  const Item = ({ name, storeId }) => (
    <TouchableOpacity style={styles.item} onPress={() => goToStore(storeId)}>
      <Image style={styles.image} resizeMode="cover" source={storePlaceholder} />
      <Text style={styles.itemText}>{name}</Text>
    </TouchableOpacity>
  );

  const goToStore = (storeId) => {
    setIndividualStoreId(storeId);
    navigation.navigate('Store Page')
  }

  const ItemSeparatorView = () => {
    return <View style={styles.itemSeperator} />
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
    },
    noResult: {
      justifyContent: "center",
      alignItems: "center"
    },
    noResultText: {
      fontSize: 30
    }
  })

  return (
    <SafeAreaView style={styles.listContainer}>
      {(storeData === undefined || storeData.length == 0) ? (
        <View style={styles.noResult}>
          <Text style={styles.noResultText}>
            Nothing Found
          </Text>
        </View>
      ) : (
        <FlatList
          data={storeData}
          ItemSeparatorComponent={ItemSeparatorView}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>(
            <Item name={item.store} storeId={item.id} />
          )}
        />
      )}
    </SafeAreaView>
  )
}

export default SearchResults;