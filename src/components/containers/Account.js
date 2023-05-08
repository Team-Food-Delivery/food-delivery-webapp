import { useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/AuthContext';
import { pageColor } from '../../styles/globals';

const Account = ({navigation}) => {
  const { setLogout } = useContext(AuthContext);

  const accountData = [
    { id: 1, name: 'Manage Account', subtitle: 'Update information', routeName: 'none' },
    { id: 2, name: 'Address', subtitle: 'Add, edit, or remove a delivery address', routeName: 'ManageAddresses' }
  ]

  const styles = StyleSheet.create({
    itemSeperator: { 
      height: 0.5, 
      width: '100%', 
      backgroundColor: '#C8C8C8' 
    },
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
      fontSize: 20,
      marginTop: 10,
      paddingLeft: 10
    },
    itemSubtitle: {
      fontSize: 12,
      color: '#707070',
      paddingLeft: 10,
      fontWeight: 500
    },
    accountPageContainer: {
      padding: 10
    },
    accountPageTitle: {
      fontSize: 24,
      fontWeight: 700
    },
    chevronIcon: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  const ItemSeparatorView = () => {
    return <View style={styles.itemSeperator} />
  };

  const Item = ({ name, subtitle, routeName }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate(routeName)}>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.chevronIcon}>
        <Entypo name="chevron-right" size={25}/>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={pageColor.backgroundContainer}>
      <View style={styles.accountPageContainer}>
        <Text style={styles.accountPageTitle}>Account</Text>
      </View>
      <FlatList 
        data={accountData}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({ item }) => (
          <Item name={item.name} subtitle={item.subtitle} routeName={item.routeName} />
        )}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity 
          onPress={setLogout}
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD', 
            padding: 10
        }}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
}

export default Account;