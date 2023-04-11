import { SafeAreaView, View, Text } from "react-native";
import { useContext } from 'react';

import LoadingIndicator from "../elements/ActivityIndicator";
import { StoresContext } from "../../contexts/StoresContext";
import useFetch from "../utiities/useFetch";


const StorePage = () => {
  const { storeID } = useContext(StoresContext);

  const storeBody = {
    start_from: 0,
    size: 1,
    field_name: "id",
    field_value: `${storeID}`
  }

  const { data, loading, error } = useFetch('store', storeBody);

  return (
    <SafeAreaView>
      <View>
        {loading && <LoadingIndicator />}
        {!loading && data && <Text>{data[0].store}</Text>}
      </View>
    </SafeAreaView>
  )
}

export default StorePage;