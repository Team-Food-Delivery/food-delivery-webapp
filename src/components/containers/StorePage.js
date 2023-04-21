import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import { useContext } from 'react';

import LoadingIndicator from "../elements/ActivityIndicator";
import { StoresContext } from "../../contexts/StoresContext";
import useFetch from "../utiities/useFetch";

import StoreHeader from "../pages/StoreHeader";
import StoreMenu from "../pages/StoreMenu";
import Divider from "../pages/Divider";

const StorePage = () => {
  const { storeID } = useContext(StoresContext);

  const styles = StyleSheet.create({
    container: {
        flex: 1
    }
  })

  const storeBody = {
    start_from: 0,
    size: 1,
    field_name: "id",
    field_value: `${storeID}`
  }

  const { data, loading, error } = useFetch('store', storeBody);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingIndicator />}

      {!loading && data &&
        <ScrollView>
          <StoreHeader 
            name={data[0].store}
            description={data[0].description}
            rating={data[0].rating} 
            hours={data[0].hours}
            image_url={data[0].image_url}
          />
          <Divider />
          <StoreMenu category={data[0].category} />
        </ScrollView>
        }
    </SafeAreaView>
  )
}

export default StorePage;