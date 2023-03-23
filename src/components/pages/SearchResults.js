import { StyleSheet, TouchableOpacity, FlatList, Text, SafeAreaView } from "react-native";

const SearchResults = () => {
  const persons = [
    { id: "1", name: "Earnest Green" },
    { id: "2", name: "Winston Orn" },
    { id: "3", name: "Carlton Collins" },
    { id: "4", name: "Malcolm Labadie" },
    { id: "5",name: "Michelle Dare" },
  ];

  const Item = ({ name }) => (
    <TouchableOpacity style={styles.item} onPress={() => console.log('clicked')}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    listContainer: {
      backgroundColor: 'white'
    },
    item: {
      padding: 10
    }
  })

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList
        data={persons}
        renderItem={({ item }) =>(
          <Item name={item.name}/>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default SearchResults;