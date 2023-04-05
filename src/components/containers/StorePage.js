import { SafeAreaView, View, Text } from "react-native";
import { useContext, useEffect, useState } from 'react';

import LoadingIndicator from "../elements/ActivityIndicator";
import { StoresContext } from "../../contexts/StoresContext";

const StorePage = ({ route }) => {
  const { storesData } = useContext(StoresContext);
  const [store, setStore] = useState(null)

  useEffect(() => {
    const theStore = storesData.find(store => store.id == route.params.id);
    setStore(theStore)
  }, [store])

  return (
    store === null ? (
      <LoadingIndicator />
    ) : (
      <SafeAreaView>
        <View>
          <Text>{store.store}</Text>
        </View>
      </SafeAreaView>
    )
  )
}

export default StorePage;