import { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native';

import Search from '../pages/Search';
import SearchResults from '../pages/SearchResults';
import { StoresContext } from '../../contexts/StoresContext';
import { getSearchData } from '../../services/StoreService';

const MainSearch = () => {
  const { setSearchData } = useContext(StoresContext);

  const [storeSearch, setStoreSearch] = useState("");
  const [storeData, setStoreData] = useState();
  
  useEffect(() => {
    getSearchData().then(data => {
      setSearchData(data);
      setStoreData(data)
      console.log(storeData)
    })
    
  },[storeSearch])
  return (
    <SafeAreaView>
      <Search storeSearch={storeSearch} setStoreSearch={setStoreSearch} />
      <SearchResults storeData={storeData} />
    </SafeAreaView>
  )
}

export default MainSearch;