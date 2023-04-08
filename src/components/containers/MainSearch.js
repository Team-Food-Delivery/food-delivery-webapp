import { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native';

import Search from '../pages/Search';
import SearchResults from '../pages/SearchResults';
import { StoresContext } from '../../contexts/StoresContext';
import { postRequest as getDefaultSearch } from '../../services/StoreService';

const MainSearch = () => {
  const { setSearchData } = useContext(StoresContext);

  const [storeSearch, setStoreSearch] = useState("");
  const [storeData, setStoreData] = useState();

  const defaultSearchStoreBody = {
    start_from: 0,
    size: 10,
    sort_by: "id",
    direction: "asc",
    field_value: `${storeSearch}`
  }

  useEffect(() => {
    getDefaultSearch('/general', defaultSearchStoreBody).then(data => {
      setSearchData(data);
      setStoreData(data)
      console.log(storeData)
    })
  }, [storeSearch])

  return (
    <SafeAreaView>
      <Search storeSearch={storeSearch} setStoreSearch={setStoreSearch} />
      <SearchResults storeData={storeData} />
    </SafeAreaView>
  )
}

export default MainSearch;