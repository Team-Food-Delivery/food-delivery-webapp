import { SafeAreaView, View, Text } from "react-native";
import { useContext, useEffect, useState } from 'react';

import LoadingIndicator from "../elements/ActivityIndicator";
import { StoresContext } from "../../contexts/StoresContext";
import { postRequest as getIndividualStore } from "../../services/StoreService";

const StorePage = () => {
  const { storeID } = useContext(StoresContext);
  const [store, setStore] = useState(null);

  const storeBody = {
    start_from: 0,
    size: 1,
    field_name: "id",
    field_value: `${storeID}`
  }

  useEffect(() => {
    // const theStore = storesData.find(store => store.id == route.params.id);
    // setStore(theStore)
    getIndividualStore('/store', storeBody)
      .then(store => {
        console.log(store);
        setStore(store)
      })
      .catch(e => new Error(e))
  }, [])

  return (
    store === null ? (
      <LoadingIndicator />
    ) : (
      <SafeAreaView>
        <View>
          <Text>{store[0].store}</Text>
        </View>
      </SafeAreaView>
    )
  )
}

export default StorePage;